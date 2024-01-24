// This is imported from the router-dom to render the nested child routes defined in main.jsx.
import { Outlet } from 'react-router-dom';

import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import HeaderSidebar from './components/HeaderSidebar';

function App() {
  return (
    <>
      {/* <Header /> */}

      <main className='main'>
        <HeaderSidebar />

        <section className='content-section'>
          <Outlet />
          <Footer />

        </section>
      </main>

      

    </>
  )
}

export default App;
