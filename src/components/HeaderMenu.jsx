"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Languages } from "./Languages";
import Image from "next/image";

export default function HeaderMenu({ ...props }) {
  return (
    <Sheet {...props}>
      <SheetTrigger>
        {" "}
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-full flex flex-col overflow-y-auto "
      >
        <SheetHeader>
          <SheetTitle>
            <div className="  ">
              <Link href={"/"}>
                <Image
                  src={"/primaryLogo.svg"}
                  width={152}
                  height={32}
                  alt="Logo of website"
                />
              </Link>
            </div>
          </SheetTitle>
          <ul className="flex flex-col text-[20px] pt-10  items-start justify-between font-AntarcticanMonoMedium gap-8  uppercase">
            <SheetClose>
              {" "}
              <Link className="hover:text-input/60" href={"/about"}>
                {" "}
                <li>About</li>
              </Link>
            </SheetClose>
            <SheetClose>
              {" "}
              <Link className="hover:text-input/60" href={"/join-us"}>
                {" "}
                <li>join us</li>
              </Link>
            </SheetClose>
            <SheetClose>
              {" "}
              <Link className="hover:text-input/60" href={"/insights"}>
                {" "}
                <li>insights</li>
              </Link>
            </SheetClose>
            <SheetClose>
              {" "}
              <Link className="hover:text-input/60" href={"/contact"}>
                {" "}
                <li>contact</li>
              </Link>{" "}
            </SheetClose>
            <SheetClose>
              {" "}
              <Link className="hover:text-input/60" href={"/iamcandidate"}>
                {" "}
                <li> I’m a candidate </li>
              </Link>{" "}
            </SheetClose>
            <div className="flex gap-5 items-center mt-[5vh] ">
              <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                <Image
                  className="  "
                  alt="Instagram"
                  fill
                  src="/instagram.svg"
                />
              </div>
              <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                <Image
                  alt="Linkedin"
                  height={20}
                  width={20}
                  src="/LinkedIn.svg"
                />
              </div>
              <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                <Image
                  alt="twitter"
                  height={20}
                  width={20}
                  src="/twitter.svg"
                />
              </div>
              <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                <Image
                  alt="youtube"
                  height={20}
                  width={20}
                  src="/youtube.svg"
                />
              </div>
              <div className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  ">
                <Image
                  alt="facebook"
                  height={20}
                  width={20}
                  src="/facebook.svg"
                />
              </div>
            </div>
            <div className="w-full border"> </div>

            <Languages />
            <div className="w-full border"> </div>
          </ul>
        </SheetHeader>
        <SheetFooter className={"text-[12px]  flex items-baseline flex-1"}>
          Copyright © 2024 Venturi Group
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
