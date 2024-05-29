import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button, buttonVariants } from "./ui/button";
import { Languages } from "./Languages";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import { cn } from "@/lib/utils";
import { getLocations } from "@/actions/Getdata";

export default async function Header() {
  let locations;
  let LocationsData;
  try {
    locations = await getLocations();
    if (locations && locations.data && locations.length !== 0) {
      LocationsData = locations.data.map((location) => location.code);
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <div
      className={
        "mt-10 mb-[-90px]  px-5 sm:px-10 w-full max-w-[1528px]  mx-auto z-50 relative"
      }
    >
      <div className=" flex justify-between items-center ">
        <div className="  ">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={228}
              height={50}
              alt="Logo of website"
            />
          </Link>
        </div>
        <div className=" flex gap-8">
          <ul className="max-[1070px]:hidden flex text-[clamp(14,2vw,18px)]  items-center font-AntarcticanMonoMedium gap-8  uppercase">
            <Link className="hover:text-input/50" href={"/about"}>
              {" "}
              <li>About</li>
            </Link>
            <Link className="hover:text-input/50" href={"/join-us"}>
              {" "}
              <li>join us</li>
            </Link>
            <Link className="hover:text-input/50" href={"/insights"}>
              {" "}
              <li>insights</li>
            </Link>
            <Link className="hover:text-input/50" href={"/contact"}>
              {" "}
              <li>contact</li>
            </Link>
          </ul>
          <Link
            href={"/i-am-candidate"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "max-md:hidden"
            )}
          >
            {" "}
            I’m a candidate{" "}
          </Link>
          <HeaderMenu className={"min-[1070px]:hidden"} />
          <Languages
            data={LocationsData && LocationsData}
            className={"max-[1070px]:hidden"}
          />
        </div>
      </div>
    </div>
  );
}
