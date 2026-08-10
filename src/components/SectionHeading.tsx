import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  desc?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  desc,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      {eyebrow && (
        <Reveal delay={1} as="span" className="eyebrow">
          {eyebrow}
        </Reveal>
      )}
      <Reveal delay={2} as="h2" className="section-title">
        {title}
      </Reveal>
      {lead && (
        <Reveal delay={2} as="p" className="section-lead">
          {lead}
        </Reveal>
      )}
      {desc && (
        <Reveal delay={3} as="p" className="section-desc">
          {desc}
        </Reveal>
      )}
    </div>
  );
}
