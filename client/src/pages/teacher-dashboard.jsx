import React from 'react';

// Banner component
const Banner = ({ title = "Banner" }) => {
  return (
    <div className="w-full bg-gray-200 h-32 md:h-48 flex items-center justify-center rounded-md mb-10 shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-100">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-700">{title}</h2>
    </div>
  );
};

// Sample teachers data
const teachers = [
  {
    id: 1,
    name: 'Alexander',
    subject: 'Physics teacher',
    avatarUrl: 'https://images.pexels.com/photos/8636630/pexels-photo-8636630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Chandra',
    subject: 'Maths teacher',
    avatarUrl: 'https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Rohith',
    subject: 'Biology teacher',
    avatarUrl: 'https://images.pexels.com/photos/8617942/pexels-photo-8617942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Ilusiya',
    subject: 'English teacher',
    avatarUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Alexander',
    subject: 'Physics teacher',
    avatarUrl: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    name: 'Alexander',
    subject: 'Physics teacher',
    avatarUrl: 'https://images.pexels.com/photos/8617936/pexels-photo-8617936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

// TeacherCard component renders one teacher
const TeacherCard = ({ teacher }) => (
  <div className="bg-blue-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex items-center space-x-5">
    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-300 flex-shrink-0">
      <img 
        src={teacher.avatarUrl} 
        alt={teacher.name} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-gray-900 text-lg">{teacher.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{teacher.subject}</p>
      <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors mt-2">
        View more
      </button>
    </div>
  </div>
);

// TeacherGrid component renders all teacher cards
const TeacherGrid = () => (
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {teachers.map(teacher => (
      <TeacherCard key={teacher.id} teacher={teacher} />
    ))}
  </div>
);

// HomePage component combines Banner and TeacherGrid
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-8 py-8">
      <Banner title="Our Amazing Teachers" />
      <TeacherGrid />
    </div>
  );
};

export default HomePage;
