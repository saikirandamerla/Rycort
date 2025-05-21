import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { icon: "bi-speedometer2", label: "Dashboard", path: "/student-dashboard" },
    { icon: "bi-calendar-check", label: "Attendance", path: "/attendance" },
    { icon: "bi-journal-text", label: "Examination", path: "/examination" },
    { icon: "bi-bar-chart-line", label: "Result", path: "/result" },
    { icon: "bi-book", label: "Dairy", path: "/dairy" },
    { icon: "bi-person-lines-fill", label: "Teacher Info", path: "/Teacher-info" },
    { icon: "bi-cash-stack", label: "Payment Info", path: "/payment-info" },
    { icon: "bi-chat-dots", label: "Chat with Teacher", path: "/chat" },
  ];

  return (
    <div
      className="position-fixed top-0 start-0 h-100"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{
        width: isOpen ? "250px" : "70px",
        transition: "width 0.3s ease-in-out",
        zIndex: 1050,
        background: "linear-gradient(to bottom, #74b9ff, #0984e3)",
        borderRadius: "16px",
        overflowX: "hidden",
        boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
      }}
    >
      <div className="d-flex flex-column text-white p-3 h-100 position-relative">
        {/* Logo Section - only visible when sidebar is open */}
        {isOpen && (
          <div className="text-center mb-4 mt-2">
            <div
              className="bg-white bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="bi bi-mortarboard-fill text-white" style={{ fontSize: "28px" }}></i>
            </div>
          </div>
        )}

        {/* Navigation Items */}
        <ul className="nav nav-pills flex-column mb-auto">
          {menuItems.map((item, idx) => (
            <li className="nav-item mb-2" key={idx}>
              <NavLink
                to={item.path}
                className="nav-link text-white d-flex align-items-center"
                title={item.label}
              >
                <i className={`bi ${item.icon} fs-5`}></i>
                {isOpen && <span className="ms-2">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div className="mt-auto pt-4 border-top">
          <NavLink
            to="/"
            className="nav-link text-white d-flex align-items-center"
            title="Logout"
            aria-label="Logout"
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
