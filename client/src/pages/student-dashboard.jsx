import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import chemistryImg from '../assets/subject/Chemistry.png';
import mathsImg from '../assets/subject/Maths.png';
import physicsImg from '../assets/subject/Physics.png';
import Profile from '../assets/profile.png';
import Calendar from '../components/Calender';
import Attendance from '../components/Attadance';
import welcomeBanner from '../assets/welcome_banner.png';
import Sidebar from "../components/navbar";
import TimeTable from '../components/TimeTable';
import { BsChevronDown } from 'react-icons/bs';
import ChatWidget from '../components/ChatWidget';

function StudentDashboard() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfileSidebar, setShowProfileSidebar] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const userName = "Love Quin";
  const subjects = ['Chemistry', 'Maths', 'Physics'];
  const subjectImages = { Chemistry: chemistryImg, Maths: mathsImg, Physics: physicsImg };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => {
      if (!prev) setShowProfileSidebar(false);
      return !prev;
    });
  };

  const toggleProfileSidebar = () => {
    setShowProfileSidebar(prev => {
      if (!prev) setIsSidebarOpen(false);
      return !prev;
    });
  };

  const handleViewAllClick = () => setShowAllSubjects(!showAllSubjects);
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
   <div style={{
  display: 'flex',
  height: '100vh',
  width: '100vw',
  backgroundColor: 'white',
  overflow: 'hidden'
}}>
  {/* Sidebar */}
  <div style={{
    width: isSidebarOpen ? '70px' : '0px',
    transition: 'width 0.3s',
    overflow: 'hidden',
    backgroundColor: '#fff',
    height: '100vh',
    borderRight: '1px solid #ccc'
  }}>
    <div style={{ width: '200px', display: isSidebarOpen ? 'block' : 'none' }}>
      <Sidebar isOpen={isSidebarOpen} />
      <button onClick={toggleSidebar}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          fontSize: '1.2rem',
          cursor: 'pointer',
          color: '#333'
        }}>&times;</button>
    </div>
  </div>

      {/* Dashboard Main */}
      <div
  className="container-fluid p-2"
  onClick={() => {
    if (showProfileSidebar) setShowProfileSidebar(false);
  }}
  style={{
    backgroundColor: '#f5faff',
    marginLeft: isSidebarOpen ? '200px' : '0',
    marginRight: showProfileSidebar ? '220px' : '0',
    transition: 'margin-left 0.3s',
    width: '100%',
    height: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'relative',
    fontSize: '0.8rem'
  }}
>

        {/* Top Icons */}
        <div className="mb-2">
          <button className="btn btn-sm text-dark" onClick={toggleSidebar}>
            <i className="bi bi-list fs-5"></i>
          </button>
        </div>

        <div className="position-absolute" style={{ top: "10px", right: "10px", zIndex: 1000 }}>
          <i className="bi bi-bell-fill text-dark" style={{ fontSize: "1.2rem", cursor: "pointer" }}></i>
        </div>
        {/* Small Profile (only when sidebar is closed) */}
{!showProfileSidebar && (
  <div className="d-flex align-items-center position-absolute"
    onClick={toggleProfileSidebar}
    style={{
      top: "10px",
      right: "50px",
      cursor: 'pointer',
      zIndex: 1001,
    }}>
    <img src={Profile} alt="avatar"
      className="rounded-circle me-1"
      style={{ width: "35px", height: "35px", objectFit: "cover" }} />
    <div>
      <strong style={{ fontSize: "0.75rem" }}>{userName}</strong>
      <p className="text-muted mb-0" style={{ fontSize: "0.6rem" }}>2nd Class</p>
    </div>
    <BsChevronDown className="ms-1" style={{ fontSize: '0.75rem' }} />
  </div>
)}


       {/* Profile Sidebar (only when open) */}
{showProfileSidebar && (
  <div className="shadow bg-primary text-white p-3"
    style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '220px',
      height: '100vh',
      background: 'linear-gradient(to bottom, #5dade2, #3498db)',
      zIndex: 1000,
      fontSize: '0.75rem'
    }}>

    {/* Profile Content */}
    <div className="text-center mt-4">
      <img src={Profile} alt="avatar"
        style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "15px", marginBottom: "5px" }} />
      <h6 className="fw-bold mb-1">{userName}</h6>
      <p className="mb-1">2nd Class</p>
      <p className="fw-bold">ID: 1824411</p>
    </div>

    <div className="mt-2">
      <h6 className="text-white mb-1">Daily notice <a href="#" className="float-end text-white-50">view all</a></h6>
      <div className="bg-white text-dark rounded p-2 mb-2">
        <strong style={{ fontSize: '0.7rem' }}>Payment due</strong>
        <p style={{ fontSize: "0.65rem" }}>Lorem ipsum dolor sit amet.</p>
        <a href="#" style={{ fontSize: "0.65rem", color: "blue" }}>See more</a>
      </div>
      <div className="bg-white text-dark rounded p-2">
        <strong style={{ fontSize: '0.7rem' }}>Exam schedule</strong>
        <p style={{ fontSize: "0.65rem" }}>Exams start next week.</p>
        <a href="#" style={{ fontSize: "0.65rem", color: "blue" }}>See more</a>
      </div>
    </div>
  </div>
)}


        {/* Welcome Banner */}
        <div className="row mb-3">
  <div className="col-12">
    <div
      className="rounded p-3 d-flex justify-content-between align-items-center shadow-sm"
      style={{
        background: 'linear-gradient(to right, #2196f3, #6ec6ff)',
        color: 'white',
        borderRadius: '0.75rem',
        minHeight: '100px'
      }}
    >
      <div>
        <p style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>
          {new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
        <h6 className="fw-bold mb-1" style={{ fontSize: '1.5rem' }}>Welcome back, {userName}!</h6>
        <p className="mb-0" style={{ fontSize: '0.9rem' }}>
          Stay updated in your student portal
        </p>
      </div>
      <img
        src={welcomeBanner}
        alt="Welcome"
        style={{
          maxHeight: '160px', // 👈 increased height
          objectFit: 'contain'
        }}
      />
    </div>
  </div>
</div>


       <div className="d-flex flex-wrap justify-content-between mb-1" style={{ gap: '1rem' }}>
  {/* Subjects */}
  <div style={{ flex: '1 1 250px', minWidth: '250px' }}>
    <h6 className="fw-bold mb-2">Subjects</h6>
    <a href="#" onClick={handleViewAllClick} className="text-decoration-none text-primary justify-content-end d-flex align-items-between">
      view All 
    </a>
    <div className="d-flex flex-wrap gap-2">
      {subjects.slice(0, showAllSubjects ? subjects.length : 3).map((subject, index) => (
        <div key={index}>
          <button
            className="btn shadow-sm rounded d-flex flex-column justify-content-center align-items-center"
            style={{
              fontSize: '0.7rem',
              backgroundColor: "white",
              width: "120px",
              height: "100px",
              padding: "8px"
            }}
          >
            <img
              src={subjectImages[subject]}
              alt={subject}
              style={{ width: "60px", height: "60px", objectFit: "contain" }}
            />
            <div className="mt-1 fw-bold text-center" style={{ fontSize: "0.75rem" }}>{subject}</div>
          </button>
        </div>
      ))}
    </div>
  </div>

  {/* Daily Task */}
  <div style={{ flex: '0 1 180px', alignSelf: 'flex-start' }}>
    <h6 className="fw-bold mb-2">Daily Task</h6>
    <a href="/dailytask" className="text-white text-decoration-none">
      <div className="card shadow-sm d-flex flex-row align-items-center justify-content-center p-2"
        style={{
          background: 'linear-gradient(to right, #2196f3, #6ec6ff)',
          color: 'white',
          borderRadius: '15px',
          fontSize: '0.9rem',
          height: '60px',
          width: '160px',
        }}>
        <i className="bi bi-clipboard-check me-1"></i>
        <span className="fw-bold">Daily Task</span>
      </div>
    </a>
  </div>

  {/* Time Table */}
  <div style={{
    flex: '1 1 350px',
    minWidth: '300px',
    maxWidth: '400px',
    padding: '1rem',
    borderRadius: '0.75rem',
    height: '100%'
  }}>
    <h6 className="fw-bold mb-3" style={{ fontSize: '0.9rem' }}>Time Table</h6>
    <TimeTable />
  </div>
</div>


       <div className="d-flex flex-wrap align-items-start mb-3" style={{ gap: '1px' }}>
  {/* Calendar */}
<div style={{
  borderRadius: '0.75rem',
  flex: '1 1 200px',
  maxWidth: '270px',
  height: '200px', // enough vertical space for calendar
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
}}>
  <h6 className="fw-bold mb-2" style={{ fontSize: '0.85rem', margin: 0 }}>Calendar</h6>
  <div style={{
    transform: 'scale(0.65)', // Scale down to fit
    transformOrigin: 'top left',
    width: '135%', // maintain layout width post-scale
    height: '100%',
  }}>
    <Calendar
      currentDate={currentDate}
      setCurrentDate={setCurrentDate}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  </div>
</div>


  {/* Attendance */}
  <div style={{
    padding: '0.5rem',
    borderRadius: '0.75rem',
    flex: '1 1 300px',
    maxWidth: '450px'
  }}>
    <h6 className="fw-bold mb-2" style={{ fontSize: '0.9rem' }}>Attendance</h6>
    <div style={{ transform: 'scale(0.85)', transformOrigin: 'top left' }}>
      <Attendance selectedDate={selectedDate} />
    </div>
  </div>
</div>

        {/* Chat Icon & Widget */}
        <button
  onClick={toggleChat}
  style={{
    position: 'fixed',
    bottom: '20px', // move it up a bit
    right: '20px',
    zIndex: 1050,
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '70px', // increased from 40px
    height: '70px', // increased from 40px
    fontSize: '1.5rem', // larger icon
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  }}
  aria-label="Open Chat"
>
  <i className="bi bi-chat-dots-fill"></i>
</button>

{isChatOpen && <ChatWidget onClose={toggleChat} />}
</div>
</div>
  );
}

export default StudentDashboard;
