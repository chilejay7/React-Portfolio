// Imports the built-in resources from the React libraries
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Imports bootstrap for added styling options.
import 'bootstrap/dist/css/bootstrap.min.css';

// Imports pages needed to properly route requests.
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Portfolio from './pages/PortfolioPage.jsx';
import Resume from './pages/ResumePage.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    // This sets the root path and renders App.jsx.
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // The child routes defined below are rendered through the Outlet component in App.jsx.
    children: [
      {
        // // Index true sets this as the default route, and the /about route renders the AboutPage.
        index: true,
        element: <AboutPage />,
      },
      {
        // The /contact route renders the ContactPage.
        path: 'contact',
        element: <ContactPage />,
      },
      {
        // The /projects route renders the ProjectPage.
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        // The /resume route renders the ResumePage.
        path: 'resume',
        element: <Resume />,
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
