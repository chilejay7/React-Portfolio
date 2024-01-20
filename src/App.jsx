// This is imported from the router-dom to render the nested child routes defined in main.jsx.
import { Outlet } from 'react-router-dom';

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App;
