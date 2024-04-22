import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";

export default function TailoredRecuritment() {
  return (
    <div className="bg-background py-[50px]">
      <MaxWidthWrapper className="w-full flex justify-around max-w-[1269px]">
        <div className=" relative aspect-[0.95] w-[55%] max-w-[495px]">
          <Image fill src="/Youngboy.jpg" />
        </div>
        <div className=" flex flex-col gap-5  w-[35%]  ">
          {/* <p className=" uppercase self-start   whitespace-nowrap   font-AntarcticanMonoMedium">
            {" "}
            TAILORED RECRUITMENT 
          </p> */}
          <h2 className=" text-[clamp(24px,11vw,51px)] font-[lust-text] leading-[clamp(24px,11vw,51px)]">
            <span className="text-input/50"> Assemble the </span>experts{" "}
            <span className="text-input/50"> to move</span> forward
          </h2>
          <p className=" text-[clamp(14px,2vw,16px)] leading-[clamp(14px,3vw,25px)] w-full max-w-[496px] ">
            Our offering spans multiple tech disciplines, including data &
            analytics, ERP, CRM and software engineering. We work with
            best-in-class talent and continually evolve with the tech landscape.
            If you need to speak to someone about your hiring plans, speak to
            us. We can tailor our support around your needs, ambitions and
            timeframes – whatever the work requires.
          </p>
          <Button className="w-fit">get in touch +</Button>
        </div>
      </MaxWidthWrapper>{" "}
    </div>
  );
}
