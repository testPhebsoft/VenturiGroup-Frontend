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

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.setAttribute("strategy", "afterInteractive");
    console.log(script);
    document.head.appendChild(script);
  }, []);
  return;
}
