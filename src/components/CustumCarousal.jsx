"use client";
import { useRef, useState } from "react";
import CarousalItem from "./CarousalItem";
import useTranslatexDraggable from "@/components/hooks/useTranslatexDrag";
import { useMediaQuery } from "./hooks/useMediaQuery";
export function CustumCarousal({ data }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const {
    ref: containerRef,
    style,

    parentRef,
  } = useTranslatexDraggable();
  return (
    <div className=" lg:mr-[calc(-49vw+50%)]   flex-1 relative  lg:w-[100%]">
      <div
        ref={parentRef}
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="  lg:mt-[70px]  w-full  overflow-hidden "
      >
        <div style={style} ref={containerRef} className=" flex w-max gap-5">
          {data.concat(data).map((item, index) => (
            <CarousalItem
              isDesktop={isDesktop}
              onLoad={(e) => {
                setChildWidth(e);
              }}
              key={index}
              index={index}
              item={item}
              parentRef={parentRef}
              scrollref={containerRef}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
