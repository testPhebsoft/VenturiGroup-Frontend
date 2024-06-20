import MaxWidthWrapper from "./MaxWidthWraper";
import CustumCarousal from "./CustumCarousal";
import { getTestimonials } from "@/actions/Getdata";

export default async function OurCustomers({ type = "client" }) {
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
    console.log("Tryinf to Fetch");
    res = await getTestimonials();
    console.log(res, "Fetched testimonials");
    data = res.data;
    data = data.filter((item) => item.type == type);
    // console.log(data.length);
    console.log(data, "asddddddddddddddddddddddddd");
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      {data && data.length > 0 && (
        <div className="bg-background py-[50px]">
          <MaxWidthWrapper className={""}>
            <CustumCarousal type={type} data={data && data} />
          </MaxWidthWrapper>
        </div>
      )}
    </>
  );
}
