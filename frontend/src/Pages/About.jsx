import React from 'react';
import About_hero from "../components/About-hero";
import Feature from "../components/Feature"
import Services from '../components/services'
import Gallery from '../components/Gallery';
import Pricelist from '../components/Pricelist';
import FAQ from '../components/FAQ';
import Footer from '../components/footer'
import Banner from '../components/Banner'
import Slide from '../components/slide'

const About = () => {
  
  return (
    <>
      <About_hero />
      <Feature />
      <Services/>
      <Pricelist></Pricelist>
      <FAQ></FAQ>
      <Slide></Slide>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
};

export default React.memo(About);
