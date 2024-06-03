import React from 'react';
import About_hero from "./components/About-hero";
import AboutMe2 from "./components/AboutMe2"



const About = () => {
  
  return (
    <>
      <About_hero />
      <AboutMe2 />
    </>
  );
};

export default React.memo(About);
