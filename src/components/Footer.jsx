import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWraper";
import Image from "next/image";
import { Socials } from "./Socials";
import { getCodeServer } from "@/lib/serverUtils/getCode";

export default async function Footer({
  data = [
    {
      city: "manchester",
      addressLine:
        "The Globe Building  WPP Campus  1st Floor  1 New Quay Street  Manchester  M3 4BN",
      number: "+44 161 850 1155",
    },
    {
      city: "NYC",
      addressLine: "101 Greenwich St.New York NY 10006",
      number: "+1 646 918 5111",
    },
    {
      city: "Düsseldorf",
      addressLine: "Graf-Adolf-Platz 15 40213 Düsseldorf",
      number: "+49 151/23 23 79 19",
    },
    {
      city: "amsterdam",
      addressLine: "Prins Hendrikkade 21 - E 1012 TL Amsterdam",
      number: "+99 999 999",
    },
  ],
}) {
  const code = await getCodeServer();
  return (
    <div className="bg-background pt-20 pb-10">
      <MaxWidthWrapper className={" relative"}>
        <div className="h-[80px] mb-20 lg:hidden"></div>
        <div className="flex flex-wrap lg:justify-between justify-center gap-y-10 ">
          <div className=" w-full flex flex-col max-lg:text-center max-lg:items-center max-w-[clamp(191px,2vw,235px)]">
            <p className=" font-AntarcticanMonoSemiBold text-primary uppercase">
              Links
            </p>
            <ul className=" font-ArticulateMedium mt-10 flex flex-col gap-4">
              <Link className="hover:text-input/60" href={"/about"}>
                {" "}
                <li>About</li>
              </Link>
              <Link className="hover:text-input/60" href={"/join-us"}>
                {" "}
                <li>Join us</li>
              </Link>
              <Link className="hover:text-input/60" href={"/insights"}>
                {" "}
                <li>Insights</li>
              </Link>
              <Link
                target="_blank"
                tabIndex={0}
                className="hover:text-input/60"
                href={"https://jcdqujpmxoo.typeform.com/to/A1l2iv9l"}
              >
                {" "}
                <li>Contact</li>
              </Link>
              <Link className="hover:text-input/60" href={"/i-am-candidate"}>
                {" "}
                <li>I’m a candidate</li>
              </Link>
            </ul>
          </div>
          {data.map((item) => (
            <RenderAddress key={item.city} {...item} />
          ))}
        </div>
        <div className="flex flex-col max-lg:items-center">
          <p className="text-input mt-10">Follow us</p>
          <Socials className="mt-10 ">
            <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
              <Image className="  " alt="Instagram" fill src="/instagram.svg" />
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
              <Image alt="twitter" height={20} width={20} src="/twitter.svg" />
            </div>
            <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
              <Image alt="youtube" height={20} width={20} src="/youtube.svg" />
            </div>
            <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
              <Image
                alt="facebook"
                height={20}
                width={20}
                src="/facebook.svg"
              />
            </div>
          </Socials>
          <div className=" mt-10 flex w-full max-lg:max-w-[250px]  justify-between gap-5 ">
            <Link className=" lg:hidden hover:text-input/60" href={"/cookies"}>
              Cookies
            </Link>
            <Link
              className="hover:text-input/60 lg:hidden"
              href={"/privacy-policy"}
            >
              Privacy policy
            </Link>
            {code === "DE" && (
              <Link
                className="hover:text-input/60 lg:hidden"
                href={"/impressum"}
              >
                Impressum
              </Link>
            )}
          </div>
          <div className=" mt-10 flex w-full max-lg:max-w-[500px] justify-between max-lg:justify-center gap-5 ">
            <p className="text-input">Copyright © 2024 Venturi Group</p>
            <Link className=" max-lg:hidden" href={"/cookies"}>
              {" "}
              <p className="text-input hover:text-input/60 max-lg:hidden ">
                Cookies
              </p>
            </Link>
            <Link
              className="hover:text-input/60 max-lg:hidden"
              href={"/privacy-policy"}
            >
              {" "}
              <p className="text-input hover:text-input/60 max-lg:hidden">
                Privacy policy
              </p>
            </Link>
            {code === "DE" && (
              <Link
                className="text-input hover:text-input/60 max-lg:hidden"
                href={"/impressum"}
              >
                Impressum
              </Link>
            )}
            <p className="w-[366px] max-lg:hidden"></p>
          </div>
        </div>

        <div className=" absolute max-lg:top-0 w-[clamp(200px,82vw,366px)] lg:bottom-10  max-lg:left-[50%]  max-lg:translate-x-[-50%] lg:right-10 ">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={366}
              height={80}
              alt="Logo of website"
            />
          </Link>
        </div>
        <div className="flex max-lg:hidden mt-10  ">
          <div className="border h-0 border-[#1A1B1D4D] w-full "></div>
          <div className="border-2 border-primary w-full max-w-[366px] mt-[-2px] h-0 "></div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

const RenderAddress = ({
  city = "manchester",
  addressLine = "The Globe Building  WPP Campus  1st Floor  1 New Quay Street  Manchester  M3 4BN",
  number = "+44 161 850 1155",
}) => {
  return (
    <div className="flex flex-col  gap-2 w-full max-lg:text-center max-lg:items-center max-w-[clamp(191px,2vw,235px)]">
      <p className="text-primary font-AntarcticanMonoSemiBold uppercase">
        {city}
      </p>
      <p className="text-input mt-10 w-full max-w-[clamp(191px,2vw,235px)] ">
        {addressLine}
      </p>
      <div className="text-input mt-10 h-full items-end flex flex-1">
        <p className=" h-fit  "> {number}</p>
      </div>
    </div>
  );
};
