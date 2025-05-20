import React, { useState } from 'react';
import MiniSidebar from '../components/MiniSidebar';
import Sidebar from '../components/navbar';
import Calendar from '../components/Calender';

const dailyTask = () => {
    const [expanded, setExpanded] = useState(false);
    // For progress chart
    const completed = 4;
    const total = 6;
    const percent = Math.round((completed / total) * 100);
    const pending = total - completed;
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f7fafd' }}>
            {expanded ? (
                <Sidebar isOpen={true} onClose={() => setExpanded(false)} />
            ) : (
                <MiniSidebar onExpand={() => setExpanded(true)} />
            )}
            <div style={{ flex: 1, padding: '12px' }}>
                {/* Hero section */}
                <div style={{
                    background: 'linear-gradient(90deg, #36a2ea 0%, #2196f3 100%)',
                    borderRadius: '16px 16px 0 0',
                    color: 'white',
                    padding: '16px 20px 12px 20px',
                    marginBottom: '16px',
                    minHeight: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <span style={{ fontSize: 13, opacity: 0.85, marginBottom: 4 }}>May 16, 2025</span>
                    <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: 0.5 }}>Welcome back, Quin</span>
                </div>
                {/* Main section */}
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  {/* Left/Main content (over 50%) */}
                  <div style={{ flex: 2, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <h2 style={{ fontWeight: 700, fontSize: 22, margin: 0 }}>Daily Tasks</h2>
                      <div style={{ display: 'flex', gap: 12 }}>
                        <div style={{ fontWeight: 500, fontSize: 13, color: '#222', background: '#fff', borderRadius: 6, padding: '4px 10px', boxShadow: '0 1px 2px #e0e7ef' }}>Sort by Date <span style={{ fontSize: 13 }}>▼</span></div>
                        <div style={{ fontWeight: 500, fontSize: 13, color: '#222', background: '#fff', borderRadius: 6, padding: '4px 10px', boxShadow: '0 1px 2px #e0e7ef' }}>Show All Tasks <span style={{ fontSize: 13 }}>▼</span></div>
                      </div>
                    </div>
                    {/* Summary cards */}
                    <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                      <div style={{ flex: 1, background: '#f7fafd', borderRadius: 8, padding: 8, display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, boxShadow: '0 1px 2px #e0e7ef' }}>
                        <div style={{ background: '#3498fd', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="bi bi-check-circle" style={{ color: 'white', fontSize: 16 }}></i>
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: 12 }}>Task Completed</div>
                          <div style={{ fontWeight: 700, fontSize: 14 }}>{completed} / {total}</div>
                        </div>
                      </div>
                      <div style={{ flex: 1, background: '#f7fafd', borderRadius: 8, padding: 8, display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, boxShadow: '0 1px 2px #e0e7ef' }}>
                        <div style={{ background: '#b2d0f7', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="bi bi-hourglass" style={{ color: '#3498fd', fontSize: 16 }}></i>
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: 12 }}>Pending</div>
                          <div style={{ fontWeight: 700, fontSize: 14 }}>{pending}</div>
                        </div>
                      </div>
                      <div style={{ flex: 1, background: '#f7fafd', borderRadius: 8, padding: 8, display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, boxShadow: '0 1px 2px #e0e7ef' }}>
                        <div style={{ background: '#3498fd', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="bi bi-journal-text" style={{ color: 'white', fontSize: 16 }}></i>
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: 12 }}>Due today</div>
                          <div style={{ fontWeight: 700, fontSize: 14 }}>3</div>
                        </div>
                      </div>
                    </div>
                    {/* Task List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {[1,2,3].map((_, idx) => (
                        <div key={idx} style={{ background: '#eaf3fc', borderRadius: 8, padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #e0e7ef', boxShadow: '0 1px 2px #e0e7ef', marginBottom: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ background: '#b2d0f7', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <i className="bi bi-journal-bookmark" style={{ color: '#3498fd', fontSize: 18 }}></i>
                            </div>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: 14 }}>English Homework</div>
                              <div style={{ color: '#444', fontSize: 11 }}>Write a summary of Chapter 3</div>
                              <div style={{ color: '#888', fontSize: 10, marginTop: 2 }}>Due: May 7, 2025 6.00 PM</div>
                            </div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                            <button style={{ background: '#eaf3fc', color: '#3498fd', border: '1px solid #3498fd', borderRadius: 6, padding: '4px 12px', fontWeight: 600, fontSize: 12, cursor: 'pointer', boxShadow: '0 1px 2px #e0e7ef' }}>Mark as Done</button>
                            <span style={{ color: '#888', fontSize: 10 }}>Upload</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Right section */}
                  <div style={{ flex: 1, minWidth: 180, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {/* Progress Chart Card */}
                    <div style={{ background: '#fff', borderRadius: 8, padding: 10, boxShadow: '0 1px 2px #e0e7ef', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Completed {percent}%</div>
                      <div style={{ position: 'relative', width: 140, height: 140, marginBottom: 6 }}>
                        <svg width="140" height="140">
                          <circle cx="70" cy="70" r="62" stroke="#eaf3fc" strokeWidth="16" fill="none" />
                          <circle cx="70" cy="70" r="62" stroke="#3498fd" strokeWidth="16" fill="none" strokeDasharray={2 * Math.PI * 62} strokeDashoffset={(1 - percent / 100) * 2 * Math.PI * 62} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.5s' }} />
                          <text x="70" y="82" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#3498fd">{percent}%</text>
                        </svg>
                      </div>
                      <div style={{ color: '#888', fontSize: 13 }}>{100 - percent}% pending</div>
                    </div>
                    {/* Calendar Card */}
                    <div style={{ background: '#fff', borderRadius: 8, padding: 12, boxShadow: '0 1px 2px #e0e7ef', height:220,width:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Calendar />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default dailyTask