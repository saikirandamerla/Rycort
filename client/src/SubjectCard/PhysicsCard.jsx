import React, { useState } from 'react';
import profile from '../assets/profile.png';
import TeacherProfile from '../assets/avatar/Maths.png';
import Sidebar from '../components/SideBar';

const ChemistryCard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div
        style={{
          marginLeft: sidebarOpen ? 240 : 70,  // match Sidebar width
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >
        <style>{`
          .chem-container {
            max-width: 1100px;
            margin: 40px auto;
            padding: 30px;
            font-family: 'Segoe UI', sans-serif;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: auto;
            gap: 20px;
          }

          .header {
            grid-column: 1 / 4;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          .title {
            font-size: 28px;
            font-weight: 700;
            color: #1e3a8a;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .profile {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
          }

          .profile-info {
            font-size: 14px;
          }

          .card {
            background: #f0f4ff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }

          .subject-info {
            background: linear-gradient(to bottom, #c3d6f6, #f9fbff);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            min-height: 312px;
            width: 704px;
            grid-column: span 2;
          }

          .subject-text {
            flex: 1;
          }

          .subject-text h3 {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 20px;
            font-family: 'Sora', sans-serif;
          }

          .subject-text p {
            font-size: 20px;
            color: #333;
            line-height: 1.8;
            max-width: 90%;
            font-family: 'Sora', sans-serif;
          }

          .subject-image img {
            width: 100px;
            height: 100px;
          }

          .schedule {
            grid-column: 3;
            grid-row: 2/3;
            background: linear-gradient(to bottom, #c3d6f6, #ffffff);
          }

          .teacher {
            grid-column: 1;
            background: linear-gradient(to bottom, #c3d6f6, #ffffff);
            height: 150px;
            width: 250px;
          }

          .teacher-content {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .teacher-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
          }

          .topics {
            grid-column: 2;
            background: linear-gradient(to bottom, #c3d6f6, #ffffff);
            text-align: center;
          }

          .materials {
            grid-column: 3;
            background: linear-gradient(to bottom, #c3d6f6, #ffffff);
          }

          .assignments {
            grid-column: 1;
            grid-row: 4/5;
            text-align: center;
            background: linear-gradient(to bottom, #c3d6f6, #ffffff);
            height: 150px;
            width: 250px;
            box-shadow: none;
          }

          .view-btn {
            margin-top: 10px;
            background: #1e3a8a;
            color: #fff;
            padding: 10px 20px;
            font-size: 14px;
            font-weight: 600;
            border-radius: 20px;
            border: none;
            cursor: pointer;
          }

          ul {
            list-style: none;
            padding: 0;
            margin-top: 10px;
          }

          li {
            margin: 6px 0;
            font-size: 14px;
          }
        `}</style>

        <div className="chem-container">
          {/* Header */}
          <div className="header">
            <div className="title">🎓 Physics</div>
            <div className="profile">
              <img src={profile} alt="Student" className="avatar" />
              <div className="profile-info">
                <div><strong>Ragnor Lothbrok</strong></div>
                <div>2nd Class</div>
              </div>
            </div>
          </div>

          {/* Subject Info */}
          <div className="subject-info">
            <div className="subject-text">
              <h3>Subject Info</h3>
              <p>
                rie ehrf rh rhi rhi euh hr u uruu urri le f rfh fe ej rfrfnruu rie e fnrfnu fe erjf fri ep irejof ef j foierjo reoj rfj eroj refjo rome fjefo orefjoefer er
              </p>
            </div>
            <div className="subject-image">
              <img src="https://img.icons8.com/fluency/96/test-tube.png" alt="Test tube icon" />
            </div>
          </div>

          <div className="card schedule">
            <h3>Schedule</h3>
            <p>Monday, Wednesday</p>
            <p>11:00 AM - 12:30 PM</p>
          </div>

          {/* Teacher, Topics, Materials */}
          <div className="card teacher">
            <h3>Teacher</h3>
            <div className="teacher-content">
              <img src={TeacherProfile} alt="Teacher" className="teacher-avatar" />
              <div>
                <div><strong>Ragnor Lothbrok</strong></div>
                <div>2nd Class</div>
              </div>
            </div>
          </div>

          <div className="card topics">
            <h3>Topics Covered</h3>
            <ul>
              <li>Atomic Structure</li>
              <li>Chemical Bonding</li>
              <li>States of Matter</li>
            </ul>
          </div>

          <div className="card materials">
            <h3>Materials</h3>
            <strong>Assignments and resources</strong>
            <p>
              rie ehrf rh rhi rhi euh hr u uruu urri le f rfh fe ej rfrfnruu rie e<br />
              fnrfnu fe erjf fri ep irejof ef j foierjo reoj rfj eroj refjo rome
            </p>
          </div>

          {/* Assignments */}
          <div className="card assignments">
            <h3>Assignments</h3>
            <button className="view-btn">View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChemistryCard;
