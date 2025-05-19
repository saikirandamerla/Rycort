// import React from "react";

// export default function TeacherDashboard() {
//   return (
//     <div className="container-fluid">
//       <div className="row min-vh-100">
//         {/* Sidebar */}
//         <aside className="col-md-3 bg-light border-end p-4">
//           <h2 className="h5 fw-bold mb-3">Teacher Dashboard</h2>
//           <div className="d-grid gap-2">
//             <button className="btn btn-outline-secondary">Add Student</button>
//             <button className="btn btn-outline-secondary">Give Attendance</button>
//             <button className="btn btn-outline-secondary">Profile</button>
//             <button className="btn btn-outline-secondary">Manage Students</button>
//             <button className="btn btn-outline-secondary">Announcements</button>
//             <button className="btn btn-outline-secondary">Timetable</button>
//             <button className="btn btn-outline-secondary">Daily Tasks</button>
//             <button className="btn btn-outline-secondary">Reports</button>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="col-md-9 p-4">
//           <ul className="nav nav-tabs mb-4" id="dashboardTabs" role="tablist">
//             {[
//               "add-student",
//               "attendance",
//               "profile",
//               "manage-students",
//               "announcements",
//               "timetable",
//               "tasks",
//               "reports",
//             ].map((tab, i) => (
//               <li className="nav-item" key={tab} role="presentation">
//                 <button
//                   className={`nav-link ${i === 0 ? "active" : ""}`}
//                   id={`${tab}-tab`}
//                   data-bs-toggle="tab"
//                   data-bs-target={`#${tab}`}
//                   type="button"
//                   role="tab"
//                   aria-selected={i === 0 ? "true" : "false"}
//                 >
//                   {tab.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="tab-content" id="dashboardTabsContent">
//             {/* Add Student Tab */}
//             <div className="tab-pane fade show active" id="add-student" role="tabpanel">
//               <div className="card p-4">
//                 <input className="form-control mb-2" placeholder="Full Name" />
//                 <input className="form-control mb-2" placeholder="Class" />
//                 <input className="form-control mb-2" placeholder="Roll Number" />
//                 <input className="form-control mb-2" placeholder="Email" />
//                 <input className="form-control mb-3" placeholder="Phone" />
//                 <button className="btn btn-primary">Add Student</button>
//               </div>
//             </div>

//             {/* Attendance Tab */}
//             <div className="tab-pane fade" id="attendance" role="tabpanel">
//               <div className="card p-4">
//                 <input type="date" className="form-control mb-2" />
//                 <input className="form-control mb-2" placeholder="Class" />
//                 <input className="form-control mb-3" placeholder="Student Name or ID" />
//                 <div className="d-flex gap-2">
//                   <button className="btn btn-success">Mark Present</button>
//                   <button className="btn btn-outline-danger">Mark Absent</button>
//                 </div>
//               </div>
//             </div>

//             {/* Profile Tab */}
//             <div className="tab-pane fade" id="profile" role="tabpanel">
//               <div className="card p-4">
//                 <input className="form-control mb-2" placeholder="Full Name" />
//                 <input className="form-control mb-2" placeholder="Email" />
//                 <input className="form-control mb-2" placeholder="Phone Number" />
//                 <input className="form-control mb-3" type="password" placeholder="Change Password" />
//                 <button className="btn btn-primary">Save Changes</button>
//               </div>
//             </div>

//             {/* Manage Students Tab */}
//             <div className="tab-pane fade" id="manage-students" role="tabpanel">
//               <div className="card p-4">
//                 <input className="form-control mb-3" placeholder="Search by Name or ID" />
//                 <div className="bg-white border p-3">Student List (Mock Data)</div>
//               </div>
//             </div>

//             {/* Announcements Tab */}
//             <div className="tab-pane fade" id="announcements" role="tabpanel">
//               <div className="card p-4">
//                 <input className="form-control mb-2" placeholder="Announcement Title" />
//                 <textarea className="form-control mb-3" rows="3" placeholder="Message to students" />
//                 <button className="btn btn-warning">Post Announcement</button>
//               </div>
//             </div>

//             {/* Timetable Tab */}
//             <div className="tab-pane fade" id="timetable" role="tabpanel">
//               <div className="card p-4">
//                 <input className="form-control mb-2" placeholder="Add Subject/Period" />
//                 <input type="time" className="form-control mb-2" />
//                 <input type="time" className="form-control mb-3" />
//                 <button className="btn btn-info">Save Period</button>
//               </div>
//             </div>

//             {/* Tasks Tab */}
//             <div className="tab-pane fade" id="tasks" role="tabpanel">
//               <div className="card p-4">
//                 <input className="form-control mb-2" placeholder="Task Title" />
//                 <textarea className="form-control mb-3" placeholder="Details or notes" />
//                 <button className="btn btn-success">Add Task</button>
//               </div>
//             </div>

//             {/* Reports Tab */}
//             <div className="tab-pane fade" id="reports" role="tabpanel">
//               <div className="card p-4">
//                 <p>Performance overview and attendance charts will be shown here.</p>
//                 <button className="btn btn-outline-primary">Download Report</button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
