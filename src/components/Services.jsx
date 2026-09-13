import { SERVICES } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="apex-wrap apex-section">
      <div className="apex-section-head">
        <h2>Сервіс без компромісів</h2>
        <p>Кожен етап виконується вручну, окремо, з увагою до деталей, які помітні лише власнику.</p>
      </div>

      <div className="apex-services-grid">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`apex-svc-card ${service.feature ? "apex-svc-feature" : "apex-svc-small"}`}
            >
              {service.feature && <span className="apex-tag">Флагманська послуга</span>}
              <Icon className="apex-icon" strokeWidth={1.6} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
