// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './home-page';
import Portfolio from './portfolio';
import NavigationBar from './components/Navbar';

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
};

export default App;
