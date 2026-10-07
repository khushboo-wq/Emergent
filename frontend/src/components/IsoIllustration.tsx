import type { CSSProperties } from "react";

const palette: Record<string, [string, string, string]> = {
  "linkedin-management": ["#5e7bdf", "#2f4f95", "#c6c2f0"],
  "email-outreach": ["#8b6fc9", "#6a55c8", "#e3dcf7"],
  "lead-generation": ["#4a9c91", "#1f8f8a", "#cfe9e4"],
  "business-support": ["#c89566", "#a8743f", "#f1e2d0"],
  "ai-video-creation": ["#9566d8", "#6a55c8", "#e6d9fa"],
  "email-setup": ["#3e86b4", "#14355e", "#d3e6f3"],
};

// A box in isometric projection: top, left and right faces.
function Box({ x, y, w, h, d, c, delay }: { x: number; y: number; w: number; h: number; d: number; c: [string, string, string]; delay: number }) {
  const top = `${x},${y} ${x + w},${y - w / 2} ${x + w + d},${y - w / 2 + d / 2} ${x + d},${y + d / 2}`;
  const left = `${x},${y} ${x + d},${y + d / 2} ${x + d},${y + d / 2 + h} ${x},${y + h}`;
  const right = `${x + d},${y + d / 2} ${x + w + d},${y - w / 2 + d / 2} ${x + w + d},${y - w / 2 + d / 2 + h} ${x + d},${y + d / 2 + h}`;
  return (
    <g className="iso-float" style={{ "--iso-delay": `${delay}s` } as CSSProperties}>
      <polygon points={left} fill={c[1]} />
      <polygon points={right} fill={c[0]} opacity="0.82" />
      <polygon points={top} fill={c[2]} />
    </g>
  );
}

export default function IsoIllustration({ slug, className = "" }: { slug: string; className?: string }) {
  const c = palette[slug] ?? palette["linkedin-management"];
  return (
    <div className={`iso-illustration ${className}`} aria-hidden="true">
      <svg viewBox="0 0 360 300" role="presentation">
        <defs>
          <linearGradient id={`iso-g-${slug}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={c[2]} stopOpacity="0.9" />
            <stop offset="1" stopColor={c[0]} stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <ellipse cx="180" cy="248" rx="150" ry="34" fill="#0f2942" opacity="0.12" className="iso-shadow" />
        <polygon points="30,200 180,126 330,200 180,274" fill={`url(#iso-g-${slug})`} stroke={c[1]} strokeOpacity="0.35" />
        <g className="iso-lines" stroke={c[1]} strokeOpacity="0.28" fill="none">
          <path d="M75,222 L225,148" /><path d="M120,244 L270,170" /><path d="M105,163 L255,237" /><path d="M150,140 L300,214" />
        </g>
        <Box x={92} y={190} w={70} h={34} d={52} c={c} delay={0} />
        <Box x={170} y={160} w={64} h={78} d={46} c={c} delay={0.6} />
        <Box x={226} y={196} w={44} h={26} d={34} c={c} delay={1.2} />
        <g className="iso-orbit">
          <circle cx="180" cy="86" r="22" fill={c[1]} /><circle cx="180" cy="86" r="9" fill={c[2]} />
          <circle cx="180" cy="86" r="44" fill="none" stroke={c[1]} strokeOpacity="0.35" strokeDasharray="3 7" />
        </g>
        <circle className="iso-spark" cx="70" cy="110" r="6" fill={c[0]} />
        <circle className="iso-spark s2" cx="300" cy="120" r="4" fill={c[1]} />
        <circle className="iso-spark s3" cx="285" cy="60" r="7" fill={c[2]} stroke={c[1]} strokeOpacity="0.4" />
      </svg>
    </div>
  );
}
