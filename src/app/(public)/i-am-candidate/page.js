import CandidateBanner from "@/components/CandidteBanner";
import ExploreNext from "@/components/ExploreNext";
import ExploreYourNext from "@/components/ExploreYourNext";
import OurClients from "@/components/OurClients";
import PuttingPeople from "@/components/PuttingPeople";
import RecruitmentSteps from "@/components/RecruitmentSteps";
import TrendingJobs from "@/components/TrendingJobs";

export default function Page() {
  return (
    <div className="w-full">
      <CandidateBanner />
      <PuttingPeople />
      <TrendingJobs />
      <RecruitmentSteps />

      <OurClients />

      <ExploreYourNext />
    </div>
  );
}
