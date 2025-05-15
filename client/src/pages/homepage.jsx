import React from 'react';

function HomePage() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: 'white' }}>
      {/* Sidebar */}
      <div style={{
        width: isSidebarOpen ? '250px' : '0',
        transition: 'width 0.3s',
        overflow: 'hidden',
        backgroundColor: '#fff',
        height: '100vh',
        position: 'fixed',
        zIndex: 999,
        borderRight: '1px solid #ccc'
      }}>
        {isSidebarOpen && (
          <div style={{ position: 'relative', height: '100%' }}>
            <button
              onClick={toggleSidebar}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '1.8rem',
                cursor: 'pointer',
                zIndex: 1001,
                color: '#333'
              }}
              aria-label="Close Sidebar"
            >
              &times;
            </button>
            <div style={{ marginTop: '40px', }}>
              <Sidebar isOpen={isSidebarOpen} />
            </div>
          </div>
        )}
      </div>

      {/* Main Dashboard */}
      <div
        className="container-fluid dashboard p-4"
        style={{
          backgroundColor: '#f5faff',
          marginLeft: isSidebarOpen ? '250px' : '0',
          transition: 'margin-left 0.3s',
          width: '100%',
          height: '100vh',
          overflowY: 'auto',
          position: 'relative'
        }}
      >
        <div className="mb-3">
          <button className="btn text-dark" onClick={toggleSidebar}>
            <i className="bi bi-list fs-3"></i>
          </button>
        </div>

        <div className="position-absolute" style={{ top: "20px", right: "20px", zIndex: 1000 }}>
          <i className="bi bi-bell-fill text-dark" style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
        </div>

        {!showProfileSidebar && (
          <div
            className="d-flex align-items-center position-absolute"
            onClick={toggleProfileSidebar}
            style={{
              top: "20px",
              right: "70px",
              cursor: 'pointer',
              zIndex: 1001
            }}
          >
            <img src={Profile} alt="avatar" className="rounded-circle me-2" style={{ width: "45px", height: "45px", objectFit: "cover" }} />
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
                <p style={{ fontSize: "0.75rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" style={{ fontSize: "0.75rem", color: "blue" }}>See more</a>
              </div>
              <div className="bg-white text-dark rounded p-2">
                <strong>Exam schedule</strong>
                <p style={{ fontSize: "0.75rem" }}>Exams start next week. Be prepared.</p>
                <a href="#" style={{ fontSize: "0.75rem", color: "blue" }}>See more</a>
              </div>
            </div>
          </div>
        )}

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

        {/* Subject Cards */}
        <div className="row align-items-end mb-2">
          <div className="col">
            <h1 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Diary</h1>
          </div>
          <div className="col fw-bold text-center">
            <a href="#" className="text-primary text-decoration-none" onClick={handleViewAllClick}>
              {showAllSubjects ? "View Less" : "View All"}
            </a>
          </div>
        </div>

        <div className="row text-center mb-4">
          {subjects.slice(0, showAllSubjects ? subjects.length : 3).map((subject, index) => (
            <div className="col-3" key={index}>
              <button className="btn w-100 h-100 py-4 shadow-sm rounded" style={{ backgroundColor: "white" }}>
                <img src={subjectImages[subject]} alt={subject} style={{ width: "120px", height: "120px", objectFit: "contain" }} />
                <div className="mt-2 fw-bold" style={{fontFamily: "sora"}}>{subject}</div>
              </button>
            </div>
          ))}
          <div className="col-3">
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
            <div className=" flex-fill p-3">
              <h6 className="fw-bold mb-3">Time Table</h6>
              <TimeTable currentDate={currentDate} />
            </div>
          </div>
        </div>

        <footer className="text-center mt-4">
          <p className="text-muted" style={{ fontSize: "0.8rem" }}>© 2025 Student Portal. All rights reserved.</p>
        </footer>

        {/* Floating Chat Icon and Chat Widget */}
        <button
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
        </button>

        {isChatOpen && <ChatWidget onClose={toggleChat} />}

      </div>
    <div style={{ padding: '2rem' }}>
      <h1>this is home page</h1>
      <p>Welcome to your dashboard! Here you can view your attendance, marks, timetable, and more.</p>
    </div>
  );
}

export default HomePage;