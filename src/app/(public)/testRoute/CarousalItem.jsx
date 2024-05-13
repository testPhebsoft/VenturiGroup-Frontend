"use client";
import useIntersectionObserver from "@react-hook/intersection-observer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function CarousalItem({ index, item, scrollref, parentRef }) {
  const [isOutsideViewport, setIsOutsideViewport] = useState(false);
  const [ref, setRef] = useState();
  const entry = useIntersectionObserver(ref);
  // useEffect(() => {
  //   const options = {
  //     root: parentRef.current, // Use the viewport as the root
  //     // No margin around the viewport
  //     rootMargin: "-100px",
  //     threshold: 0.99999,
  //     // Any part of the target coming into view triggers the callback
  //   };
  //   console.log("I am running");
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log(
  //         index,
  //         entry
  //         // entry.boundingClientRect.left,
  //         // entry.rootBounds.left
  //       );

  //       if (entry.boundingClientRect.left >= 50) {
  //         setIsOutsideViewport(false);
  //       } else {
  //         setIsOutsideViewport(true);
  //       }
  //     });
  //   }, options);

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     if (ref.current) {
  //       observer.unobserve(ref.current);
  //     }
  //   };
  // }, [ref.current]);

  return (
    <div
      ref={setRef}
      key={index}
      className={`relative   lg:snap-start shrink-0 mx-5 w-auto snap-center border-primary border rounded-[18px] aspect-[0.804]  ${
        isOutsideViewport
          ? "h-[clamp(328px,65vw,500px)]"
          : "h-[clamp(328px,65vw,456px)]"
      }`}
    >
      <Image className="rounded-[18px]" fill src={item.image} />
      <div className="top-[15px] absolute w-[55px] text-black"></div>
    </div>
  );
}
