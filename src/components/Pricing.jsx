import { PRICING } from "../data/content";

export default function Pricing({ onBook }) {
  return (
    <section id="pricing" className="apex-wrap apex-section">
      <div className="apex-section-head">
        <h2>Ціни</h2>
        <p>Ціна залежить від марки, розміру та стану авто. Для позашляховиків і колекційних авто рахуємо індивідуально.</p>
      </div>

      <div className="apex-pricing-grid">
        {PRICING.map((tier) => (
          <div key={tier.tier} className={`apex-price-card ${tier.highlight ? "apex-highlight" : ""}`}>
            {tier.highlight && <span className="apex-highlight-badge">ПОПУЛЯРНИЙ</span>}
            <h3>{tier.tier}</h3>
            <div className="apex-price">
              {tier.price} {tier.priceNote && <small>{tier.priceNote}</small>}
            </div>
            <ul>
              {tier.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button
              type="button"
              className={tier.highlight ? "apex-btn-primary" : "apex-btn-outline"}
              style={{ textAlign: "center", width: "100%" }}
              onClick={() => onBook(`Цікавить тариф «${tier.tier}»`)}
            >
              Обрати
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
