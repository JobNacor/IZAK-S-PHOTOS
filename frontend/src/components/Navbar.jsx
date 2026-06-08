import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/portfolio";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <NavLink className="brand" to="/" onClick={closeMenu} aria-label="Izak's Photos home">
        <span className="brand-mark" aria-hidden="true" />
        <span>Izak&apos;s Photos</span>
      </NavLink>

      <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            end={item.path === "/"}
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            onClick={closeMenu}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <NavLink className="header-cta" to="/booking" onClick={closeMenu}>
        Reserve
      </NavLink>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
      </button>
    </header>
  );
}

export default Navbar;
