import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import logo from "../assets/Minilogo.png";
import english from "../assets/avatar/Biology.png";

const TeacherProfile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div
        style={{
          marginLeft: sidebarOpen ? 240 : 70,
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <style>{`
          .teacher-container {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 24px;
            padding: 24px;
            background-color: #f5f9ff;
            min-height: 100vh;
            font-family: sans-serif;
          }

          .left-section {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .profile-card,
          .info-section-card,
          .info-card {
            background: linear-gradient(to bottom, #c3d6f6, #ffffff);
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
          }

          .profile-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;
          }

          .profile-img {
            width: 64px;
            height: 64px;
            border-radius: 9999px;
            object-fit: cover;
          }

          .profile-name {
            font-size: 18px;
            font-weight: 600;
          }

          .profile-title {
            font-size: 14px;
            color: #666;
          }

          .section-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
          }

          .about-text {
            font-size: 14px;
            color: #333;
            line-height: 1.6;
          }

          .tag-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 12px;
          }

          .tag-badge {
            background-color: #dbeafe;
            color: #1d4ed8;
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 13px;
          }

          .main-info {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .education-item,
          .teacher-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 16px;
            margin-bottom: 16px;
            border-bottom: 1px solid #eee;
          }

          .education-left,
          .teacher-left {
            display: flex;
            gap: 16px;
            align-items: center;
          }

          .edu-logo,
          .teacher-img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }

          .edu-title,
          .teacher-name {
            font-weight: 600;
            font-size: 14px;
          }

          .edu-sub,
          .teacher-subject {
            font-size: 13px;
            color: #666;
          }

          .edu-date,
          .teacher-id {
            font-size: 12px;
            color: #999;
          }

          .cred-btn {
            color: #3b82f6;
            font-size: 14px;
            background: none;
            border: none;
            cursor: pointer;
          }

          .view-btn {
            background-color: #3b82f6;
            color: white;
            font-size: 13px;
            padding: 6px 16px;
            border-radius: 9999px;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .view-btn:hover {
            background-color: #2563eb;
          }
        `}</style>

        <div className="teacher-container">
          {/* Left Side */}
          <div className="left-section">
            <div className="profile-card">
              <div className="profile-header">
                <img
                  src={english}
                  alt="teacher"
                  className="profile-img"
                />
                <div>
                  <h2 className="profile-name">Mr. Rohith</h2>
                  <p className="profile-title">
                    Senior Teacher at Silveroaks School
                  </p>
                </div>
              </div>
            </div>

            <div className="info-section-card">
              <h3 className="section-title">About Me</h3>
              <p className="about-text">
                Hello, everyone! My name is (name), and I am an aspiring and
                enthusiastic teacher ready to start on my teaching journey. I
                recently graduated from (university name) with a degree in
                (subject), and I am excited and thrilled to begin my career in
                teaching.
              </p>
              <h3 className="section-title">Expertise Tags</h3>
              <div className="tag-list">
                {["English Grammar", "English Grammar", "English Grammar"].map(
                  (tag, idx) => (
                    <span key={idx} className="tag-badge">
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="info-section-card">
              <h3 className="section-title">Contact Info</h3>
              <p>
                <strong>Phone Number:</strong> +91 3697854223
              </p>
              <p>
                <strong>Email Address:</strong> xyz123@gmail.com
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="main-info">
            <div className="info-card">
              <h3 className="section-title">Education Background</h3>
              {[1, 2].map((_, i) => (
                <div key={i} className="education-item">
                  <div className="education-left">
                    <img src={logo} alt="university logo" className="edu-logo" />
                    <div>
                      <h4 className="edu-title">The University of Hyderabad</h4>
                      <p className="edu-sub">Master’s Degree, foreign languages</p>
                      <p className="edu-date">Sep 2007 – Aug 2012</p>
                    </div>
                  </div>
                  <button className="cred-btn">Show Credential</button>
                </div>
              ))}
            </div>

            <div className="info-card">
              <h3 className="section-title">Other Teacher</h3>
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="teacher-item">
                  <div className="teacher-left">
                    <img src={logo} alt="teacher" className="teacher-img" />
                    <div>
                      <h4 className="teacher-name">Alexander</h4>
                      <p className="teacher-subject">Physics</p>
                      <p className="teacher-id">ID12358798</p>
                    </div>
                  </div>
                  <button className="view-btn">View more</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
