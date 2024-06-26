"use client";

import { getLocations } from "@/actions/Getdata";
import { getLangCode } from "@/lib/serverUtils/getCode";
import { useLanguageStore } from "@/store/LanguageStore";
import { useLocationStore } from "@/store/locationStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function InitStoreFunctions() {
  const initializeLocationCode = useLocationStore(
    (state) => state.initializeLocationCode
  );

  const initializeLanguageCode = useLanguageStore(
    (state) => state.initializeLanguageCode
  );

  useEffect(() => {
    initializeLocationCode();
  }, [initializeLocationCode]);

  useEffect(() => {
    initializeLanguageCode();
  }, [initializeLanguageCode]);

  return;
}
