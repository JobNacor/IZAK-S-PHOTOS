import "./Home.css"
import React from 'react';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"; 
import Containers from "./components/Containers"

function IndexPage() {
  return (
    <div>
      <Navbar /> {/* Incluye el componente Navbar */}
      {/* Otro contenido de la página */}
      <Hero />
    </div>
  );
}

export default IndexPage;


