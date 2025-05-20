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
        padding: "1px",
        borderRadius: "10px",
        width: "100%",
        margin: 0,
        border: 0,
      }}
    >
      <div
        className="p-1"
        style={{
          backgroundColor: "#f0f0f0",
          borderRadius: "8px"
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-1 px-1" style={{ fontSize: '0.8rem' }}>
          <button className="btn btn-sm text-secondary" style={{ fontSize: "1rem", padding: '0 4px' }} onClick={handlePrevMonth}>‹</button>
          <span className="mb-0 fw-bold text-dark" style={{ fontSize: '0.9rem' }}>
            {monthNames[month]} {year}
          </span>
          <button className="btn btn-sm text-secondary" style={{ fontSize: "1rem", padding: '0 4px' }} onClick={handleNextMonth}>›</button>
        </div>

        <div className="d-flex flex-wrap text-center" style={{ fontSize: '0.8rem' }}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
            <div key={i} className="fw-semibold text-secondary" style={{ width: "14.28%", padding: "2px 0" }}>
              {d}
            </div>
          ))}

          {[...Array(startDay)].map((_, i) => (
            <div key={`empty-${i}`} style={{ width: "14.28%", height: "22px" }}></div>
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
                  padding: "4px 0",
                  fontWeight: isSelected ? "bold" : "normal",
                  fontSize: "0.85rem",
                  backgroundColor: isSelected ? "#007bff" : "transparent",
                  color: isSelected ? "#fff" : "#333",
                  borderRadius: isSelected ? "50%" : "0",
                  transition: "all 0.2s ease",
                  height: '22px',
                  lineHeight: '14px',
                  margin: 0
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
