interface Props { size?: number; light?: boolean; showText?: boolean; className?: string }

// Arcturus mark: the bright star (Arcturus) crowning an upward "A" peak. Pure SVG, no external image.
export default function BrandLogo({ size = 44, light = false, showText = true, className = "" }: Props) {
  return (
    <span className={`arc-logo ${light ? "is-light" : ""} ${className}`}>
      <svg className="arc-logo-mark" width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Arcturus Professional Services logo">
        <defs>
          <linearGradient id="arcLogoG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2f4f95" /><stop offset=".55" stopColor="#6a55c8" /><stop offset="1" stopColor="#1f8f8a" /></linearGradient>
          <linearGradient id="arcLogoS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".55" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="#0f2942" />
        <path d="M32 9 L53 53 C45 44.5 39 41.5 32 41.5 C25 41.5 19 44.5 11 53 Z" fill="url(#arcLogoG)" />
        <path d="M32 9 L42.5 31 C39 29.5 35.5 29 32 29 Z" fill="url(#arcLogoS)" />
        <g className="arc-logo-star"><circle cx="32" cy="9" r="3.2" fill="#fff" /><path d="M32 2.5v3.2M32 12.3v1.2M25.5 9h3.2M35.3 9h3.2" stroke="#c6c2f0" strokeWidth="1.4" strokeLinecap="round" /></g>
      </svg>
      {showText ? <span className="arc-logo-text"><strong>ARCTURUS</strong><small>Professional Services</small></span> : null}
    </span>
  );
}
