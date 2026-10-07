import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  return null;
}
