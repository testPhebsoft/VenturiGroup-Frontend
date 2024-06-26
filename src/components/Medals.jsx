"use client";
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Medals() {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const componentRef = useRef(null);
  const childrenref = useRef(null);

  const checkOverflow = () => {
    if (componentRef.current) {
      const element = componentRef.current;
      const parent = element.parentElement;

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
  return (
    <div ref={componentRef} className="w-full overflow-hidden">
      <DuplicateChildren
        ref={childrenref}
        isOverflowing={isOverflowing}
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
    <div
      style={{
        "--traslate50T": `${children.length * 3}s`,
      }}
      {...props}
      className={cn("", className)}
    >
      {children}
      {isOverflowing && <>{children}</>}
    </div>
  );
}
function Card() {
  return (
    <div
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
