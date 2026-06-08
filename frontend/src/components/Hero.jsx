import { about, works } from "../data/portfolio";
import { ArrowDownIcon, ArrowRightIcon } from "./Icons";


const heroWork = works.find((work) => work.id === "studio-language");


function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-copy">
          <h1 id="hero-title">Portraits with presence. Stories with light.</h1>
          <p>
            Refined portrait, editorial, and event photography for people and
            brands that want images with atmosphere, clarity, and intention.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a href="#portfolio" className="button button-primary">
              View Portfolio
              <ArrowRightIcon />
            </a>
            <a href="#contact" className="button button-secondary">
              Book a Session
            </a>
          </div>
        </div>

        <div className="hero-media" aria-label="Featured portrait">
          <img src={heroWork.image} alt={heroWork.title} />
          <div className="hero-caption">
            <span>{heroWork.category}</span>
            <strong>{heroWork.title}</strong>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#portfolio" aria-label="Scroll to portfolio">
        Selected Work
        <ArrowDownIcon />
      </a>

      <p className="hero-note">{about.intro}</p>
    </section>
  );
}

export default Hero;
