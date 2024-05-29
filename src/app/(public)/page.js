import BringUsOn from "@/components/BringUsOn";
import ExploreNext from "@/components/ExploreNext";
import HomeBanner from "@/components/HomeBanner";
import OurClients from "@/components/OurClients";
import OurCustomers from "@/components/OurCustomers";
import OurSector from "@/components/OurSectors";
import TailoredRecuritment from "@/components/TailoredRecruitment";
import TrendingJobs from "@/components/TrendingJobs";

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
export default async function Home() {
  return (
    <main>
      <HomeBanner />
      <TailoredRecuritment />
      <OurSector />
      <OurCustomers />
      <ExploreNext />
      <OurClients />
      <TrendingJobs />
      <BringUsOn />
    </main>
  );
}
