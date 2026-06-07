import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function PhotoCarousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const slideCount = slides.length;
  const nextSlide = () => setActiveIndex((current) => (current + 1) % slideCount);
  const previousSlide = () =>
    setActiveIndex((current) => (current - 1 + slideCount) % slideCount);

  const formattedIndex = useMemo(
    () => `${String(activeIndex + 1).padStart(2, "0")} / ${String(slideCount).padStart(2, "0")}`,
    [activeIndex, slideCount],
  );

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true">
        <img src={activeSlide.image} alt="" />
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <h1 id="hero-title">{activeSlide.title}</h1>
          <p>{activeSlide.text}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <Link className="button button-primary" to="/projects">
              View Projects
              <ArrowRight size={18} strokeWidth={1.7} />
            </Link>
            <Link className="button button-secondary" to="/booking">
              Book a Session
            </Link>
          </div>
        </div>

        <div className="hero-panel" aria-label="Featured portfolio carousel">
          <img src={activeSlide.image} alt="" />
          <div className="hero-panel-meta">
            <span>{formattedIndex}</span>
            <Link to={`/projects?project=${activeSlide.projectId}`}>
              View Story
              <ArrowRight size={16} strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </div>

      <div className="carousel-controls" aria-label="Hero carousel controls">
        <button type="button" onClick={previousSlide} aria-label="Previous featured image">
          <ArrowLeft size={18} strokeWidth={1.7} />
        </button>
        <button type="button" onClick={nextSlide} aria-label="Next featured image">
          <ArrowRight size={18} strokeWidth={1.7} />
        </button>
      </div>
    </section>
  );
}

export default PhotoCarousel;
