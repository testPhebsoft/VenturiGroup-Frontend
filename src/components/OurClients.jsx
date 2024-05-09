import Image from "next/image";
import ImageStack from "./ImageStack";
import MaxWidthWrapper from "./MaxWidthWraper";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function OurClients() {
  const myImages = [
    "/redkite.png",
    "/moneysupermarket.png",
    "/cinch.png",
    "/bet365.png",
    "/smart.png",
  ];
  return (
    <div className="bg-background py-32  max-[984px]:pb-5">
      <MaxWidthWrapper className={"flex max-[984px]:flex-col  justify-between"}>
        <div className="w-full  min-[984px]:max-w-[200px] max-[984px]:h-[500px] relative ">
          {renderClientTags(
            "/moneysupermarket.png",
            "Money supermarket",
            "absolute max-[984px]:left-[25%]  left-[125%] top-[-15%]"
          )}
          {renderClientTags("/cinch.png", "Cinch ", "absolute left-[60%] ")}
          {renderClientTags(
            "/bet365.png",
            "Bet 365",
            "absolute max-[984px]:left-[30%] left-[130%] top-[25%]"
          )}
          {renderClientTags(
            "/smart.png",
            "Smart Pension",
            "absolute left-[10%] top-[50%]"
          )}
          {renderClientTags(
            "/redkite.png",
            "Redkite",
            "absolute max-[984px]:left-[50%] left-[150%] top-[75%]"
          )}
        </div>
        <div className=" min-[984px]:w-1/2    max-[984px]:w-full min-[984px]:max-w-[496px] flex flex-col gap-10 ">
          <h3 className="text-[clamp(24px,9vw,36px)] font-[lust-text] font-light ">
            <span className=" text-input/50">Our </span> <br />
            clients
          </h3>
          <p className=" w-full">
            We&apos;re based in the UK, US, Germany and the Netherlands, but our
            clients can be found all over the world. The businesses we work with
            span multiple sectors and industries. What connects all of them – be
            it a global B2C brand or a deep tech startup – is the need for
            exceptional talent. 
          </p>
          <Button className="uppercase w-fit">find out more +</Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
function renderClientTags(
  src = "/moneysupermarket.png",
  name = "Money supermarket",
  className
) {
  return (
    <div
      className={cn(
        "flex items-center w-fit hover:scale-105  whitespace-nowrap   duration-500  gap-4",
        className
      )}
    >
      <div className=" relative size-[69px] ">
        <Image className=" rounded-full" fill src={src} alt={src} />
      </div>
      <div>{name}</div>
    </div>
  );
}
