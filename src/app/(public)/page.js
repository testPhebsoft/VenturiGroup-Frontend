function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
export default async function Home() {
  return <main>Home</main>;
}
