import { useState } from "react";
import { about, services } from "../data/portfolio";
import { ArrowRightIcon } from "./Icons";


const apiUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";
const initialForm = {
  name: "",
  email: "",
  projectType: services[0].title,
  message: "",
};


function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(`${apiUrl}/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to send inquiry");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section section-shell" id="contact">
      <div className="testimonial-panel">
        <span className="section-kicker">Kind Words</span>
        <blockquote>&ldquo;{about.quote}&rdquo;</blockquote>
        <p>&mdash; {about.quoteAuthor}, Portrait Session</p>
      </div>

      <div className="contact-panel">
        <div>
          <span className="section-kicker">Let&apos;s Work Together</span>
          <h2>Have a project in mind?</h2>
          <p>
            Send a note with the kind of session you are imagining. You will get
            a clear reply with availability, next steps, and planning guidance.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Project Type
            <select name="projectType" value={form.projectType} onChange={handleChange}>
              {services.map((service) => (
                <option value={service.title} key={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your vision, timeline, and any details..."
              rows="5"
              required
            />
          </label>
          <button className="button button-primary" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Send Inquiry"}
            <ArrowRightIcon />
          </button>
          <p className={`form-status ${status}`} aria-live="polite">
            {status === "success" && "Inquiry sent. I will follow up within 24-48 hours."}
            {status === "error" && "Something went wrong. Please email hello@izaksphotos.com."}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
