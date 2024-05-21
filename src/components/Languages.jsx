"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Flag from "react-world-flags";
export function Languages({
  data = [
    <Flag key={"gb"} className="size-5" code={"gb"} />,
    <Flag key={"us"} className="size-5" code={"us"} />,
    <Flag key={"de"} className="size-5" code={"de"} />,
    <Flag key={"nl"} className="size-5" code={"nl"} />,
  ],
  className,
}) {
  const [selected, setSelected] = useState(0);
  return (
    <div className={cn(" flex gap-2 items-center", className)}>
      {data.map((item, index) => (
        <div
          key={index}
          data-selected={selected === index}
          className=" data-[selected=true]:before:absolute cursor-pointer data-[selected=true]:font-AntarcticanMonoBold  font-AntarcticanMonoMedium data-[selected=true]:opacity-100  data-[selected=true]:before:-inset-2 data-[selected=true]:before:m-auto data-[selected=true]:before:block data-[selected=true]:before:size-[50px] data-[selected=true]:before:rounded-full  data-[selected=true]:before:bg-[#1A1B1D1A] opacity-50  relative bg-transparent rounded-full px-2 py-1 "
          onClick={() => setSelected(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
