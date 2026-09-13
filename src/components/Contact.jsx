import { useState } from "react";
import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { STUDIO } from "../data/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

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

        <div className="apex-form">
          {!submitted ? (
            <div>
              <div className="apex-field">
                <label htmlFor="apex-name">Ім'я</label>
                <input id="apex-name" type="text" placeholder="Як до вас звертатись" />
              </div>
              <div className="apex-field">
                <label htmlFor="apex-phone">Телефон</label>
                <input id="apex-phone" type="tel" placeholder="+380" />
              </div>
              <div className="apex-field">
                <label htmlFor="apex-note">Коментар (за потреби)</label>
                <textarea id="apex-note" rows={3} placeholder="Марка, модель авто, побажання" />
              </div>
              <button type="button" className="apex-submit-btn" onClick={() => setSubmitted(true)}>
                Забронювати слот
              </button>
              <p className="apex-form-note">Передзвонимо протягом 30 хвилин у робочий час</p>
            </div>
          ) : (
            <div className="apex-form-success">
              <CheckCircle2 />
              <h3 style={{ textTransform: "none", fontSize: 19, letterSpacing: 0, marginBottom: 8 }}>
                Заявку надіслано
              </h3>
              <p style={{ color: "var(--muted)", fontSize: 14.5 }}>
                Ми зв'яжемось із вами найближчим часом.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
