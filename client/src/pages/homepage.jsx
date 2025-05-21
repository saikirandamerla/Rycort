// HomePage.jsx
import React, { useState } from 'react';
import Sidebar from '../components/navbar'; // Make sure this is the Sidebar you finalized
import Calendar from '../components/Calender';
import Attendance from '../components/Attadance';
import TimeTable from '../components/TimeTable';
import ChatWidget from '../components/ChatWidget';
import Profile from '../assets/profile.png';
import welcomeBanner from '../assets/welcome_banner.png';
import { BsChevronDown } from 'react-icons/bs';

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showProfileSidebar, setShowProfileSidebar] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const userName = "John Doe";

  const subjects = ['Math', 'Science', 'English', 'Social', 'Computer'];
  const subjectImages = {
    Math: 'https://via.placeholder.com/120?text=Math',
    Science: 'https://via.placeholder.com/120?text=Science',
    English: 'https://via.placeholder.com/120?text=English',
    Social: 'https://via.placeholder.com/120?text=Social',
    Computer: 'https://via.placeholder.com/120?text=Computer',
  };

  return (

     <div style={{ padding: '2rem' }}>
      <h1>Welcome to Home Page</h1>
      <p>Welcome to your dashboard! Here you can manage schools, users, and system settings.</p>

    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Dashboard */}
      <div
        className="container-fluid dashboard p-4"
        style={{
          backgroundColor: '#f5faff',
          marginLeft: isSidebarOpen ? '250px' : '80px',
          transition: 'margin-left 0.3s',
          width: '100%',
          overflowY: 'auto',
          overflowX: 'hidden',
          height: '100vh',
          position: 'relative',
        }}
      >
        {/* Top Icons */}
        <div className="position-absolute" style={{ top: "20px", right: "20px", zIndex: 1000 }}>
          <i className="bi bi-bell-fill text-dark" style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
        </div>

        {!showProfileSidebar && (
          <div
            className="d-flex align-items-center position-absolute"
            onClick={() => setShowProfileSidebar(!showProfileSidebar)}
            style={{
              top: "20px",
              right: "70px",
              cursor: 'pointer',
              zIndex: 1001
            }}
          >
            <img src={Profile} alt="Profile avatar" className="rounded-circle me-2" style={{ width: "45px", height: "45px", objectFit: "cover" }} />
            <div>
              <strong style={{ fontSize: "0.9rem" }}>{userName}</strong>
              <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>2nd Class</p>
            </div>
            <BsChevronDown className="ms-2" />
          </div>
        )}

        {showProfileSidebar && (
          <div className="shadow bg-primary rounded text-white p-4"
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '300px',
              height: '100%',
              background: 'linear-gradient(to bottom, #5dade2, #3498db)',
              zIndex: 1000,
              transition: 'transform 0.3s ease-in-out'
            }}>
            <div className="text-center">
              <img src={Profile} alt="avatar" style={{
                width: "80px", height: "80px", objectFit: "cover", borderRadius: "20px", marginBottom: "10px"
              }} />
              <h5 className="fw-bold mb-1">{userName}</h5>
              <p className="mb-1">2nd Class</p>
              <p className="fw-bold">ID: 1824411</p>
            </div>
            <div className="mt-4">
              <h6 className="text-white mb-2">Daily notice <a href ="#" className="float-end text-white-50">view all</a></h6>
              <div className="bg-white text-dark rounded p-2 mb-3">
                <strong>Payment due</strong>
                <p style={{ fontSize: "0.75rem" }}>Lorem ipsum dolor sit amet.</p>
                <a href="#" style={{ fontSize: "0.75rem", color: "blue" }}>See more</a>
              </div>
              <div className="bg-white text-dark rounded p-2">
                <strong>Exam schedule</strong>
                <p style={{ fontSize: "0.75rem" }}>Exams start next week.</p>
                <a href="#" style={{ fontSize: "0.75rem", color: "blue" }}>See more</a>
              </div>
            </div>
          </div>
        )}

        {/* Welcome Banner */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="rounded p-4 d-flex flex-wrap justify-content-between align-items-center shadow-sm"
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
                <h3 className="fw-bold mb-1" style={{ fontSize: "2rem" }}>Welcome back, {userName}!</h3>
                <p className="mb-0" style={{ fontSize: "15px" }}>Always stay updated in your student portal</p>
              </div>
              <img src={welcomeBanner} alt="Welcome Illustration" style={{ maxHeight: '250px', objectFit: 'contain' }} />
            </div>
          </div>
        </div>

        {/* Diary Section */}
        <div className="row align-items-end mb-2">
          <div className="col">
            <h1 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Diary</h1>
          </div>
          <div className="col fw-bold text-center">
            <a href="#" className="text-primary text-decoration-none" onClick={() => setShowAllSubjects(!showAllSubjects)}>
              {showAllSubjects ? "View Less" : "View All"}
            </a>
          </div>
        </div>

        <div className="row text-center mb-4 g-3">
          {subjects.slice(0, showAllSubjects ? subjects.length : 3).map((subject, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <button className="btn w-100 py-4 shadow-sm rounded" style={{ backgroundColor: "white" }}>
                <img src={subjectImages[subject]} alt={subject} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
                <div className="mt-2 fw-bold">{subject}</div>
              </button>
            </div>
          ))}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="card shadow-sm d-flex flex-row align-items-center justify-content-between p-3"
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

        {/* Calendar, Attendance, Time Table */}
        <div className="row">
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
          <div className="col-12 col-md-4 mb-4 d-flex">
            <div className="flex-fill p-3">
              <h6 className="fw-bold mb-3">Attendance</h6>
              <Attendance selectedDate={selectedDate} />
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4 d-flex">
            <div className="flex-fill p-3">
              <h6 className="fw-bold mb-3">Time Table</h6>
              <TimeTable currentDate={currentDate} />
            </div>
          </div>
        </div>

        <footer className="text-center mt-4">
          <p className="text-muted" style={{ fontSize: "0.8rem" }}>© 2025 Student Portal. All rights reserved.</p>
        </footer>

        {/* Chat Widget Button */}
        {/* <button
          onClick={toggleChat}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1050,
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem'
          }}
          aria-label="Open Chat"
        >
          <i className="bi bi-chat-dots-fill"></i>
        </button> */}

        {isChatOpen && <ChatWidget onClose={toggleChat} />}
      </div>
    </div>
  );
}

export default HomePage;
