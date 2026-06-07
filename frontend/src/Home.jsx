import "./Home.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Containers from "./components/Containers";


function IndexPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Containers />
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <p className="eyebrow">Bookings</p>
          <h2>Ready for a clean, memorable photo session?</h2>
          <a href="mailto:hello@example.com" className="contact-link">
            hello@example.com
          </a>
        </div>
      </section>
    </>
  );
}

export default IndexPage;
