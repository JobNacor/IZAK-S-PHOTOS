import { ArrowRight, Camera, Clock, Images, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PhotoCarousel from "../components/PhotoCarousel";
import ProjectGallery from "../components/ProjectGallery";
import Testimonials from "../components/Testimonials";
import { heroSlides, processSteps, projects, services, studioStats } from "../data/portfolio";

function HomePage() {
  const featuredProject = projects[0];

  return (
    <>
      <PhotoCarousel slides={heroSlides} />

      <section className="section-shell intro-band" aria-label="Studio overview">
        <div className="intro-copy">
          <span className="section-label">Photography Studio</span>
          <h2>Elegant visuals for portraits, brands, and events that deserve atmosphere.</h2>
        </div>
        <div className="intro-stats" aria-label="Studio highlights">
          {studioStats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell selected-work-section">
        <div className="section-heading split-heading">
          <div>
            <span className="section-label">Selected Projects</span>
            <h2>Stories shaped with direction, light, and restraint.</h2>
          </div>
          <p>
            Move through editorial portraits, brand stories, and documentary event work. The gallery responds to category filters and selected projects.
          </p>
        </div>
        <ProjectGallery compact />
      </section>

      <section className="feature-band">
        <div className="feature-band-image">
          <img src={featuredProject.cover} alt={featuredProject.title} />
        </div>
        <div className="feature-band-copy">
          <span className="section-label">Featured Story</span>
          <h2>{featuredProject.title}</h2>
          <p>{featuredProject.description}</p>
          <Link className="text-link" to={`/projects?project=${featuredProject.id}`}>
            Open the Gallery
            <ArrowRight size={16} strokeWidth={1.7} />
          </Link>
        </div>
      </section>

      <section className="section-shell services-preview">
        <div className="section-heading split-heading">
          <div>
            <span className="section-label">Services</span>
            <h2>Built for the way your images need to work.</h2>
          </div>
          <p>
            Every session begins with a focused plan, a calm production day, and a polished delivery path.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => {
            const icons = [Camera, Sparkles, Clock];
            const Icon = icons[index] || Images;

            return (
              <article className="service-card" key={service.title}>
                <div className="service-image">
                  <img src={service.image} alt="" />
                </div>
                <div>
                  <span>
                    <Icon size={18} strokeWidth={1.7} />
                    {service.number}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <strong>{service.price}</strong>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="process-band">
        <div className="section-shell process-shell">
          <div>
            <span className="section-label">Process</span>
            <h2>Clear from first idea to final gallery.</h2>
          </div>
          <div className="process-row">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="cta-band">
        <div>
          <span className="section-label">Reserve a Session</span>
          <h2>Ready to build the next gallery?</h2>
          <p>Share the shape of your project and receive availability, guidance, and a clear next step.</p>
        </div>
        <Link className="button button-primary" to="/booking">
          Start Booking
          <ArrowRight size={18} strokeWidth={1.7} />
        </Link>
      </section>
    </>
  );
}

export default HomePage;
