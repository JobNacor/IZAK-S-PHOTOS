import { Aperture, ArrowRight, MapPin, ScanEye } from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import { about, processSteps, studioStats } from "../data/portfolio";

function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="about-hero-image">
          <img src={about.image} alt="Izak holding a camera in the studio" />
        </div>
        <div className="page-hero-copy">
          <span className="section-label">About Izak</span>
          <h1>Photography that reveals the truth in a glance, a gesture, a place.</h1>
          <p>{about.body}</p>
        </div>
      </section>

      <section className="section-shell about-story">
        <div className="about-story-copy">
          <span className="section-label">The Studio</span>
          <h2>Quiet direction. Precise light. Images with room to breathe.</h2>
          <p>{about.intro}</p>
          <p>{about.location}</p>
          <Link className="text-link" to="/booking">
            Work Together
            <ArrowRight size={16} strokeWidth={1.7} />
          </Link>
        </div>

        <div className="principle-list">
          <article>
            <Aperture size={24} strokeWidth={1.6} />
            <h3>The Process</h3>
            <p>Direction stays calm and specific so you never have to guess what to do in front of the camera.</p>
          </article>
          <article>
            <MapPin size={24} strokeWidth={1.6} />
            <h3>The Location</h3>
            <p>Light, background, movement, and wardrobe are planned around the story the images need to tell.</p>
          </article>
          <article>
            <ScanEye size={24} strokeWidth={1.6} />
            <h3>The Edit</h3>
            <p>Final galleries are refined for tone, color, pacing, and practical use across print and digital.</p>
          </article>
        </div>
      </section>

      <section className="section-shell stats-story" aria-label="Studio statistics">
        {studioStats.map((stat) => (
          <article key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="process-band">
        <div className="section-shell process-shell">
          <div>
            <span className="section-label">Working Style</span>
            <h2>A simple path for polished, intentional work.</h2>
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
    </>
  );
}

export default AboutPage;
