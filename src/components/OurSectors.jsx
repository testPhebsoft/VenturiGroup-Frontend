import { Plus } from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";

export default function OurSector({ data }) {
  return (
    <div className="w-full bg-background py-10">
      <div className=" text-center ">
        <h3 className=" font-AntarcticanMonoMedium uppercase mx-auto">
          {" "}
          Our Sectors
        </h3>
        {data && (
          <h2
            dangerouslySetInnerHTML={{
              __html:
                data["main-heading"] ??
                ' View our areas of <span class="text-[#9E76E9] "> expertise</span>',
            }}
            className="font-[lust-text] mt-7 text-[clamp(24px,5vw,36px)] leading-[clamp(24px,5vw,36px)]  font-light"
          ></h2>
        )}
      </div>
      <div
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="snap-x scroll-smooth flex   shrink-0 items-stretch snap-mandatory  scroll-m-5 whitespace-nowrap overflow-x-scroll mt-10 px-5 mx-auto sm:px-0 max-w-[1250px] "
      >
        {data && (
          <RenderCard
            heading={
              (data["sector-one"] && data["sector-one"].name) ??
              "Data & Analytics"
            }
            details={
              (data["sector-one"] && data["sector-one"].description) ?? ""
            }
          />
        )}
        <RenderCard
          imagesrc="/sector2.jpg"
          number="02"
          heading={
            (data["sector-two"] && data["sector-two"].name) ??
            "Software Engineering"
          }
          details={
            (data["sector-two"] && data["sector-two"].description) ??
            `We leverage our extensive knowledge in software engineering to help businesses develop robust platforms and software products. Highly skilled engineers are crucial in this process, as they ensure the creation of efficient, reliable, and scalable solutions. They bring expertise in the latest technologies and best practices, leading to innovative and high-quality software that meets business needs. Our engineers excel in problem-solving, optimizing performance, and ensuring security, all while maintaining a user-centric approach. By having top-tier engineers on your team, you can achieve superior functionality, faster development cycles, and a competitive edge in the market. Our commitment is to empower your business with these advantages through exceptional software solutions, ensuring your long-term success and growth.`
          }
        />
        <RenderCard
          imagesrc="/sector3.jpg"
          number="03"
          heading={
            (data["sector-three"] && data["sector-three"].name) ?? (
              <>
                <span>ERP &amp;</span>
                <br /> <span>CRM</span>
              </>
            )
          }
          details={
            (data["sector-three"] && data["sector-three"].description) ??
            `We are passionate about helping businesses implement ERP systems because we see firsthand how transformative they can be. ERP systems streamline processes and reduce manual tasks, leading to improved efficiency. They integrate information across departments, providing a single source of truth for better decision-making, and offer real-time insights for accurate forecasting. Additionally, ERP systems optimise resource management, support scalability for business growth, ensure regulatory compliance, and enhance customer service with better order accuracy and faster response times. We are dedicated to bringing these powerful benefits to our clients, driving their success and growth.`
          }
        />
      </div>
    </div>
  );
}

const RenderCard = ({
  imagesrc = "/sector1.jpg",
  number = "01",
  heading = "Data & Analytics",
  details = `<p>In today’s data rich tech environment, having detail-driven thinkers who can unpick large datasets and produce valuable insights is vital. But while the need for data expertise is always present, the landscape is constantly changing – with new and sophisticated ways of utilising, managing and accessing intel.<br /><br />We know data can give your business a clear and competitive edge. We also know you need the right people to connect the dots and put this intel to use. That means experts who are up-to-date with the latest technology, regulations and data gathering techniques – whether that’s consumer data from your CRM or business intelligence.<br /><br />From data scientists and engineers to business intelligence analysts, we work with a diverse range of data & analytics talent. And because we know the landscape in-depth, we can help you identify the individuals needed to implement your plans</p>`,
}) => {
  return (
    <Dialog className="w-full   ">
      <div className="w-full flex-none    inline-block snap-center mx-1  bg-white max-w-[403px] pb-10 pt-2 px-2 rounded-[18px]">
        <div className="relative    w-full aspect-[1.8926] ">
          <Image
            className="rounded-[18px]"
            fill
            src={imagesrc ? imagesrc : "/sector1.jpg"}
            alt="sector1"
          />
        </div>
        <div className="w-full max-w-[311px]  mx-auto ">
          <p className="font-AntarcticanMonoMedium text-left  mt-5 text-primary">
            {" "}
            {number}{" "}
          </p>
          <div className="w-full flex justify-between   text-[clamp(24px,5vw,36px)] font-[lust-text]">
            <p className="w-full text-wrap  break-words self-end  whitespace-normal max-w-[220px]">
              {heading || "Data & Analytics"}
            </p>
            <DialogTrigger className="">
              <div className="self-end mb-[15px]  relative before:absolute before:block before:rounded-full before:size-10 before:-inset-[4px] before:bottom-[50%]    before:bg-[#1A1B1D1A]">
                <Plus className="size-8" />
              </div>
            </DialogTrigger>
          </div>
        </div>
      </div>
      <DialogContent className="w-full  sm:max-w-[clamp(408px,80vw,677px)] text-left     rounded-[24px] sm:rounded-[24px]">
        <div
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="max-h-[92vh] overflow-y-auto"
        >
          <MaxWidthWrapper className={"flex  h-fit flex-col gap-5 "}>
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
              dangerouslySetInnerHTML={{
                __html:
                  details ||
                  "<p>In today’s data rich tech environment, having detail-driven thinkers who can unpick large datasets and produce valuable insights is vital. But while the need for data expertise is always present, the landscape is constantly changing – with new and sophisticated ways of utilising, managing and accessing intel.<br /><br />We know data can give your business a clear and competitive edge. We also know you need the right people to connect the dots and put this intel to use. That means experts who are up-to-date with the latest technology, regulations and data gathering techniques – whether that’s consumer data from your CRM or business intelligence.<br /><br />From data scientists and engineers to business intelligence analysts, we work with a diverse range of data & analytics talent. And because we know the landscape in-depth, we can help you identify the individuals needed to implement your plans</p>",
              }}
              className="text-[clamp(12px,3vw,16px)] "
            ></p>
            <Link
              target="_blank"
              tabIndex={0}
              href="https://jcdqujpmxoo.typeform.com/to/A1l2iv9l"
            >
              {" "}
              <Button className="uppercase w-fit "> get in touch +</Button>
            </Link>
          </MaxWidthWrapper>
        </div>
      </DialogContent>
    </Dialog>
  );
};
