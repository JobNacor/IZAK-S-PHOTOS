import { services } from "../data/portfolio";
import { ArrowRightIcon } from "./Icons";


function Services() {
  return (
    <section className="services-section section-shell" id="services">
      <div className="section-heading split-heading">
        <div>
          <span className="section-kicker">Services</span>
          <h2>Photography tailored to your vision.</h2>
        </div>
        <p>
          From quiet portraits to campaign assets and private celebrations, each
          service is crafted with care, clarity, and intention.
        </p>
      </div>

      <div className="service-list">
        {services.map((service) => (
          <article className="service-row" key={service.title}>
            <img src={service.image} alt="" />
            <span>{service.number}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </div>
            <ul>
              {service.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <a href="#contact" aria-label={`Book ${service.title}`}>
              Learn more
              <ArrowRightIcon />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
