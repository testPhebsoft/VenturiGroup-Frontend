"use client";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CarousalItem } from "./CarousalItem";
import useDraggable from "@/components/hooks/useDraggable";
import useTranslatexDraggable from "@/components/hooks/useTranslatexDrag";
export function CustumCarousal({ data }) {
  const { ref: containerRef, style, childRef } = useTranslatexDraggable();
  const [state, setState] = useState(false);
  const itemWidthRef = useRef(0);
  let container = containerRef.current;
  const [visibleItemHeight, setVisibleItemHeight] = useState(null);
  const parentRef = useRef();

  const handleNext = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollTo({
        left: itemWidthRef.current,
        behavior: "smooth",
      });

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = itemWidthRef.current;
      }
    }
  };

  const handlePrevious = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollBy({
        left: -itemWidthRef.current,
        behavior: "smooth",
      });

      if (container.scrollLeft === 20) {
        container.scrollLeft = container.scrollWidth - 2 * itemWidthRef.current;
      }
    }
  };

  return (
    <div className=" flex-1 relative  lg:w-[50%]">
      <div
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="lg:mr-[calc(-49vw+618px)] snap-x lg:mt-[70px] flex-1  overflow-x-scroll whitespace-nowrap  "
      >
        <div style={style} ref={containerRef} className=" flex w-fit gap-5">
          {data.map((item, index) => (
            <CarousalItem
              key={index}
              index={index}
              item={item}
              childref={childRef}
              parentRef={containerRef}
              scrollref={containerRef}
            />
          ))}
        </div>
      </div>
      <div className="flex max-lg:hidden absolute   top-[0px] justify-center items-center gap-5">
        <button onClick={handlePrevious}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="#1A1B1D" fill-opacity="0.05" />
            <path
              d="M18.7377 20.9472L26.2684 13.4165L24.8612 12.0094L17.3305 19.54L18.7377 20.9472Z"
              fill="#1A1B1D"
            />
            <path
              d="M24.86 37.1101L26.27 35.7001L16.13 25.5601L36.7 25.5601L36.7 23.5601L13.71 23.5601L13 25.2601L24.86 37.1101Z"
              fill="#1A1B1D"
            />
          </svg>
        </button>
        <button onClick={handleNext} className="  ">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="#1A1B1D" fill-opacity="0.05" />
            <path
              d="M30.9623 28.1629L23.4316 35.6936L24.8388 37.1007L32.3695 29.5701L30.9623 28.1629Z"
              fill="#1A1B1D"
            />
            <path
              d="M24.84 12L23.43 13.41L33.57 23.55H13V25.55H35.99L36.7 23.85L24.84 12Z"
              fill="#1A1B1D"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
