interface ServiceMotifProps {
  slug: string;
}

function Nodes() {
  return <svg viewBox="0 0 320 220" fill="none"><path d="M34 164L103 94L171 132L272 49M103 94L211 41M171 132L261 181" /><circle cx="34" cy="164" r="9" /><circle cx="103" cy="94" r="12" /><circle cx="171" cy="132" r="8" /><circle cx="272" cy="49" r="11" /><circle cx="211" cy="41" r="6" /><circle cx="261" cy="181" r="9" /></svg>;
}

function Paths() {
  return <svg viewBox="0 0 320 220" fill="none"><path d="M27 49H118C145 49 145 87 172 87H293" /><path d="M27 111H80C111 111 111 167 142 167H293" /><path d="M27 181H69C94 181 103 128 133 128H293" /><circle cx="27" cy="49" r="6" /><circle cx="27" cy="111" r="6" /><circle cx="27" cy="181" r="6" /><circle cx="293" cy="87" r="6" /><circle cx="293" cy="128" r="6" /><circle cx="293" cy="167" r="6" /></svg>;
}

function Workflow() {
  return <div className="motif-workflow"><span /><span /><span /><span /></div>;
}

function DataGrid() {
  return <div className="motif-data-grid">{Array.from({ length: 30 }, (_, index) => <span key={index} className={index % 7 === 0 || index === 11 || index === 23 ? "is-active" : ""} />)}</div>;
}

function Frames() {
  return <div className="motif-frames"><span /><span /><span /><i /></div>;
}

function Layers() {
  return <div className="motif-layers"><span /><span /><span /><div className="motif-layer-nodes"><i /><i /><i /><i /></div></div>;
}

export default function ServiceMotif({ slug }: ServiceMotifProps) {
  const motif = slug === "linkedin-management" ? <Nodes /> : slug === "email-outreach" ? <Paths /> : slug === "business-support" ? <Workflow /> : slug === "lead-generation" ? <DataGrid /> : slug === "ai-video-creation" ? <Frames /> : <Layers />;
  return <div className={`service-motif service-motif-${slug}`} aria-hidden="true" data-testid={`service-motif-${slug}`}>{motif}</div>;
}
