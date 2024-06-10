"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getLocations } from "@/actions/Getdata";
import { getLangCode } from "@/lib/serverUtils/getCode";

const GoogleTranslate = () => {
  const pathname = usePathname();

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

      function googleTranslateElementInit() {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: selectedLanguage,
            includedLanguages,
          },
          "google_translate_element"
        );
      }

      // Check if the script already exists before adding
      if (!document.getElementById("google_translateScript")) {
        const script = document.createElement("script");
        script.id = "google_translateScript";
        script.type = "text/javascript";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.setAttribute("strategy", "afterInteractive");

        document.head.appendChild(script);

        window.googleTranslateElementInit = googleTranslateElementInit;
      }
    };

    run();

    // Handle removing the script on route change
    const handleRouteChange = () => {
      const script = document.getElementById("google_translateScript");
      if (script) {
        script.remove();
      }
    };

    // Cleanup when the pathname changes
    return handleRouteChange;
  }, [pathname]);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
