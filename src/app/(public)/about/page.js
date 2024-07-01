import { getPageData } from "@/actions/Getdata";
import AboutBanner from "@/components/AboutBanner";
import BringUsOn from "@/components/BringUsOn";
import Evolution from "@/components/Evolution";
import ExploreNext from "@/components/ExploreNext";
import HomeBanner from "@/components/HomeBanner";
import Medals from "@/components/Medals";
import OurClients from "@/components/OurClients";
import OurCustomers from "@/components/OurCustomers";
import OurSector from "@/components/OurSectors";
import OurTeam from "@/components/OurTeam";
import OurTeamsWrapper from "@/components/OurTeamsWrapper";
import TailoredRecuritment from "@/components/TailoredRecruitment";
import TrendingJobs from "@/components/TrendingJobs";

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
export default async function Home() {
  let pageData;
  try {
    pageData = await getPageData({ pageName: "about" });
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <AboutBanner data={(pageData && pageData["about-banner"]) ?? {}} />
      <Evolution data={(pageData && pageData["our-story"]) ?? {}} />

      <OurTeamsWrapper />
      <OurSector data={(pageData && pageData["our-sectors"]) ?? {}} />
      <OurTeamsWrapper
        isGlobal
        heading={
          <>
            Meet <br className=" max-sm:hidden" />
            Our
            <br className=" sm:hidden" />
            <span className=" text-input"> Global</span> Team
          </>
        }
      />

      <OurClients data={(pageData && pageData["our-clients"]) ?? {}} />
      {/* <Medals /> */}
    </>
  );
}
