import { useEffect, useState } from "react";

export function useScrollDirection(offset = 16) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let previousY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setIsHidden(currentY > previousY && currentY > offset);
      previousY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return isHidden;
}
