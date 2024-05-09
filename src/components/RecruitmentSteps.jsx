import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWraper";

export default function RecruitmentSteps() {
  return (
    <MaxWidthWrapper className="w-full py-10 ">
      <h2 className=" text-[clamp(24px,4.5vw,36px)] font-[lust-text] max-md:text-center ">
        The recruitment steps
      </h2>
      <div className=" grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
        <RecruitmentStep />
        <RecruitmentStep
          image="/search.jpg"
          number="02"
          heading="Search"
          text={
            <>
              {" "}
              We&apos;ll work proactively on your behalf. This includes speaking
              with businesses who share your ambitions and scoping out
              opportunities based on what you&apos;ve told us.
            </>
          }
        />
        <RecruitmentStep
          image="/interview.jpg"
          number="03"
          heading="Interview"
          text={
            <>
              Our focus turns to the interview process. We&apos;ll prepare you
              for any online or face-to-face meetings. We&apos;ll also provide
              feedback and answer any questions you have.  
            </>
          }
        />
        <RecruitmentStep
          image="/offer.jpg"
          number="04"
          heading="Offer & negotation"
          text={
            <>
              We&apos;ll assist with the negotiation process and make sure
              everything runs as smoothly as possible. Our goal is for you to
              have a clear route to your new role.
            </>
          }
        />
        <RecruitmentStep
          image="/onboarding.jpg"
          number="05"
          heading="Onboarding"
          text={
            <>
              The onboarding process is crucial. We make it seamless by
              navigating your notice period, removing any hurdles and working in
              tandem with your needs.
            </>
          }
        />
        <RecruitmentStep
          image="/embeding.jpg"
          number="06"
          heading="Embedding"
          text={
            <>
              The journey with Venturi doesn&apos;t stop there. We&apos;re here
              for as long as you need us. We&apos;ll make sure your new role is
              right for you and check in from time to time.
            </>
          }
        />
      </div>
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
    <div className=" relative  overflow-hidden rounded-3xl">
      <div className="relative w-full max-md:aspect-video aspect-square md:max-w-[clamp(217px,43vw,408px)]  rounded-3xl">
        <Image
          fill
          src={image}
          className=" object-cover rounded-3xl  filter    brightness-50   "
        />
      </div>
      <div className=" flex flex-col gap-3 md:absolute top-0 pt-10 md:px-10 pb-10 md:h-full">
        <p className="text-primary  font-AntarcticanMonoSemiBold">{number}</p>
        <h3 className=" text-[clamp(24px,4.5vw,36px)] font-[lust-text] md:text-white">
          {" "}
          {heading}
        </h3>
        <div className=" flex flex-1 md:items-end md:text-white font-ArticulateMedium">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
