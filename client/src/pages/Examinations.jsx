import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import profile from "../assets/profile.png";

const ExaminationDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div
        style={{
          marginLeft: sidebarOpen ? 240 : 70,
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <div
          className="container py-5"
          style={{
            backgroundColor: "#f9fafb",
            fontFamily: "Segoe UI, sans-serif",
            minHeight: "100vh",
          }}
        >
          <style>{`
            .card {
              border-radius: 12px;
              box-shadow: 0 0 12px rgba(0, 0, 0, 0.04);
              background: linear-gradient(to bottom, #c3d6f6, #ffffff);
            }
            .card:hover {
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            }
            .icon-large {
              font-size: 3rem;
              color: #007bff;
            }
            .instructions-list {
              padding-left: 1.25rem;
              list-style-type: decimal;
            }
            .profile-img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              object-fit: cover;
            }
            .grid-container {
              display: grid;
              grid-template-columns: 2fr 1fr 1fr;
              grid-template-rows: auto auto;
              gap: 1rem;
              max-width: 1200px;
              margin: 0 auto;
            }
            .grid-upcoming {
              grid-column: 1;
              grid-row: 1 / span 2;
            }
            .grid-instructions {
              grid-column: 2 / span 2;
            }
            .grid-timetable {
              grid-column: 1 / span 2;
            }
            .grid-hall {
              grid-column: 2;
            }
            .grid-venue {
              grid-column: 3;
            }
            .icon-section {
              display: flex;
              align-items: start;
              gap: 0.75rem;
            }
            .icon-section img {
              width: 48px;
            }
            table.table {
              background: linear-gradient(to bottom, #c3d6f6, #ffffff);
            }
            thead.table-light th {
              background-color: #dce9fb !important;
            }
            .custom-table {
              border-collapse: collapse;
              width: 100%;
              background: linear-gradient(to bottom, #e4ecfa, #ffffff);
              border-radius: 10px;
              overflow: hidden;
            }
            .custom-table th,
            .custom-table td {
              border: none;
              padding: 0.75rem 1rem;
              background-color: transparent;
            }
            .custom-table thead th {
              font-weight: 600;
              background-color: rgba(255, 255, 255, 0.4);
            }
            .custom-table tr:not(:last-child) {
              border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            }
          `}</style>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Examinations</h2>
            <div className="d-flex align-items-center gap-3">
              <img src={profile} alt="Avatar" className="profile-img" />
              <div>
                <div className="fw-bold">Love Quin</div>
                <small className="text-muted">2nd Class</small>
              </div>
            </div>
          </div>

          <div className="grid-container">
            {/* Upcoming Exam */}
            <div
              className="card p-4 grid-upcoming d-flex flex-column justify-content-center"
              style={{ minHeight: "300px" }}
            >
              <h4 className="mb-4 fw-bold text-start">Upcoming exams</h4>
              <div className="d-flex align-items-center justify-content-between w-100 px-2">
                <div className="text-start" style={{ fontSize: "1.2rem" }}>
                  <p className="mb-2"><strong>Subject:</strong> English</p>
                  <p className="mb-2"><strong>Date:</strong> May 13, 2025</p>
                  <p className="mb-0"><strong>Time:</strong> 10AM–12PM</p>
                </div>
                <i className="bi bi-journal-text icon-large ms-4"></i>
              </div>
            </div>

            {/* Tests taken */}
            <div className="card text-center p-3">
              <i className="bi bi-clipboard-check icon-large mb-2"></i>
              <div className="fw-semibold">Tests taken</div>
              <h4>12</h4>
            </div>

            {/* Average score */}
            <div className="card text-center p-3">
              <i className="bi bi-bar-chart-fill icon-large mb-2"></i>
              <div className="fw-semibold">Average score</div>
              <h4>84</h4>
            </div>

            {/* Exam instructions */}
            <div className="grid-instructions">
              <h5>Exam instructions</h5>
              <div className="card p-3">
                <ul className="instructions-list mb-0">
                  {[...Array(4)].map((_, i) => (
                    <li key={i} className="mb-1">
                      Please arrive at the examination venue at least 30– min before the exam
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Examination timetable */}
            <div className="p-3 grid-timetable">
              <h5 className="mb-2" style={{ fontSize: "1.1rem" }}>Examination timetable</h5>
              <table
                className="table mt-2 mb-0 custom-table"
                style={{
                  fontSize: "0.875rem",
                  width: "100%",
                  tableLayout: "fixed",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Time</th>
                    <th>Teacher</th>
                  </tr>
                </thead>
                <tbody>
                  {["English", "Maths", "Physics", "Chemistry", "Biology"].map((subject) => (
                    <tr key={subject}>
                      <td>May 13, 2025</td>
                      <td>{subject}</td>
                      <td>10:00AM–12:00PM</td>
                      <td>lusiya</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Hall Ticket */}
            <div className="card text-center p-3 grid-hall">
              <h6>Hall Ticket</h6>
              <button className="btn btn-primary mt-3">Download PDF</button>
            </div>

            {/* Exam Venue */}
            <div className="card p-3 grid-venue">
              <h6>Exam venue</h6>
              <p className="mb-0">Block A, Room 103</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExaminationDashboard;
