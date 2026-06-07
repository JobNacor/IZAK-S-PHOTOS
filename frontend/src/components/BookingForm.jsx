import { CalendarCheck, Check, Mail, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { services } from "../data/portfolio";

const apiUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  projectType: services[0].title,
  date: "",
  location: "",
  referral: "Instagram",
  message: "",
};

function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const selectedService = useMemo(
    () => services.find((service) => service.title === form.projectType) || services[0],
    [form.projectType],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handlePackageSelect = (title) => {
    setForm((current) => ({ ...current, projectType: title }));
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
    } catch {
      setStatus("offline-success");
    }
  };

  const isConfirmed = status === "success" || status === "offline-success";

  return (
    <div className="booking-experience">
      <section className="package-column" aria-label="Session packages">
        <span className="section-label">Choose a Package</span>
        <div className="package-list">
          {services.map((service) => (
            <button
              className={service.title === form.projectType ? "is-selected" : ""}
              type="button"
              key={service.title}
              onClick={() => handlePackageSelect(service.title)}
            >
              <span>
                <strong>{service.title}</strong>
                <small>{service.duration}</small>
              </span>
              <em>{service.price}</em>
            </button>
          ))}
        </div>
        <div className="booking-note">
          <CalendarCheck size={18} strokeWidth={1.7} />
          <p>Sessions are usually available Tuesday through Saturday. A 30% retainer secures your date.</p>
        </div>
      </section>

      <form className="booking-form" onSubmit={handleSubmit}>
        <span className="section-label">Session Details</span>
        <label>
          Full Name
          <input name="name" value={form.name} onChange={handleChange} placeholder="Alex Morgan" required />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="alex@example.com"
            required
          />
        </label>
        <label>
          Phone
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" />
        </label>
        <label>
          Session Type
          <select name="projectType" value={form.projectType} onChange={handleChange}>
            {services.map((service) => (
              <option value={service.title} key={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          Preferred Date
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder="July 15, 2026 or flexible"
          />
        </label>
        <label>
          Location
          <input name="location" value={form.location} onChange={handleChange} placeholder="Santo Domingo" />
        </label>
        <label>
          How did you hear about me?
          <select name="referral" value={form.referral} onChange={handleChange}>
            <option>Instagram</option>
            <option>Referral</option>
            <option>Google</option>
            <option>Event</option>
          </select>
        </label>
        <label className="form-wide">
          Tell me about your session
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your vision, timeline, mood, people, and any references..."
            rows="5"
            required
          />
        </label>
        <button className="button button-primary form-wide" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Review & Confirm"}
        </button>
      </form>

      <aside className={`confirmation-panel ${isConfirmed ? "is-confirmed" : ""}`} aria-live="polite">
        <div className="confirmation-icon" aria-hidden="true">
          {isConfirmed ? <Check size={36} strokeWidth={1.6} /> : <CalendarCheck size={32} strokeWidth={1.6} />}
        </div>
        <span className="section-label">Confirmation Preview</span>
        <h2>{isConfirmed ? "You're all set." : "Ready when you are."}</h2>
        <p>
          {isConfirmed
            ? "Your booking request is saved for follow-up."
            : "Choose a package, share a few details, and I will reply with availability."}
        </p>
        <dl>
          <div>
            <dt>Session</dt>
            <dd>{selectedService.title}</dd>
          </div>
          <div>
            <dt>Starting At</dt>
            <dd>{selectedService.price}</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>{form.date || "Flexible"}</dd>
          </div>
        </dl>
        <div className="confirmation-contact">
          <span>
            <Mail size={15} strokeWidth={1.7} />
            {form.email || "hello@izaksphotos.com"}
          </span>
          <span>
            <MapPin size={15} strokeWidth={1.7} />
            {form.location || "Santo Domingo"}
          </span>
        </div>
        {status === "offline-success" && (
          <p className="form-status success">
            Local preview confirmed. Start the backend to send this to the API.
          </p>
        )}
      </aside>
    </div>
  );
}

export default BookingForm;
