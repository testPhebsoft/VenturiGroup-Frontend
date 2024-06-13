"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getLocations } from "@/actions/Getdata";
import { getLangCode } from "@/lib/serverUtils/getCode";
import { deleteCooKies, setCookies } from "@/lib/actions";
import { useLanguageStore } from "@/store/LanguageStore";

const GoogleTranslate = () => {
  const pathname = usePathname();
  const selectedLangLocationCode = useLanguageStore(
    (state) => state.selectedLangLocationCode
  );
  const setSelectedLangLocationCode = useLanguageStore(
    (state) => state.setSelectedLangLocationCode
  );
  useEffect(() => {
    const handleChange = async () => {
      const elements = document.querySelector(".goog-te-combo");
      if (elements) {
        const langCode = await getLangCode();
        // elements.forEach((el) => {
        let newCode =
          langCode == "GB" ? "en" : langCode == "en-gb" ? "en" : langCode;
        console.log("newCode el", elements.value);
        if (elements.value !== newCode) {
          elements.value = newCode;
          let n = elements.value;
          console.log("Value change");

          elements.dispatchEvent(new Event("change"));
        }

        console.log("langCode", langCode, newCode);
        if (selectedLangLocationCode != langCode)
          setSelectedLangLocationCode(langCode);
        // });
      }
    };
    handleChange();
  }, [selectedLangLocationCode]);

  useEffect(() => {
    const handleChange = async () => {
      const elements = document.querySelectorAll(".goog-te-combo");

      if (elements.length > 0) {
        let langCode = await getLangCode();

        langCode =
          langCode == "GB" ? "en" : langCode == "en-gb" ? "en" : langCode;
        console.log(langCode);
        elements.forEach((el) => {
          console.log("el", el.value);
          if (el.value !== langCode) {
            el.value = langCode;
            el.dispatchEvent(new Event("change"));
            console.log("Value change");
            if (selectedLangLocationCode != langCode)
              setSelectedLangLocationCode(langCode);
          }
        });
      }
    };
    // handleChange();
    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          if (mutation.target.className == "goog-te-combo") {
            handleChange();
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);
  // thsi effeect runs two times to set the google translate element
  useEffect(() => {
    const run = async () => {
      let data = await getLocations();

      // const selectedLanguage = await getLangCode();
      let includedLanguages;
      try {
        includedLanguages = data.data.map((lang, index) =>
          lang.code === "US"
            ? "en"
            : lang.code === "GB"
            ? "en"
            : lang.code.toLowerCase()
        );
        includedLanguages = includedLanguages.filter((lang) => lang !== "en");

        includedLanguages.push("en");
        console.log(includedLanguages);

        includedLanguages = includedLanguages.join(",");
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
        element.forEach((el, index) => {
          if (el.value !== "en") {
            el.value = "en";
            el.dispatchEvent(new Event("change"));

            deleteCooKies("googtrans");

            console.log("Value change by Route to English");
          }
        });
      }
    };

    // Call the handleRouteChange function when the pathname changes
    handleRouteChange();

    // return () => {
    //   handleRouteChange();
    // };
  }, [pathname]);
  //   return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
