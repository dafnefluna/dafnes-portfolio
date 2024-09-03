import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutMe from './assets/pages/Aboutme.jsx';
import ContactMe from './assets/pages/contactme.jsx';
import Project from './assets/components/project.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: '/contact',
        element: <ContactMe />
      },
      {
        path: '/projects',
        element: <Project />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
