import Link from "next/link";
import { Button } from "./ui/button";

export default function EmployeeRefral({ data = {} }) {
  return (
    <div className="md:text-center px-10 flex flex-col  relative z-10 gap-10  ">
      {data && (
        <h2
          dangerouslySetInnerHTML={{
            __html:
              data["heading"] ??
              ' Employee <span class="text-input/50"> referral</span> scheme',
          }}
          className="font-[lust-text] mt-7 max-[839px]:text-[clamp(16px,10vw,48px)] max-[839px]:leading-[clamp(24px,10vw,51px)] text-[clamp(16px,3.2vw,51px)] leading-[clamp(24px,3.3vw,51px)] text-input font-light"
        ></h2>
      )}
      {data && (
        <p
          dangerouslySetInnerHTML={{
            __html:
              data["description"] ??
              "If you&apos;re passionate about connecting great minds and igniting          success, you belong here. In a thriving, inclusive environment that          puts people first",
          }}
          className="font-[lust-text]  font-light text-[clamp(18px,2.1vw,24px)] leading-[clamp(24px,5vw,36px)] mx-auto w-full max-w-[1011px]"
        ></p>
      )}
      {data && (
        <Link
          target="_blank"
          tabIndex={0}
          href="https://jcdqujpmxoo.typeform.com/to/A1l2iv9l"
        >
          <Button className="w-fit md:mx-auto uppercase">
            {data["btn-text"] || "contact us +"}
          </Button>
        </Link>
      )}
    </div>
  );
}
