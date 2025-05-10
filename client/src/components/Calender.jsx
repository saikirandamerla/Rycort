import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calendar({ onDateSelect }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(today);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getStartDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(selected);
    onDateSelect?.(selected);
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getStartDayOfMonth(year, month);

  return (
    <div
      style={{
        background: "linear-gradient(135deg,rgba(29, 165, 173, 1),rgb(126, 94, 140))",
        padding: "2px",
        borderRadius: "16px",
        width: "fit-conten",
        margin: "auto",
        border: "2px",
      }}
    >
      <div
        className="p-3"
        style={{
          backgroundColor: "#f0f0f0", // light gray background
          borderRadius: "13px"
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3 px-2">
          <button className="btn btn-sm text-secondary" style={{ fontSize: "1.25rem" }} onClick={handlePrevMonth}>‹</button>
          <h6 className="mb-0 fw-bold text-dark">
            {monthNames[month]} {year}
          </h6>
          <button className="btn btn-sm text-secondary" style={{ fontSize: "1.25rem" }} onClick={handleNextMonth}>›</button>
        </div>

        <div className="d-flex flex-wrap text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
            <div key={i} className="fw-semibold text-secondary" style={{ width: "14.28%", padding: "6px 0" }}>
              {d}
            </div>
          ))}

          {[...Array(startDay)].map((_, i) => (
            <div key={`empty-${i}`} style={{ width: "14.28%", height: "40px" }}></div>
          ))}

          {[...Array(daysInMonth)].map((_, i) => {
            const dayNum = i + 1;
            const isSelected =
              selectedDate.getDate() === dayNum &&
              selectedDate.getMonth() === month &&
              selectedDate.getFullYear() === year;

            return (
              <div
                key={dayNum}
                onClick={() => handleDateClick(dayNum)}
                style={{
                  width: "14.28%",
                  cursor: "pointer",
                  padding: "10px 0",
                  fontWeight: isSelected ? "bold" : "normal",
                  fontSize: "1rem",
                  backgroundColor: isSelected ? "#007bff" : "transparent",
                  color: isSelected ? "#fff" : "#333",
                  borderRadius: isSelected ? "50%" : "0",
                  transition: "all 0.2s ease"
                }}
              >
                {dayNum}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
