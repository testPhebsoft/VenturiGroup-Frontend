import Image from "next/image";
import LeadinLight from "./LeadingLight";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";
import SLope from "./slope";
import HorizenatalLine from "./horizentalLine";

export default function HomeBanner() {
  return (
    <div className="">
      <div className="  after:bg-[linear-gradient(180deg,rgba(245,245,245,0)0%,#F5F5F5)] after:absolute after:z-[-1] w-full  h-[100vmax] lg:h-[60vmax] lg:aspect-video lg:after:h-[60vmax] after:h-[100vmax] after:top-0  after:w-full">
        <video
          className="fixed w-full z-[-2]  h-[100vh] object-cover  bg-[linear-gradient(180deg,rgba(245,245,245,0)0%,#F5F5F5)]"
          loop
          muted
          autoPlay
        >
          <source src="https://s3-figma-videos-production-sig.figma.com/video/1360250505037508142/TEAM/c763/de54/-e78b-4017-9db2-5f993aaf3743?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fO2NJPkatf3DvC2Op5oohC0Ts-9SPKX2xaThhgwe5ble-80ingqNzi23GNMZsaLit4NeP80AGsBlFXwzGiOxOXs8CMUi~4Y6mxI6FF2EALSZtk3xp9JFSouWMMR4TVQPZ3VgWr7dBWZXvZs2AKSmNT4LkFuouny-nKhZCCK-mtU-bS2U3yVLYbmsq4Q6suGzKi0MmBB9LC36~fbqt3X9VeWKZEa004JG-EaXB0pS1TOI-ihG5GwXc~7fcLaUeq~jP7yE14S6v8KDx9X59EMZJiD-vqpdkaWW4~JvdxXYfQTYOXD~uh2yzsmFlGzXRcCKMWJSYsUvvzgkkJ4gORX4RA__" />
        </video>
        <MaxWidthWrapper className={" absolute lg:relative   "}>
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
        <div className="mt-[-500px]   max-lg:hidden  flex w-[100%] justify-around max-w-screen-maxScreenSize mx-auto">
          <div className=" mt-[-500px]  w-[50%] flex ">
            <p className=" ml-[-24px] font-AntarcticanMonoBook  text-[16px] mt-[16px] h-fit rotate-90">
              Scroll{" "}
            </p>
            <div className="w-full ">
              <div className="flex gap-5 mt-[40%] mb-[calc(-40%-20px)] ml-10  items-center  ">
                <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                  <Image
                    className="  "
                    alt="Instagram"
                    fill
                    src="/instagram.svg"
                  />
                </div>
                <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                  <Image
                    alt="Linkedin"
                    height={20}
                    width={20}
                    src="/LinkedIn.svg"
                  />
                </div>
                <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                  <Image
                    alt="twitter"
                    height={20}
                    width={20}
                    src="/twitter.svg"
                  />
                </div>
                <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                  <Image
                    alt="youtube"
                    height={20}
                    width={20}
                    src="/youtube.svg"
                  />
                </div>
                <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                  <Image
                    alt="facebook"
                    height={20}
                    width={20}
                    src="/facebook.svg"
                  />
                </div>
              </div>
              <LeadinLight className="mb-[6px]    w-full" />{" "}
            </div>
          </div>
          <p className="  w-[40%] uppercase self-end    whitespace-nowrap   font-AntarcticanMonoMedium">
            {" "}
            TAILORED RECRUITMENT
          </p>
        </div>
      </div>
    </div>
  );
}
