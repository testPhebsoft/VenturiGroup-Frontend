import { getPageData } from "@/actions/Getdata";
import CandidateBanner from "@/components/CandidteBanner";
import ExploreYourNext from "@/components/ExploreYourNext";
import OurClients from "@/components/OurClients";
import OurCustomers from "@/components/OurCustomers";
import PuttingPeople from "@/components/PuttingPeople";
import RecruitmentSteps from "@/components/RecruitmentSteps";
import TrendingJobsWrapper from "@/components/TrendingJobsWrapper";

export default async function Page() {
  let pageData;
  try {
    pageData = await getPageData({ pageName: "iamcandidate" });
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="w-full">
      <CandidateBanner data={(pageData && pageData["banner"]) ?? {}} />
      <PuttingPeople data={(pageData && pageData["people-first"]) ?? {}} />
      <OurCustomers type="candidate" />
      <TrendingJobsWrapper />
      <RecruitmentSteps
        data={(pageData && pageData["recruitment-steps"]) ?? {}}
      />
      <OurClients data={(pageData && pageData["our-clients"]) ?? {}} />

      <ExploreYourNext
        data={(pageData && pageData["explore-your-next"]) ?? {}}
      />
    </div>
  );
}
