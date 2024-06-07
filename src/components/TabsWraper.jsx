import { getTabsLocation } from "@/actions/Getdata";
import CompanyCulture from "./CompanyCulture";

export default async function TabsWrapper() {
  let res;
  try {
    res = await getTabsLocation();
    res = res.data;
    // console.log("res", res);
  } catch (error) {}

  return res && res.length !== 0 && <CompanyCulture data={res} />;
}
