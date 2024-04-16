function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
export default async function Home() {
  await sleep(3000);
  return <main>Home</main>;
}
