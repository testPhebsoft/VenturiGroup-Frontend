import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";

export default function HomeBanner() {
  return (
    <div className="">
      <div className=" after:bg-[linear-gradient(180deg,rgba(245,245,245,0)0%,#F5F5F5)] after:absolute after:z-0 w-full relative h-full aspect-video after:h-full after:top-0  after:w-full">
        <video
          className="fixed w-full z-0    bg-[linear-gradient(180deg,rgba(245,245,245,0)0%,#F5F5F5)]"
          loop
          muted
          autoPlay
        >
          <source src="https://s3-figma-videos-production-sig.figma.com/video/1360250505037508142/TEAM/c763/de54/-e78b-4017-9db2-5f993aaf3743?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fO2NJPkatf3DvC2Op5oohC0Ts-9SPKX2xaThhgwe5ble-80ingqNzi23GNMZsaLit4NeP80AGsBlFXwzGiOxOXs8CMUi~4Y6mxI6FF2EALSZtk3xp9JFSouWMMR4TVQPZ3VgWr7dBWZXvZs2AKSmNT4LkFuouny-nKhZCCK-mtU-bS2U3yVLYbmsq4Q6suGzKi0MmBB9LC36~fbqt3X9VeWKZEa004JG-EaXB0pS1TOI-ihG5GwXc~7fcLaUeq~jP7yE14S6v8KDx9X59EMZJiD-vqpdkaWW4~JvdxXYfQTYOXD~uh2yzsmFlGzXRcCKMWJSYsUvvzgkkJ4gORX4RA__" />
        </video>
        <MaxWidthWrapper className={"relative z-10 "}>
          <div className="absolute max-w-[clamp(400px,45vw,1026px)] text-[clamp(18px,6vw,121px)] leading-[clamp(18px,6vw,121px)] -translate-x-[20%] left-[20%] mt-[15%] ">
            {" "}
            Conneting great minds,{" "}
            <span className="text-[#9E76E9]">igniting success</span>
          </div>
          <div className="absolute max-w-[clamp(100px,45vw,496px)]  right-5 mt-[40%]">
            <div className=" font-semibold font-AntarcticanMonoSemiBold">
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
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
// background: linear-gradient(180deg, rgba(245, 245, 245, 0) 0%, #F5F5F5 100%);
