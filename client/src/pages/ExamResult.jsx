import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import profile from "../assets/profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiDownload } from "react-icons/bi";

const ExamResult = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{ display: "flex", background: "#f7fafd", minHeight: "100vh" }}>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <main
        style={{
          flex: 1,
          marginLeft: sidebarOpen ? "240px" : "70px",
          padding: "30px",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <div className="container py-4">
          <style>{`
            .profile-box {
              background: linear-gradient(to right, #4facfe, #00f2fe);
              border-radius: 15px;
              height: 120px;
              margin-bottom: 20px;
            }
            .info-card {
              background: linear-gradient(to bottom, #c3d6f6, #ffffff);
              border-radius: 12px;
              padding: 16px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            }
            .subject-table {
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            }
            .subject-table table {
              width: 100%;
              border-collapse: collapse;
              background: linear-gradient(to bottom, #c3d6f6, #ffffff);
            }
            .subject-table th {
              background-color: rgba(255, 255, 255, 0.5);
              font-weight: 600;
              color: #000;
              padding: 12px;
              text-align: left;
            }
            .subject-table td {
              background-color: transparent;
              padding: 12px;
              border-top: 1px solid #dee2e6;
            }
            .circular-ring {
              position: relative;
              width: 100px;
              height: 100px;
              margin-right: 16px;
            }
            .circular-ring svg {
              transform: rotate(-90deg);
            }
            .circular-ring circle {
              fill: none;
              stroke-width: 10;
            }
            .circular-ring .bg {
              stroke: #e5e7eb;
            }
            .circular-ring .progress {
              stroke: #3b82f6;
              stroke-dasharray: 282.6;
              stroke-dashoffset: calc(282.6 * (1 - 0.82));
            }
            .circular-ring .percentage {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 18px;
              font-weight: 600;
            }
            .review-list {
              font-size: 14px;
              padding-left: 20px;
            }
          `}</style>

          <h3 className="fw-bold mb-3">Exam Result</h3>
          <div className="profile-box mb-4 d-flex align-items-center px-4"></div>

          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
            <div className="d-flex align-items-center gap-3 info-card mb-0">
              <img
                src={profile}
                alt="avatar"
                className="rounded-circle"
                style={{ width: 50, height: 50 }}
              />
              <div>
                <h6 className="mb-0 fw-bold">Love Quin</h6>
                <small className="text-muted">2nd Class</small>
              </div>
              <button className="btn btn-primary btn-sm ms-3 d-flex align-items-center justify-content-center">
                <BiDownload />Download Hall Ticket 
              </button>
            </div>

            <div className="d-flex gap-3 flex-fill">
              <div className="info-card d-flex align-items-center gap-2 flex-fill">
                <i className="bi bi-journal-text fs-4 text-primary"></i>
                <div>
                  <p className="mb-0 text-muted">Tests taken</p>
                  <h6 className="fw-bold mb-0">12</h6>
                </div>
              </div>
              <div className="info-card d-flex align-items-center gap-2 flex-fill">
                <i className="bi bi-journal-text fs-4 text-primary"></i>
                <div>
                  <p className="mb-0 text-muted">Question attempted</p>
                  <h6 className="fw-bold mb-0">276</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7">
              <h1 className="fw-bold mb-3" style={{ fontFamily: "sora", fontSize: "30px" }}>
                Subject Performance
              </h1>
              <div className="subject-table table-responsive mb-4">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Score</th>
                      <th>Grade</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Chemistry</td><td>84</td><td>B</td><td>Good</td></tr>
                    <tr><td>Maths</td><td>90</td><td>A</td><td>Excellent</td></tr>
                    <tr><td>Physics</td><td>86</td><td>B</td><td>Good</td></tr>
                    <tr><td>English</td><td>78</td><td>C</td><td>Fair</td></tr>
                    <tr><td>Biology</td><td>75</td><td>C</td><td>Fair</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-5">
              <h1 className="fw-bold mb-3" style={{ fontFamily: "sora", fontSize: "30px" }}>
                Overall Performance
              </h1>
              <div className="info-card mb-3 d-flex align-items-center">
                <div className="circular-ring">
                  <svg width="100" height="100">
                    <circle className="bg" cx="50" cy="50" r="45"></circle>
                    <circle className="progress" cx="50" cy="50" r="45"></circle>
                  </svg>
                  <div className="percentage">82%</div>
                </div>
                <div>
                  <p className="mb-1"><strong>Highest Score</strong> 90</p>
                  <p className="mb-1"><strong>Lowest Score</strong> 75</p>
                  <p><strong>Ranking</strong> 10 out of 32</p>
                </div>
              </div>

              <div>
                <h6 className="fw-bold mb-2">Review</h6>
                <ul className="review-list">
                  <li>Excellent performance particularly in Maths</li>
                  <li>A slight improvement needed in English and Biology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExamResult;
