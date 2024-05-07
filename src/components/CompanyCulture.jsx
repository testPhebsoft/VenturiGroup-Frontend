"use client";
import Image from "next/image";
import { TabContent, TabHeader, Tabs } from "./Tabs";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWraper";

export default function CompanyCulture() {
  return (
    <MaxWidthWrapper className={"py-10"}>
      <Tabs>
        <TabHeader
          className={"w-full  h-full max-w-[500px] "}
          label="Company culture"
        />
        <TabContent>
          <RenderContent />
        </TabContent>
        <TabHeader label="Earning potential & rewards" />
        <TabContent>
          {" "}
          <RenderContent />
        </TabContent>
        <TabHeader label="Career progression" />
        <TabContent>
          {" "}
          <RenderContent />
        </TabContent>
        <TabHeader label="The Venturi approach" />
        <TabContent>
          {" "}
          <RenderContent />
        </TabContent>
      </Tabs>
    </MaxWidthWrapper>
  );
}

function RenderContent({
  className,
  imagesrc = "/tabImage.png",
  text = (
    <>
      {" "}
      We put inclusivity and caring for every team member at the heart of what
      we do. That way everyone feels welcome and supported – not just by us but
      by each other. We&apos;ve also created an environment where you can
      achieve above and beyond your goals.
    </>
  ),
}) {
  return (
    <div className="flex flex-col gap-5 w-full max-w-[623px]">
      <div
        className={cn("w-full aspect-[1.85] relative   rounded-xl", className)}
      >
        <Image fill src={imagesrc} className="rounded-xl" />
      </div>
      <p>{text}</p>
    </div>
  );
}
