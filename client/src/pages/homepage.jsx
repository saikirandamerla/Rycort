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

function Homepage() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const userName = "John";
  const subjects = ['Chemistry', 'Maths', 'Physics'];
  const subjectImages = { Chemistry: chemistryImg, Maths: mathsImg, Physics: physicsImg };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleViewAllClick = () => setShowAllSubjects(!showAllSubjects);
  const toggleDropdown = () => setShowProfileDropdown(!showProfileDropdown);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: 'white' }}>
      {/* Sidebar */}
      <div style={{
        width: isSidebarOpen ? '250px' : '0',
        transition: 'width 0.3s',
        overflow: 'hidden',
        backgroundColor: 'transparent',
        height: '100vh',
        position: 'fixed',
        zIndex: 999,
        padding: isSidebarOpen ? '16px' : '0',
        boxSizing: 'border-box',
      }}>
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div
        className="container-fluid dashboard p-4"
        style={{
          backgroundColor: '#f5faff',
          marginLeft: isSidebarOpen ? '250px' : '0',
          transition: 'margin-left 0.3s',
          width: '100%',
          height: '100vh',
          overflowY: 'auto'
        }}
      >
        {/* Toggle Sidebar */}
        <div className="mb-3">
          <button className="btn text-dark" onClick={toggleSidebar}>
            <i className="bi bi-list fs-3"></i>
          </button>
        </div>

        {/* Notification Icon */}
        <div className="position-absolute" style={{ top: "20px", right: "20px", zIndex: 1000 }}>
          <i className="bi bi-bell-fill text-dark" style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
        </div>

        {/* Profile Info with Dropdown */}
        <div className="d-flex justify-content-end align-items-center mb-3" style={{ marginRight: "40px", position: 'relative' }}>
          <div className="d-flex align-items-center" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
            <img src={Profile} alt="avatar" className="rounded-circle me-2" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
            <div>
              <h6 className="mb-0 fw-bold" style={{ fontSize: "1rem" }}>Love Quin</h6>
              <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>2nd Class</p>
            </div>
            <BsChevronDown className="ms-2" />
          </div>

          {showProfileDropdown && (
            <div className="shadow-sm bg-primary rounded p-3" style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              zIndex: 1000,
              minWidth: '300px',
              minHeight: '100%',
            }}>
              <p className="mb-1 fw-bold">Love Quin</p>
              <p className="text-muted mb-2">2nd Class</p>
              <hr />
              <a href="/profile" className="d-block text-decoration-none text-dark mb-2">View Profile</a>
              <a href="/settings" className="d-block text-decoration-none text-dark mb-2">Settings</a>
              <a href="/logout" className="d-block text-decoration-none text-danger">Logout</a>
            </div>
          )}
        </div>

        {/* Welcome Banner */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="rounded p-4 d-flex justify-content-between align-items-center shadow-sm"
              style={{
                background: 'linear-gradient(to right, #2196f3, #6ec6ff)',
                color: 'white',
                borderRadius: '1rem',
                minHeight: '150px'
              }}>
              <div>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <h3 className="fw-bold mb-1" style={{ fontSize: "55px" }}>Welcome back, {userName}!</h3>
                <p className="mb-0" style={{ fontSize: "15px" }}>Always stay updated in your student portal</p>
              </div>
              <img src={welcomeBanner} alt="Welcome Illustration" style={{ maxHeight: '250px', objectFit: 'contain' }} />
            </div>
          </div>
        </div>

        {/* Diary Title + View All */}
        <div className="row align-items-end mb-2">
          <div className="col">
            <h1 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Diary</h1>
          </div>
          <div className="col fw-bold" style={{ textAlign: "center" }}>
            <a href="#" className="text-primary text-decoration-none" onClick={handleViewAllClick}>
              {showAllSubjects ? "View Less" : "View All"}
            </a>
          </div>
        </div>

        {/* Subject Cards */}
       <div className="row text-center mb-4">
  {subjects.slice(0, showAllSubjects ? subjects.length : 3).map((subject, index) => (
    <div className="col-3" key={index}>
      <button className="btn w-100 h-100 py-4 shadow-sm rounded" style={{backgroundColor: "white"}}>
        <img src={subjectImages[subject]} alt={subject} style={{ width: "50px", height: "50px", objectFit: "contain" }} />
        <div className="mt-2 fw-bold">{subject}</div>
      </button>
    </div>
  ))}

          {/* Daily Task Card */}
          <div className="col-3">
            <div
              className="card shadow-sm d-flex flex-row align-items-center justify-content-between p-3"
              style={{
                background: 'linear-gradient(to right, #2196f3, #6ec6ff)',
                color: 'white',
                borderRadius: '20px',
              }}
            >
              <div className="d-flex align-items-center">
                <i className="bi bi-clipboard-check fs-4 me-2"></i>
                <h6 className="fw-bold mb-0">Daily Task</h6>
              </div>
              <a href="/dailytask" className="btn btn-light text-primary fw-bold px-3 py-1 rounded-pill">
                View
              </a>
            </div>
          </div>
        </div>

      <div className="row">
  {/* Calendar Card */}
  <div className="col-12 col-md-4 mb-4 d-flex">
    <div className="flex-fill p-3">
      <h6 className="fw-bold mb-3">Calendar</h6>
      <Calendar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  </div>

  {/* Attendance Card */}
  <div className="col-12 col-md-4 mb-4 d-flex">
    <div className="flex-fill p-3">
      <h6 className="fw-bold mb-3">Attendance</h6>
      <Attendance selectedDate={selectedDate} />
    </div>
  </div>

  {/* Time Table Card */}
  <div className="col-12 col-md-4 mb-4 d-flex">
    <div className=" flex-fill p-3">
      <h6 className="fw-bold mb-3">Time Table</h6>
      <TimeTable currentDate={currentDate} />
    </div>
  </div>
</div>


        {/* Footer */}
        <footer className="text-center mt-4">
          <p className="text-muted" style={{ fontSize: "0.8rem" }}>© 2025 Student Portal. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
