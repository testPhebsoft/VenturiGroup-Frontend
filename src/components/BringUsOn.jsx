import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";

export default function BringUsOn() {
  return (
    <div className="bg-background py-10 ">
      <MaxWidthWrapper className="flex gap-10 flex-col md:flex-row items-end w-full max-w-[496px]">
        <div className="relative w-full max-w-[753px] aspect-[1.56875] ">
          {" "}
          <Image fill src={"/WordBubbles.png"} alt="word bubbles" />
        </div>
        <div className="max-md:mr-auto w-full md:max-w-[496px]">
          <p className="text-[16px]  ">
            Partner with us and find the people that make things happen. The
            visionaries who unlock growth. Experienced leaders with technical
            backgrounds. Disruptors looking for a new challenge. We&apos;ll help
            you uncover incredible talent, whatever your hiring plans.
          </p>
          <Button className="uppercase mt-10">make it happen + </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
