import { PROCESS } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="apex-wrap apex-section">
      <div className="apex-section-head">
        <h2>Як проходить підготовка</h2>
        <p>Однакова послідовність для будь-якого авто — від міського хетчбека до колекційного Porsche.</p>
      </div>

      <div>
        {PROCESS.map((step) => (
          <div className="apex-process-item" key={step.num}>
            <div className="apex-num">{step.num}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
