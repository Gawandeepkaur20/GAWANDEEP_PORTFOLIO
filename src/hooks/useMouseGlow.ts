import { useEffect, useState } from "react";

export type MouseGlow = {
  x: number;
  y: number;
};

export function useMouseGlow() {
  const [position, setPosition] = useState<MouseGlow>({ x: 50, y: 42 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setPosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return position;
}
