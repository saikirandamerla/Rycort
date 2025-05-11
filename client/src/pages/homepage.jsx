import React, { useState } from 'react';
import Timetable from '../components/TimeTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import chemistryImg from '../assets/subject/Chemistry.png';
import mathsImg from '../assets/subject/Maths.png';
import physicsImg from '../assets/subject/Physics.png';
 // Add new images as needed
 // Add new images as needed
import Profile from '../assets/profile.png';
import Calendar from '../components/Calender';
import Attadance from '../components/Attadance';

function Dashboard() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(today);
  const [showAllSubjects, setShowAllSubjects] = useState(false); // State to toggle subject visibility

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getStartDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const subjectImages = {
    Chemistry: chemistryImg,
    Maths: mathsImg,
    Physics: physicsImg,
    // Add more subjects as needed
  };

  const subjects = ['Chemistry', 'Maths', 'Physics', ]; // Add more subjects here

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getStartDayOfMonth(year, month);
  const selectedWeekday = selectedDate.toLocaleString('en-us', { weekday: 'long' });

  const handleViewAllClick = () => {
    setShowAllSubjects(!showAllSubjects);  // Toggle visibility of extra subjects
  };

  return (
    <div className="container-fluid dashboard p-4" style={{ backgroundColor: "#f5faff", position: "relative" }}>
      <style>
        {`
          .calendar-day-header, .calendar-day {
            width: 14.28%;
            text-align: center;
            padding: 5px;
            box-sizing: border-box;
          }
          .calendar-day.bg-primary {
            border-radius: 50%;
          }
          .circle-chart {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: conic-gradient(#4caf50 80%, #f0f0f0 0%);
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .circle-inner {
            font-weight: bold;
          }
        `}
      </style>

      {/* 🔔 Bell Notification Icon */}
      <div className="position-absolute" style={{ top: "20px", right: "20px", zIndex: 1000 }}>
        <i className="bi bi-bell-fill text-dark" style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
      </div>

      {/* Search bar */}
      <div>
        <input type="text" placeholder="Search" className="form-control w-25" />
      </div>

      {/* 👤 Profile Row */}
      <div className="d-flex justify-content-end mb-3" style={{ marginRight: "40px", marginTop: "10px" }}>
        <div className="d-flex align-items-center p-2" style={{ width: "260px" }}>
          <img src={Profile} alt="avatar" className="rounded-circle me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center">
              <h6 className="mb-0 fw-bold" style={{ fontSize: "1rem" }}>Love Quin</h6>
              <i className="bi bi-caret-down-fill ms-2"></i>
            </div>
            <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>2nd Class</p>
          </div>
        </div>
      </div>
      

      {/* 👋 Welcome Back Row */}
      <div className="row mb-4">
        <div className="col-md-9">
          <div className="bg-primary rounded p-3 mb-4 d-flex justify-content-between align-items-center shadow-sm">
            <div>
              <h5>Welcome back, Quin</h5>
              <p className="text-muted small">Always stay updated in your student portal</p>
            </div>
          </div>

          {/* Diary */}
          <h1 style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "1.2rem" }}>Dairy</h1>

          <a href="#!" className="text-primary text-decoration-none d-flex justify-content-end" style={{ fontSize: "1rem" }} onClick={handleViewAllClick}>
            {showAllSubjects ? "View Less" : "View All"}
          </a>

          <div className="row text-center mb-4">
            {subjects.slice(0, showAllSubjects ? subjects.length : 3).map((subject, index) => (
              <div className="col-3" key={index}>
                <div className="card p-3 shadow-sm d-flex align-items-center justify-content-center">
                  <img
                    src={subjectImages[subject]}
                    alt={subject}
                    style={{ width: "80px", height: "80px", objectFit: "contain" }}
                  />
                  <h6 className="mt-3">{subject}</h6>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-md-4">
              <h6 style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "1.2rem" }}>Calendar</h6>
              <Calendar
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </div>

            {/* Attendance */}
            <Attadance selectedDate={selectedDate} />

            {/* Timetable */}
            <div className="col-md-3">
              <h6 style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "1.2rem" }}>Time Table</h6>
              <Timetable selectedDate={selectedDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
