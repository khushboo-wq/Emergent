import IsoIllustration from "@/components/IsoIllustration";

interface Props {
  kicker: string;
  title: string;
  /** Kept for compatibility; not shown so the card never repeats page text. */
  subtitle?: string;
  slug?: string;
  /** Kept for compatibility; not shown so the card never repeats page text. */
  chips?: string[];
  index?: string;
  note?: string;
}

// Hero visual: a short label and a 3D isometric scene. Facts live in the page copy only, never repeated here.
export default function HeroShowcase({ kicker, title, slug = "linkedin-management" }: Props) {
  return (
    <div className="arc-showcase" data-slug={slug} aria-hidden="true">
      <div className="arc-showcase-card">
        <div className="arc-showcase-top">
          <span>{kicker}</span>
        </div>
        <p className="arc-showcase-title">{title}</p>
        <IsoIllustration slug={slug} className="arc-showcase-iso" />
      </div>
    </div>
  );
}
