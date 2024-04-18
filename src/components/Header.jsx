import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";
import { Languages } from "./Languages";
import Link from "next/link";

export default function Header() {
  return (
    <MaxWidthWrapper className={"mt-10 mb-[-90px] z-50 relative"}>
      <div className=" flex justify-between items-center ">
        <div className="  ">
          <Image
            src={"/logo.svg"}
            width={228}
            height={50}
            alt="Logo of website"
          />
        </div>
        <div className=" flex gap-8">
          <ul className="max-[1070px]:hidden flex text-[clamp(14,2vw,18px)]  items-center font-AntarcticanMonoMedium gap-8  uppercase">
            <Link className="hover:text-primary-foreground/60" href={"/about"}>
              {" "}
              <li>About</li>
            </Link>
            <Link
              className="hover:text-primary-foreground/60"
              href={"/join-us"}
            >
              {" "}
              <li>join us</li>
            </Link>
            <Link
              className="hover:text-primary-foreground/60"
              href={"/insights"}
            >
              {" "}
              <li>insights</li>
            </Link>
            <Link
              className="hover:text-primary-foreground/60"
              href={"/contact"}
            >
              {" "}
              <li>contact</li>
            </Link>
          </ul>
          <Button variant="outline"> I’m a candidate </Button>
          <Languages className={"max-[1070px]:hidden"} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
