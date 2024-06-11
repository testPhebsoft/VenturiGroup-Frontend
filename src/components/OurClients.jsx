import Image from "next/image";
import ImageStack from "./ImageStack";
import MaxWidthWrapper from "./MaxWidthWraper";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { getPartners } from "@/actions/Getdata";
import Link from "next/link";

export default async function OurClients() {
  let res;
  try {
    res = await getPartners();
    res = res.data;
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      {res && res.length !== 0 && (
        <div className="bg-background py-32  max-[984px]:pb-5">
          <MaxWidthWrapper
            className={"flex max-[984px]:flex-col  justify-between"}
          >
            {
              <div className="w-full  min-[984px]:max-w-[200px] max-[984px]:h-[500px] relative ">
                {res.length !== 0 &&
                  res[0] &&
                  renderClientTags(
                    res[0].logo.original_url,
                    res[0].partner_name,
                    "absolute max-[984px]:left-[25%]  left-[125%] top-[-15%]"
                  )}
                {res.length !== 0 &&
                  res[1] &&
                  renderClientTags(
                    res[1].logo.original_url,
                    res[1].partner_name,
                    "absolute max-[984px]:left-[30%] left-[60%] "
                  )}
                {res.length !== 0 &&
                  res[2] &&
                  renderClientTags(
                    res[2].logo.original_url,
                    res[2].partner_name,
                    "absolute max-[984px]:left-[30%] left-[130%] top-[25%]"
                  )}
                {res.length !== 0 &&
                  res[3] &&
                  renderClientTags(
                    res[3].logo.original_url,
                    res[3].partner_name,
                    "absolute left-[10%] top-[50%]"
                  )}
                {res.length !== 0 &&
                  res[4] &&
                  renderClientTags(
                    res[4].logo.original_url,
                    res[4].partner_name,
                    "absolute max-[984px]:left-[20%] left-[50%] top-[75%]"
                  )}
                {res.length == 0 && (
                  <div className="absolute  w-[200px] max-[984px]:left-[30%] left-[100%] top-[55%] ">
                    No Clients available!{" "}
                  </div>
                )}
              </div>
            }
            <div className=" min-[984px]:w-1/2    max-[984px]:w-full min-[984px]:max-w-[496px] flex flex-col gap-10 ">
              <h3 className="text-[clamp(24px,9vw,36px)] font-[lust-text] font-light ">
                <span className=" text-input/50">Our </span> <br />
                clients
              </h3>
              <p className=" w-full">
                We&apos;re based in the UK, US, Germany and the Netherlands, but
                our clients can be found all over the world. The businesses we
                work with span multiple sectors and industries. What connects
                all of them – be it a global B2C brand or a deep tech startup –
                is the need for exceptional talent. 
              </p>
              <Link href={"/contact"}>
                <Button className="uppercase w-fit">find out more +</Button>{" "}
              </Link>
            </div>
          </MaxWidthWrapper>
        </div>
      )}
    </>
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
        <Image
          className="  object-cover rounded-full"
          fill
          src={src}
          alt={src}
        />
      </div>
      <div>{name}</div>
    </div>
  );
}
