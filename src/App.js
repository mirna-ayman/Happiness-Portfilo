import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Pages/Home';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import EventsPage from './Pages/EventsPage';
import ServicesPage from './Pages/ServicesPage';
import { useEffect, useRef } from 'react';
import ProjectsDetalis from './Pages/Projects/ProjectsDetalis';
import ContactPage from './Pages/ContactPage';
import PortfolioPage from './Pages/PortfolioPage';

function App() {

  const scrollButtonRef = useRef('none');
  const scrollThreshold = 1000;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollThreshold) {
        scrollButtonRef.current.style.display = 'block';
      } else {
        scrollButtonRef.current.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, [scrollButtonRef]);

  const handleScrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/event' element={<EventsPage/>} />
          <Route path='/services' element={<ServicesPage/>} />
          <Route path='/portfolio' element={<PortfolioPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/projects-detalis/:id' element={<ProjectsDetalis/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
      <button className="go-up" ref={scrollButtonRef} onClick={handleScrollToTop}>
      <i className="fa fa-angle-double-up fa-2x"></i>
    </button>
    </>
    
  );
}

export default App;
