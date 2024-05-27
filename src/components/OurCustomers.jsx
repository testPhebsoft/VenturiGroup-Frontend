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
        <CustumCarousal data={data} />
      </MaxWidthWrapper>
    </div>
  );
}
