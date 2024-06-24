import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";
import Link from "next/link";

export default function BringUsOn({ data }) {
  return (
    <div className="bg-background py-10 ">
      <MaxWidthWrapper className="flex gap-10 flex-col md:flex-row items-end w-full max-w-[496px]">
        <div className="relative w-full max-w-[753px] aspect-[1.56875] ">
          {" "}
          <Image fill src={"/WordBubbles.png"} alt="word bubbles" />
        </div>
        <div className="max-md:mr-auto w-full md:max-w-[496px]">
          {data && (
            <p
              dangerouslySetInnerHTML={{
                __html:
                  data["description"] ??
                  " Partner with us and find the people that make things happen. The            visionaries who unlock growth. Experienced leaders with technical            backgrounds. Disruptors looking for a new challenge. We&apos;ll help            you uncover incredible talent, whatever your hiring plans.",
              }}
              className="text-[16px]  "
            ></p>
          )}
          {data && (
            <Link
              target="_blank"
              tabIndex={0}
              href={"https://jcdqujpmxoo.typeform.com/to/A1l2iv9l"}
            >
              {" "}
              <Button className="uppercase mt-10">
                {data["btn-text"] || "make it happen +"}{" "}
              </Button>
            </Link>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
