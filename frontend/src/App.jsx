// src/App.jsx
import './assets/styles/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home-page';
import Portfolio from './Pages/portfolio';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Weddings from './components/Weddings';
import WeddingPhotography from './Pages/WeddingPhotography';
import WeddingVideography from './Pages/WeddingVideography';
import TravelLifestyle from './Pages/TravelLifestyle';
import NavigationBar from './components/Navbar';

const App = () => (
  <div>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/weddings" element={<Weddings />} />
      <Route path="/wedding-photography" element={<WeddingPhotography />} />
      <Route path="/wedding-videography" element={<WeddingVideography />} />
      <Route path="/travel-lifestyle" element={<TravelLifestyle />} />
    </Routes>
  </div>
);

export default App;
