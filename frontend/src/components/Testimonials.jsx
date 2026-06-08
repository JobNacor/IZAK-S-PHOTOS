import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/portfolio";

function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="section-shell testimonial-shell">
        <div className="section-heading split-heading">
          <div>
            <span className="section-label">Client Stories</span>
            <h2>Calm direction, honest images, polished delivery.</h2>
          </div>
          <p>
            A photography experience should feel organized, warm, and creatively clear from the first call to the final gallery.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-rating" aria-label="Five star review">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill="currentColor" strokeWidth={1.5} />
                ))}
              </div>
              <Quote size={24} strokeWidth={1.5} />
              <blockquote>{testimonial.quote}</blockquote>
              <div className="testimonial-person">
                <img src={testimonial.image} alt="" />
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.project}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
