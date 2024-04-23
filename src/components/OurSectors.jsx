import { Plus } from "lucide-react";
import Image from "next/image";

export default function OurSector() {
  const renderCard = (imagesrc = "/sector1.jpg", number = "01", heading) => {
    return (
      <div className="w-full mx-5 inline-block snap-center   bg-white max-w-[408px] pb-10 pt-2 px-5 rounded-[18px]">
        <div className="relative    w-full aspect-[1.8926] ">
          <Image
            className="rounded-[18px]"
            fill
            src={imagesrc ? imagesrc : "/sector1.jpg"}
            alt="sector1"
          />
        </div>
        <p className="font-AntarcticanMonoMedium px-3 mt-5 text-primary">
          {" "}
          {number}{" "}
        </p>
        <div className="w-full flex justify-between px-3   text-[clamp(24px,5vw,36px)] font-[lust-text]">
          <p className="w-full self-end  whitespace-normal max-w-[169px]">
            {heading || "Data & Analytics"}
          </p>
          <div className="self-end mb-[15px]  relative before:absolute before:block before:rounded-full before:size-10 before:-inset-[4px] before:bottom-[50%]    before:bg-[#1A1B1D1A]">
            <Plus className="size-8" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full bg-background py-10">
      <div className=" text-center ">
        <h3 className=" font-AntarcticanMonoMedium uppercase mx-auto">
          {" "}
          Our Sectors
        </h3>
        <h2 className="font-[lust-text] text-[clamp(24px,5vw,36px)] leading-[clamp(24px,5vw,36px)]  font-light">
          View our areas of{" "}
          <span className="text-[#9E76E9] mt-5"> expertise</span>
        </h2>
      </div>
      <div
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="snap-x scroll-smooth touch-pan-x scroll-m-5 whitespace-nowrap overflow-x-scroll mt-10 mx-auto w-full max-w-[1344px]"
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
