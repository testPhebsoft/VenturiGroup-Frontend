import { getCategories } from "@/actions/Getdata";
import { InsightsNavs } from "./InsightsNavs";

export default async function Layout({ children }) {
  let categories;
  try {
    categories = await getCategories();
  } catch (e) {}

  return (
    <>
      <InsightsNavs categories={categories} />
      {children}
    </>
  );
}
