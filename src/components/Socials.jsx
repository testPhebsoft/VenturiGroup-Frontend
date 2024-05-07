import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Socials({ className, ...props }) {
  return (
    <div className={cn("flex gap-5   items-center  ", className)}>
      <a
        target="_blank"
        tabIndex={0}
        href={"https://www.instagram.com/"}
        className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  "
      >
        <Image className="  " alt="Instagram" fill src="/instagram.svg" />
      </a>
      <a
        target="_blank"
        tabIndex={0}
        href={"https://www.linkedin.com/"}
        className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  "
      >
        <Image alt="Linkedin" height={20} width={20} src="/LinkedIn.svg" />
      </a>
      <a
        target="_blank"
        tabIndex={0}
        href={"https://twitter.com/"}
        className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  "
      >
        <Image alt="twitter" height={20} width={20} src="/twitter.svg" />
      </a>
      <a
        target="_blank"
        tabIndex={0}
        href={"https://www.youtube.com/"}
        className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  "
      >
        <Image alt="youtube" height={20} width={20} src="/youtube.svg" />
      </a>
      <a
        target="_blank"
        tabIndex={0}
        href={"https://www.facebook.com/"}
        className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  "
      >
        <Image alt="facebook" height={20} width={20} src="/facebook.svg" />
      </a>
    </div>
  );
}
