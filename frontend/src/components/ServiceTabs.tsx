import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { orderedServices } from "@/lib/site";

const accents = ["#5e7bdf", "#8b6fc9", "#4a9c91", "#c89566", "#9566d8", "#3e86b4"];

export default function ServiceTabs() {
  const location = useLocation();
  const active = location.pathname.startsWith("/services/") ? location.pathname.split("/")[2] : "";

  return (
    <nav className="service-tabs" aria-label="Services navigation" data-testid="service-tabs">
      <div className="luxury-shell service-tabs-inner">
        {orderedServices.map((service, index) => {
          const isActive = active === service.slug;
          return (
            <Link
              key={service.slug}
              to={"/services/" + service.slug}
              className={"service-tab " + (isActive ? "is-active" : "")}
              style={{ "--service-accent": accents[index] } as CSSProperties}
              data-testid={"service-tab-" + service.slug}
            >
              <span className="service-tab-index">0{index + 1}</span>
              <span className="service-tab-title">{service.title}</span>
              <ArrowUpRight size={14} className="service-tab-arrow" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}