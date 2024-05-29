"use client";
import Quote from "@/components/Quote";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSwiperSlide } from "swiper/react";

export default function CarousalItem({ index, item }) {
  const swiper = useSwiperSlide();
  const isOutsideViewport = swiper.isActive;

  return (
    <div
      style={{
        transitionDuration: isOutsideViewport ? "1s" : "0.1s",
      }}
      className={`flex justify-between gap-5 max-md:flex-col max-w-[876px]`}
    >
      {isOutsideViewport && (
        <div
          style={{
            transitionDuration: isOutsideViewport ? "1s" : "0.1s",
          }}
          className={
            isOutsideViewport
              ? "max-md:w-full w-[420px] h-fit  overflow-y-hidden"
              : "w-0 overflow-hidden  h-[0px] overflow-y-hidden"
          }
        >
          <Quote className="mt-16" />
          <p className="mt-10  text-[clamp(20px,6vw,36px)] font-[lust-text] font-light w-full ">
            Venturi <span className="text-primary"> excels</span> in tech
            recruitment, matching top talent to leading companies with{" "}
            <span className="text-primary"> precision</span> and{" "}
            <span className="text-primary"> efficiency</span>.
          </p>
        </div>
      )}
      <div
        style={{
          transitionDuration: isOutsideViewport ? "1s" : "1s",
        }}
        key={index}
        className={`relative select-none    border-primary border rounded-[18px]  aspect-[0.804] 
        ${
          isOutsideViewport
            ? " w-[clamp(200px,65vw,367px)] h-fit mt-auto  "
            : " w-[clamp(200px,60vw,305px)]  opacity-60 "
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
