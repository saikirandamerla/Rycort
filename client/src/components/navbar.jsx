import React from "react";

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: "bi-grid", label: "Dashboard" },
    { icon: "bi-calendar-check", label: "Attendance" },
    { icon: "bi-calendar3", label: "Exam schedule" },
    { icon: "bi-ticket", label: "Hall ticket" },
    { icon: "bi-award", label: "Result" },
    { icon: "bi-journal", label: "Dairy" },
    { icon: "bi-chat-left-quote", label: "Remarks" },
    { icon: "bi-files", label: "Work sheets" },
    { icon: "bi-currency-rupee", label: "Payment info" },
    { icon: "bi-calendar-event", label: "School Leave" },
    { icon: "bi-chat-text", label: "Chat with teacher" },
  ];

  return (
    <div
      className="position-fixed top-0 start-0 h-100"
      style={{
        width: "250px",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
        zIndex: 1050,
        padding: '16px',
        backgroundColor: 'white',
        borderRadius: '16px',
        
        height: '100%',
      }}
    >
      <div
        className="d-flex flex-column bg-primary text-white p-3 h-100"
        style={{
          background: "linear-gradient(to bottom, #74b9ff, #0984e3)",
          borderTopRightRadius: "1rem",
          borderBottomRightRadius: "1rem",
          borderTopLeftRadius:'1rem',
        borderBottomLeftRadius:'1rem',
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
              <a href="#" className="nav-link text-white d-flex align-items-center">
                <i className={`bi ${item.icon} me-2`}></i>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-top">
          <a href="#" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
