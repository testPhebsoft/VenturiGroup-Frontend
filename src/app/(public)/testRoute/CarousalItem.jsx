"use client";
import useIntersectionObserver from "@react-hook/intersection-observer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CarousalItem({
  index,
  item,
  scrollref,
  parentRef,
  childref,
  onLoad,
}) {
  const [isOutsideViewport, setIsOutsideViewport] = useState(false);
  // const entry = useIntersectionObserver(ref);
  const ref = useRef(null);
  useEffect(() => {
    const options = {
      root: parentRef.current, // Use the viewport as the root
      // No margin around the viewport
      rootMargin: "-500px",
      threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      // Any part of the target coming into view triggers the callback
    };
    console.log("I am running");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(
          index,
          entry
          // entry.boundingClientRect.left,
          // entry.rootBounds.left
        );

        if (entry.boundingClientRect.left >= 50) {
          setIsOutsideViewport(false);
        } else {
          setIsOutsideViewport(true);
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      ref={ref}
      key={index}
      style={{
        transitionDuration: "0.3s",
      }}
      className={`relative   select-none  lg:snap-start shrink-0 mx-5 w-auto snap-center border-primary border rounded-[18px] aspect-[0.804]  ${
        isOutsideViewport
          ? "h-[clamp(328px,65vw,500px)]"
          : "h-[clamp(328px,65vw,456px)]"
      }`}
    >
      <Image
        className="rounded-[18px] select-none  pointer-events-none"
        fill
        src={item.image}
      />
      <div className="top-[15px] absolute w-[55px] text-black"></div>
    </div>
  );
}
