// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './home-page';
import Portfolio from './portfolio';
import NavigationBar from './components/Navbar';
import Contact from './Contact'
import About from './About';


const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
