import React from 'react';
import About_hero from "../components/About-hero";
import Feature from "../components/Feature"
import Services from '../components/services'
import Gallery from '../components/Gallery';
import Pricelist from '../components/Pricelist';
import FAQ from '../components/FAQ';
import Footer from '../components/footer'
import Banner from '../components/Banner'

const About = () => {
  
  return (
    <>
      <About_hero />
      <Feature />
      <Services/>
      <Gallery></Gallery>
      <Pricelist></Pricelist>
      <FAQ></FAQ>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
};

export default React.memo(About);
