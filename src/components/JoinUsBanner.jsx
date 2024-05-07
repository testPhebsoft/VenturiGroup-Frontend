import Image from "next/image";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Socials } from "./Socials";
export default function JoinUsBanner() {
  return (
    <div className="bg-background ">
      <div className="h-[clamp(850px,100vw,1117px)] overflow-clip bg-background ">
        <div className="h-[clamp(850px,100vw,1117px)]  overflow-clip">
          <div
            className={
              "flex h-[clamp(850px,100vw,1117px)] after:bg-[linear-gradient(180deg,rgba(245,245,245,0)0%,#F5F5F5)] after:absolute after:w-full after:h-full overflow-clip  relative"
            }
          >
            <div className=" w-full absolute  h-full ">
              <div className="w-full sticky h-[0px]  mt-[-200px]  right-0 top-0 ">
                <div className=" max-lg:h-[100vmax] absolute right-0  max-lg:w-auto  w-[120%] object-center   aspect-[1.3334]   ">
                  <Image
                    fill
                    loading="eager"
                    className="  opacity-45  "
                    src={"/joinusbanner.jpeg"}
                    alt="explore next"
                  />
                </div>
              </div>
            </div>
            <div className="w-full max-w-[1528px] mx-auto px-5 sm:px-10 relative h-[1500px]">
              <div className="flex justify-between  max-md:flex-col absolute w-[90%]  top-[calc(clamp(750px,100vw,1117px)-600px)]  lg:top-[min(13vmax,431px)]  z-10 mt-10  ">
                <h1 className=" h-fit md:mt-[124px]  text-[clamp(64px,6.5vw,121px)] leading-[clamp(64px,6.9vw,121px)] font-[lust-text] ">
                  Join the <br />
                  <span className="text-primary"> Venturi </span> story
                </h1>
                <div className="w-fit  max-lg:mt-10">
                  <div className=" relative w-[80%]  aspect-[1.6]">
                    <Image
                      fill
                      className=" opacity-100 "
                      src={"/joinusTree.png"}
                    />
                  </div>
                  <p className="  mt-10 text-[clamp(12px,1.5vw,16px)] leading-[clamp(14px,3vw,25px)] w-full max-w-[496px] ">
                    People are the lifeblood of what we do. We&apos;re
                    constantly looking for ambitious individuals who share our
                    values and believe in our mission. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:text-center px-10 pb-10 flex flex-col -mt-[100px] relative z-10 gap-10  ">
        <h2 className="font-[lust-text] mt-7 max-[839px]:text-[clamp(16px,10vw,48px)] max-[839px]:leading-[clamp(24px,10vw,51px)] text-[clamp(16px,3.2vw,51px)] leading-[clamp(24px,3.3vw,51px)] text-input/50 font-light">
          Intrested in <span className="text-input"> joining</span>?
        </h2>
        <p className="font-[lust-text]  font-light text-[clamp(18px,2.1vw,24px)] leading-[clamp(24px,5vw,36px)] mx-auto w-full max-w-[1011px]">
          If you&apos;re passionate about connecting great minds and igniting
          success, you belong here. In a thriving, inclusive environment that
          puts people first. 
        </p>
        <p className="  font-ArticulateRegular  text-[clamp(12px,1.1vw,16px)] leading-[clamp(18px,2.1vw,24px)]  mx-auto w-full max-w-[753px]">
          In return you&apos;ll have access to health & wellbeing support,
          personal development guidance and training plans. Everything you need
          to be the best version of yourself. 
        </p>
      </div>
    </div>
  );
}
