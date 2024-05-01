import Image from "next/image";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWraper";

export default function ExploreNext({
  heading = "EXPLORE YOUR NEXT CHAPTER",
  heading2 = (
    <>
      {" "}
      I’m a <span className="text-primary lg:text-white"> candidate </span>
    </>
  ),
  text = (
    <>
      Cut through the noise. Find opportunities that speak to your talent and
      skillset. If you&apos;re ready to explore your next chapter, do it with
      Venturi.
    </>
  ),
  buttonText = <>MAKE THE LEAP +</>,
}) {
  return (
    <div className="bg-background py-10">
      <div className="lg:h-[567px] lg:overflow-clip bg-background ">
        <MaxWidthWrapper className={"  "}>
          <div className="lg:h-[565px] lg:rounded-[24px]  overflow-clip">
            <div className={"lg:flex lg:h-[1500px] lg:overflow-clip  relative"}>
              <div className=" w-full lg:absolute  lg:h-full ">
                <div className="w-full lg:sticky lg:h-[500px]  lg:mt-[-200px] lg:top-0 ">
                  <div className="w-full lg:w-[135%]  aspect-[1.5]   relative">
                    <Image
                      fill
                      loading="eager"
                      className="  max-lg:rounded-[24px]"
                      src={"/explorenext.jpeg"}
                      alt="explore next"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:relative lg:h-[1500px]">
                <div className="flex  flex-col lg:absolute lg:left-[7%] top-[70px] lg:h-[500px] z-10 mt-10 gap-5 lg:gap-12">
                  <h1 className="uppercase  whitespace-nowrap  font-AntarcticanMonoSemiBold">
                    {heading}
                  </h1>
                  <h2 className=" max-[839px]:text-[clamp(16px,10vw,36px)] max-[839px]:leading-[clamp(24px,10vw,36px)] text-[clamp(16px,3.2vw,36px)] leading-[clamp(24px,3.3vw,36px)] font-[lust-text] ">
                    {heading2}
                  </h2>
                  <p className=" text-[clamp(12px,1.5vw,16px)] leading-[clamp(14px,3vw,25px)] w-full lg:max-w-[387px] ">
                    {text}
                  </p>
                  <Button
                    variant="secondary"
                    className="max-lg:bg-primary max-lg:hover:bg-primary/80 max-lg:text-white w-fit "
                  >
                    {buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
