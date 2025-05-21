import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/banner.png';
import physicsImg from '../assets/avatar/Physics.png';
import Mathsimg from '../assets/avatar/Maths.png';
import BiologyImg from '../assets/avatar/Biology.png';
import englishImg from '../assets/avatar/English.png';
import Sidebar from '../components/SideBar'; // Sidebar supports hover-expand

const teachers = [
  {
    id: 123,
    name: 'Alexander',
    subject: 'Physics teacher',
    avatarUrl: physicsImg,
  },
  {
    id: 456,
    name: 'Chandra',
    subject: 'Maths teacher',
    avatarUrl: Mathsimg,
  },
  {
    id: 789,
    name: 'Rohith',
    subject: 'Biology teacher',
    avatarUrl: BiologyImg,
  },
  {
    id: 101,
    name: 'Ilusiya',
    subject: 'English teacher',
    avatarUrl: englishImg,
  },
  {
    id: 102,
    name: 'Alexander',
    subject: 'Physics teacher',
    avatarUrl: physicsImg,
  },
  {
    id: 103,
    name: 'Alexander',
    subject: 'Physics Teacher',
    avatarUrl: physicsImg,
  },
];

const TeacherCard = ({ teacher }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/teacher/${teacher.id}`);
  };

  return (
    <div className="col-md-4 mb-4">
      <div
        className="card shadow-sm h-100 border-0"
        style={{
          background: 'linear-gradient(to bottom,rgb(195, 225, 252), #ffffff)',
          borderRadius: '12px',
        }}
      >
        <div className="card-body d-flex align-items-center">
          <img
            src={teacher.avatarUrl}
            className="rounded-circle me-3"
            alt={teacher.name}
            width="70"
            height="70"
          />
          <div style={{ fontFamily: 'Sora' }}>
            <h5 className="mb-1 fw-semibold">{teacher.name}</h5>
            <p className="mb-1 text-muted">{teacher.subject}</p>
            <button
              className="btn btn-link p-0 text-decoration-none text-primary"
              onClick={handleViewMore}
            >
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeacherGrid = () => (
  <div className="container">
    <div className="row">
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  </div>
);

const Banner = () => (
  <div className="container mb-4">
    <img
      src={bannerImg}
      className="img-fluid rounded w-100"
      alt="School Banner"
      style={{ maxHeight: '250px', objectFit: 'cover' }}
    />
  </div>
);

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar hover state

  return (
    <div className="d-flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div
        className="flex-grow-1 bg-light min-vh-100"
        style={{
          marginLeft: isSidebarOpen ? "250px" : "70px",
          transition: "margin 0.3s ease-in-out",
        }}
      >
        <div className="container text-start pt-4 px-4">
          <h2 className="fw-bold mb-4" style={{ fontFamily: 'Solway' }}>
            St. Mary Sabastian International School
          </h2>
          <Banner />
          <TeacherGrid />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
