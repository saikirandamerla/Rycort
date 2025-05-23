import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { icon: "bi-speedometer2", label: "Dashboard", path: "/student-dashboard" },
    { icon: "bi-calendar-check", label: "Attendance", path: "/attendance" },
    { icon: "bi-journal-text", label: "Examination", path: "/examination" },
    { icon: "bi-bar-chart-line", label: "Result", path: "/result" },
    { icon: "bi-book", label: "Dairy", path: "/dailytask" },
    { icon: "bi-person-lines-fill", label: "Teacher Info", path: "/Teacher-info" },
    { icon: "bi-cash-stack", label: "Payment Info", path: "/payment-info" },
    { icon: "bi-chat-dots", label: "Chat with Teacher", path: "/chat" },
  ];

  const sidebarStyle = {
    width: isOpen ? "240px" : "70px",
    transition: "width 0.3s ease-in-out",
    height: "100vh",
    background: "linear-gradient(to bottom, #74b9ff, #0984e3)",
    borderRadius: "0 16px 16px 0",
    overflowX: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1050,
    boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
  };

  const iconOnly = !isOpen;

  return (
    <div
      style={sidebarStyle}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="d-flex flex-column text-white p-3 h-100">
        {/* Logo Section */}
        {isOpen && (
          <div className="text-center mb-4">
            <div
              className="bg-white bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="bi bi-mortarboard-fill text-white" style={{ fontSize: "28px" }}></i>
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <ul className="nav nav-pills flex-column mb-auto">
          {menuItems.map((item, idx) => (
            <li key={idx} className="nav-item mb-2">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center text-white ${isActive ? "fw-bold" : ""}`
                }
                title={iconOnly ? item.label : ""}
              >
                <i className={`bi ${item.icon} fs-5`}></i>
                {isOpen && <span className="ms-2">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout Option */}
        <div className="mt-auto pt-3 border-top">
          <NavLink
            to="/"
            className="nav-link d-flex align-items-center text-white"
            title={iconOnly ? "Logout" : ""}
          >
            <i className="bi bi-box-arrow-right fs-5"></i>
            {isOpen && <span className="ms-2">Logout</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
