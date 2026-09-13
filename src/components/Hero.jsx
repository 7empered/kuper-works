import { useScrollToSection } from "../hooks/useScrollToSection";

export default function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section id="hero" className="apex-hero">
      <div className="apex-grid-lines" />
      <div className="apex-wrap apex-hero-grid">
        <div>
          <h1>
            ТВОЄ АВТО
            <br />
            ЗАРЯДЖЕНЕ.
            <br />
            <span className="accent">ТВІЙ ДОГЛЯД ТЕЖ МАЄ БУТИ.</span>
          </h1>

          <p className="apex-lede">
            Детейлінг-студія для будь-якого авто — від містечкового хетчбека до BMW M чи Porsche.
            Кераміка 9H, багатоетапна поліровка та PPF — без черг і без компромісів у якості.
          </p>

          <div className="apex-hero-actions">
            <a href="#contact" className="apex-btn-primary" onClick={(e) => scrollToSection(e, "contact")}>
              Забронювати слот
            </a>
            <a href="#pricing" className="apex-btn-ghost" onClick={(e) => scrollToSection(e, "pricing")}>
              Дивитись прайс
            </a>
          </div>

          <div className="apex-stats-row">
            <div className="apex-stat">
              <b>300+</b>
              <span>оброблених авто</span>
            </div>
            <div className="apex-stat">
              <b>9H</b>
              <span>кераміка motorsport-рівня</span>
            </div>
            <div className="apex-stat">
              <b>24 міс</b>
              <span>гарантія на покриття</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
