import { Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "../data/portfolio";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true" />
          <span>Izak&apos;s Photos</span>
        </Link>
        <p>Photography built around light, timing, and story.</p>
      </div>

      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <Link to={item.path} key={item.path}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="footer-contact">
        <a href="mailto:hello@izaksphotos.com">
          <Mail size={16} strokeWidth={1.7} />
          hello@izaksphotos.com
        </a>
        <span>
          <MapPin size={16} strokeWidth={1.7} />
          Santo Domingo
        </span>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <Instagram size={16} strokeWidth={1.7} />
          Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
