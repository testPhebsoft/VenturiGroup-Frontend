export default function Loading() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center ">
      <div className="h-fit overflow-hidden">
        <img className=" animate-slide-up  " src="/logo.svg" />{" "}
      </div>
    </div>
  );
}
