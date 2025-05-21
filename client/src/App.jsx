import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import LoginPage from "./pages/login";
import StudentDashboard from "./pages/student-dashboard";
import TeacherDashboard from "./pages/teacher-dashboard";
import AdminDashboard from "./pages/admin-dashboard";
import AttadancePage from "./pages/AttadancePage";
import SubjectPage from "./pages/SubjectPage";
import TeacherInfo from "./pages/Teacher-info";
import ChatUI from './pages/Chat';
import PaymentInfo from './pages/paymentmethod';


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
      path: '/chat',
      element: <ChatUI />,
    },
    {
      path: '/payment-info',
      element: <PaymentInfo />,
    },
    {
      path: '/dailytask',
      element: <DailyTask/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;