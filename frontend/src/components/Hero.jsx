import Camera1 from "../images/Camera1.png";
import "./Hero.css";


const HeroSection = () => {
  return (
    <section
      className="hero-section"
      id="home"
      style={{ "--hero-image": `url(${Camera1})` }}
    >
      <div className="hero-copy">
        <p className="eyebrow">Photography portfolio</p>
        <h1>Capturing honest moments with a refined visual edge.</h1>
        <p>
          Portrait, lifestyle, and creative photo sessions for people and brands
          that want images with atmosphere, clarity, and intention.
        </p>
        <a href="#portfolio" className="view btn btn-light">
          View Portfolio
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
