/*import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './assets/components/home';
import AddWorkerPage from './assets/components/addworker';
import Navbar from './assets/components/navbar';
/*import Details from './assets/components/details';
import Dashboard from './assets/components/data';
import GetDetails from './assets/components/getdetails'
import Safety from './assets/components/safefy';
import Appointment from './assets/components/appointments';
import CalendarPage from './assets/components/calender';
import Emergency from './assets/components/emergency';
import Details from './assets/components/details';*/

import HomeWork from "./components/homework";
import Home from "./components/home";
import LoginPage from "./components/login";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {
  const router = createBrowserRouter([
   {
      path: '/HomeWork',
      element: (
        <>
          <HomeWork/>
        </>
      ),
    },
    {
      path: '/login',
      element: (
        <>
          <LoginPage/>
        </>
      ),
    },
    {
      path: '/',
      element: (
        <>
                  <Home/>
        </>
      ),
    }

/*{
      path: '/Dashboard',
      element: (
        <>
          <Navbar />
          <Dashboard/>
        </>
      ),
    }*/
  ])

  return (
    <>
      <div>
        <RouterProvider router={router}/>

      </div>
      
    </>
  )
}

export default App;