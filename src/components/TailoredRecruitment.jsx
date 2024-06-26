import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";
import Link from "next/link";

export default function TailoredRecuritment({ data }) {
  return (
    <div className="bg-background py-[50px]">
      <MaxWidthWrapper className="w-full max-[839px]:flex-col  flex gap-5 ">
        <div className="min-[839px]:w-[55%] w-full max-[839px]:mx-auto">
          <div className="max-[839px]:hidden relative  aspect-[0.95]  max-w-[495px]">
            <Image
              fill
              className=" rounded-[24px]"
              src="/Youngboy.jpg"
              alt="TailoredRecuritment"
            />
          </div>
          <div className=" min-[839px]:hidden  relative aspect-[1.5] max-[839px]:mx-auto max-w-[495px]">
            <Image
              fill
              className="    rounded-[24px] "
              src="/Youngboymobile.jpg"
              alt={"Youngboymobile"}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-5 min-[839px]:gap-12 max-[839px]:mx-auto min-[839px]:w-[43%]  ">
          {data && (
            <p className=" uppercase self-start min-[839px]:mt-[calc(-3em-18px)] whitespace-nowrap  lg:hidden  font-AntarcticanMonoMedium">
              {" "}
              {data["heading"] || " TAILORED RECRUITMENT "}
            </p>
          )}
          {data && (
            <h2
              dangerouslySetInnerHTML={{
                __html:
                  data["main-heading"] ??
                  ' <p> <span class="text-input/50"> Assemble the </span>experts <span class="text-input/50"> to move</span> forward </p>',
              }}
              className=" max-[839px]:text-[clamp(16px,10vw,48px)] max-[839px]:leading-[clamp(24px,10vw,51px)] text-[clamp(16px,3.2vw,51px)] leading-[clamp(24px,3.3vw,51px)] font-[lust-text] "
            ></h2>
          )}
          {data && (
            <p className=" text-[clamp(12px,1.5vw,16px)] leading-[clamp(14px,3vw,25px)] w-full min-[839px]:max-w-[496px] ">
              {data["description"] ||
                " Our offering spans multiple tech disciplines, including data &            analytics, ERP, CRM and software engineering. We work with            best-in-class talent and continually evolve with the tech landscape.            If you need to speak to someone about your hiring plans, speak to            us. We can tailor our support around your needs, ambitions and            timeframes – whatever the work requires."}
            </p>
          )}
          {data && (
            <Link
              target="_blank"
              tabIndex={0}
              href={"https://jcdqujpmxoo.typeform.com/to/A1l2iv9l"}
            >
              {" "}
              <Button className="w-fit uppercase">
                {data["btn-text"] || "get in touch +"}
              </Button>{" "}
            </Link>
          )}
        </div>
      </MaxWidthWrapper>{" "}
    </div>
  );
}
