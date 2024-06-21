"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { cn } from "@/lib/utils";
import useTranslatexDraggable from "./hooks/useTranslatexDrag";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
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
  data = [],
}) {
  const { ref, parentRef, style } = useTranslatexDraggable();

  return (
    <MaxWidthWrapper className={" shrink-0 w-full "}>
      <div
        //mr-[calc(-50vw+60%)]
        //lg:mr-[calc(-50vw+60%)]
        className="flex  "
      >
        <h1 className="mt-10  max-sm:mx-auto  max-sm:w-fit w-[clamp(221px,50vw,367px)] text-[clamp(24px,5vw,36px)] leading-[clamp(24px,5vw,36px)]  text-input/50 font-[lust-text]">
          {heading}
        </h1>
        <div className=" max-sm:hidden border self-end h-0 mb-2  w-full border-1 border-input/50"></div>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="mt-10">
          {data.map((item, index) => (
            <CarouselItem key={index} className="basis-auto">
              <RenderCard
                key={index}
                imagesrc={item.image ? item.image.url : ""}
                jobTitle={item.job_title}
                name={item.user?.name ?? ""}
                details={item.description ?? ""}
                tags={item.tags ? item.tags : ""}
                instaLink={item.instagram_link ? item.instagram_link : ""}
                linkdinLink={item.linkedin_link ? item.linkedin_link : ""}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* 
      <div
        ref={parentRef}
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="  relative   overflow-hidden  mt-10 px-5  sm:px-0 "
      >
        <div style={style} ref={ref} className="flex w-max gap-5">
          {data.map((item, index) => (
            <RenderCard
              key={index}
              imagesrc={item.image ? item.image.url : ""}
              jobTitle={item.job_title}
              name={item.user?.name ?? ""}
              details={item.description ?? ""}
              tags={item.tags ? item.tags : ""}
              instaLink={item.instagram_link ? item.instagram_link : ""}
              linkdinLink={item.linkedin_link ? item.linkedin_link : ""}
            />
          ))}
        </div>
      </div> */}
    </MaxWidthWrapper>
  );
}

const RenderCard = ({
  imagesrc = "/ourteam.png",
  jobTitle = "Job title",
  name = "Isabella   Montgomery-Smith",
  details,
  tags,
  instaLink,
  linkdinLink,
}) => {
  return (
    <Dialog className="">
      <div className="  block  select-none    shrink-0  w-[237px] text-left   mr-2">
        <div className="w-full     max-w-[237px] pb-10 pt-2 px-2 rounded-[18px]">
          <div className="relative      w-full aspect-[0.8] ">
            <Image
              className="rounded-[18px] pointer-events-none"
              fill
              src={imagesrc ? imagesrc : "/sector1.jpg"}
              alt="sector1"
            />
            <div className=" absolute bottom-5 right-5 ">
              <DialogTrigger>
                <div className="self-end mb-[15px] relative  before:absolute before:block before:rounded-full before:size-10 before:-inset-[4px] before:bottom-[50%]    before:bg-white  ">
                  <Plus stroke="#1A1B1D" className="size-8 z-10 relative" />
                </div>
              </DialogTrigger>
            </div>
          </div>
          <div className="w-full mx-auto pointer-events-none ">
            <div className="w-full mt-5 flex justify-between   text-[clamp(18px,3.2vw,24px)] font-[lust-text]">
              <p translate="no" className="w-full  whitespace-normal">
                {name || "Isabella "}
              </p>
            </div>
            <p
              translate="no"
              className="font-AntarcticanMonoMedium text-left uppercase  mt-5 text-primary"
            >
              {" "}
              {jobTitle || "Job Title"}
            </p>
          </div>
        </div>
      </div>
      <DialogContent className="w-full  p-0 sm:p-0 sm:max-w-[clamp(320px,90vw,1478px)] overflow-y-auto max-h-[100vh] text-left   ">
        <div
          className={
            "flex max-lg:flex-col  max-lg:py-5 justify-between max-lg:gap-5 max-lg:px-5 gap-20"
          }
        >
          <div className="  lg:w-[45%] max-lg:flex max-lg:gap-5   ">
            <div className="relative max-lg:h-[155px]  lg:w-full overflow-hidden     w-auto h-full  aspect-[0.8] ">
              <Image
                className="rounded-lg object-cover "
                fill
                src={imagesrc ? imagesrc : "/ourteam.png"}
                alt="sector1"
              />
            </div>
            <div>
              <h2
                translate="no"
                className="w-full lg:hidden max-w-[344px]  text-[clamp(24px,7vw,36px)] whitespace-normal  font-[lust-text]"
              >
                {" "}
                {name || "Data & Analytics"}
              </h2>
              <p
                translate="no"
                className="font-AntarcticanMonoMedium lg:hidden text-left uppercase   text-primary"
              >
                {" "}
                {jobTitle || "Job Title"}
              </p>
            </div>
          </div>
          <div className="lg:w-[50%] flex flex-col py-10">
            <h2
              translate="no"
              className="w-full max-lg:hidden lg:max-w-[344px]  text-[clamp(24px,7vw,36px)] whitespace-normal  font-[lust-text]"
            >
              {" "}
              {name || "Data & Analytics"}
            </h2>

            <p
              translate="no"
              className="font-AntarcticanMonoMedium max-lg:hidden text-left uppercase   text-primary"
            >
              {" "}
              {jobTitle || "Job Title"}
            </p>
            <p
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="text-[clamp(12px,3vw,16px)] mb-10 w-full lg:pr-10 lg:max-w-[521px] mt-5  "
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
                <div className={cn("flex gap-5  self-baseline items-center  ")}>
                  {instaLink && (
                    <a href={instaLink || "#"} target="_blank" tabIndex={1}>
                      <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                        <Image
                          className="  "
                          alt="Instagram"
                          fill
                          src="/instagram.svg"
                        />
                      </div>
                    </a>
                  )}
                  {linkdinLink && (
                    <a href={linkdinLink || "#"} target="_blank" tabIndex={1}>
                      <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[2px] before:bottom-[50%] size-7   before:bg-[#1A1B1D1A]  ">
                        <Image alt="Linkedin" fill src="/LinkedIn.svg" />
                      </div>
                    </a>
                  )}
                </div>
                <div className="flex mt-10 flex-wrap  gap-3 -ml-2 ">
                  {tags &&
                    tags.map((tag) => (
                      <div
                        key={tag}
                        className="uppercase min-w-[61px] h-fit text-center text-[16px] leading-[16px] px-3 py-2  border-2 border-black rounded-[24px] "
                      >
                        {tag}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
