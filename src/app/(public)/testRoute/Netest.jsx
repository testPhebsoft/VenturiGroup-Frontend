"use client";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CarousalItem2 from "./CarousalItem";
import useDraggable from "@/components/hooks/useDraggable";
import useTranslatexDraggable from "@/components/hooks/useTranslatexDrag";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
export function CustumCarousal({ data }) {
  const [childWidth, setChildWidth] = useState();
  const [touchingSide, setIsOutsideViewport] = useState(false);
  const {
    ref: containerRef,
    style,

    parentRef,
  } = useTranslatexDraggable({ childWidth: childWidth });
  const ref = useRef(null);
  const [state, setState] = useState(false);
  const itemWidthRef = useRef(0);
  let container = containerRef.current;
  const [visibleItemHeight, setVisibleItemHeight] = useState(null);
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
  useEffect(() => {
    const options = {
      root: parentRef.current, // Use the viewport as the root
      // No margin around the viewport
      threshold: 0.99999,
      // Any part of the target coming into view triggers the callback
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(
        //   entry
        //   // entry.boundingClientRect.left,
        //   // entry.rootBounds.left
        // );

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
    <div className=" flex-1 relative   lg:w-[100%]">
      <div className="">
        <Carousel>
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className={touchingSide ? "  basis-1/4" : "basis-1/4"}
                ref={ref}
              >
                <CarousalItem2
                  onLoad={(e) => {
                    setChildWidth(e);
                  }}
                  key={index}
                  index={index}
                  item={item}
                  parentRef={parentRef}
                  scrollref={containerRef}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* <div
          ref={parentRef}
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="lg:mr-[calc(-49vw+618px)] max-lg:snap-x lg:mt-[70px]  col-span-1  max-lg:overflow-x-scroll  overflow-hidden max-lg:whitespace-nowrap  "
        >
          <div
            style={style}
            ref={containerRef}
            className=" flex w-fit gap-5"
          ></div>
        </div> */}
      </div>
    </div>
  );
}
