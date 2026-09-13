import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, STUDIO } from "../data/content";
import { useScrollToSection } from "../hooks/useScrollToSection";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection(() => setMenuOpen(false));

  return (
    <>
      <header className="apex-header">
        <nav className="apex-nav">
          <a href="#hero" className="apex-logo" onClick={(e) => scrollToSection(e, "hero")}>
            <b>{STUDIO.name}</b>
            <span>{STUDIO.tagline}</span>
          </a>

          <div className="apex-nav-links">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => scrollToSection(e, item.href.slice(1))}>
                {item.label}
              </a>
            ))}
          </div>

          <a href={STUDIO.phoneHref} className="apex-phone-link">
            <Phone size={15} />
            <span>{STUDIO.phoneDisplay}</span>
          </a>

          <a href="#contact" className="apex-nav-cta" onClick={(e) => scrollToSection(e, "contact")}>
            Забронювати слот
          </a>

          <button className="apex-burger" aria-label="Меню" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="apex-mobile-menu">
            <a href={STUDIO.phoneHref} className="apex-mobile-phone">
              <Phone size={16} />
              <span>{STUDIO.phoneDisplay}</span>
            </a>
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => scrollToSection(e, item.href.slice(1))}>
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="apex-btn-primary apex-mobile-cta"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Забронювати слот
            </a>
          </div>
        )}
      </header>
      <div className="apex-header-spacer" />
    </>
  );
}
