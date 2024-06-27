import { getPageData } from "@/actions/Getdata";
import EmployeeRefral from "@/components/EmployeRefrel";
import ExploreNext from "@/components/ExploreNext";
import JoinUsBanner from "@/components/JoinUsBanner";
import OurBenifit from "@/components/OurBenifits";
import TabsWrapper from "@/components/TabsWraper";
import TrendingJobsWrapper from "@/components/TrendingJobsWrapper";

export default async function Page() {
  let pageData;
  try {
    pageData = await getPageData({ pageName: "joinus" });
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      <JoinUsBanner data={(pageData && pageData["joinus-banner"]) ?? {}} />

      <ExploreNext
        heading={
          (pageData && pageData["explore-next"]["heading"]) ?? "LIFE AT VENTURI"
        }
        heading2={pageData && pageData["explore-next"]["main-heading"]}
        text={pageData && pageData["explore-next"].description}
        buttonText={pageData && pageData["explore-next"]["btn-text"]}
      />
      <TabsWrapper />
      <OurBenifit data={(pageData && pageData["our-benifits"]) ?? {}} />

      <TrendingJobsWrapper isInternal label="Jobs at Venturi" />
      <EmployeeRefral
        data={(pageData && pageData["employee-refrel-scheme"]) ?? {}}
      />
    </div>
  );
}
