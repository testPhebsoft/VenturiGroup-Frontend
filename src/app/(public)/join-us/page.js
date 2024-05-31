import EmployeeRefral from "@/components/EmployeRefrel";
import ExploreNext from "@/components/ExploreNext";
import JoinUsBanner from "@/components/JoinUsBanner";
import OurBenifit from "@/components/OurBenifits";
import TabsWrapper from "@/components/TabsWraper";
import TrendingJobsWrapper from "@/components/TrendingJobsWrapper";

export default function Page() {
  return (
    <div>
      <JoinUsBanner />

      <ExploreNext
        heading="LIFE AT VENTURI"
        heading2={
          <>
            An <span className="max-lg:text-primary">inclusive,caring </span>
            team
          </>
        }
        text={
          <>
            People thrive when they feel supported, looked after and listened
            to. That&apos;s what you can expect at Venturi. Our people are
            everything. So we do everything possible to help them be their best.
            Our culture matters to us. It&apos;s what sets us apart.
          </>
        }
      />
      <TabsWrapper />
      <OurBenifit />

      <TrendingJobsWrapper label="Jobs at Venturi" />
      <EmployeeRefral />
    </div>
  );
}
