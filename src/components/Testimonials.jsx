import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, TESTIMONIALS_LOOP, TESTI_CLONE_COUNT } from "../data/content";
import { useTestimonialsCarousel } from "../hooks/useTestimonialsCarousel";

export default function Testimonials() {
  const {
    testiIndex,
    testiAnimate,
    testiVisible,
    trackRef,
    scrollTesti,
    handleTouchStart,
    handleTouchEnd,
    handleTransitionEnd,
  } = useTestimonialsCarousel(TESTIMONIALS.length, TESTI_CLONE_COUNT);

  return (
    <section id="testimonials" className="apex-wrap apex-section">
      <div className="apex-section-head">
        <h2>Що кажуть власники</h2>
      </div>

      <div className="apex-testi-viewport">
        <div
          className="apex-testi-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${testiIndex * (100 / testiVisible)}%)`,
            transition: testiAnimate ? "transform .5s cubic-bezier(.4,0,.2,1)" : "none",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTransitionEnd={handleTransitionEnd}
        >
          {TESTIMONIALS_LOOP.map((t, i) => (
            <div key={i} className="apex-testi-slide">
              <div className="apex-testi-card">
                <p className="apex-quote">{t.quote}</p>
                <div className="apex-testi-person">
                  <div className="apex-avatar">{t.initials}</div>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.car}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="apex-testi-controls">
        <button className="apex-arrow-btn" aria-label="Попередні відгуки" onClick={() => scrollTesti(-1)}>
          <ChevronLeft size={18} />
        </button>
        <button className="apex-arrow-btn" aria-label="Наступні відгуки" onClick={() => scrollTesti(1)}>
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
