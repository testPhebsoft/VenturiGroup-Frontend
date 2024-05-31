import { getJobs } from "@/actions/Getdata";
import TrendingJobs from "./TrendingJobs";

export default async function TrendingJobsWrapper({ label }) {
  let res;

  try {
    res = await getJobs();
    console.log(res);
    res = res.data;
  } catch (error) {}
  return (
    res &&
    res.data &&
    res.data.length !== 0 && (
      <TrendingJobs data={res && res} label={label && label} />
    )
  );
}
