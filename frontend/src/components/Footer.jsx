import { navItems } from "../data/portfolio";


function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href="#home">
          <span className="brand-mark" aria-hidden="true" />
          Izak&apos;s Photos
        </a>
        <p>Photography built around light, timing, and story.</p>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="footer-contact">
        <a href="mailto:hello@izaksphotos.com">hello@izaksphotos.com</a>
        <span>Based in Santo Domingo</span>
      </div>
    </footer>
  );
}

export default Footer;
