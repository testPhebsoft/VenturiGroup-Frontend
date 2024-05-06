"use client";
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Medals() {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const componentRef = useRef(null);

  const checkOverflow = () => {
    if (componentRef.current) {
      const element = componentRef.current;
      const parent = element.parentElement;
      console.log(parent);

      // Check overflow considering scroll dimensions
      const isOverflowingX = element.scrollWidth > element.offsetWidth;
      const isOverflowingY = element.scrollHeight > element.offsetHeight;

      // Check overflow considering parent size (overflow: hidden)
      const isClippedX = element.offsetWidth > parent.clientWidth;
      const isClippedY = element.offsetHeight > parent.clientHeight;

      // Update state based on overflow or clipping
      setIsOverflowing(
        isOverflowingX || isOverflowingY || isClippedX || isClippedY
      );
    }
  };
  useEffect(() => {
    checkOverflow();
  }, []);
  console.log(isOverflowing);
  return (
    <div ref={componentRef} className="w-full overflow-hidden">
      <DuplicateChildren
        isOverflowing={isOverflowing}
        style={{
          "--traslate50T": "20s",
        }}
        className={`flex  ${
          isOverflowing ? "animate-translate50" : " mx-auto"
        } w-fit gap-5`}
      >
        <Card />
        <Card /> <Card />
        <Card /> <Card />
        <Card /> <Card />
        <Card />
      </DuplicateChildren>
    </div>
  );
}
function DuplicateChildren({ children, className, isOverflowing, ...props }) {
  return (
    <div {...props} className={cn("", className)}>
      {children}
      {isOverflowing && <>{children}</>}
    </div>
  );
}
function Card() {
  const [isOutsideViewport, setIsOutsideViewport] = useState(false);
  const ref = useRef(null);
  //   useEffect(() => {
  //     const options = {
  //       root: null, // Use the viewport as the root
  //       rootMargin: "0px", // No margin around the viewport
  //       threshold: 0, // Any part of the target coming into view triggers the callback
  //     };

  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         // When entry is fully outside the viewport from the left
  //         console.log(entry.boundingClientRect.left);
  //         if (entry.boundingClientRect.left <= 0) {
  //           setIsOutsideViewport(true);
  //         } else {
  //           setIsOutsideViewport(false);
  //         }
  //       });
  //     }, options);

  //     if (ref.current) {
  //       observer.observe(ref.current);
  //     }

  //     return () => {
  //       if (ref.current) {
  //         observer.unobserve(ref.current);
  //       }
  //     };
  //   });
  return (
    <div
      ref={ref}
      //   style={{
      // transform: isOutsideViewport ? "scale(1.5)" : "translateX(0)",
      // height: isOutsideViewport ? "680px" : "238px",
      //   }}
      className="  shrink-0 bg-white size-[238px] flex justify-center items-center rounded-[24px]"
    >
      <Award stroke={"none"} className=" fill-primary" />
    </div>
  );
}
