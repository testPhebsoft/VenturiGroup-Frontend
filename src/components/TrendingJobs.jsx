"use client";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";
import useScrollDragable from "./hooks/useScrollDragable";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import useTranslatexDraggable from "./hooks/useTranslatexDrag";
import { addPrefix, convertToCapitalizedString } from "@/lib/utils";
export default function TrendingJobs({ label = "Trending Jobs", data }) {
  const {
    ref: scrollContainerRef,
    parentRef,
    style,
  } = useTranslatexDraggable();

  return (
    <div className=" bg-background py-10 ">
      <MaxWidthWrapper>
        <div className="flex gap-3 items-center justify-between ">
          <h2 className=" max-[839px]:text-[clamp(16px,10vw,36px)] max-[839px]:leading-[clamp(24px,10vw,36px)] text-[clamp(16px,3.2vw,36px)] leading-[clamp(24px,3.3vw,36px)] font-[lust-text]">
            {label || "Trending jobs"}
          </h2>
          <Button className=" uppercase ">see more +</Button>
        </div>
        <div
          ref={parentRef}
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            // mr-[calc(-50vw+51%)]
          }}
          className="max-lg:snap-x snap-mandatory lg:snap-proximity  scroll-smooth overflow-y-hidden mt-10 relative max-lg:overflow-x-scroll overflow-hidden  whitespace-nowrap "
        >
          <div
            style={style}
            ref={scrollContainerRef}
            className="flex w-fit gap-5"
          >
            {data.map((value, index) => (
              <JobCard
                title={value.title}
                company={value.company.company_name}
                salaryType={convertToCapitalizedString(value.salary_type)}
                employmentType={value.job_type}
                salary={`${addPrefix(value.salary_min)} - ${addPrefix(
                  value.salary_max
                )}  `}
                description2={value.job_description}
                description1={value.job_requirement}
                toStart={value.to_start}
                toApply={value.apply_at}
                location={value.location.name}
                key={index}
              />
            ))}
          </div>
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
  heading1 = "job description",
  heading2 = "job description",
  description2 = "Lorem ipsum dolor sit amet consectetur. Velit lectus fringilla iaculis velit consequat. Ut sed ac mi eget ultricies nulla. Pretium etiam sed nulla quam nulla. Cras velit tincidunt adipiscing orci varius quam ridiculus.",
  description1 = "Lorem ipsum dolor sit amet consectetur. Velit lectus fringilla iaculis velit consequat. Ut sed ac mi eget ultricies nulla. Pretium etiam sed nulla quam nulla. Cras velit tincidunt adipiscing orci varius quam ridiculus.",
  salaryType = "per annum",
  toStart = "01 May 2024",
  toApply = "21 Apr 2024",
  location = "Dusseldorf, Germany",

  ...props
}) => {
  const [open, setOpen] = useState(false);
  function renderProperties(heading = "company", lable = "Cinch") {
    return (
      <div className=" grid grid-cols-2  justify-center items-center w-full max-w-[413px]">
        <h3 className=" uppercase  font-AntarcticanMonoMedium text-primary text-[clamp(12px,1.1vw,16px)]">
          {" "}
          {heading}
        </h3>
        <p className="  text-[clamp(12px,1.1vw,16px)] text-[#8B8B8B]">
          {lable}
        </p>
      </div>
    );
  }
  let url = "https://venturi.gitwork.tech/storage/10/6659aa05a45f9_jobCard.png";
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
      }}
      {...props}
      className={`mx-2   shrink-0 select-none inline-block snap-start w-[clamp(305px,30vw,367px)] aspect-[0.812] bg-cover bg-no-repeat border rounded-[24px] `}
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
          <p className="text-[clamp(12px,1.29vw,16px)]">{salaryType}</p>
        </div>
        <div className=" flex-1 flex flex-col justify-end">
          <p className="uppercase text-[clamp(12px,1.29vw,16px)] text-white font-AntarcticanMonoMedium">
            more info +
          </p>
          <Button
            onClick={() => setOpen(true)}
            variant="secondary"
            className="uppercase mt-5 w-fit"
          >
            <p className="h-[clamp(12px,1.29vw,16px)] text-center  text-[clamp(12px,1.29vw,16px)]">
              {buttonText}
            </p>
          </Button>
        </div>
      </div>
      <Dialog open={open} onOpenChange={(e) => setOpen(e)}>
        <DialogContent
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="overflow-y-scroll py-20 sm:px-20 px-10 w-[95%]  max-h-[100vh] sm:max-w-screen-maxScreenSize "
        >
          <h2 className="max-[839px]:text-[clamp(16px,10vw,48px)] max-[839px]:leading-[clamp(24px,10vw,51px)] text-[clamp(16px,3.2vw,51px)] leading-[clamp(24px,3.3vw,51px)] font-[lust-text] ">
            {title}
          </h2>
          <div className=" mt-10   flex justify-between gap-5  max-md:flex-col w-full ">
            <div className=" flex flex-col w-full gap-5 ">
              {renderProperties("company", company)}

              {renderProperties("LOCATION", location)}
              {renderProperties(
                "SALARY",
                `€${salary} per ${salaryType.toLocaleLowerCase()} Dependent on experience`
              )}
              {renderProperties("to start", toStart)}
              {renderProperties("apply by", toApply)}
            </div>
            <div className=" flex flex-col gap-8 w-full max-w-[629px]">
              <div className=" flex flex-col gap-8 w-full ">
                <h3 className=" capitalize  font-AntarcticanMonoMedium text-primary text-[clamp(12px,1.1vw,16px)]">
                  {heading1}
                </h3>
                <p
                  dangerouslySetInnerHTML={{ __html: description1 }}
                  className="text-[#8B8B8B]"
                ></p>
              </div>
              <div>
                <h3 className="  capitalize  font-AntarcticanMonoMedium text-primary text-[clamp(12px,1.1vw,16px)]">
                  {heading2}
                </h3>
                <p
                  dangerouslySetInnerHTML={{ __html: description2 }}
                  className="text-[#8B8B8B]"
                ></p>
              </div>
              <Button className="uppercase flex  w-fit justify-center items-center h-10 gap-6">
                <p className="h-[clamp(12px,1.29vw,16px)] text-center  text-[clamp(12px,1.29vw,16px)]">
                  {" "}
                  quick apply
                </p>{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.10331 3.99983C3.15174 3.99983 4.00166 3.14991 4.00166 2.10148C4.00166 1.05305 3.15174 0.203125 2.10331 0.203125C1.05488 0.203125 0.204956 1.05305 0.204956 2.10148C0.204956 3.14991 1.05488 3.99983 2.10331 3.99983Z"
                    fill="white"
                  />
                  <path
                    d="M5.79413 5.43802V15.9701H9.06419V10.7617C9.06419 9.38743 9.32274 8.0565 11.0267 8.0565C12.7073 8.0565 12.7282 9.62776 12.7282 10.8485V15.9709H15.9999V10.1952C15.9999 7.35806 15.3891 5.17773 12.0731 5.17773C10.481 5.17773 9.41384 6.05143 8.97743 6.87827H8.93318V5.43802H5.79413ZM0.46521 5.43802H3.74048V15.9701H0.46521V5.43802Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
