import HomeBanner from "@/components/HomeBanner";

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
export default async function Home() {
  // await sleep(10000);
  return (
    <main>
      <HomeBanner />
    </main>
  );
}
