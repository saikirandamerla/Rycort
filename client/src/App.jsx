import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from "./pages/login";
import StudentDashboard from "./pages/student-dashboard";
import TeacherDashboard from "./pages/teacher-dashboard";
import AdminDashboard from "./pages/admin-dashboard";
import AttadancePage from "./pages/AttadancePage";
import ChemistryPage from "./SubjectCard/ChemistryCard";
import TeacherInfo from "./pages/Teacher-info";
import ChatUI from './pages/Chat';
import PaymentInfo from './pages/paymentmethod';
import DailyTask from './pages/dailyTask';
import PhysicsCard from './SubjectCard/PhysicsCard'; 
import MathsCard from './SubjectCard/MathsCard'; 
import Exam from './pages/Examinations';
import ExamResult from './pages/ExamResult';
import Alexander from './TeacherCard/Alexander';
import Alexander1 from './TeacherCard/Alexander1';
import Chandra from './TeacherCard/Chandra';
import Rohith from './TeacherCard/Rohith';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/student-dashboard',
      element: <StudentDashboard />,
    },
    {
      path: '/teacher-info',
      element: <TeacherInfo />,
    },
    {
      path: '/teacher-dashboard',
      element: <TeacherDashboard />,
    },
    {
      path: '/admin-dashboard',
      element: <AdminDashboard />,
    },
    {
      path: '/attendance',
      element: <AttadancePage />,
    },
    {
      path: '/chat',
      element: <ChatUI />,
    },
    {
      path: '/payment-info',
      element: <PaymentInfo />,
    },
    {
      path: '/dailytask',
      element: <DailyTask />,
    },
    {
      path: '/subject/Chemistry',  // 👈 Add dynamic subject route
      element: <ChemistryPage />,
    },
    {
      path: '/subject/Physics',  
      element:<PhysicsCard />,
    },
    {
      path: '/subject/maths',  
      element:<MathsCard />,
    },
    {
      path: '/examination',  
      element:<Exam />,
    },
    {
      path: '/result',  
      element:<ExamResult />,
    },
    {
      path: '/teacher/101',  
      element:<Alexander />,
    },
    {
      path: '/teacher/123',  
      element:<Alexander1 />,
    },
    {
      path: 'teacher/102',  
      element:<Alexander1 />,
    },
    {
      path: 'teacher/103',  
      element:<Alexander1 />,
    },
    {
      path: '/teacher/789',  
      element:<Rohith />,
    },
    {
      path: '/teacher/456',
      element:<Chandra />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
