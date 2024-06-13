"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSocials } from "@/actions/Getdata";

export function Socials({ className, ...props }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const get = async () => {
      try {
        let data = await getSocials();
        data = data.data.social_icons;
        setData(data);
        console.log(data);
      } catch (error) {}
    };
    get();
  }, []);
  return (
    <div className={cn("flex gap-5   items-center  ", className)}>
      {data.length !== 0 &&
        data.map((item) => (
          <a
            target="_blank"
            tabIndex={0}
            href={(item.value && item.value) ?? ""}
            className="relative before:absolute before:block before:rounded-full before:size-8 before:-inset-[6px] before:bottom-[50%] size-5   before:bg-[#1A1B1D1A]  "
          >
            <Image
              className="  "
              alt={item.name ?? ""}
              fill
              src={(item.icon && item.icon.url && item.icon.url) ?? ""}
            />
          </a>
        ))}
    </div>
  );
}
