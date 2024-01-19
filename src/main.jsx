// Imports the built-in resources from the React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Imports bootstrap for added styling options.
import 'bootstrap/dist/css/bootstrap.min.css';

// Imports pages needed to properly route requests.
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
