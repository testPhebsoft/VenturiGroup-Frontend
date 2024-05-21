import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

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

export function LoaderTwo({ className }) {
  return (
    <div
      className={cn(
        "h-[100vh] w-full flex justify-center items-center ",
        className
      )}
    >
      <Loader2 className="size-5 animate-spin" />
    </div>
  );
}
