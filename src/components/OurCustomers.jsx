import MaxWidthWrapper from "./MaxWidthWraper";
import CustumCarousal from "./CustumCarousal";

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
      <MaxWidthWrapper className={""}>
        <CustumCarousal data={data} />
      </MaxWidthWrapper>
    </div>
  );
}
