import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./pages/homepage";
import LoginPage from "./pages/login";
import StudentDashboard from "./pages/student-dashboard";
import TeacherDashboard from "./pages/teacher-dashboard";
import AdminDashboard from "./pages/admin-dashboard";

function App() {

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage/>,
    },
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/student-dashboard',
      element: <StudentDashboard/>,
    },
    { 
      path: '/teacher-dashboard',
      element: <TeacherDashboard/>,
    },
    {
      path: '/admin-dashboard',
      element: <AdminDashboard/>,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App;