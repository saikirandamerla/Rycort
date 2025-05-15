import React from 'react';
import { FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

function AttendanceChart({ attendancePercent = 80 }) {
  const presentPercent = attendancePercent;
  const absentPercent = 100 - attendancePercent;

  return (
    <div
      className="bg-white rounded shadow-sm p-3"
      style={{ width: "278px", height: "218px", borderRadius: "16px" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex justify-content-end align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#dotsModal" role="button">
        <span className="bg-secondary rounded-circle" style={{ width: "5px", height: "5px" }}></span>
        <span className="bg-secondary rounded-circle" style={{ width: "5px", height: "5px" }}></span>
        <span className="bg-secondary rounded-circle" style={{ width: "5px", height: "5px" }}></span>
      </div>
      </div>

      {/* Labels reversed: Absent first, then Present */}
      <div className="d-flex align-items-center gap-3 mb-2">
        <span style={{ width: "8px", height: "8px", backgroundColor: "#fcd34d", borderRadius: "50%" }}></span>
        <small className="text-muted me-3">Absent</small>
        <span style={{ width: "8px", height: "8px", backgroundColor: "#90cdf4", borderRadius: "50%" }}></span>
        <small className="text-muted">Present</small>
      </div>

      {/* Reversed chart: Absent (yellow) comes first */}
      <div className="position-relative my-2" style={{ width: "100%", height: "100px" }}>
        <div
          className="outer-ring"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: `conic-gradient(#fcd34d ${absentPercent}%, #90cdf4 0%)`,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <div
            className="inner-ring d-flex justify-content-center align-items-center"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#333",
            }}
          >
            {presentPercent}%
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex align-items-center gap-1 text-muted small">
          <FaCalendarAlt size={14} />
          <span>April 2023</span>
        </div>
        <div className="d-flex align-items-center gap-1 text-muted small">
          <FaGraduationCap size={14} />
          <span>Class 10th</span>
        </div>
      </div>
    </div>
  );
}

export default AttendanceChart;
