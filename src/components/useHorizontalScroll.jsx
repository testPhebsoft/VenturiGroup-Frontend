"use client";
import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        console.log(e.deltaY);
        el.scrollBy({
          right: el.scrollLeft - e.deltaY,
          behavior: "smooth",
        });
      };

      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return elRef;
}
