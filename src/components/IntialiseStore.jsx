"use client";

import { useLocationStore } from "@/store/locationStore";
import { useEffect } from "react";

export default function InitStoreFunctions() {
  const initializeLocationCode = useLocationStore(
    (state) => state.initializeLocationCode
  );
  useEffect(() => {
    const run = async () => await initializeLocationCode();
    run();
  }, [initializeLocationCode]);
  return;
}
