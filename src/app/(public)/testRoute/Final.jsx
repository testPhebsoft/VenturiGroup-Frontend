"use client";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Swiper as SwiperClass } from "swiper";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CarousalItem from "./CarousalItem";

SwiperCore.use([Navigation, Pagination]);

export function Final({ data }) {
  const swiperRef = useRef(null);

  const [swiper, setSwiper] = useState({ activeIndex: 0 });
  const scaleLeftSlide = (swiper) => {
    setSwiper(swiper);
    const slides = swiper.slides;
    if (!slides) return;

    const activeIndex = swiper.activeIndex;
    console.log(activeIndex);
    const leftSlideIndex = activeIndex;

    slides.forEach((slide, index) => {
      if (index !== activeIndex) slide.classList.remove("scale-up");
      else slides[leftSlideIndex].classList.add("scale-up");
    });
  };

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={4}
      spaceBetween={30}
      loop
      onInit={(swiper) => {
        scaleLeftSlide(swiper);
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper) => scaleLeftSlide(swiper)}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        764: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // // when window width is >= 640px
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        // },
        // // when window width is >= 768px
        // 768: {
        //   slidesPerView: 3,
        //   spaceBetween: 30,
        // },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide>
          <CarousalItem
            onLoad={(e) => {
              setChildWidth(e);
            }}
            key={index}
            index={index}
            item={item}
            isActive={swiper.activeIndex == index}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
