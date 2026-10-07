interface Props { compact?: boolean; className?: string }

// Khushboo's portrait in a layered, animated brand frame.
export default function PortraitCard({ compact = false, className = "" }: Props) {
  return (
    <figure className={`arc-portrait ${compact ? "is-compact" : ""} ${className}`}>
      <div className="arc-portrait-ring" aria-hidden="true" />
      <div className="arc-portrait-frame">
        <div className="arc-portrait-glow" aria-hidden="true" />
        <img
          src="/images/khushboo-720.webp"
          srcSet="/images/khushboo-420.webp 420w, /images/khushboo-720.webp 720w"
          sizes="(max-width: 860px) 80vw, 420px"
          alt="Khushboo Tomar, independent solo B2B freelancer, Arcturus Professional Services"
          width="660"
          height="790"
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="arc-portrait-tag">
        <strong>Khushboo Tomar</strong>
        <span>Independent solo freelancer · New Delhi</span>
      </figcaption>
      <div className="arc-float arc-portrait-chip-a" aria-hidden="true"><b>12+</b><small>years in B2B</small></div>
      <div className="arc-float arc-portrait-chip-b" aria-hidden="true"><b>1</b><small>point of contact</small></div>
    </figure>
  );
}
