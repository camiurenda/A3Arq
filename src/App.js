import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'wowjs/css/libs/animate.css';
import WOW from 'wowjs';
import './App.css';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Facts from './components/Facts';
import About from './components/About';
import Service from './components/Service';
import Feature from './components/Feature';
import Project from './components/Project';
import Modules from './components/Modules';
import Team from './components/Team';
import Appointment from './components/Appointment';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  return (
    <Router>
      <div>
        <Spinner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/service.html" element={<Service />} />
          <Route path="/feature.html" element={<Feature />} />
          <Route path="/project.html" element={<Project />} />
          <Route path="/modules.html" element={<Modules />} />
          <Route path="/team.html" element={<Team />} />
          <Route path="/appointment.html" element={<Appointment />} />
          <Route path="/testimonial.html" element={<Testimonial />} />
          {/* Add other routes as needed */}
        </Routes>
        <Facts /> {/* Facts is present on the home page, but also a general component */}
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
