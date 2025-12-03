import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Entities from './pages/Entities';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'entities',
        element: <Entities />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;