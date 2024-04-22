import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({ className, children }) {
  return (
    <div
      className={cn(
        "w-full px-5 sm:px-10 max-w-screen-maxScreenSize mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
