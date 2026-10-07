import { ArrowDown, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

// Floating up / down buttons: jump to top, or scroll one screen down (to the bottom when near it).
export default function ScrollButtons() {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setAtTop(window.scrollY < 200);
      setAtBottom(window.scrollY > max - 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  const go = (top: number) => window.scrollTo({ top, behavior: "smooth" });

  return (
    <div className="arc-scroll-buttons" data-testid="scroll-buttons">
      <button type="button" aria-label="Scroll to top" className={atTop ? "is-hidden" : ""} onClick={() => go(0)}><ArrowUp size={18} /></button>
      <button type="button" aria-label="Scroll down" className={atBottom ? "is-hidden" : ""} onClick={() => go(window.scrollY + window.innerHeight * 0.85)}><ArrowDown size={18} /></button>
    </div>
  );
}
