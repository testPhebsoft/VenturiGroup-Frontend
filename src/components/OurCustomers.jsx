import MaxWidthWrapper from "./MaxWidthWraper";
import CustumCarousal from "./CustumCarousal";
import { getTestimonials } from "@/actions/Getdata";

export default async function OurCustomers() {
  let res;
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
  ];
  try {
    res = await getTestimonials();
    data = res.data;
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      {data && (
        <div className="bg-background py-[50px]">
          <MaxWidthWrapper className={""}>
            <CustumCarousal data={data && data} />
          </MaxWidthWrapper>
        </div>
      )}
    </>
  );
}
