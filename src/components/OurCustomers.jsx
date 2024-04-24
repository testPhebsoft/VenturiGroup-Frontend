import MaxWidthWrapper from "./MaxWidthWraper";
import Quote from "./Quote";
import { CustumCarousal } from "./CustumCarousal";

export default function OurCustomers() {
  let data = [
    {
      image: "/customer1.jpeg",
    },
    {
      image: "/customer2.jpeg",
    },
    {
      image: "/customer3.jpeg",
    },
    {
      image: "/customer1.jpeg",
    },
    {
      image: "/customer2.jpeg",
    },
    {
      image: "/customer3.jpeg",
    },
    {
      image: "/customer1.jpeg",
    },
    {
      image: "/customer2.jpeg",
    },
    {
      image: "/customer1.jpeg",
    },
    {
      image: "/customer2.jpeg",
    },
    {
      image: "/customer3.jpeg",
    },

    {
      image: "/customer3.jpeg",
    },
  ];
  return (
    <div className="bg-background py-[50px]">
      <MaxWidthWrapper className={"flex gap-10   flex-col lg:flex-row"}>
        <div className="w-full lg:max-w-[420px]">
          <h3 className="text-[clamp(24px,9vw,36px)] font-[lust-text] font-light ">
            <span className=" text-input/50">Our </span> <br />
            customers
          </h3>
          <Quote className="mt-16" />
          <p className="mt-10 text-[clamp(24px,9vw,36px)] font-[lust-text] font-light w-full ">
            Venturi <span className="text-primary"> excels</span> in tech
            recruitment, matching top talent to leading companies with{" "}
            <span className="text-primary"> precision</span> and{" "}
            <span className="text-primary"> efficiency</span>.
          </p>
        </div>
        <CustumCarousal data={data} />
      </MaxWidthWrapper>
    </div>
  );
}
