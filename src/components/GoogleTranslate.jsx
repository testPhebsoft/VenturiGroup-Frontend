"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getLocations } from "@/actions/Getdata";
import { getLangCode } from "@/lib/serverUtils/getCode";
import { setCookies } from "@/lib/actions";

const GoogleTranslate = () => {
  const pathname = usePathname();
  // thsi effeect runs two times to set the google translate element
  useEffect(() => {
    const run = async () => {
      let data = await getLocations();

      // const selectedLanguage = await getLangCode();
      let includedLanguages;
      try {
        includedLanguages = data.data
          .map((lang) =>
            lang.code === "US"
              ? "en"
              : lang.code === "GB"
              ? "en"
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
            pageLanguage: "en",
            includedLanguages,
          },
          "google_translate_element"
        );
      }

      //TODO : testing the google translate element

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
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      const element = document.querySelectorAll(".goog-te-combo");

      if (element.length > 0) {
        [...element].forEach((el, index) => {
          if (el.value !== "en") {
            el.value = "en";
            el.dispatchEvent(new Event("change"));

            setCookies("googtrans", `/en/en`);

            console.log("Value change by Route to English");
          }
        });
      }
    };

    // Call the handleRouteChange function when the pathname changes
    handleRouteChange();

    return () => {
      handleRouteChange();
    };
  }, [pathname]);
  //   return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
