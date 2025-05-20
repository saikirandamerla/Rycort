import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Check, X, Clock } from 'lucide-react';
import Sidebar from '../components/SideBar';

const CombinedDashboardPage = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [sidebarOpen, setSidebarOpen] = useState(false); // controls sidebar width on hover

  const attendanceStats = { present: 18, absent: 4, late: 2, percentage: 82 };

  const attendanceByDate = {
    '2025-05-02': 'present',
    '2025-05-03': 'present',
    '2025-05-04': 'late',
    '2025-05-05': 'absent',
    '2025-05-06': 'present',
  };

  const records = [
    { date: 'May 6, 2025', status: 'Present' },
    { date: 'May 5, 2025', status: 'Absent' },
    { date: 'May 4, 2025', status: 'Late' },
    { date: 'May 3, 2025', status: 'Present' },
    { date: 'May 2, 2025', status: 'Present' },
  ];

  const statusColor = {
    Present: 'text-teal',
    Absent: 'text-soft-red',
    Late: 'text-amber',
  };

  const getDateKey = (date) => date.toISOString().split('T')[0];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div
        className="container-fluid"
        style={{
          marginLeft: sidebarOpen ? '260px' : '90px',
          transition: 'margin-left 0.3s ease-in-out',
          paddingTop: '20px',
        }}
      >
        {/* STYLES */}
        <style>{`
        .stats-box, .stat-card, .calendar-box .card, .record-box, .summary-box {
          background: linear-gradient(to bottom, #d6e9f9, #f3f9ff);
          border-radius: 12px;
        }
        .dashboard-border {
          border: 2px solid #d0d7de;
          border-radius: 16px;
          padding: 24px;
          background-color: #ffffff;
        }
        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
          border-radius: 12px;
          box-shadow: 0 1px 5px rgba(0,0,0,0.05);
          text-align: center;
        }
        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
          color: white;
        }
        .present-icon { background-color: #14B8B8; }
        .absent-icon { background-color: #F97373; }
        .late-icon { background-color: #FBBF24; }
        .text-teal { color: #14B8B8 !important; }
        .text-soft-red { color: #F97373 !important; }
        .text-amber { color: #FBBF24 !important; }
        .calendar-box {
          background: linear-gradient(to bottom, #e6f0fa, #ffffff);
          border-radius: 12px;
          padding: 16px;
        }
        .calendar-box .react-calendar {
          background: transparent;
          border: none;
          width: 100%;
          font-family: inherit;
        }
        .calendar-box .react-calendar__tile {
          border-radius: 6px;
          padding: 10px 0;
          background: transparent;
        }
        .calendar-box .react-calendar__tile--now {
          background: transparent !important;
          font-weight: bold;
        }
        .calendar-box .absent-day { background-color: #F97373; color: #000; }
        .calendar-box .late-day { background-color: #FBBF24; color: #000; }
        .calendar-box .selected-day { background-color: #58f2ea !important; color: #fff !important; }
        .calendar-box .react-calendar__tile:hover {
          background-color: #dcefff;
          cursor: pointer;
        }
        .calendar-box .react-calendar__month-view__days__day--weekend {
          color: red;
        }
        .banner {
          background: #007bff;
          color: white;
          padding: 20px;
          border-radius: 10px;
        }
      `}</style>

        {/* Content Wrapper */}
        <div className="dashboard-border mb-4">
          <div className="banner d-flex justify-content-between align-items-center mb-4">
            <div>
              <div className="small">{formattedDate}</div>
              <h2>Attendance</h2>
            </div>
            <div className="bg-light px-4 py-2 rounded text-dark fw-bold">banner</div>
          </div>

          {/* Attendance Stats */}
          <div className="row mb-4 align-items-center">
            {['Present', 'Absent', 'Late'].map((label) => {
              const count = attendanceStats[label.toLowerCase()];
              const Icon = label === 'Present' ? Check : label === 'Absent' ? X : Clock;
              const iconClass = label === 'Present' ? 'present-icon' : label === 'Absent' ? 'absent-icon' : 'late-icon';
              return (
                <div className="col-md-2 mb-2" key={label}>
                  <div className="stat-card">
                    <div className={`stat-icon ${iconClass}`} style={{ width: '30px', height: '30px', marginRight: '8px' }}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <small style={{ fontSize: '0.75rem' }}>{label}</small>
                      <div className="fw-bold" style={{ fontSize: '0.9rem' }}>{count} days</div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-md-4 d-flex justify-content-end">
              <div style={{ width: '80px', height: '80px', position: 'relative' }}>
                <svg viewBox="0 0 36 36" style={{ width: '80px', height: '80px' }}>
                  <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#e5f1ff" strokeWidth="4" />
                  <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#2382f9" strokeWidth="4" strokeDasharray={`${attendanceStats.percentage}, 100`} strokeLinecap="round" />
                </svg>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                  <div style={{ fontWeight: '650', fontSize: '1.1rem', color: '#212529' }}>{attendanceStats.percentage}%</div>
                  <div style={{ fontSize: '0.7rem', color: '#6c757d' }}>Overall</div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar & Records */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="calendar-box p-3">
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  activeStartDate={new Date(selectedYear, selectedMonth)}
                  onActiveStartDateChange={({ activeStartDate }) => {
                    setSelectedMonth(activeStartDate.getMonth());
                    setSelectedYear(activeStartDate.getFullYear());
                  }}
                  tileClassName={({ date, view }) => {
                    if (view === 'month') {
                      const key = getDateKey(date);
                      const base = attendanceByDate[key];
                      const isSelected = selectedDate && getDateKey(date) === getDateKey(selectedDate);
                      return [
                        base === 'present' && 'present-day',
                        base === 'absent' && 'absent-day',
                        base === 'late' && 'late-day',
                        isSelected && 'selected-day',
                      ].filter(Boolean).join(' ');
                    }
                    return '';
                  }}
                />
              </div>
            </div>

            <div className="col-md-8 mb-4">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="record-box p-3">
                    <h6 className="fw-bold mb-3">Attendances Record</h6>
                    {records.map((r, i) => (
                      <div key={i} className="d-flex justify-content-between py-2 px-1 border-bottom">
                        <span>{r.date}</span>
                        <span className={`fw-semibold ${statusColor[r.status]}`}>{r.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="p-3">
                    <h6 className="mb-3 fw-semibold" style={{ color: '#3c4043' }}>Date & Time Summary</h6>
                    <div className="d-flex justify-content-between px-2 py-2 fw-semibold border-bottom" style={{ fontSize: '0.9rem' }}>
                      <div style={{ flex: 2 }}>Date&Time</div>
                      <div style={{ flex: 1 }}>Status</div>
                      <div style={{ flex: 1 }}>Class</div>
                    </div>
                    {Array(5).fill().map((_, i) => (
                      <div key={i} className="d-flex justify-content-between px-2 py-2 border-bottom" style={{ fontSize: '0.85rem' }}>
                        <div style={{ flex: 2 }}>15-05-2025, 9:00am</div>
                        <div style={{ flex: 1 }} className="text-teal fw-semibold">Present</div>
                        <div style={{ flex: 1 }}>Maths</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* end dashboard-border */}
      </div> {/* end content area */}
    </div>
  );
};

export default CombinedDashboardPage;
