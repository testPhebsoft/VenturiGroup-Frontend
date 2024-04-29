import Image from "next/image";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Socials } from "./Socials";
export default function AboutBanner() {
  return (
    <div className="bg-background ">
      <div className="h-[clamp(636px,100vmax,1117px)] overflow-clip bg-background ">
        <div className="h-[clamp(636px,100vmax,1117px)]  overflow-clip">
          <div
            className={
              "flex h-[clamp(636px,100vmax,1117px)] after:bg-[linear-gradient(180deg,rgba(245,245,245,0)0%,#F5F5F5)] after:absolute after:w-full after:h-full overflow-clip  relative"
            }
          >
            <div className=" w-full absolute  h-full ">
              <div className="w-full sticky h-[0px]  mt-[-200px]  right-0 top-0 ">
                <div className=" max-lg:h-[100vmax] absolute right-0  max-lg:w-auto  w-[100%] object-center   aspect-[1.333333334]   ">
                  <Image
                    fill
                    loading="eager"
                    className="   "
                    src={"/AboutBanner.jpeg"}
                    alt="explore next"
                  />
                </div>
              </div>
            </div>
            <MaxWidthWrapper className="w-full relative h-[1500px]">
              <div className="flex  flex-col absolute w-[82%] left-[7%] top-[calc(clamp(582px,100vmax,1117px)-500px)]  lg:top-[15vmax] h-[0px] z-10 mt-10  ">
                <h1 className="  text-[clamp(64px,6.5vw,121px)] leading-[clamp(64px,6.9vw,121px)] font-[lust-text] ">
                  Our <br />
                  <span className="text-primary"> Story </span>
                </h1>
                <div className="w-fit  max-lg:mt-10 ml-auto">
                  <h3 className="uppercase font-semibold text-[16px] font-AntarcticanMonoSemiBold">
                    About Venturi
                  </h3>
                  <p className="  mt-10 text-[clamp(12px,1.5vw,16px)] leading-[clamp(14px,3vw,25px)] w-full max-w-[496px] ">
                    Our name isn’t a coincidence. It dates back to 18th century
                    Italy and a physicist named Giovanni Battista Venturi.
                    Giovanni discovered that fluid in a pipeline flows faster
                    and with less pressure when it travels through narrow
                    sections of pipe. The Venturi effect has inspired countless
                    engineering feats and how we think about recruitment…
                  </p>
                </div>
                <div className="max-lg:mt-10">
                  <h3 className="uppercase font-semibold text-[16px] font-AntarcticanMonoSemiBold">
                    stay informed
                  </h3>
                  <Socials className={"mt-5 "} />
                </div>{" "}
              </div>
            </MaxWidthWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
