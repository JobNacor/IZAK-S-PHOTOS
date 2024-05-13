import "./Home.css"
import React from 'react';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"; 
import About from "./components/About";
import Slide from "./components/slide"
import Testimonials from "./components/Testimonials"


function IndexPage() {
  return (
    <div>
      <Navbar /> {/* Incluye el componente Navbar */}
      {/* Otro contenido de la página */}
      <Hero />
      <About/>
      <Slide/>
      <Testimonials/>
    </div>
  );
}

export default IndexPage;


