import Image from "next/image";
import LeadinLight from "./LeadingLight";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button, buttonVariants } from "./ui/button";
import SLope from "./slope";
import HorizenatalLine from "./horizentalLine";
import { Socials } from "./Socials";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getLocation } from "@/lib/actions";
import { getCodeServer } from "@/lib/serverUtils/getCode";
import { getLocationsByCode, getPageData } from "@/actions/Getdata";
import { VideoPlayer } from "./VideoPlayer";
export default async function HomeBanner({ data = {} }) {
  let key = 0;
  let res;
  try {
    //TODO:  getLocationsByCode
    res = await getLocationsByCode();
    key = key + 1;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="">
      <div className=" w-[99.19vw] after:bg-[linear-gradient(180deg,rgba(245,245,245,0)0%,#F5F5F5)] after:absolute after:z-[-1]   max-sm:h-[clamp(745px,60vmax,1335px)]  max-sm:after:h-[clamp(745px,60vmax,1335px)] h-[clamp(850px,60vmax,1335px)] lg:aspect-video after:h-[clamp(850px,60vmax,1335px)]  after:top-0  after:w-[99.19vw]">
        <VideoPlayer
          key={
            (res &&
              res.data &&
              res.data.video &&
              res.data.video.original_url) ||
            "https://venturi.gitwork.tech/storage/videos/-e78b-4017-9db2-5f993aaf3743.mp4"
          }
          res={res}
        />
        <MaxWidthWrapper className={" absolute lg:relative  max-w-[1473px]  "}>
          {data && !data["main-heading"] && (
            <div className="lg:absolute z-10  w-full sm:max-w-[clamp(200px,70vw,1026px)] lg:max-w-[clamp(200px,45vw,1026px)] font-[lust-text] leading-[clamp(18px,12vw,110px)] text-[clamp(18px,12vw,110px)] sm:leading-[clamp(18px,8vw,110px)] sm:text-[clamp(18px,8vw,110px)]  lg:text-[clamp(18px,5vw,110px)] lg:leading-[clamp(18px,5vw,110px)] lg:-translate-x-[20%] lg:left-[20%]  mt-[120px] lg:mt-[15%] ">
              <p>
                Connecting <span className="text-[#9E76E9]">great minds</span>,
                igniting success
              </p>
            </div>
          )}
          {data && data["main-heading"] && (
            <div
              className="lg:absolute z-10  w-full sm:max-w-[clamp(200px,70vw,1026px)] lg:max-w-[clamp(200px,45vw,1026px)] font-[lust-text] leading-[clamp(18px,12vw,110px)] text-[clamp(18px,12vw,110px)] sm:leading-[clamp(18px,8vw,110px)] sm:text-[clamp(18px,8vw,110px)]  lg:text-[clamp(18px,5vw,110px)] lg:leading-[clamp(18px,5vw,110px)] lg:-translate-x-[20%] lg:left-[20%]  mt-[120px] lg:mt-[15%] "
              dangerouslySetInnerHTML={{ __html: data["main-heading"] }}
            />
          )}
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
            {data && (
              <div className=" font-semibold mt-10 font-AntarcticanMonoSemiBold">
                {data["sub-heading"] || "Unlocking Tech Talent"}
              </div>
            )}
            {data && (
              <div className=" font-ArticulateMedium mt-6">
                {data["description"] ||
                  " It takes expertise to find people who will bring an idea,                project or strategy to life – and make it bigger than you               thought possible. We should know. It&apos;s in our DNA. We place                incredible tech talent where it&apos;s needed most, from                startups to global corporations."}
              </div>
            )}
            {data && (
              <Link
                href={"/about"}
                className={cn(buttonVariants(), "uppercase mt-10 sm:mt-20")}
              >
                {data["btn-text"] || "find out more +"}
              </Link>
            )}
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
