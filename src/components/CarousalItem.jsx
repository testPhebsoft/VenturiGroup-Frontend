"use client";
import Quote from "@/components/Quote";
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
  expandindChildInde,
  setExpandingChildIndex,
  isDesktop,
}) {
  const [isOutsideViewport, setIsOutsideViewport] = useState(false);
  const ref = useRef(null);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (!parentRef.current) {
      return;
    }

    const options = {
      root: parentRef.current, // Use the provided parentRef as the root
      // Adjust the root margin as needed
      rootMargin: "0px 0px 0px -425px",
      threshold: [
        0.0, 0.0000001, 0.00001, 0.22, 0.333, 0.2, 0.7, 0.8, 0.9, 0.999999,
        0.8887, 0.888888, 1,
      ],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (index == 1) {
          // console.log(
          //   index,
          //   entry.intersectionRatio,
          //   entry.boundingClientRect.x,
          //   entry.intersectionRatio < 0.00000000000001 &&
          //     entry.boundingClientRect.left < 50
          // );
        }

        if (isDesktop) {
          if (entry.boundingClientRect.x < 400) {
            // ref.current.style.scale = "1";
            setIsLoaded(false);
            setIsOutsideViewport(true);
          } else {
            setIsOutsideViewport(false);
          }
        } else {
          if (entry.boundingClientRect.x < 200) {
            // ref.current.style.scale = "1";
            setIsLoaded(false);
            setIsOutsideViewport(true);
          } else {
            setIsOutsideViewport(false);
          }
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    } else {
      console.error("ref.current is not defined");
    }
  });
  return (
    <div
      ref={ref}
      style={{
        transitionDuration: isOutsideViewport ? "1s" : "0.1s",
      }}
      className={` flex gap-5 shrink-0 ${
        isDesktop ? " " : "flex-col  whitespace-normal "
      }`}
    >
      {
        <div
          style={{
            transitionDuration: isOutsideViewport ? "1s" : "0.1s",
          }}
          className={`  ${
            isOutsideViewport
              ? !isDesktop
                ? "w-[300px]  mr-[-49vw]  h-[524px] opacity-100 overflow-y-hidden"
                : "w-[420px] h-[524px] opacity-100 ml-auto overflow-y-hidden"
              : "w-0 overflow-hidden  h-[0px] opacity-0 overflow-y-hidden"
          }`}
        >
          <h3 className="text-[clamp(24px,9vw,36px)] font-[lust-text] font-light ">
            <span className=" text-input/50">Our </span> <br />
            customers
          </h3>
          <Quote className="mt-16" />
          <p className="mt-10      text-[clamp(24px,9vw,36px)]  whitespace-normal font-[lust-text] font-light w-full ">
            Venturi <span className="text-primary"> excels</span> in tech
            recruitment, matching top talent to leading companies with{" "}
            <span className="text-primary"> precision</span> and{" "}
            <span className="text-primary"> efficiency</span>.
          </p>
        </div>
      }
      <div
        style={{
          transitionDuration: isOutsideViewport ? "1s" : "0.1s",
        }}
        key={index}
        className={`relative select-none lg:snap-start   w-auto snap-center border-primary border rounded-[18px] aspect-[0.804] 
        
        ${isDesktop ? " mx-5 " : " mr-10 "}

        ${
          isOutsideViewport
            ? " h-[clamp(328px,65vw,456px)] mt-auto  "
            : " h-[clamp(328px,65vw,400px)] opacity-80 mt-auto "
        }
        `}
      >
        <Image
          className="rounded-[18px] select-none pointer-events-none"
          fill
          src={item.image}
          alt={`Carousel item ${index}`}
        />
        <div className="top-[15px] absolute w-[55px] text-black"></div>
      </div>
    </div>
  );
}
