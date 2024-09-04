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
import Resume from './assets/pages/resume.jsx';
// import '/src/index.css';

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
      {
        path: '/resume',
        element: <Resume />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
