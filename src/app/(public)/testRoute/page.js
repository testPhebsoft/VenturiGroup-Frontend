import {
  Print,
  getCategories,
  getCategoriesBlog,
  getLocations,
  getLocationsByCode,
  getPartners,
  getTeamMembersByLocations,
  getTestimonials,
} from "@/actions/Getdata";
import { Final } from "./Final";
import { CustumCarousal } from "./testComponent";

export default async function Page() {
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

  let res = await getCategoriesBlog({ slug: "blogs" });
  // console.log(res);
  // let res = await getLocationsByCode();
  // console.log(res);
  // try {
  //   let locations = await getLocations();
  //   console.log(locations);
  // } catch (e) {}
  return (
    <div className="pt-40  max-w-screen-maxScreenSize mx-auto">
      {/* <Final data={data} /> */}
    </div>
  );
}
