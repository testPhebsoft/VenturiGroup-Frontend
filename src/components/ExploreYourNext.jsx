import Link from "next/link";
import { Button } from "./ui/button";

export default function ExploreYourNext({ data = {} }) {
  return (
    <div className="w-full max-w-[677px] py-10 px-5 sm:px-10 mx-auto flex flex-col gap-5">
      {data && (
        <h2
          dangerouslySetInnerHTML={{
            __html:
              data["heading"] ??
              'Explore your next chapter with        <span class=" text-primary">Venturi</span>',
          }}
          className=" md:text-center  text-[clamp(24px,3.2vw,62px)] leading-[clamp(28px,4vw,72px)] font-[lust-text]"
        ></h2>
      )}
      {data && (
        <p
          dangerouslySetInnerHTML={{
            __html:
              data["description"] ??
              "Speak to us about taking the next step in your career and igniting your success.",
          }}
          className="md:text-center"
        ></p>
      )}
      {data && (
        <Link
          target="_blank"
          tabIndex={0}
          className=" w-fit md:mx-auto"
          href="https://jcdqujpmxoo.typeform.com/to/A1l2iv9l"
        >
          {" "}
          <Button className="w-fit md:mx-auto uppercase">
            {data["btn-text"] || "get in touch +"}
          </Button>
        </Link>
      )}
    </div>
  );
}
