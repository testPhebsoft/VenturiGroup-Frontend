import { getPageData } from "@/actions/Getdata";
import BringUsOn from "@/components/BringUsOn";
import ExploreNext from "@/components/ExploreNext";
import HomeBanner from "@/components/HomeBanner";
import OurClients from "@/components/OurClients";
import OurCustomers from "@/components/OurCustomers";
import OurSector from "@/components/OurSectors";
import TailoredRecuritment from "@/components/TailoredRecruitment";
import TrendingJobsWrapper from "@/components/TrendingJobsWrapper";

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
export default async function Page() {
  let pageData;
  try {
    pageData = await getPageData();
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <HomeBanner data={(pageData && pageData["home-banner"]) ?? {}} />
      <TailoredRecuritment
        data={(pageData && pageData["tailored-recruitment"]) ?? {}}
      />
      <OurSector data={(pageData && pageData["our-sectors"]) ?? {}} />
      <OurCustomers />
      <ExploreNext
        heading={pageData && pageData["explore-next"].heading}
        heading2={pageData && pageData["explore-next"]["main-heading"]}
        text={pageData && pageData["explore-next"].description}
        buttonText={pageData && pageData["explore-next"]["btn-text"]}
      />
      <OurClients data={(pageData && pageData["our-clients"]) ?? {}} />
      <TrendingJobsWrapper
        data={(pageData && pageData["trending-jobs"]) ?? {}}
      />

      <BringUsOn data={(pageData && pageData["bringus-on"]) ?? {}} />
    </>
  );
}
