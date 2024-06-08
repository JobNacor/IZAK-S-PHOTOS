
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "../components/Hero";
import About from "../components/About"
import Slide from "../components/slide"
import Testimonials from "../components/Testimonials";
import Instagram from "../components/Instagram";
import Banner from "../components/Banner"
import Footer from "../components/footer";
import Services from "../components/services";



const App = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Slide></Slide>
      <Testimonials></Testimonials>
      <Instagram></Instagram>
      <Banner></Banner>
      <Footer></Footer>
      
    </div>
  );
};

export default App;
