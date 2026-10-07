import type { CSSProperties } from "react";

type SceneType = "office" | "architecture" | "workflow" | "analytics" | "contact";

interface AmbientSceneProps {
  type?: SceneType;
  className?: string;
}

const palette: Record<SceneType, { main: string; panel: string; accent: string; soft: string }> = {
  office: { main: "#202b3b", panel: "#31445b", accent: "#b9a8d9", soft: "#e6ded4" },
  architecture: { main: "#19364e", panel: "#28536a", accent: "#9fcac3", soft: "#eadfd5" },
  workflow: { main: "#2d3650", panel: "#44567c", accent: "#c4b0df", soft: "#e3eee9" },
  analytics: { main: "#203e55", panel: "#2f6070", accent: "#9cc9c3", soft: "#ead9e7" },
  contact: { main: "#30253a", panel: "#4b3b50", accent: "#d2bd98", soft: "#e5e0f0" },
};

function OfficeScene({ c }: { c: (typeof palette)[SceneType] }) {
  return (
    <>
      <path d="M92 356h430l44 92H48l44-92Z" fill="#111a27" />
      <path d="M124 339h332v18H124z" fill="#f5f0e8" />
      <rect x="194" y="224" width="210" height="116" rx="8" fill="#0d1724" />
      <rect x="208" y="238" width="182" height="88" rx="5" fill={c.panel} />
      <path d="M226 264h145M226 282h116M226 300h94" stroke={c.accent} strokeWidth="5" strokeLinecap="round" opacity=".8" />
      <circle cx="520" cy="292" r="30" fill="#ead8cc" />
      <path d="M489 291c1-33 23-50 54-47c30 3 43 27 31 47c-18-12-35-16-56-7c-8 5-19 7-29 7Z" fill="#251c2b" />
      <path d="M486 338c12-30 25-44 49-44s39 15 52 44l16 96H472l14-96Z" fill={c.soft} />
      <path d="M534 391v43M567 390v44" stroke="#243142" strokeWidth="18" strokeLinecap="round" />
      <path d="M503 430h-28M589 430h27" stroke="#2a3442" strokeWidth="15" strokeLinecap="round" />
      <path d="M540 339h74" stroke={c.accent} strokeWidth="8" strokeLinecap="round" />
      <circle cx="620" cy="339" r="12" fill={c.accent} />
    </>
  );
}

function ArchitectureScene({ c }: { c: (typeof palette)[SceneType] }) {
  return (
    <>
      <path d="M76 438V174h138v264H76Zm178 0V108h142v330H254Zm182 0V160h176v278H436Z" fill={c.panel} />
      <path d="M92 438V208c0-47 35-78 53-78s53 31 53 78v230" fill={c.main} stroke={c.accent} strokeWidth="3" />
      <path d="M270 438V150c0-45 34-72 71-72s71 27 71 72v288" fill={c.main} stroke="#d8d2c8" strokeOpacity=".55" strokeWidth="3" />
      <path d="M456 438V205c0-42 42-70 80-70s58 28 58 70v233" fill={c.main} stroke={c.accent} strokeOpacity=".72" strokeWidth="3" />
      <path d="M52 438h630" stroke="#f5f0e8" strokeOpacity=".75" strokeWidth="8" />
      <path d="M116 350h92M294 330h98M492 356h110" stroke={c.accent} strokeWidth="8" strokeLinecap="round" opacity=".7" />
      <circle cx="650" cy="94" r="34" fill={c.soft} opacity=".9" />
    </>
  );
}

function WorkflowScene({ c }: { c: (typeof palette)[SceneType] }) {
  const boxes = [
    { x: 56, y: 292, label: "BRIEF" },
    { x: 204, y: 218, label: "PLAN" },
    { x: 352, y: 292, label: "WORK" },
    { x: 500, y: 218, label: "REVIEW" },
    { x: 608, y: 350, label: "DELIVER" },
  ];
  return (
    <>
      <path d="M42 424h674" stroke="#f4efe7" strokeOpacity=".45" strokeWidth="6" />
      {boxes.map((b, i) => (
        <g key={b.label}>
          <rect x={b.x} y={b.y} width={i === 4 ? 112 : 124} height="72" rx="14" fill={i % 2 ? c.panel : c.main} stroke={c.accent} strokeOpacity=".62" />
          <text x={b.x + 16} y={b.y + 43} fill="#f8f5ee" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="700">{b.label}</text>
          {i < boxes.length - 1 ? <path d={`M${b.x + (i === 4 ? 112 : 124)} ${b.y + 36}L${boxes[i + 1].x} ${boxes[i + 1].y + 36}`} stroke={c.accent} strokeWidth="3" strokeDasharray="7 8" /> : null}
        </g>
      ))}
    </>
  );
}

function AnalyticsScene({ c }: { c: (typeof palette)[SceneType] }) {
  return (
    <>
      <rect x="72" y="82" width="260" height="150" rx="18" fill={c.panel} stroke={c.accent} strokeOpacity=".45" />
      <rect x="360" y="82" width="328" height="150" rx="18" fill={c.main} stroke={c.accent} strokeOpacity=".45" />
      <path d="M102 196l54-52 48 28 76-72" stroke={c.accent} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="156" cy="144" r="8" fill={c.accent} /><circle cx="204" cy="172" r="8" fill={c.accent} /><circle cx="280" cy="100" r="8" fill={c.accent} />
      {Array.from({ length: 12 }, (_, i) => <rect key={i} x={382 + i * 24} y={190 - (i % 5) * 19} width="12" height={20 + (i % 5) * 19} rx="4" fill={i % 3 === 0 ? c.accent : "#d8d2c8"} opacity={i % 3 === 0 ? ".85" : ".35"} />)}
      <rect x="118" y="286" width="500" height="108" rx="20" fill={c.soft} />
      <path d="M150 350h128M318 350h72M424 350h150" stroke="#243142" strokeOpacity=".42" strokeWidth="10" strokeLinecap="round" />
    </>
  );
}

function ContactScene({ c }: { c: (typeof palette)[SceneType] }) {
  return (
    <>
      <rect x="72" y="94" width="430" height="286" rx="24" fill={c.panel} stroke={c.accent} strokeOpacity=".5" />
      <rect x="98" y="122" width="378" height="210" rx="14" fill="#101a28" />
      <path d="M126 158h180M126 186h272M126 214h230" stroke={c.accent} strokeWidth="7" strokeLinecap="round" opacity=".8" />
      <rect x="126" y="250" width="122" height="44" rx="12" fill={c.soft} />
      <rect x="266" y="250" width="132" height="44" rx="12" fill={c.accent} opacity=".72" />
      <path d="M530 158h154v214H530z" fill={c.main} stroke="#f5f0e8" strokeOpacity=".55" />
      <path d="M552 198h110M552 226h88M552 254h98" stroke="#f5f0e8" strokeOpacity=".65" strokeWidth="8" strokeLinecap="round" />
      <circle cx="594" cy="316" r="24" fill={c.accent} />
    </>
  );
}

export default function AmbientScene({ type = "office", className = "" }: AmbientSceneProps) {
  const colors = palette[type];
  const style = {
    "--scene-main": colors.main,
    "--scene-panel": colors.panel,
    "--scene-accent": colors.accent,
    "--scene-soft": colors.soft,
  } as CSSProperties;

  return (
    <div className={"ambient-scene ambient-scene-" + type + " " + className} style={style} aria-hidden="true">
      <svg viewBox="0 0 760 520" fill="none" preserveAspectRatio="xMidYMid slice">
        <rect width="760" height="520" rx="36" fill={colors.main} />
        <path d="M0 392h760v128H0z" fill="#111a27" opacity=".72" />
        <path d="M0 392h760" stroke="#f5f0e8" strokeOpacity=".16" strokeWidth="2" />
        <path d="M58 58h184v174H58zM270 42h166v190H270zM456 64h246v168H456z" fill={colors.panel} opacity=".72" />
        <path d="M58 58h184v174M270 42h166v190M456 64h246v168" stroke="#f8f5ee" strokeOpacity=".12" />
        <g>
          {type === "office" ? <OfficeScene c={colors} /> : null}
          {type === "architecture" ? <ArchitectureScene c={colors} /> : null}
          {type === "workflow" ? <WorkflowScene c={colors} /> : null}
          {type === "analytics" ? <AnalyticsScene c={colors} /> : null}
          {type === "contact" ? <ContactScene c={colors} /> : null}
        </g>
      </svg>
      <div className="ambient-scene-glow" />
      <div className="ambient-scene-label">ARCTURUS / WORK IN MOTION</div>
    </div>
  );
}
