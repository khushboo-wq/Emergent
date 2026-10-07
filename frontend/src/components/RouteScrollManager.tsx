import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Jump to the top (or to a #hash target) instantly on every navigation.
// Smooth CSS scroll is switched off for the jump, otherwise the browser animates from the old position.
export default function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) target.scrollIntoView({ block: "start" });
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    window.dispatchEvent(new Event("arc:route"));
    const frame = requestAnimationFrame(() => {
      if (!target) window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      root.style.scrollBehavior = previous;
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
