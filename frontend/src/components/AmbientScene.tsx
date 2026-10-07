import type { CSSProperties } from "react";

type SceneType = "office" | "architecture" | "workflow" | "analytics" | "contact";

interface AmbientSceneProps {
  type?: SceneType;
  className?: string;
}

const palette: Record<SceneType, { main: string; accent: string; soft: string }> = {
  office: { main: "#2d2238", accent: "#c4a7d8", soft: "#dfe9f4" },
  architecture: { main: "#18364f", accent: "#9fcac3", soft: "#eadfd5" },
  workflow: { main: "#33527f", accent: "#d0b9ef", soft: "#e5efe9" },
  analytics: { main: "#24445f", accent: "#9cc9c3", soft: "#e8d9ee" },
  contact: { main: "#30253a", accent: "#d2bd98", soft: "#e5e0f0" },
};

export default function AmbientScene({ type = "office", className = "" }: AmbientSceneProps) {
  const colors = palette[type];
  const style = {
    "--scene-main": colors.main,
    "--scene-accent": colors.accent,
    "--scene-soft": colors.soft,
  } as CSSProperties;

  return (
    <div className={"ambient-scene ambient-scene-" + type + " " + className} style={style} aria-hidden="true">
      <svg viewBox="0 0 760 520" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={"scene-bg-" + type} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={colors.main} />
            <stop offset="0.58" stopColor="#4f4866" />
            <stop offset="1" stopColor="#c9c0c7" />
          </linearGradient>
          <linearGradient id={"scene-floor-" + type} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".16" />
            <stop offset="1" stopColor="#ffffff" stopOpacity=".02" />
          </linearGradient>
          <filter id={"scene-shadow-" + type} x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#111827" floodOpacity=".22" />
          </filter>
        </defs>

        <rect width="760" height="520" rx="36" fill={"url(#scene-bg-" + type + ")"} />
        <path d="M0 372C186 334 350 356 510 320C618 296 688 280 760 252V520H0Z" fill={"url(#scene-floor-" + type + ")"} opacity=".92" />
        <path d="M68 58h184v174H68zM274 42h160v190H274zM456 64h236v168H456z" fill="#ffffff" opacity=".06" />
        <path d="M68 58h184v174M274 42h160v190M456 64h236v168" stroke="#fff" strokeOpacity=".16" />
        <path d="M102 98h122M102 126h122M102 154h122M306 82h95M306 112h95M306 142h95M306 172h95M500 102h150M500 133h150M500 164h150" stroke="#fff" strokeOpacity=".12" strokeWidth="8" strokeLinecap="round" />

        <g filter={"url(#scene-shadow-" + type + ")"}>
          <path d="M132 358h350l44 92H86l46-92Z" fill="#101827" fillOpacity=".7" />
          <path d="M165 342h298v18H165z" fill="#f7f4ef" fillOpacity=".88" />
          <rect x="202" y="243" width="190" height="99" rx="8" fill="#0b1422" fillOpacity=".82" />
          <rect x="214" y="254" width="166" height="76" rx="5" fill="#d6e6f2" fillOpacity=".14" />
          <path d="M229 276h132M229 292h108M229 308h91" stroke={colors.accent} strokeOpacity=".74" strokeWidth="5" strokeLinecap="round" />
          <path d="M124 460h410" stroke="#0d1725" strokeOpacity=".62" strokeWidth="12" strokeLinecap="round" />

          <circle cx="520" cy="304" r="31" fill="#ead8cc" />
          <path d="M489 303c1-33 23-50 54-47c30 3 43 27 31 47c-18-12-35-16-56-7c-8 5-19 7-29 7Z" fill="#251c2b" />
          <path d="M486 350c12-30 25-44 49-44s39 15 52 44l16 85H472l14-85Z" fill={colors.soft} />
          <path d="M534 395v40M567 394v41" stroke="#243142" strokeWidth="18" strokeLinecap="round" />
          <path d="M503 430h-28M589 430h27" stroke="#2a3442" strokeWidth="15" strokeLinecap="round" />

          <path d="M540 351h74" stroke={colors.accent} strokeWidth="8" strokeLinecap="round" />
          <circle cx="620" cy="351" r="12" fill={colors.accent} />
        </g>

        <g opacity=".88">
          <rect x="580" y="78" width="92" height="74" rx="18" fill="#fff" fillOpacity=".08" stroke="#fff" strokeOpacity=".16" />
          <path d="M604 121l18-18 12 12 19-24" stroke={colors.accent} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="604" cy="121" r="4" fill={colors.accent} />
          <circle cx="622" cy="103" r="4" fill={colors.accent} />
          <circle cx="634" cy="115" r="4" fill={colors.accent} />
          <circle cx="653" cy="91" r="4" fill={colors.accent} />
        </g>

        <g opacity=".72">
          <circle cx="102" cy="304" r="46" stroke={colors.accent} strokeOpacity=".42" />
          <circle cx="102" cy="304" r="27" stroke={colors.accent} strokeOpacity=".32" />
          <circle cx="102" cy="304" r="6" fill={colors.accent} />
        </g>
      </svg>
      <div className="ambient-scene-glow" />
      <div className="ambient-scene-label">ARCTURUS / WORK IN MOTION</div>
    </div>
  );
}
