import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";

export default function RecruitmentSteps({ data }) {
  return (
    <MaxWidthWrapper className="w-full py-10 ">
      {data && (
        <h2 className=" text-[clamp(24px,4.5vw,36px)] font-[lust-text] max-md:text-center ">
          {data["heading"] ?? "The recruitment steps"}
        </h2>
      )}
      {data && data["step-one"] && (
        <div
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className=" grid grid-cols-1 max-md:block mt-10 md:grid-cols-2 max-md:snap-x  max-md:snap-mandatory max-md:overflow-x-scroll max-md:whitespace-nowrap lg:grid-cols-3 gap-x-5 gap-y-10"
        >
          <RecruitmentStep
            heading={data["step-one"]["heading"] ?? "Introduction"}
            text={
              data["step-one"]["description"] ??
              "Whether you&apos;ve reached out or we&apos;ve approached you, our first      step is to understand your ambitions. Tell us where you see your future      and how we can help."
            }
          />
          <RecruitmentStep
            image="/search.jpg"
            number="02"
            heading={data["step-two"]["heading"] ?? "Search"}
            text={
              data["step-two"]["description"] ??
              "We&apos;ll work proactively on your behalf. This includes                speaking with businesses who share your ambitions and scoping                out opportunities based on what you&apos;ve told us.             "
            }
          />
          <RecruitmentStep
            image="/interview.jpg"
            number="03"
            heading={data["step-three"]["heading"] ?? "Interview"}
            text={
              data["step-three"]["description"] ??
              "Our focus turns to the interview process. We&apos;ll prepare you       for any online or face-to-face meetings. We&apos;ll also provide       feedback and answer any questions you have."
            }
          />
          <RecruitmentStep
            image="/offer.jpg"
            number="04"
            heading={data["step-four"]["heading"] ?? "Offer & negotation"}
            text={
              data["step-four"]["description"] ??
              "We&apos;ll assist with the negotiation process and make sure                everything runs as smoothly as possible. Our goal is for you to                have a clear route to your new role."
            }
          />
          <RecruitmentStep
            image="/onboarding.jpg"
            number="05"
            heading={data["step-five"]["heading"] ?? "Onboarding"}
            text={
              data["step-five"]["description"] ??
              "  The onboarding process is crucial. We make it seamless by                navigating your notice period, removing any hurdles and working                in tandem with your needs."
            }
          />
          <RecruitmentStep
            image="/embeding.jpg"
            number="06"
            heading={data["step-six"]["heading"] ?? "Embedding"}
            text={
              data["step-six"]["description"] ??
              "  The journey with Venturi doesn&apos;t stop there. We&apos;re                  here for as long as you need us. We&apos;ll make sure your new                role is right for you and check in from time to time."
            }
          />
        </div>
      )}
    </MaxWidthWrapper>
  );
}
function RecruitmentStep({
  image = "/Introduction.jpg",
  number = "01",
  heading = "Introduction",
  text = (
    <>
      Whether you&apos;ve reached out or we&apos;ve approached you, our first
      step is to understand your ambitions. Tell us where you see your future
      and how we can help.
    </>
  ),
}) {
  return (
    <div className=" whitespace-normal  relative max-md:inline-block snap-start  max-md:w-[90%]  rounded-3xl">
      <div className="relative w-full  aspect-square  max-md:max-w-[90%]   md:max-w-[clamp(217px,43vw,408px)]  rounded-3xl">
        <Image
          fill
          src={image}
          alt={image}
          className=" object-cover rounded-3xl  filter    brightness-50   "
        />
      </div>
      <div className=" flex flex-col gap-3 absolute top-0 pt-10 px-10 pb-10  h-full">
        <p className="text-primary  font-AntarcticanMonoSemiBold">{number}</p>
        <h3 className=" text-[clamp(24px,4.5vw,36px)] font-[lust-text] text-white">
          {" "}
          {heading}
        </h3>
        <div className=" flex flex-1 items-end text-white font-ArticulateMedium">
          <p className="max-md:w-[90%]">{text}</p>
        </div>
      </div>
    </div>
  );
}
