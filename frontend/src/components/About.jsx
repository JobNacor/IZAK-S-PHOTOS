import { about, processSteps } from "../data/portfolio";


function About() {
  return (
    <section className="about-section section-shell" id="about">
      <div className="about-intro">
        <div>
          <span className="section-kicker">About</span>
          <h2>Hello, I&apos;m Izak.</h2>
          <p className="lead">{about.intro}</p>
          <p>{about.body}</p>
        </div>
        <figure className="about-image">
          <img src={about.image} alt="Izak holding a camera in the studio" />
        </figure>
      </div>

      <div className="principles" aria-label="Photography principles">
        <article>
          <span aria-hidden="true">01</span>
          <h3>Natural Light</h3>
          <p>Available light and subtle shaping create timeless, authentic imagery.</p>
        </article>
        <article>
          <span aria-hidden="true">02</span>
          <h3>Real Connection</h3>
          <p>Direction is calm and specific, so the subject never feels abandoned.</p>
        </article>
        <article>
          <span aria-hidden="true">03</span>
          <h3>Thoughtful Process</h3>
          <p>From planning to delivery, every step is intentional and streamlined.</p>
        </article>
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
    </section>
  );
}

export default About;
