import { getJobs, getJobsInternal } from "@/actions/Getdata";
import TrendingJobs from "./TrendingJobs";

export default async function TrendingJobsWrapper({ isInternal, label }) {
  let res;

  try {
    if (!isInternal) res = await getJobs();
    if (isInternal) {
      res = await getJobsInternal();

      res.data = res.data.map((job) => ({
        ...job,
        company: { company_name: job.company_name },
      }));
      console.log(res);
    }
    console.log(res);
    res = res.data;
  } catch (error) {}
  return (
    res &&
    res.length !== 0 && (
      <TrendingJobs data={res && res} label={label && label} />
    )
  );
}
