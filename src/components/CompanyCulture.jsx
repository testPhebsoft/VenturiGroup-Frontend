"use client";
import Image from "next/image";
import { TabContent, TabHeader, Tabs } from "./Tabs";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWraper";
import { useMediaQuery } from "./hooks/useMediaQuery";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CompanyCulture() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  console.log("isDesktop", isDesktop);
  if (isDesktop) {
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
  } else if (isDesktop === false) {
    return (
      <>
        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger
              className={cn(
                `flex justify-between items-center  decoration-transparent py-2 px-4 cursor-pointer border w-full border-black border-b-1 border-t-0 border-r-0 border-l-0  h-full   font-[text-lust] text-[clamp(24px,5vw,36px)]`
              )}
            >
              Company culture
            </AccordionTrigger>
            <AccordionContent>
              <RenderContent className={"max-w-[1200px] px-5 mt-5"} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger
              className={cn(
                `flex justify-between items-center  decoration-transparent py-2 px-4 cursor-pointer border w-full border-black border-b-1 border-t-0 border-r-0 border-l-0  h-full   font-[text-lust] text-[clamp(24px,5vw,36px)]`
              )}
            >
              Earning potential & rewards
            </AccordionTrigger>
            <AccordionContent>
              <RenderContent className={"max-w-[1200px] px-5 mt-5"} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger
              className={cn(
                `flex justify-between items-center  decoration-transparent py-2 px-4 cursor-pointer border w-full border-black border-b-1 border-t-0 border-r-0 border-l-0  h-full   font-[text-lust] text-[clamp(24px,5vw,36px)]`
              )}
            >
              Career progression
            </AccordionTrigger>
            <AccordionContent>
              <RenderContent className={"max-w-[1200px] px-5 mt-5"} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger
              className={cn(
                `flex justify-between items-center  decoration-transparent py-2 px-4 cursor-pointer border w-full border-black border-b-1 border-t-0 border-r-0 border-l-0  h-full   font-[text-lust] text-[clamp(24px,5vw,36px)]`
              )}
            >
              The Venturi approach
            </AccordionTrigger>
            <AccordionContent>
              <RenderContent className={"max-w-[1200px] px-5 mt-5"} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    );
  }
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
    <div
      className={cn(
        "flex flex-col gap-5 w-full  max-md:items-center max-w-[623px]",
        className
      )}
    >
      <div
        className={cn("w-full aspect-[1.85] relative   rounded-xl", className)}
      >
        <Image fill src={imagesrc} className="rounded-xl" alt={imagesrc} />
      </div>
      <p className=" font-ArticulateMedium">{text}</p>
    </div>
  );
}
