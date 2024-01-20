// This is imported from the router-dom to render the nested child routes defined in main.jsx.
import { Outlet } from 'react-router-dom';

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
    <Outlet />

    </>
  )
}

export default App;
