import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";

export default function Header() {
  return (
    <MaxWidthWrapper>
      <div className=" flex justify-between items-center ">
        <div className="  ">
          <Image src={"/logo.svg"} width={228} height={50} />
        </div>
        <div>
          <ul className="max-lg:hidden flex text-[clamp(14,2vw,18px)]  items-center font-AntarcticanMonoMedium gap-8  uppercase">
            <li>About</li>
            <li>join us</li>
            <li>insights</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
