import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Packages from './pages/Packages/Packages';
import Contact from './pages/Contact/Contact';
import Booking from './pages/Booking/Booking';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;