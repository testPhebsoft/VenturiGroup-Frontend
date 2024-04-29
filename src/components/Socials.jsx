import Image from "next/image";
import { cn } from "@/lib/utils";

export function Socials({ className, ...props }) {
  return (
    <div className={cn("flex gap-5   items-center  ", className)}>
      <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
        <Image className="  " alt="Instagram" fill src="/instagram.svg" />
      </div>
      <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
        <Image alt="Linkedin" height={20} width={20} src="/LinkedIn.svg" />
      </div>
      <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
        <Image alt="twitter" height={20} width={20} src="/twitter.svg" />
      </div>
      <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
        <Image alt="youtube" height={20} width={20} src="/youtube.svg" />
      </div>
      <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
        <Image alt="facebook" height={20} width={20} src="/facebook.svg" />
      </div>
    </div>
  );
}
