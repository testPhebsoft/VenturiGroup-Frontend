import ImageStack from "./ImageStack";

export default function OurClients() {
  const myImages = [
    "/redkite.png",
    "/moneysupermarket.png",
    "/cinch.png",
    "/bet365.png",
    "/smart.png",
  ];
  return (
    <div>
      <ImageStack images={myImages} />
    </div>
  );
}
