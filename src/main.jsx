// Imports the built-in resources from the React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Imports bootstrap for added styling options.
import 'bootstrap/dist/css/bootstrap.min.css';

// Imports pages needed to properly route requests.
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import './index.css';

const router = createBrowserRouter([
 { 
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: 'about',
      element: <AboutPage />,
    },
    {
      path: 'contact',
      element: <ContactPage />,
    },
    {
      path: 'projects',
      element: <ProjectPage />,
    },
  ],
 },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
