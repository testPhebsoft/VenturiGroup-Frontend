import { Final } from "./Final";
import { CustumCarousal } from "./testComponent";

export default function Page() {
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
  const ScrollableContent = () => {
    return (
      <div className="h-full flex  shrink-0 whiflex-col items-center justify-center">
        <p className="text-xl mb-4">First Page Content</p>
        <p className="text-xl mb-4">Second Page Content</p>
        <p className="text-xl mb-4">Third Page Content</p>
      </div>
    );
  };
  return (
    <div className="pt-40  max-w-screen-maxScreenSize mx-auto">
      <Final data={data} />
    </div>
  );
}
