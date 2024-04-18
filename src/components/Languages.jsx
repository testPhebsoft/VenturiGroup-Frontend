"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Languages({ data = ["UK", "US", "DE", "NL"], className }) {
  const [selected, setSelected] = useState(data[0]);
  return (
    <div className={cn(" flex gap-2 items-center", className)}>
      {data.map((item) => (
        <div
          key={item}
          data-selected={selected === item}
          className=" data-[selected=true]:before:absolute cursor-pointer data-[selected=true]:font-AntarcticanMonoBold  font-AntarcticanMonoMedium data-[selected=true]:opacity-100  data-[selected=true]:before:-inset-2 data-[selected=true]:before:m-auto data-[selected=true]:before:block data-[selected=true]:before:size-[50px] data-[selected=true]:before:rounded-full  data-[selected=true]:before:bg-[#1A1B1D1A] opacity-50  relative bg-transparent rounded-full px-2 py-1 "
          onClick={() => setSelected(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
