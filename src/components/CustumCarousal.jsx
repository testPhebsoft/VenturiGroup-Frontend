"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import CarousalItem from "./CarousalItem";

export default function CustumCarousal({ data }) {
  const getBreakPoints = () => {
    return {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      534: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },
      648: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 1.7,
        spaceBetween: 10,
      },
      765: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      880: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      1111: {
        slidesPerView: 1.3,
        spaceBetween: 10,
      },

      1311: {
        slidesPerView: 1.4,
        spaceBetween: 10,
      },
    };
  };

  return (
    <div className="">
      {" "}
      <h3 className="text-[clamp(24px,9vw,36px)] font-[lust-text] font-light ">
        <span className=" text-input/50">Our </span> <br />
        customers
      </h3>
      <Swiper breakpoints={getBreakPoints()} loop>
        {data.map((item, index) => (
          <SwiperSlide className="mt-auto" key={index}>
            <CarousalItem key={index} index={index} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
