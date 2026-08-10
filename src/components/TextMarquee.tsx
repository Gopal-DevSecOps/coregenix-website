const items = [
  "Network Security",
  "Endpoint Protection",
  "Threat Intelligence",
  "Penetration Testing",
  "Security Audits",
  "Incident Response",
];

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="tm-track" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span className="tm-item" key={`${item}-${i}`}>
          {item}
          <span className="tm-dot" aria-hidden="true">
            *
          </span>
        </span>
      ))}
    </div>
  );
}

export default function TextMarquee() {
  return (
    <section className="text-marquee" aria-label="Our services">
      <div className="tm-viewport">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
