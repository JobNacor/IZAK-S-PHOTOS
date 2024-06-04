import React from 'react';
import About_hero from "./components/About-hero";
import Feature from "./components/Feature"
import Services from './components/services'



const About = () => {
  
  return (
    <>
      <About_hero />
      <Feature />
      <Services/>
    </>
  );
};

export default React.memo(About);
