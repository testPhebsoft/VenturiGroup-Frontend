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
      let includedLanguages;
      try {
        includedLanguages = data.data
          .map((lang) =>
            lang.code == "US"
              ? "en"
              : lang.code == "GB"
              ? "en-GB"
              : lang.code.toLowerCase()
          )
          .join(",");
        console.log(includedLanguages);
      } catch (error) {
        console.error("Error while handling data.data:", error);
      }

      // includedLanguages = "de,en,nl,en-gb";

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
      script.id = "google_translateScript";
      script.type = "text/javascript";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.setAttribute("strategy", "afterInteractive");
      console.log(!document.querySelectorAll("#google_translateScript"));

      document.head.appendChild(script);

      window.googleTranslateElementInit = googleTranslateElementInit;
    };

    run();
  }, []);

  // useEffect(() => {}, []);
  return;
}
