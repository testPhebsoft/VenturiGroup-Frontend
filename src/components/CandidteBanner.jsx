import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";

export default function CandidateBanner() {
  return (
    <div className="w-full ">
      <div className=" mt-[250px] lg:mt-[15vmax] px-5 sm:px-10 md:mx-auto w-fit">
        <h1 className="  text-[clamp(40px,6.9vw,121px)] leading-[clamp(40px,6.9vw,121px)] font-[lust-text] ">
          Your
          <span className="text-primary"> Talent</span>,<br />
          <span className=" max-md:hidden">&nbsp;&nbsp;</span> Our
          <span className="text-primary"> Connections</span>
        </h1>
      </div>
      <MaxWidthWrapper
        className={"flex max-md:flex-col max-md:mt-10 mt-[186px]"}
      >
        <div className="w-full  flex ">
          <div className="ml-[calc(-49vw+50%)] max-md:hidden mr-10 h-fit w-[calc(49vw)]">
            <svg
              className="w-full h-full"
              width="599"
              height="7"
              viewBox="0 0 599 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMax meet"
            >
              <path
                d="M598.667 3.5C598.667 2.02724 597.473 0.833333 596 0.833333C594.527 0.833333 593.333 2.02724 593.333 3.5C593.333 4.97276 594.527 6.16667 596 6.16667C597.473 6.16667 598.667 4.97276 598.667 3.5ZM596 3L0 3V4L596 4V3Z"
                fill="#1A1B1D"
              />
            </svg>
          </div>

          <h3 className=" font-[lust-text] text-[clamp(18px,3.1vw,24px)] leading-[clamp(20px,3.5vw,28px)] w-full md:max-w-[367px] ">
            Our mission is to connect great minds and ignite successes.
          </h3>
        </div>
        <div className=" w-full md:max-w-[496px]">
          <div className=" font-ArticulateMedium mt-6 text-[clamp(12px,1.8vw,16px)]  leading-[clamp(13px,2vw,22px)]">
            That means placing you in a role where you can be a catalyst – the
            spark that leads to progress. Our approach is to listen. Really
            listen. To your needs, ambitions and the things that set you apart.
            Our goal for you to feel heard, empowered and energised.
          </div>
          <Link href="/contact">
            {" "}
            <Button className="uppercase mt-10 sm:mt-20">
              find out more +
            </Button>{" "}
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
