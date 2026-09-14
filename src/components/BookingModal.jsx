import { useEffect, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

export default function BookingModal({ open, initialNote, onClose }) {
  const [note, setNote] = useState(initialNote || "");
  const [submitted, setSubmitted] = useState(false);

  // Sync the comment field to whatever prompted the modal (e.g. a chosen
  // pricing tier) every time it opens, and reset the success state.
  useEffect(() => {
    if (open) {
      setNote(initialNote || "");
      setSubmitted(false);
    }
  }, [open, initialNote]);

  // Lock page scroll while the modal is open, close on Escape.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="apex-modal-overlay" onClick={onClose}>
      <div className="apex-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="apex-modal-close" aria-label="Закрити" onClick={onClose}>
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <h3 className="apex-modal-title">Забронювати слот</h3>
            <p className="apex-modal-sub">Залиш контакти — передзвонимо протягом 30 хвилин у робочий час.</p>

            <div className="apex-field">
              <label htmlFor="modal-name">Ім'я</label>
              <input id="modal-name" type="text" placeholder="Як до вас звертатись" />
            </div>
            <div className="apex-field">
              <label htmlFor="modal-phone">Телефон</label>
              <input id="modal-phone" type="tel" placeholder="+380" />
            </div>
            <div className="apex-field">
              <label htmlFor="modal-note">Коментар (за потреби)</label>
              <textarea
                id="modal-note"
                rows={3}
                placeholder="Марка, модель авто, побажання"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            <button type="button" className="apex-submit-btn" onClick={() => setSubmitted(true)}>
              Забронювати слот
            </button>
          </>
        ) : (
          <div className="apex-form-success">
            <CheckCircle2 />
            <h3 style={{ textTransform: "none", fontSize: 19, letterSpacing: 0, marginBottom: 8 }}>
              Заявку надіслано
            </h3>
            <p style={{ color: "var(--muted)", fontSize: 14.5 }}>Ми зв'яжемось із вами найближчим часом.</p>
          </div>
        )}
      </div>
    </div>
  );
}
