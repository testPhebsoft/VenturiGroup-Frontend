import Image from "next/image";
import LeadinLight from "./LeadingLight";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";
import SLope from "./slope";
import HorizenatalLine from "./horizentalLine";
import { Socials } from "./Socials";

export default function HomeBanner() {
  return (
    <div className="">
      <div className="  after:bg-[linear-gradient(180deg,rgba(245,245,245,0)0%,#F5F5F5)] after:absolute after:z-[-1] w-full  max-sm:h-[clamp(745px,60vmax,1335px)]  max-sm:after:h-[clamp(745px,60vmax,1335px)] h-[clamp(850px,60vmax,1335px)] lg:aspect-video after:h-[clamp(850px,60vmax,1335px)]  after:top-0  after:w-full">
        <video
          className="fixed w-full z-[-2]  h-[100vh] object-cover  bg-[linear-gradient(180deg,rgba(245,245,245,0)0%,#F5F5F5)]"
          loop
          muted
          autoPlay
        >
          <source src="https://s3-figma-videos-production-sig.figma.com/video/1360250505037508142/TEAM/c763/de54/-e78b-4017-9db2-5f993aaf3743?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmpJQgBnMfjKc-LN~CdpMXic2kRigC2SVvoJTc7k4LOv61xWg5PwAr8K-vlxzM3w7r~HAUkiDj~3x-vBPO3yi8qDFR5a4JarfZX276mDPNpZmaAHCxYf1SsISJ2P0ee~Hn8RRu2NKzbRMjcSioIe2VJ6CxlawxlrRGFQEor6~Ugprqem9XZAD303zrZrBUfQ-Kb7sSRyMLLjCjXY0hD6boUKtDKbussy8AsjB0AodZFF0pm-MTfjm3td7tedrzYxmmqwUOqOvWLpuxZwrbym6rCtM0Z4Ozv8mCBoPRaXeyK3lwqLPXzeijZJwcCT12rk0vjXEE0~KszQYAkrECo3Vw__" />
        </video>
        <MaxWidthWrapper className={" absolute lg:relative max-w-[1473px]  "}>
          <div className="lg:absolute z-10  w-full sm:max-w-[clamp(200px,70vw,1026px)] lg:max-w-[clamp(200px,45vw,1026px)] font-[lust-text] leading-[clamp(18px,12vw,110px)] text-[clamp(18px,12vw,110px)] sm:leading-[clamp(18px,8vw,110px)] sm:text-[clamp(18px,8vw,110px)]  lg:text-[clamp(18px,5vw,110px)] lg:leading-[clamp(18px,5vw,110px)] lg:-translate-x-[20%] lg:left-[20%]  mt-[120px] lg:mt-[15%] ">
            {" "}
            Conneting <span className="text-[#9E76E9]">great minds</span>,
            igniting success
          </div>
          <div className="md:absolute  w-full md:max-w-[clamp(100px,45vw,496px)] z-10 right-5 mx-auto mt-10 lg:mt-[clamp(32%,22vmax,540px)]">
            <div className="relative w-fit my-[25px] mr-[25px]">
              <div className="w-[200px] px-[25px]">
                <SLope className="" />
                <HorizenatalLine className="mt-[-2px]" />
              </div>
              <div className=" absolute bottom-[-25px] rounded-full overflow-hidden border border-black h-[48px] w-[48px] ">
                <Image
                  width={148}
                  height={148}
                  className="h-auto"
                  src="/avatar1.jpg"
                  alt="Avatar image"
                />
              </div>
              <div className=" absolute bottom-[-25px] right-0 rounded-full overflow-hidden border border-black h-[48px] w-[48px] ">
                <Image
                  width={108}
                  height={108}
                  className="h-auto mt-[-20%]"
                  src="/avatar3.jpg"
                  alt="Avatar image"
                />
              </div>
              <div className=" absolute top-[-25px] right-[-23px] rounded-full overflow-hidden border border-black h-[48px] w-[48px] ">
                <Image
                  width={148}
                  height={148}
                  className="h-auto"
                  src="/avatar2.jpg"
                  alt="Avatar image"
                />
              </div>
            </div>
            <div className=" font-semibold mt-10 font-AntarcticanMonoSemiBold">
              Unlocking Tech Talent
            </div>
            <div className=" font-ArticulateMedium mt-6">
              It takes expertise to find people who will bring an idea, project
              or strategy to life – and make it bigger than you thought
              possible. We should know. It&apos;s in our DNA. We place
              incredible tech talent where it&apos;s needed most, from startups
              to global corporations.
            </div>
            <Button className="uppercase mt-10 sm:mt-20">
              find out more +
            </Button>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="   mt-[500px]  max-lg:hidden bg-background  ">
        <div className="mt-[-500px]   max-lg:hidden  flex w-[100%] justify-around max-w-[1473px] mx-auto">
          <div className=" mt-[-500px] self-end w-[50%] flex ">
            <p className=" ml-[-24px] font-AntarcticanMonoBook  text-[16px] mt-[16px] h-fit rotate-90">
              Scroll{" "}
            </p>
            <div className="w-full ">
              <Socials className={"mt-[40%] mb-[calc(-40%-20px)] ml-10"} />
              <LeadinLight className="mb-[6px]    w-full" />{" "}
            </div>
          </div>
          <p className="  w-[43%] uppercase self-end    whitespace-nowrap   font-AntarcticanMonoMedium">
            {" "}
            TAILORED RECRUITMENT
          </p>
        </div>
      </div>
    </div>
  );
}
