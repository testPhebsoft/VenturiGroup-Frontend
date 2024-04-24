"use client";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export function CustumCarousal({ data }) {
  const containerRef = useRef(null);
  const [state, setState] = useState(false);
  const itemWidthRef = useRef(0);
  let container = containerRef.current;
  const [visibleItemHeight, setVisibleItemHeight] = useState(null);
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const firstElement = container.firstChild.cloneNode(true);
      const lastElement = container.lastChild.cloneNode(true);
      container.appendChild(firstElement);
      container.insertBefore(lastElement, container.firstChild);
      itemWidthRef.current = firstElement.offsetWidth;
      container.scrollLeft = itemWidthRef.current;
    }

    return () => {
      if (containerRef.current) {
        const container = containerRef.current;
        container.removeChild(container.firstChild);
        container.removeChild(container.lastChild);
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const visibleItem = entry.target;
          const visibleItemHeight = visibleItem.offsetHeight;
          console.log(index, entry);
          // setVisibleItemHeight(visibleItemHeight);
        }
      });
    });

    const container = containerRef.current;
    const items = container.children;

    Array.from(items).forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, [containerRef.current]);
  useEffect(() => {
    const handleScroll = () => {
      // Accessing the current scrollLeft value of the container
      const scrollLeft = containerRef.current.scrollLeft;
      const container = containerRef.current;
      console.log("Scroll position changed:", scrollLeft);
      if (
        container.scrollLeft + container.clientWidth ==
        container.scrollWidth
      ) {
        container.scrollLeft = itemWidthRef.current;
      }
      if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth - 200;
      }
    };

    // Add event listener to the container element
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    // Cleanup: Remove event listener on component unmount
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef.current?.scrollLeft]);

  const handleNext = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollBy({
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
    <div className=" flex-1 relative lg:w-[50%]">
      <div
        ref={containerRef}
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="lg:mr-[calc(-49vw+618px)]  flex-1 snap-x snap-mandatory overflow-x-scroll whitespace-nowrap touch-pan-x "
      >
        {data.map((item, index) => (
          <div
            style={{ height: visibleItemHeight }}
            key={index}
            className="relative lg:snap-start inline-block mx-5 w-auto snap-center border-primary border rounded-[18px] aspect-[0.804] h-[clamp(328px,65vw,456px)]"
          >
            <Image className="rounded-[18px]" fill src={item.image} />
            <div className="top-[15px] absolute w-[55px] text-black"></div>
          </div>
        ))}
      </div>
      <div className="flex max-lg:hidden absolute top-[-70px] justify-center items-center gap-5">
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
