import HomeBanner from "@/components/HomeBanner";
import OurCustomers from "@/components/OurCustomers";
import OurSector from "@/components/OurSectors";
import TailoredRecuritment from "@/components/TailoredRecruitment";

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
export default async function Home() {
  await sleep(2000);
  return (
    <main>
      <HomeBanner />
      <TailoredRecuritment />
      <OurSector />
      <OurCustomers />
    </main>
  );
}
