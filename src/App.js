import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Qualification from './components/qualifications';
import Card from './components/card';
import Testimonial from './components/testimonial';
import Appointment from './components/appointment';
import InfoComponent from './components/information';
import Contact from './components/contact';
import Copyright from './components/copyright';
import Loading from './components/loading';
import PageNotFound from './components/pagenotfound'; // Import the PageNotFound component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic an async operation like data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename="/Portfolio-Website-Template">
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <MainContent />
        )}
      </div>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const isNotFound = !["/", "/about", "/qualification", "/services", "/review", "/appointment", "/information", "/contact"].includes(location.pathname);

  return (
    <>
      {!isNotFound && (
        <header className='header'>
          <Navbar />
        </header>
      )}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <div id="hero">
                <Hero />
              </div>
              <section id="about">
                <About />
              </section>
              <section id="qualification">
                <Qualification />
              </section>
              <section id="services">
                <Card />
              </section>
              <section id="review">
                <Testimonial />
              </section>
              <section id="appointment">
                <Appointment />
              </section>
              <section id="information">
                <InfoComponent />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          } />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      {!isNotFound && (
        <footer>
          <Copyright />
        </footer>
      )}
    </>
  );
}

export default App;
