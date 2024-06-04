import { getCategories } from "@/actions/Getdata";
import { InsightsNavs } from "./InsightsNavs";

export default async function Layout({ children }) {
  let res;

  try {
    res = await getCategories();
    res = res.data;
    res = [{ slug: "insights", name: "All" }].concat(res);
  } catch (e) {}

  return (
    <>
      {res && res.length !== 0 && <InsightsNavs categories={res} />}
      {children}
    </>
  );
}
