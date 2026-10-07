import IsoIllustration from "@/components/IsoIllustration";

interface Props {
  kicker: string;
  title: string;
  subtitle: string;
  slug?: string;
  chips: string[];
  index?: string;
  note?: string;
}

// Premium hero visual: full name/title (no lone letters), a 3D isometric scene and fact chips.
export default function HeroShowcase({ kicker, title, subtitle, slug = "linkedin-management", chips, index, note }: Props) {
  return (
    <div className="arc-showcase" data-slug={slug}>
      <div className="arc-showcase-card">
        <div className="arc-showcase-top">
          <span>{kicker}</span>
          {index ? <span>{index}</span> : null}
        </div>
        <p className="arc-showcase-title">{title}</p>
        <p className="arc-showcase-sub">{subtitle}</p>
        <IsoIllustration slug={slug} className="arc-showcase-iso" />
        <div className="arc-showcase-chips">
          {chips.map((chip) => <span key={chip}>{chip}</span>)}
        </div>
      </div>
      <div className="arc-float arc-float-a" aria-hidden="true"><b>100%</b><small>advance payment</small></div>
      <div className="arc-float arc-float-b" aria-hidden="true"><b>1</b><small>point of contact</small></div>
      {note ? <p className="arc-showcase-note">{note}</p> : null}
    </div>
  );
}
