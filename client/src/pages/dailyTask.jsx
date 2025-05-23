import React, { useState } from 'react';
import Calendar from '../components/Calender';
import Sidebar from '../components/SideBar';
import UploadModal from '../components/UploadModal';

const DailyTask = () => {
  const [showModal, setShowModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const completed = 4;
  const total = 6;
  const percent = Math.round((completed / total) * 100);
  const pending = total - completed;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f7fafd' }}>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div
        style={{
          flex: 1,
          padding: '12px',
          marginLeft: sidebarOpen ? '240px' : '70px',
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            background: 'linear-gradient(90deg, #36a2ea 0%, #2196f3 100%)',
            borderRadius: '16px 16px 0 0',
            color: 'white',
            padding: '16px 20px 12px 20px',
            marginBottom: '16px',
          }}
        >
          <span style={{ fontSize: 13, opacity: 0.85 }}>
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Welcome back, Love Quin</h2>
        </div>

        {/* Task Section */}
        <div style={{ display: 'flex', gap: 16 }}>
          {/* Left Content */}
          <div style={{ flex: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <h2 style={{ fontWeight: 700 }}>Daily Tasks</h2>
              <div style={{ display: 'flex', gap: 12 }}>
                <div className="sort-filter">Sort by Date ▼</div>
                <div className="sort-filter">Show All Tasks ▼</div>
              </div>
            </div>

            {/* Summary Cards */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
              <SummaryCard icon="bi-check-circle" title="Task Completed" value={`${completed} / ${total}`} color="#3498fd" />
              <SummaryCard icon="bi-hourglass" title="Pending" value={pending} color="#b2d0f7" iconColor="#3498fd" />
              <SummaryCard icon="bi-calendar-day" title="Due today" value={3} color="#d6ecff" iconColor="#3498fd" />
            </div>

            {/* Task Cards */}
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="task-card card shadow-s" style={{ padding: 16, marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="task-icon">
                    <i className="bi bi-journal-bookmark" style={{ color: '#3498fd', fontSize: 18 }}></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>English Homework</div>
                    <div style={{ fontSize: 12 }}>Write a summary of Chapter 3</div>
                    <div style={{ fontSize: 11, color: '#666' }}>Due: May 7, 2025 6.00 PM</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                  <button
                    style={{
                      background: '#eaf3fc',
                      color: '#3498fd',
                      border: '1px solid #3498fd',
                      borderRadius: 6,
                      padding: '4px 12px',
                      fontWeight: 600,
                      fontSize: 12,
                      cursor: 'pointer',
                    }}
                  >
                    Mark as Done
                  </button>
                  <button
                    style={{
                      background: '#fff',
                      color: '#3498fd',
                      border: '1px solid #3498fd',
                      borderRadius: 6,
                      padding: '4px 12px',
                      fontWeight: 600,
                      fontSize: 12,
                      cursor: 'pointer',
                    }}
                    onClick={() => setShowModal(true)}
                  >
                    Upload
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel */}
          <div style={{ flex: 1 }}>
            <div
              className="progress-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
                height: 280,
                background: '#fff',
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                marginBottom: 16,
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Completed {percent}%</div>
              <svg width="140" height="140">
                <circle cx="70" cy="70" r="62" stroke="#eaf3fc" strokeWidth="16" fill="none" />
                <circle
                  cx="70"
                  cy="70"
                  r="62"
                  stroke="#3498fd"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 62}
                  strokeDashoffset={(1 - percent / 100) * 2 * Math.PI * 62}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 0.5s' }}
                />
                <text x="70" y="82" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#3498fd">
                  {percent}%
                </text>
              </svg>
              <div style={{ color: '#888', fontSize: 13 }}>{100 - percent}% pending</div>
            </div>

            <div className="calendar-box">
              <Calendar />
            </div>
          </div>
        </div>

        {/* Upload Modal */}
        {showModal && <UploadModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
};

const SummaryCard = ({ icon, title, value, color, iconColor }) => (
  <div
    className="summary-card"
    style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '16px 20px',
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
      gap: 16,
    }}
  >
    <div
      style={{
        background: color,
        width: 56,
        height: 56,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <i className={`bi ${icon}`} style={{ color: iconColor || '#fff', fontSize: 28 }}></i>
    </div>
    <div>
      <div style={{ fontSize: 15, fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: 20, fontWeight: 800 }}>{value}</div>
    </div>
  </div>
);


export default DailyTask;
