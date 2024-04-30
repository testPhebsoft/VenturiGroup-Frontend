import AboutBanner from "@/components/AboutBanner";
import BringUsOn from "@/components/BringUsOn";
import Evolution from "@/components/Evolution";
import ExploreNext from "@/components/ExploreNext";
import HomeBanner from "@/components/HomeBanner";
import OurClients from "@/components/OurClients";
import OurCustomers from "@/components/OurCustomers";
import OurSector from "@/components/OurSectors";
import OurTeam from "@/components/OurTeam";
import TailoredRecuritment from "@/components/TailoredRecruitment";
import TrendingJobs from "@/components/TrendingJobs";

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
export default async function Home() {
  return (
    <main>
      <AboutBanner />
      <Evolution />
      <OurTeam />
      <OurSector />
      <OurClients />
    </main>
  );
}
