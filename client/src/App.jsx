import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from "./pages/homepage";
import LoginPage from "./pages/login";
import StudentDashboard from "./pages/student-dashboard";
import TeacherDashboard from "./pages/teacher-dashboard";
import AdminDashboard from "./pages/admin-dashboard";
import DailyTask from './pages/dailyTask';
import AttadancePage from "./pages/AttadancePage";
import SubjectPage from "./pages/SubjectPage";
import TeacherInfo from "./pages/Teacher-info";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>,
    },
    {
      path: '/',
      element: <StudentDashboard/>,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/student-dashboard',
      element: <StudentDashboard />,
    },
   {
  path: '/Teacher-info',
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
      path: '/dailytask',
      element: <DailyTask/>
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
