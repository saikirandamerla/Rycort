import React, { useState } from 'react';
import Timetable from '../components/TimeTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import chemistryImg from '../assets/subject/Chemistry.png';
import mathsImg from '../assets/subject/Maths.png';
import physicsImg from '../assets/subject/Physics.png';
import Profile from '../assets/profile.png';
import Calendar from '../components/Calender';
import Attadance from '../components/Attadance';
import Sidebar from "../components/navbar"
function Dashboard() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(today);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const subjectImages = { Chemistry: chemistryImg, Maths: mathsImg, Physics: physicsImg };
  const subjects = ['Chemistry', 'Maths', 'Physics'];

  const handleViewAllClick = () => {
    setShowAllSubjects(!showAllSubjects);
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',   // Full viewport height
      width: '100vw',    // Full viewport width
      overflow: 'hidden',
      backgroundColor: 'white', // Optional but reinforces the fix
      
      
    }}>
    
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? '250px' : '0',
          transition: 'width 0.3s',
          overflow: 'hidden',
          backgroundColor: 'transparent',
          height: '100vh',
          position: 'fixed',
          zIndex: 999,
          padding: isSidebarOpen ? '16px' : '0', // <- fix here
          boxSizing: 'border-box',
        }}
      >
        <Sidebar isOpen={isSidebarOpen}/>
      </div>

      {/* Main Content */}
      <div
        className="container-fluid dashboard p-4"
        style={{
          backgroundColor: '#f5faff',
          marginLeft: isSidebarOpen ? '250px' : '0',
          transition: 'margin-left 0.3s',
          width: '100%'
        }}
      >
        <style>{`
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
        `}</style>

        {/* Top Bar */}
        <div className="d-flex justify-content-between align-items-center mb-3">
         
          <input type="text" placeholder="Search" className="form-control w-25" />
          <div className="d-flex align-items-center p-2">
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

        {/* Welcome Message */}
        <div className="bg-primary rounded p-3 mb-4 d-flex justify-content-between align-items-center shadow-sm">
          <div>
           <button
  className="btn text-dark position-fixed top-0 start-0 m-3"
  onClick={toggleSidebar}
  style={{ zIndex: 1100 }} // higher than the sidebar
>
  <i className="bi bi-list fs-3"></i>
</button>
            <h5 className="text-white">Welcome back, Quin</h5>
            <p className="text-light small">Always stay updated in your student portal</p>
          </div>
        </div>

        {/* Diary */}
        <h1 style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "1.2rem" }}>Dairy</h1>
        <a href="#" className="text-primary text-decoration-none d-flex justify-content-end" style={{ fontSize: "1rem" }} onClick={handleViewAllClick}>
          {showAllSubjects ? "View Less" : "View All"}
        </a>

        <div className="row text-center mb-4">
          {subjects.slice(0, showAllSubjects ? subjects.length : 3).map((subject, index) => (
            <div className="col-3" key={index}>
              <div className="card p-3 shadow-sm d-flex align-items-center justify-content-center">
                <img src={subjectImages[subject]} alt={subject} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
                <h6 className="mt-3">{subject}</h6>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-md-4">
            <h6 className="fw-bold">Calendar</h6>
            <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </div>
          <Attadance selectedDate={selectedDate} />
          <div className="col-md-3">
            <h6 className="fw-bold">Time Table</h6>
            <Timetable selectedDate={selectedDate} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
