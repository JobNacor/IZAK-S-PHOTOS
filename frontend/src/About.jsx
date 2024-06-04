import React from 'react';
import About_hero from "./components/About-hero";
import Feature from "./components/Feature"



const About = () => {
  
  return (
    <>
      <About_hero />
      <Feature />
    </>
  );
};

export default React.memo(About);
