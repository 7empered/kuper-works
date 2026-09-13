import { STUDIO } from "../data/content";
import { useScrollToSection } from "../hooks/useScrollToSection";

export default function Footer() {
  const scrollToSection = useScrollToSection();

  return (
    <footer className="apex-wrap apex-footer">
      <div className="apex-footer-top">
        <a href="#hero" className="apex-logo" onClick={(e) => scrollToSection(e, "hero")}>
          <b>{STUDIO.name}</b>
          <span>{STUDIO.tagline}</span>
        </a>
        <div className="apex-footer-links">
          <a href="#services" onClick={(e) => scrollToSection(e, "services")}>Послуги</a>
          <a href="#process" onClick={(e) => scrollToSection(e, "process")}>Процес</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")}>Ціни</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Контакти</a>
        </div>
      </div>
      <div className="apex-footer-bottom">
        <span>© 2026 {STUDIO.name} {STUDIO.tagline}, Київ</span>
        <span>{STUDIO.addressShort} · {STUDIO.phoneDisplay}</span>
      </div>
    </footer>
  );
}
