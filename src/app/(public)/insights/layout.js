import { getCategories } from "@/actions/Getdata";
import { InsightsNavs } from "./InsightsNavs";

export default async function Layout({ children }) {
  let categories;
  try {
    categories = await getCategories();
  } catch (e) {}

  return (
    <>
      <div className=" h-[400px] flex justify-center items-end  ">
        <h1 className="text-[clamp(64px,15vw,121px)] text-center font-[lust-text] w-fit mx-auto">
          Our <span className="text-primary">insights</span>
        </h1>
      </div>
      <InsightsNavs categories={categories} />
      {children}
    </>
  );
}
