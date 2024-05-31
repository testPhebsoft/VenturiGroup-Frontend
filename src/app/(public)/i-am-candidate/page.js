import CandidateBanner from "@/components/CandidteBanner";
import ExploreYourNext from "@/components/ExploreYourNext";
import OurClients from "@/components/OurClients";
import PuttingPeople from "@/components/PuttingPeople";
import RecruitmentSteps from "@/components/RecruitmentSteps";
import TrendingJobsWrapper from "@/components/TrendingJobsWrapper";

export default function Page() {
  return (
    <div className="w-full">
      <CandidateBanner />
      <PuttingPeople />
      <TrendingJobsWrapper />
      <RecruitmentSteps />

      <OurClients />

      <ExploreYourNext />
    </div>
  );
}
