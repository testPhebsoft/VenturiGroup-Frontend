import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({ className, children }) {
  return (
    <div className={cn("w-full max-w-screen-maxScreenSize mx-auto", className)}>
      {children}
    </div>
  );
}
