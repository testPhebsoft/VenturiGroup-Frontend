"use client";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";
import useScrollDragable from "./hooks/useScrollDragable";
export default function TrendingJobs({ label = "Trending Jobs" }) {
  const scrollContainerRef = useScrollDragable();
  return (
    <div className=" bg-background py-10 ">
      <MaxWidthWrapper>
        <div className="flex justify-between ">
          <h2 className=" max-[839px]:text-[clamp(16px,10vw,36px)] max-[839px]:leading-[clamp(24px,10vw,36px)] text-[clamp(16px,3.2vw,36px)] leading-[clamp(24px,3.3vw,36px)] font-[lust-text]">
            {label || "Trending jobs"}
          </h2>
          <Button className=" uppercase ">see more +</Button>
        </div>
        <div
          ref={scrollContainerRef}
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="snap-x snap-mandatory lg:snap-proximity  scroll-smooth overflow-y-hidden mt-10 relative overflow-x-scroll  whitespace-nowrap mr-[calc(-50vw+51%)]"
        >
          {Array(10)
            .fill(0)
            .map((value, index) => (
              <JobCard key={index} />
            ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

const JobCard = ({
  title = "Software Engineer",
  company = "Dusseldorf",
  employmentType = "Full-time",
  salary = "45 - 55,000",
  buttonText = "quick apply",
  ...props
}) => {
  return (
    <div
      {...props}
      className={`mx-2  select-none inline-block snap-start w-[clamp(305px,30vw,367px)] aspect-[0.812] bg-cover bg-no-repeat border rounded-[24px] bg-[url('../../public/jobsbg.svg')]`}
    >
      <div className="p-10 py-10 flex flex-col h-full">
        <div className="text-white">
          <h3 className=" text-[clamp(18px,1.95vw,24px)] font-[lust-text] font-light">
            {title}
          </h3>
          <p className="uppercase text-[clamp(12px,1.29vw,16px)]">{company}</p>
          <p className=" mt-5 text-[clamp(18px,1.95vw,24px)]  font-[lust-text] font-light">
            {employmentType}
          </p>
          <p className=" mt-5 text-[clamp(12px,1.29vw,16px)]">€{salary}</p>
          <p className="text-[clamp(12px,1.29vw,16px)]">per annum</p>
        </div>
        <div className=" flex-1 flex flex-col justify-end">
          <p className="uppercase text-[clamp(12px,1.29vw,16px)] text-white font-AntarcticanMonoMedium">
            more info +
          </p>
          <Button
            variant="secondary"
            className="uppercase mt-5 w-fit text-[clamp(12px,1.29vw,16px)]"
          >
            {buttonText}
            <svg
              className=" ml-5"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#F5F5F5" />
              <path
                d="M9.10331 10.9998C10.1517 10.9998 11.0017 10.1499 11.0017 9.10148C11.0017 8.05305 10.1517 7.20312 9.10331 7.20312C8.05488 7.20312 7.20496 8.05305 7.20496 9.10148C7.20496 10.1499 8.05488 10.9998 9.10331 10.9998Z"
                fill="#9E76E9"
              />
              <path
                d="M12.7941 12.438V22.9701H16.0642V17.7617C16.0642 16.3874 16.3227 15.0565 18.0267 15.0565C19.7073 15.0565 19.7282 16.6278 19.7282 17.8485V22.9709H22.9999V17.1952C22.9999 14.3581 22.3891 12.1777 19.0731 12.1777C17.481 12.1777 16.4138 13.0514 15.9774 13.8783H15.9332V12.438H12.7941V12.438ZM7.46521 12.438H10.7405V22.9701H7.46521V12.438Z"
                fill="#9E76E9"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};
