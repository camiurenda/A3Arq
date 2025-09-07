import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'wowjs/css/libs/animate.css';
import WOW from 'wowjs';
import './App.css';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Feature from './components/Feature';
import Project from './components/Project';
import Modules from './components/Modules';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
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
          <Route path="/" element={<Home />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/service.html" element={<Service />} />
          <Route path="/feature.html" element={<Feature />} />
          <Route path="/project.html" element={<Project />} />
          <Route path="/modules.html" element={<Modules />} />
          <Route path="/team.html" element={<Team />} />
          <Route path="/testimonial.html" element={<Testimonial />} />
          <Route path="/contact.html" element={<Contact />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
