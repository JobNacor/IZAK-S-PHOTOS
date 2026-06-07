import { useEffect, useState } from "react";
import { navItems } from "../data/portfolio";


const MenuIcon = ({ open }) => (
  <span className={`menu-icon ${open ? "is-open" : ""}`} aria-hidden="true">
    <span />
    <span />
  </span>
);


function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={handleNavClick}>
        <span className="brand-mark" aria-hidden="true" />
        Izak&apos;s Photos
      </a>

      <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          return (
            <a
              href={item.href}
              key={item.href}
              className={activeSection === sectionId ? "is-active" : ""}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <a className="header-cta" href="#contact">
        Book
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <MenuIcon open={menuOpen} />
      </button>
    </header>
  );
}

export default Navbar;
