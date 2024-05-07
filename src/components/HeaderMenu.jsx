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
import { Socials } from "./Socials";

export default function HeaderMenu({ ...props }) {
  return (
    <Sheet {...props}>
      <SheetTrigger className="min-[1070px]:hidden">
        {" "}
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="h-full w-full flex flex-col overflow-y-auto "
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
            {" "}
            <Link className="hover:text-input/60" href={"/about"}>
              {" "}
              <SheetClose>
                <li>About</li>{" "}
              </SheetClose>
            </Link>{" "}
            <Link className="hover:text-input/60" href={"/join-us"}>
              <SheetClose>
                {" "}
                <li>Join us</li>
              </SheetClose>
            </Link>
            <SheetClose>
              {" "}
              <Link className="hover:text-input/60" href={"/insights"}>
                {" "}
                <li>Insights</li>
              </Link>
            </SheetClose>
            <SheetClose>
              {" "}
              <Link className="hover:text-input/60" href={"/contact"}>
                {" "}
                <li>Contact</li>
              </Link>{" "}
            </SheetClose>
            <SheetClose>
              {" "}
              <Link className="hover:text-input/60" href={"/iamcandidate"}>
                {" "}
                <li> I’m a candidate </li>
              </Link>{" "}
            </SheetClose>
            <Socials className="flex gap-5 items-center mt-[5vh] " />
            <div className="w-full border"> </div>
            <Languages />
            <div className="w-full border"> </div>
          </ul>
        </SheetHeader>
        <SheetFooter
          className={
            "text-[12px]  sm:flex-col sm:justify-end flex items-baseline flex-1"
          }
        >
          Copyright © 2024 Venturi Group
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
