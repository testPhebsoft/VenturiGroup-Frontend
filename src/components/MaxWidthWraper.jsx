import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({ className, children, ...props }) {
  return (
    <div
      {...props}
      className={cn(
        "w-full px-5 sm:px-10 max-w-screen-maxScreenSize mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
