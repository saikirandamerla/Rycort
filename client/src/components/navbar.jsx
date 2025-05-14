import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: "bi-grid", label: "Dashboard", path: "/homepage" },
    { icon: "bi-calendar-check", label: "Attendance", path: "/attendance" },
    { icon: "bi-calendar3", label: "Exam schedule", path: "/exam-schedule" },
    { icon: "bi-ticket", label: "Hall ticket", path: "/hall-ticket" },
    { icon: "bi-award", label: "Result", path: "/result" },
    { icon: "bi-journal", label: "Dairy", path: "/dairy" },
    { icon: "bi-chat-left-quote", label: "Remarks", path: "/remarks" },
    { icon: "bi-files", label: "Work sheets", path: "/worksheets" },
    { icon: "bi-currency-rupee", label: "Payment info", path: "/payment-info" },
    { icon: "bi-calendar-event", label: "School Leave", path: "/school-leave" },
    { icon: "bi-chat-text", label: "Chat with teacher", path: "/chat" },
  ];

  return (
    <div
      className="position-fixed top-0 start-0 h-100"
      style={{
        width: "250px",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
        zIndex: 1050,
        padding: "16px",
        backgroundColor: "white",
        borderRadius: "16px",
        height: "100%",
      }}
    >
      <div
        className="d-flex flex-column bg-primary text-white p-3 h-100"
        style={{
          background: "linear-gradient(to bottom, #74b9ff, #0984e3)",
          borderRadius: "1rem",
        }}
      >
        <div className="text-center mb-4">
          <div
            className="bg-white bg-opacity-25 p-3 rounded-circle d-inline-block"
            style={{ width: "60px", height: "60px" }}
          >
            <i className="bi bi-mortarboard-fill fs-3 text-white"></i>
          </div>
        </div>

        <ul className="nav nav-pills flex-column mb-auto">
          {menuItems.map((item, idx) => (
            <li className="nav-item mb-2" key={idx}>
              <NavLink
                to={item.path}
                className="nav-link text-white d-flex align-items-center"
                onClick={onClose} // Optionally close sidebar on click
              >
                <i className={`bi ${item.icon} me-2`}></i>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-top">
          <NavLink
            to="/logout"
            className="nav-link text-white d-flex align-items-center"
            onClick={onClose}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
