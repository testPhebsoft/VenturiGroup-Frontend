import { getCategories, getPageData } from "@/actions/Getdata";
import { InsightsNavs } from "./InsightsNavs";

export default async function Layout({ children }) {
  let res;

  let pageData;
  try {
    pageData = await getPageData({ pageName: "insights" });
    console.log(pageData);
  } catch (error) {
    console.log(error);
  }

  try {
    res = await getCategories();
    res = res.data;
    res = [{ slug: "insights", name: "All" }].concat(res);
  } catch (e) {}

  return (
    <>
      {res && res.length !== 0 && (
        <InsightsNavs
          data={(pageData && pageData["main-heading"]) ?? {}}
          categories={res}
        />
      )}
      {children}
    </>
  );
}
