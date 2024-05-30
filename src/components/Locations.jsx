"use client";
import { cn } from "@/lib/utils";
import { useLocationStore } from "@/store/locationStore";
import { useEffect, useState } from "react";

export function Locations({ className, data = ["UK", "US", "DE", "NL"] }) {
  const selectedLocationCode = useLocationStore(
    (state) => state.selectedLocationCode
  );
  const setSelectedLocationCode = useLocationStore(
    (state) => state.setSelectedLocationCode
  );

  // console.log(selectedLocationCode);
  return (
    <div className={cn(" flex gap-2 items-center", className)}>
      {data.map((item, index) => (
        <div
          key={index}
          data-selected={selectedLocationCode === item.code}
          className=" data-[selected=true]:before:absolute cursor-pointer data-[selected=true]:font-AntarcticanMonoBold  font-AntarcticanMonoMedium data-[selected=true]:opacity-100  data-[selected=true]:before:-inset-2 data-[selected=true]:before:m-auto data-[selected=true]:before:block data-[selected=true]:before:size-[50px] data-[selected=true]:before:rounded-full  data-[selected=true]:before:bg-[#1A1B1D1A] opacity-50  relative bg-transparent rounded-full px-2 py-1 "
          onClick={() => setSelectedLocationCode(item.code)}
        >
          {item.code}
        </div>
      ))}
    </div>
  );
}
