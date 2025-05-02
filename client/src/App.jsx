import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ✅ Corrected import path
import Login from './assets/components/Login';
import HomeWork from '../../server/components/homework';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/HomeWork',
    element: <HomeWork />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
