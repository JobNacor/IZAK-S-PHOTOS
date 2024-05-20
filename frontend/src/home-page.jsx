import "./assets/styles/App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Slide from "./components/slide"
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Banner from "./components/Banner"
import Footer from "./components/footer";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Slide></Slide>
      <Testimonials></Testimonials>
      <Gallery></Gallery>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default App;
