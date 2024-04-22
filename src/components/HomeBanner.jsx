import Image from "next/image";
import LeadinLight from "./LeadingLight";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";
import SLope from "./slope";
import HorizenatalLine from "./horizentalLine";

export default function HomeBanner() {
  return (
    <div>
      <div className="  after:bg-[linear-gradient(180deg,rgba(245,245,245,0)0%,#F5F5F5)] after:absolute after:z-[-1] w-full  h-[60vmax] aspect-video after:h-[60vmax] after:top-0  after:w-full">
        <video
          className="fixed w-full z-[-2]  h-[100vh] object-cover  bg-[linear-gradient(180deg,rgba(245,245,245,0)0%,#F5F5F5)]"
          loop
          muted
          autoPlay
        >
          <source src="https://s3-figma-videos-production-sig.figma.com/video/1360250505037508142/TEAM/c763/de54/-e78b-4017-9db2-5f993aaf3743?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fO2NJPkatf3DvC2Op5oohC0Ts-9SPKX2xaThhgwe5ble-80ingqNzi23GNMZsaLit4NeP80AGsBlFXwzGiOxOXs8CMUi~4Y6mxI6FF2EALSZtk3xp9JFSouWMMR4TVQPZ3VgWr7dBWZXvZs2AKSmNT4LkFuouny-nKhZCCK-mtU-bS2U3yVLYbmsq4Q6suGzKi0MmBB9LC36~fbqt3X9VeWKZEa004JG-EaXB0pS1TOI-ihG5GwXc~7fcLaUeq~jP7yE14S6v8KDx9X59EMZJiD-vqpdkaWW4~JvdxXYfQTYOXD~uh2yzsmFlGzXRcCKMWJSYsUvvzgkkJ4gORX4RA__" />
        </video>
        <MaxWidthWrapper className={"relative  "}>
          <div className="absolute z-10 max-w-[clamp(400px,45vw,1026px)] font-[lust-text] text-[clamp(18px,6vw,121px)] leading-[clamp(18px,6vw,121px)] -translate-x-[20%] left-[20%] mt-[15%] ">
            {" "}
            Conneting <span className="text-[#9E76E9]">great minds</span>,
            igniting success
          </div>
          <div className="absolute max-w-[clamp(100px,45vw,496px)] z-10 right-5 mt-[clamp(30%,42vw,40%)]">
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
                />
              </div>
              <div className=" absolute bottom-[-25px] right-0 rounded-full overflow-hidden border border-black h-[48px] w-[48px] ">
                <Image
                  width={108}
                  height={108}
                  className="h-auto mt-[-20%]"
                  src="/avatar3.jpg"
                />
              </div>
              <div className=" absolute top-[-25px] right-[-23px] rounded-full overflow-hidden border border-black h-[48px] w-[48px] ">
                <Image
                  width={148}
                  height={148}
                  className="h-auto"
                  src="/avatar2.jpg"
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
            <Button className="uppercase mt-20">find out more +</Button>
          </div>
          <div className=" absolute mt-[40vmax] flex w-full max-w-[60%]">
            <p className=" font-AntarcticanMonoBook text-[16px] mt-[16px] h-fit rotate-90">
              Scroll{" "}
            </p>
            <div className="w-full ">
              <div className="flex gap-5 mt-[40%] mb-[calc(-40%-20px)] ml-10  items-center mt-10 ">
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
              <LeadinLight className="mb-[6px] max-w-[646px] w-full" />{" "}
            </div>
            <p className=" uppercase self-end ml-10  whitespace-nowrap   font-AntarcticanMonoMedium">
              {" "}
              TAILORED RECRUITMENT 
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="h-[16vmax] bg-background"></div>
    </div>
  );
}
// background: linear-gradient(180deg, rgba(245, 245, 245, 0) 0%, #F5F5F5 100%);
