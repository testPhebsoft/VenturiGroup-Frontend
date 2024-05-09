import MaxWidthWrapper from "@/components/MaxWidthWraper";
import Image from "next/image";

export default function Page({ params }) {
  let post = params.post;
  return (
    <MaxWidthWrapper className={""}>
      <p className=" text-[clamp(12px,1.1vw,16px)] font-semibold  font-AntarcticanMonoSemiBold">
        Posted over 1 year ago • by Daryl Gorman
      </p>
      <h2 className=" mt-10 w-full max-w-[754px] text-[clamp(24px,3.2vw,36px)] leading-[clamp(28px,4vw,40px)] font-[lust-text]">
        15 Inspirational Emerging Technology & Business Podcasts
      </h2>
      <div className=" mt-10 relative w-full aspect-[2.2]">
        <Image
          fill
          src={"/blogfull.jpg"}
          className="object-cover rounded-3xl"
        />
      </div>

      <div className="flex max-md:gap-10 max-md:flex-col justify-between mt-20">
        <div className="flex w-full max-w-[236px] flex-col gap-5">
          <RenderSideDetails />
          <RenderSideDetails heading=" Written by" text=" Daryl Gorman" />
          <RenderSideDetails heading="Published" text="Over 1 year ago" />
        </div>
        <div className="w-full max-w-[1008px]">
          <h1 className="  w-full  text-[clamp(24px,3.2vw,36px)] leading-[clamp(28px,4vw,40px)] font-[lust-text]">
            Technology is always advancing, if you don&apos;t advance with it,
            your competition will end up leaving you behind. With advances in
            Artificial Intelligence, Machine Learning, Augmented Reality and the
            Internet of Things there are numerous new technologies available to
            solve any issue that your business may be having.
          </h1>
          <div className="flex flex-col w-full gap-10 mt-10">
            <p>
              Emerging technologies, if used appropriately, can be used to reach
              new goals. These technologies can be used to help organisations
              scale rapidly, minimise infrastructure investment, automate
              long-standing processes, enrich their data sets and reach new
              capabilities.
            </p>
            <p>
              But instead of telling you what businesses can do, we&apos;ve gone
              and asked business leaders to demonstrate the capabilities of
              their Emerging Technology, listen to these 15 podcasts and see
              what new heights you can reach.
            </p>
          </div>
          <h2 className=" mt-10 w-full max-w-[754px] text-[clamp(24px,3.2vw,36px)] leading-[clamp(28px,4vw,40px)] font-[lust-text]">
            1. Dev Stories: The Coding Journey with Ashley Firth | Octopus
            Energys
          </h2>
          <div className="flex flex-col w-full gap-10 mt-10">
            <p>
              Ashley Firth built and leads the Front-end department at Octopus
              Energy, crafting sites and internal tools, building new products
              and campaigns, and expanding into other countries. Their aim is to
              combat climate change, use technology to build a better standard
              of energy supplier, and make renewable energy more affordable for
              everyone. In May 2020, Octopus Energy became the 15th UK tech
              “unicorn” after achieving a valuation of over £1 billion
            </p>
            <p>
              Ashley has also written a book: &apos;Practical Web Inclusion &
              Accessibility&apos;, a new book, designed as a practical guide to
              access needs, which is a huge passion for Ashley.
            </p>
          </div>
          <p> Audio</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );

  function RenderSideDetails({ heading = "Category", text = "Blog" }) {
    return (
      <div>
        <p className=" text-[clamp(12px,1.1vw,16px)] font-semibold text-primary  font-AntarcticanMonoSemiBold">
          {heading}
        </p>
        <p className=" text-[clamp(12px,1.1vw,16px)] font-semibold font-AntarcticanMonoSemiBold">
          {text}
        </p>
      </div>
    );
  }
}
