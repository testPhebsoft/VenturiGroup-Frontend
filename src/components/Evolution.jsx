import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWraper";
import { Button } from "./ui/button";

export default function Evolution({ data }) {
  return (
    <MaxWidthWrapper>
      <div>
        <h2 className="uppercase whitespace-nowrap   font-AntarcticanMonoSemiBold">
          Our story
        </h2>
        <h1 className="mt-10 max-[839px]:text-[clamp(16px,10vw,48px)] max-[839px]:leading-[clamp(24px,10vw,51px)] text-[clamp(16px,3.2vw,51px)] leading-[clamp(24px,3.3vw,51px)] text-input/50 font-[lust-text]">
          {" "}
          The <span className=" text-input">evolution</span>
          <br />
          of Venturi
        </h1>
      </div>
      {data && (
        <div className=" ml-auto mt-10 max-w-[1050px] text-[clamp(12px,2.1vw,16px)] flex flex-wrap w-full gap-10">
          <p
            dangerouslySetInnerHTML={{
              __html:
                (data["description"] && data["description"]["part-one"]) ??
                " We believe when you reduce pressure in your business, like the            pressure of being under-resourced, you can move at speed. Similar to            the Venturi effect, our approach is to narrow tech&apos;s            ever-widening talent pool down to the individuals we deem            best-in-class. They&apos;re who we look for. This philosophy has            driven our mission from the beginning. Alongside a people-first            approach, it&apos;s what sets us apart.            <br />            <br />            When we set out, our ambitions were simple – to be a great place to            work and a great company to work with. In a crowded space,            that&apos;s meant striving for excellence, and being obsessed with            other people&apos;s ambitions. Whether that&apos;s the ambitions of            our clients, candidates or our own teams – they&apos;re what matter            most to us.",
            }}
            className="w-full min-[1050px]:max-w-[496px]"
          ></p>
          <div className="w-full min-[1050px]:max-w-[496px]">
            <p
              dangerouslySetInnerHTML={{
                __html:
                  (data["description"] && data["description"]["part-two"]) ??
                  " But we haven&apos;t got to where we&apos;ve got to on this belief              alone. Our approach is based on our in-depth understanding of the              tech sector – from trends to changing skill sets. It&apos;s helped              us to create a fast and seamless onboarding process for the              businesses we work with. One that alleviates hiring pressures to              make a bigger impact. It&apos;s evolved over more than 15 years              and will continue to evolve alongside the tech landscape.              <br />              <br />              Fast-forward to today and we continue to proudly support our              clients, candidates and our own people. Over the years, we&apos;ve              been industry accredited, won numerous awards and have garnered a              revered reputation in our field. This is a testament to our people              and the care and passion they have for what we do. They make the              difference.",
              }}
            ></p>
            <Link href={"/join-us"}>
              {" "}
              <Button className=" uppercase w-fit mt-10">
                {data["btn-text"] || "join us +"}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </MaxWidthWrapper>
  );
}
