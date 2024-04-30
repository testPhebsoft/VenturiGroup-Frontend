import { Plus } from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

export default function OurSector() {
  const renderCard = (
    imagesrc = "/sector1.jpg",
    number = "01",
    heading,
    details
  ) => {
    return (
      <Dialog className="w-full">
        <DialogTrigger className="w-full max-w-[403px] text-left   ml-2">
          <div className="w-full  inline-block snap-center   bg-white max-w-[403px] pb-10 pt-2 px-2 rounded-[18px]">
            <div className="relative    w-full aspect-[1.8926] ">
              <Image
                className="rounded-[18px]"
                fill
                src={imagesrc ? imagesrc : "/sector1.jpg"}
                alt="sector1"
              />
            </div>
            <div className="w-full max-w-[311px] mx-auto ">
              <p className="font-AntarcticanMonoMedium text-left  mt-5 text-primary">
                {" "}
                {number}{" "}
              </p>
              <div className="w-full flex justify-between   text-[clamp(24px,5vw,36px)] font-[lust-text]">
                <p className="w-full self-end  whitespace-normal max-w-[169px]">
                  {heading || "Data & Analytics"}
                </p>
                <div className="self-end mb-[15px]  relative before:absolute before:block before:rounded-full before:size-10 before:-inset-[4px] before:bottom-[50%]    before:bg-[#1A1B1D1A]">
                  <Plus className="size-8" />
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="w-full sm:max-w-[clamp(408px,80vw,677px)] text-left   rounded-[24px] sm:rounded-[24px]">
          <MaxWidthWrapper className={"flex flex-col gap-5"}>
            <div className="relative   max-w-[246px] w-full aspect-[1.8926] ">
              <Image
                className="rounded-[18px]"
                fill
                src={imagesrc ? imagesrc : "/sector1.jpg"}
                alt="sector1"
              />
            </div>
            <h2 className="w-full self-end text-[clamp(24px,7vw,36px)] whitespace-normal text-primary font-[lust-text]">
              {" "}
              {heading || "Data & Analytics"}
            </h2>
            <p
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="text-[clamp(12px,3vw,16px)] h-[clamp(250px,50vw,390px)] overflow-y-scroll"
            >
              {details || (
                <>
                  In today’s data rich tech environment, having detail-driven
                  thinkers who can unpick large datasets and produce valuable
                  insights is vital. But while the need for data expertise is
                  always present, the landscape is constantly changing – with
                  new and sophisticated ways of utilising, managing and
                  accessing intel. <br />
                  <br /> We know data can give your business a clear and
                  competitive edge. We also know you need the right people to
                  connect the dots and put this intel to use. That means experts
                  who are up-to-date with the latest technology, regulations and
                  data gathering techniques – whether that’s consumer data from
                  your CRM or business intelligence.
                  <br /> <br />
                  From data scientists and engineers to business intelligence
                  analysts, we work with a diverse range of data & analytics
                  talent. And because we know the landscape in-depth, we can
                  help you identify the individuals needed to implement your
                  plans
                </>
              )}
            </p>
            <Button className="uppercase w-fit "> get in touch +</Button>
          </MaxWidthWrapper>
        </DialogContent>
      </Dialog>
    );
  };
  return (
    <div className="w-full bg-background py-10">
      <div className=" text-center ">
        <h3 className=" font-AntarcticanMonoMedium uppercase mx-auto">
          {" "}
          Our Sectors
        </h3>
        <h2 className="font-[lust-text] mt-7 text-[clamp(24px,5vw,36px)] leading-[clamp(24px,5vw,36px)]  font-light">
          View our areas of <span className="text-[#9E76E9] "> expertise</span>
        </h2>
      </div>
      <div
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="snap-x scroll-smooth  snap-mandatory  scroll-m-5 whitespace-nowrap overflow-x-scroll mt-10 px-5 mx-auto sm:px-0 max-w-[1250px] "
      >
        {renderCard()}
        {renderCard("/sector2.jpg", "02", "Software Engineering")}
        {renderCard(
          "/sector3.jpg",
          "03",
          <>
            ERP & <br></br>CRM
          </>
        )}
      </div>
    </div>
  );
}
