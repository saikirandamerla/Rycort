import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
 { icon: "bi-speedometer2", label: "Dashboard", path: "/" },              // Dashboard icon
  { icon: "bi-calendar-check", label: "Attendance", path: "/attendance" },         // Attendance check
  { icon: "bi-journal-text", label: "Examination", path: "/examination" },         // Exam-related journal
  { icon: "bi-bar-chart-line", label: "Result", path: "/result" },                 // Result bar chart
  { icon: "bi-book", label: "Dairy", path: "/dairy" },                              // Diary/book icon
  { icon: "bi-person-lines-fill", label: "Teacher info", path: "/Teacher-info" },  // Info/person icon
  { icon: "bi-cash-stack", label: "Payment info", path: "/payment-info" },         // Stack of cash
  { icon: "bi-chat-dots", label: "Chat with teacher", path: "/chat" },             // Chat bubble with dots
  ];

  return (
    <div
      className="sidebar d-flex flex-column text-white"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: isOpen ? "250px" : "80px",
        background: "linear-gradient(to bottom, #74b9ff, #0984e3)",
        transition: "width 0.3s ease",
        zIndex: 100,
        padding: "1rem 0.5rem",
        overflow: "hidden", // Prevent scrolling within the sidebar
      }}
    >
      {/* Toggle Button */}
      <div className="text-end px-2">
        <button
          className="btn text-white"
          onClick={onClose}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          {isOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-chevron-right"></i>}
        </button>
      </div>

      {/* Logo */}
      <div className="text-center mb-4">
        <div
          className="bg-white bg-opacity-25 p-3 rounded-circle d-inline-block"
          style={{ width: "60px", height: "60px" }}
        >
          <i className="bi bi-mortarboard-fill fs-3 text-white"></i>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="nav nav-pills flex-column mb-auto" style={{ flexGrow: 1, paddingTop: "20px" }}>
        {menuItems.map((item, idx) => (
          <li className="nav-item mb-2" key={idx}>
            <NavLink
              to={item.path}
              className="nav-link text-white d-flex align-items-center"
              onClick={onClose}
            >
              <i className={`bi ${item.icon} me-2 fs-5`}></i>
              {isOpen && <span>{item.label}</span>} {/* Show label only if sidebar is expanded */}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Footer Section - Pushed Up a Little */}
      <div className="footer d-flex flex-column" style={{ marginTop: "auto" }}>
        {/* Chat with Teacher */}
        <div>
          <NavLink
            to="/chat"
            className="nav-link text-white d-flex align-items-center"
            onClick={onClose}
          >
            <i className="bi bi-chat-text me-2 fs-5"></i>
            {isOpen && <span>Chat with teacher</span>}
          </NavLink>
        </div>

        {/* Logout */}
        <div style={{ paddingBottom: "20px" }}>
          <NavLink
            to="/logout"
            className="nav-link text-white d-flex align-items-center"
            onClick={onClose}
          >
            <i className="bi bi-box-arrow-right me-2 fs-5"></i>
            {isOpen && <span>Logout</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
