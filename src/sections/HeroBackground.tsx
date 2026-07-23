import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useMouseGlow } from "@/hooks/useMouseGlow";

export function HeroBackground() {
  const glow = useMouseGlow();
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!glowRef.current) {
      return;
    }

    gsap.to(glowRef.current, {
      "--glow-x": `${glow.x}%`,
      "--glow-y": `${glow.y}%`,
      duration: 0.55,
      ease: "power3.out",
    });
  }, [glow.x, glow.y]);

  return (
    <div ref={glowRef} className="absolute inset-0 overflow-hidden [--glow-x:52%] [--glow-y:42%]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--glow-x)_var(--glow-y),hsl(var(--primary)/0.22),transparent_28rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.22)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.18)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="noise-overlay absolute inset-0 opacity-[0.045] mix-blend-overlay" />
    </div>
  );
}
