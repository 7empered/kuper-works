import { ChevronLeft, ChevronRight } from "lucide-react";
import { COMPARISONS } from "../data/content";
import { useCompareCarousel } from "../hooks/useCompareCarousel";

export default function Compare() {
  const { current, idx, reveal, animated, goTo, handleSliderInput, handleSliderRelease } =
    useCompareCarousel(COMPARISONS);

  return (
    <section id="compare" className="apex-wrap apex-section">
      <div className="apex-compare-wrap">
        <div className="apex-compare-copy">
          <h2>Результат</h2>
          <p>
            Матове, вицвіле покриття — не «просто вік авто». Мікросколи розсіюють світло й забирають
            глибину кольору.
          </p>
          <p style={{ marginBottom: 0 }}>
            Перегортайте кілька прикладів: кожне з цих авто починало з того самого стану «до», що й ваше.
          </p>
        </div>

        <div className="apex-compare-stage">
          <div className="apex-compare-box">
            <div className="apex-layer apex-layer-before" />
            <div
              className="apex-layer apex-layer-after"
              style={{
                clipPath: `inset(0 ${100 - reveal}% 0 0)`,
                transition: animated ? "clip-path .55s cubic-bezier(.4,0,.2,1)" : "none",
              }}
            />
            <span className="apex-compare-label apex-label-before">До</span>
            <span className="apex-compare-label apex-label-after">Після</span>
            <div className="apex-compare-meta">
              <b>{current.model}</b> — {current.before}
            </div>
          </div>

          <div className="apex-compare-controls">
            <button className="apex-arrow-btn" aria-label="Попереднє порівняння" onClick={() => goTo(idx - 1)}>
              <ChevronLeft size={18} />
            </button>
            <div className="apex-compare-dots">
              {COMPARISONS.map((c, i) => (
                <button
                  key={c.model}
                  className={`apex-dot-btn ${i === idx ? "active" : ""}`}
                  aria-label={`Порівняння ${i + 1}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button className="apex-arrow-btn" aria-label="Наступне порівняння" onClick={() => goTo(idx + 1)}>
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="apex-compare-handle-row">
            <input
              type="range"
              min="0"
              max="100"
              value={reveal}
              className="apex-range"
              onInput={handleSliderInput}
              onChange={handleSliderInput}
              onMouseUp={handleSliderRelease}
              onTouchEnd={handleSliderRelease}
              onKeyUp={handleSliderRelease}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
