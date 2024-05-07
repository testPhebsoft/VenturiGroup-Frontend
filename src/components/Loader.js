import { cn } from "@/lib/utils";

export function Loader({ className }) {
  return (
    <div
      className={cn(
        "h-[100vh] w-full flex justify-center items-center ",
        className
      )}
    >
      <div className="h-fit overflow-hidden">
        {/* //TODO convert to Imagegit */}
        <img
          className=" animate-slide-up  "
          src="/logo.svg"
          alt="Logo of website"
        />{" "}
      </div>
    </div>
  );
}
