const ITEMS = [
  { text: "BMW M", highlight: true },
  { text: "MERCEDES-AMG", highlight: true },
  { text: "AUDI RS", highlight: true },
  { text: "PORSCHE", highlight: true },
  { text: "КЕРАМІКА 9H" },
  { text: "PPF ЗАХИСТ" },
  { text: "ПОВНА ДЕТЕЙЛІНГ-ПІДГОТОВКА" },
];

function MarqueeSet() {
  return (
    <div className="apex-marquee-set">
      {ITEMS.map((item) => (
        <span key={item.text} className={item.highlight ? "hi" : undefined}>
          {item.text}
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="apex-marquee-band">
      <div className="apex-wrap" style={{ overflow: "hidden" }}>
        <div className="apex-marquee-track">
          <MarqueeSet />
          <MarqueeSet />
        </div>
      </div>
    </div>
  );
}
