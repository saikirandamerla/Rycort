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
          className="container py-3"
          style={{
            backgroundColor: "#f9fafb",
            fontFamily: "Segoe UI, sans-serif",
            minHeight: "100vh",
            marginTop: "-20px",
          }}
        >
          <style>{`
            .card {
              border-radius: 12px;
              box-shadow: 0 0 12px rgba(0, 0, 0, 0.04);
              background: linear-gradient(to bottom, #c3d6f6, #ffffff);
              padding: 1rem;
              margin-bottom: 1rem;
            }
            .card:hover {
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            }
            .icon-large {
              font-size: 2.2rem;
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

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Examinations</h2>
            <div className="d-flex align-items-center gap-3">
              <img src={profile} alt="Avatar" className="profile-img" />
              <div>
                <div className="fw-bold">Love Quin</div>
                <small className="text-muted">2nd Class</small>
              </div>
            </div>
          </div>

<div className="d-flex justify-content-between flex-wrap gap-4">
  {/* Left Column - Exam Info */}
  <div style={{ flex: 2 }}>
    <div
  className="card p-4 mb-3"
  style={{ background: "linear-gradient(to bottom, #dbeafe, #ffffff)" }}
>
  <div className="d-flex justify-content-between align-items-start">
    {/* Left: Exam Details */}
    <div>
      <h3><strong>Upcoming exams</strong></h3>
      <p><strong>Subject:</strong> English</p>
      <p><strong>Date:</strong> May 13, 2025</p>
      <p><strong>Time:</strong> 10AM–12PM</p>
    </div>

    {/* Right: Icon */}
    <i className="bi bi-journal-text icon-large" style={{ fontSize: "3rem" }}></i>
  </div>
</div>
</div>

  {/* Right Column - Top: Hall Ticket & Venue, Bottom: Instructions */}
  <div style={{ minWidth: "400px",}} className="d-flex flex-column gap-4">
    {/* Top Right - Hall Ticket and Venue */}
    <div className="d-flex justify-content-end gap-3" style={{ marginRight: "150px" }}>
  <div
    className="card p-4 text-start"
    style={{
      minWidth: "220px",
      fontSize: "1rem",
    }}
  >
    <strong>Hall Ticket</strong>
    <button className="btn btn-primary mt-3">Download PDF</button>
  </div>
  <div
    className="card p-4 text-start"
    style={{
      minWidth: "220px",
      fontSize: "1rem",
    }}
  >
    <strong>Exam Venue</strong>
    <p className="mb-0">Block A, Room 103</p>
  </div>
</div>


    {/* Bottom Right - Exam Instructions */}
    <div style={{marginLeft:"80px"}}>
      <h5 className="mb-3">Exam instructions</h5>
      <div
        className="card p-3"
        style={{ background: "linear-gradient(to bottom, #dbeafe, #ffffff)" }}
      >
        <ol className="mb-0">
          {[...Array(4)].map((_, i) => (
            <li key={i} className="mb-2">
              Please arrive at the examination venue at least 30 minutes before the exam.
            </li>
          ))}
        </ol>
      </div>
    </div>
  </div>
</div>

         {/* Examination Timetable */}
<div style={{ width: "600px", marginTop: "-120px" }}>
  <h5 className="mb-2" style={{ fontSize: "1.05rem" }}>Examination timetable</h5>
  <table className="table mt-2 mb-0 custom-table">
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


          {/* Stats Cards */}
       <div className="d-flex justify-content-end gap-3" style={{ marginTop: "-160px",marginRight: "100px" }}>
<div className="d-flex justify-content-end gap-3">
  <div
    className="card p-4"
    style={{
      width: "240px",
      fontSize: "1.05rem",
      backgroundColor: "#dbeafe",
      color: "#1d4ed8",
    }}
  >
    <div className="d-flex align-items-center gap-3">
      <i className="bi bi-clipboard-check" style={{ fontSize: "2.2rem" }}></i>
      <div>
        <div className="fw-semibold">Tests Taken</div>
        <h5 className="mb-0">12</h5>
      </div>
    </div>
  </div>

  <div
    className="card p-4"
    style={{
      width: "240px",
      fontSize: "1.05rem",
      backgroundColor: "#dbeafe",
      color: "#1d4ed8",
    }}
  >
    <div className="d-flex align-items-center gap-3">
      <i className="bi bi-bar-chart-fill" style={{ fontSize: "2.2rem" }}></i>
      <div>
        <div className="fw-semibold">Avg Score</div>
        <h5 className="mb-0">84</h5>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
      </div>
    </>
  );
};

export default ExaminationDashboard;
