"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import useScrollDragable from "./hooks/useScrollDragable";
import { cn } from "@/lib/utils";
import useClickToTouch from "./hooks/useClickToTouch";
import { useRef } from "react";
export default function OurTeam({
  heading = (
    <>
      {" "}
      Meet <br className=" max-sm:hidden" />
      Our
      <br className=" sm:hidden" />
      <span className=" text-input"> UK</span> Team
    </>
  ),
}) {
  const ref = useScrollDragable();
  const renderCard = (
    imagesrc = "/ourteam.png",
    jobTitle = "Job title",
    name = "Isabella   Montgomery-Smith",
    details
  ) => {
    return (
      <Dialog className="w-full ">
        <DialogTrigger className="w-full inline-block snap-center max-w-[237px] text-left   mr-2">
          <div className="w-full    max-w-[237px] pb-10 pt-2 px-2 rounded-[18px]">
            <div className="relative    w-full aspect-[0.8] ">
              <Image
                className="rounded-[18px]"
                fill
                src={imagesrc ? imagesrc : "/sector1.jpg"}
                alt="sector1"
              />
              <div className=" absolute bottom-5 right-5 ">
                <div className="self-end mb-[15px] relative  before:absolute before:block before:rounded-full before:size-10 before:-inset-[4px] before:bottom-[50%]    before:bg-white  ">
                  <Plus stroke="#1A1B1D" className="size-8 z-10 relative" />
                </div>
              </div>
            </div>
            <div className="w-full mx-auto ">
              <div className="w-full mt-5 flex justify-between   text-[clamp(18px,3.2vw,24px)] font-[lust-text]">
                <p className="w-full  whitespace-normal">
                  {name || "Isabella   Montgomery-Smith"}
                </p>
              </div>
              <p className="font-AntarcticanMonoMedium text-left uppercase  mt-5 text-primary">
                {" "}
                {jobTitle || "Job Title"}
              </p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="w-full  p-0 sm:p-0 sm:max-w-[clamp(320px,90vw,1478px)] text-left   ">
          <div
            className={
              "flex max-lg:flex-col  max-lg:py-5 justify-between max-lg:gap-5 max-lg:px-5 gap-20"
            }
          >
            <div className="  lg:w-[40%] max-lg:flex max-lg:gap-5  ">
              <div className="relative max-lg:h-[155px]     w-auto h-full  aspect-[0.8] ">
                <Image
                  className="rounded-lg"
                  fill
                  src={imagesrc ? imagesrc : "/sector1.jpg"}
                  alt="sector1"
                />
              </div>
              <div>
                <h2 className="w-full lg:hidden max-w-[344px]  text-[clamp(24px,7vw,36px)] whitespace-normal  font-[lust-text]">
                  {" "}
                  {name || "Data & Analytics"}
                </h2>
                <p className="font-AntarcticanMonoMedium lg:hidden text-left uppercase   text-primary">
                  {" "}
                  {jobTitle || "Job Title"}
                </p>
              </div>
            </div>
            <div className="lg:w-[50%] flex flex-col py-10">
              <h2 className="w-full max-lg:hidden lg:max-w-[344px]  text-[clamp(24px,7vw,36px)] whitespace-normal  font-[lust-text]">
                {" "}
                {name || "Data & Analytics"}
              </h2>

              <p className="font-AntarcticanMonoMedium max-lg:hidden text-left uppercase   text-primary">
                {" "}
                {jobTitle || "Job Title"}
              </p>
              <p
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                className="text-[clamp(12px,3vw,16px)] w-full lg:max-w-[521px] mt-5  "
              >
                {details || (
                  <>
                    In today’s data rich tech environment, having detail-driven
                    thinkers who can unpick large datasets and produce valuable
                    insights is vital. But while the need for data expertise is
                    always present, the landscape is constantly changing – with
                    new and sophisticated ways of utilising, managing and
                    accessing intel.{" "}
                  </>
                )}
              </p>
              <div className="flex flex-1 flex-col  gap-5">
                <div className="mt-auto max-lg:mt-10">
                  <div
                    className={cn("flex gap-5  self-baseline items-center  ")}
                  >
                    <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                      <Image
                        alt="Linkedin"
                        height={20}
                        width={20}
                        src="/LinkedIn.svg"
                      />
                    </div>
                    <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                      <Image
                        className="  "
                        alt="Instagram"
                        fill
                        src="/instagram.svg"
                      />
                    </div>
                  </div>
                  <div className="flex mt-10 flex-wrap  gap-3 -ml-2 ">
                    <div className="uppercase min-w-[61px] h-fit text-center text-[16px] leading-[16px] px-3 py-2  border-2 border-black rounded-[24px] ">
                      PR
                    </div>
                    <div className="uppercase min-w-[61px] h-fit text-center text-[16px] leading-[16px] px-3 py-2  border-2 border-black rounded-[24px] ">
                      Social Media
                    </div>
                    <div className="uppercase min-w-[61px] h-fit text-center text-[16px] leading-[16px] px-3 py-2  border-2 border-black rounded-[24px]   ">
                      Marketing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  return (
    <MaxWidthWrapper className={" "}>
      <div className="flex mr-[calc(-50vw+60%)] ">
        <h1 className="mt-10  max-sm:mx-auto  max-sm:w-fit w-[clamp(221px,50vw,367px)] text-[clamp(24px,5vw,36px)] leading-[clamp(24px,5vw,36px)]  text-input/50 font-[lust-text]">
          {heading}
        </h1>
        <div className=" max-sm:hidden border self-end h-0 mb-2  w-full border-1 border-input/50"></div>
      </div>
      <div
        ref={ref}
        onTouchStart={() => console.log("Touch started")}
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="snap-x lg:mr-[calc(-50vw+60%)] relative scroll-smooth  snap-mandatory  scroll-m-5 whitespace-nowrap overflow-x-scroll mt-10 px-5  sm:px-0 "
      >
        {renderCard()}
        {renderCard()}

        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
      </div>
    </MaxWidthWrapper>
  );
}
