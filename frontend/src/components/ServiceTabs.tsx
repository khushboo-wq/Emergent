import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { orderedServices } from "@/lib/site";

interface ServiceTabsProps {
  activeSlug?: string;
}

const accents = ["service-tab-linkedin", "service-tab-email", "service-tab-support", "service-tab-leads", "service-tab-ai", "service-tab-setup"];

export default function ServiceTabs({ activeSlug }: ServiceTabsProps) {
  return (
    <nav className="service-tabs" aria-label="Service navigation" data-testid="service-tabs">
      <div className="service-tabs-inner">
        {orderedServices.map((service, index) => {
          const active = service.slug === activeSlug;
          return (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`service-tab ${accents[index]} ${active ? "is-active" : ""}`}
              aria-current={active ? "page" : undefined}
              data-testid={`service-tab-${service.slug}`}
            >
              <span className="service-tab-number">0{index + 1}</span>
              <span className="service-tab-copy">
                <strong>{service.title}</strong>
                <small>{service.price}</small>
              </span>
              <ArrowUpRight className="service-tab-arrow" size={15} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
