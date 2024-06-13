import Link from "next/link";
import { Button } from "./ui/button";

export default function ExploreYourNext() {
  return (
    <div className="w-full max-w-[677px] py-10 px-5 sm:px-10 mx-auto flex flex-col gap-5">
      <h2 className=" md:text-center  text-[clamp(24px,3.2vw,62px)] leading-[clamp(28px,4vw,72px)] font-[lust-text]">
        Explore your next chapter with{" "}
        <span className=" text-primary">Venturi</span>
      </h2>
      <p className="md:text-center">
        {" "}
        Speak to us about taking the next step in your career and igniting your
        success.
      </p>

      <Link className=" w-fit md:mx-auto" href="/contact">
        {" "}
        <Button className="w-fit md:mx-auto uppercase">get in touch +</Button>
      </Link>
    </div>
  );
}
