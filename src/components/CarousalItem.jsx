"use client";
import Quote from "@/components/Quote";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSwiperSlide } from "swiper/react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";

export default function CarousalItem({
  PauseAutoplay,
  StartAutoplay,
  index,
  item,
}) {
  const swiper = useSwiperSlide();
  const isOutsideViewport = swiper.isActive;
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen(e) {
    console.log(e);
    setIsOpen(false);
    if (e) {
      PauseAutoplay();
    } else {
      StartAutoplay();
    }
  }
  return (
    <div
      style={{
        transitionDuration: isOutsideViewport ? "1s" : "0.1s",
      }}
      className={`flex justify-between gap-5 max-md:flex-col max-w-[876px] max-md:mt-10 md:h-[500px]`}
    >
      {isOutsideViewport && (
        <div
          style={{
            transitionDuration: isOutsideViewport ? "1s" : "0.1s",
          }}
          className={
            isOutsideViewport
              ? "max-md:w-[90vw]   md:flex  flex-col   justify-center  md:w-[420px] md:h-full   overflow-y-hidden"
              : " overflow-hidden  h-[0px] overflow-y-hidden"
          }
        >
          <div className=" flex flex-col flex-1 justify-center     text-[clamp(20px,6vw,36px)]  font-[lust-text] font-light w-full ">
            {(item.short_description && (
              <>
                <div
                  dangerouslySetInnerHTML={{ __html: item.short_description }}
                />
              </>
            )) || (
              <>
                {" "}
                Venturi <span className="text-primary"> excels</span> in tech
                recruitment, matching top talent to leading companies with{" "}
                <span className="text-primary"> precision</span> and{" "}
                <span className="text-primary"> efficiency</span>.
              </>
            )}
          </div>
          <div className="  flex justify-end flex-col items-end">
            <Button
              className="uppercase "
              onClick={() => {
                setIsOpen(true);
              }}
            >
              read more +
            </Button>
          </div>
          <Dialog open={isOpen} onOpenChange={handleOpen}>
            <DialogContent className="overflow-y-auto max-h-[100vh] overflow-x-hidden   w-full  p-0 sm:p-0 sm:max-w-[clamp(320px,90vw,1478px)]">
              <div className=" relative flex max-md:flex-col py-10 sm:py-20 px-3 sm:px-10  gap-5 sm:pr-10 min-[1600px]:pr-40 max-md:mx-auto ">
                <div className="h-fit md:sticky max-md:gap-2 top-10 w-full max-w-[600px] flex md:flex-col items-center justify-center">
                  <div
                    className={`relative select-none    border-primary border rounded-[18px]  aspect-[0.804]   w-[clamp(200px,65vw,367px)] h-fit             
                          `}
                  >
                    <Image
                      className="rounded-[18px] select-none pointer-events-none object-cover"
                      fill
                      src={
                        item && item.image && item.image.original_url
                          ? item.image.original_url
                          : ""
                      }
                      alt={`Carousel item `}
                    />
                  </div>
                  <div className="flex md:hidden flex-col mt-auto justify-between w-full  h-fit">
                    <h3 className="text-[clamp(20px,6vw,36px)]  font-[lust-text] font-light ">
                      {item.name && item.name}
                    </h3>
                    <p className="text-primary font-AntarcticanMonoSemiBold w-full text-[16px] uppercase">
                      {item.job_title && item.job_title},{" "}
                      {item.company && item.company}
                    </p>
                  </div>
                </div>

                <div className="w-full  max-md:mt-10 ">
                  <div className="flex max-md:hidden justify-between w-full items-center  h-fit">
                    <h3 className="text-[clamp(20px,6vw,36px)]  font-[lust-text] font-light ">
                      {item.name && item.name}
                    </h3>
                    <p className="text-primary font-AntarcticanMonoSemiBold text-[16px] uppercase">
                      {item.job_title && item.job_title},{" "}
                      {item.company && item.company}
                    </p>
                  </div>
                  <div className="ck-content ">
                    <div
                      className="mt-10"
                      dangerouslySetInnerHTML={{
                        __html: item.long_description,
                      }}
                    />
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
      <div
        style={{
          transitionDuration: isOutsideViewport ? "1s" : "1s",
        }}
        key={index}
        className={`relative select-none  h-fit self-end   border-primary border rounded-[18px]  aspect-[0.804] 
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
          src={
            item && item.image && item.image.original_url
              ? item.image.original_url
              : ""
          }
          alt={`Carousel item ${index}`}
        />
        <div className="top-[15px] absolute w-[55px] object-cover text-black"></div>
      </div>
    </div>
  );
}
