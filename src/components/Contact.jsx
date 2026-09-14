import { MapPin, Phone, Clock } from "lucide-react";
import { STUDIO } from "../data/content";

export default function Contact({ onBook }) {
  return (
    <section id="contact" className="apex-wrap apex-section">
      <div className="apex-contact-wrap">
        <div className="apex-contact-info">
          <h2>Забронюйте слот</h2>
          <p className="apex-lead">
            Працюємо за попереднім записом, кількість слотів на тиждень обмежена. Діагностику ЛФП
            проводимо безкоштовно.
          </p>

          <div className="apex-info-row">
            <MapPin className="apex-ico" strokeWidth={1.6} />
            <div>
              <b>Адреса</b>
              <span>{STUDIO.address}</span>
            </div>
          </div>
          <div className="apex-info-row">
            <Phone className="apex-ico" strokeWidth={1.6} />
            <div>
              <b>Телефон</b>
              <span>{STUDIO.phoneDisplay}</span>
            </div>
          </div>
          <div className="apex-info-row">
            <Clock className="apex-ico" strokeWidth={1.6} />
            <div>
              <b>Графік роботи</b>
              <span>{STUDIO.hours}</span>
            </div>
          </div>
        </div>

        <div className="apex-contact-cta">
          <h3>Готові записатись?</h3>
          <p>Заповніть коротку форму — передзвонимо протягом 30 хвилин у робочий час і підберемо зручний слот.</p>
          <button type="button" className="apex-submit-btn" onClick={() => onBook()}>
            Забронювати слот
          </button>
        </div>
      </div>
    </section>
  );
}
