"use client";

import { getLocations } from "@/actions/Getdata";
import { getLangCode } from "@/lib/serverUtils/getCode";
import { useLanguageStore } from "@/store/LanguageStore";
import { useLocationStore } from "@/store/locationStore";
import { useEffect } from "react";

export default function InitStoreFunctions() {
  const initializeLocationCode = useLocationStore(
    (state) => state.initializeLocationCode
  );

  const initializeLanguageCode = useLanguageStore(
    (state) => state.initializeLanguageCode
  );

  useEffect(() => {
    const run = async () => await initializeLocationCode();

    run();
  }, [initializeLocationCode]);

  useEffect(() => {
    const run = async () => await initializeLanguageCode();

    run();
  }, [initializeLanguageCode]);

  useEffect(() => {
    const run = async () => {
      let data = await getLocations();

      const selectedLanguage = await getLangCode();
      const includedLanguages = data.data
        .map((lang) => lang.code.toLowerCase())
        .join(",");

      function googleTranslateElementInit() {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: selectedLanguage,
            includedLanguages,
          },
          "google_translate_element"
        );
      }

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.setAttribute("strategy", "afterInteractive");
      // console.log(script);
      document.head.appendChild(script);

      window.googleTranslateElementInit = googleTranslateElementInit;
    };

    run();
  }, []);

  // useEffect(() => {}, []);
  return;
}
