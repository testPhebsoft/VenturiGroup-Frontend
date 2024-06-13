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
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  if (typeof Node === "function" && Node.prototype) {
    const originalRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function (child) {
      if (child.parentNode !== this) {
        if (console) {
          console.error(
            "Cannot remove a child from a different parent",
            child,
            this
          );
        }
        return child;
      }
      return originalRemoveChild.apply(this, arguments);
    };

    const originalInsertBefore = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function (newNode, referenceNode) {
      if (referenceNode && referenceNode.parentNode !== this) {
        if (console) {
          console.error(
            "Cannot insert before a reference node from a different parent",
            referenceNode,
            this
          );
        }
        return newNode;
      }
      return originalInsertBefore.apply(this, arguments);
    };
  }

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

  // useEffect(() => {
  //   const handleChange = async () => {
  //     const elements = document.querySelectorAll(".goog-te-combo");

  //     if (elements.length > 0) {
  //       let langCode = await getLangCode();

  //       langCode =
  //         langCode == "GB" ? "en" : langCode == "en-gb" ? "en" : langCode;
  //       console.log(langCode);
  //       elements.forEach((el) => {
  //         console.log("el", el.value);
  //         if (el.value !== langCode) {
  //           el.value = langCode;
  //           el.dispatchEvent(new Event("change"));
  //           console.log("Value change");
  //           if (selectedLangLocationCode != langCode)
  //             setSelectedLangLocationCode(langCode);
  //         }
  //       });
  //     }
  //   };
  //   // handleChange();
  //   const observer = new MutationObserver((mutationsList, observer) => {
  //     for (const mutation of mutationsList) {
  //       if (mutation.type === "childList") {
  //         if (mutation.target.className == "goog-te-combo") {
  //           console.log("mutation.target.className", mutation.target.className);
  //           console.log("mutation.target.value", mutation.target.value);
  //           handleChange();
  //           observer.disconnect();
  //         }
  //       }
  //     }
  //   });

  //   observer.observe(document.body, {
  //     childList: true,
  //     subtree: true,
  //   });

  //   return () => observer.disconnect();
  // }, []);
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
    return () => {
      // Cleanup: Remove the Google Translate script and reset the translation element
      const script = document.getElementById("google_translateScript");
      if (script) {
        script.remove();
      }
      const translateElement = document.getElementById(
        "google_translate_element"
      );
      if (translateElement) {
        translateElement.innerHTML = "";
      }
    };
  }, []);

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     const element = document.querySelectorAll(".goog-te-combo");

  //     if (element.length > 0) {
  //       element.forEach((el, index) => {
  //         if (el.value !== "en") {
  //           el.value = "en";
  //           el.dispatchEvent(new Event("change"));

  //           deleteCooKies("googtrans");

  //           console.log("Value change by Route to English");
  //         }
  //       });
  //     }
  //   };

  //   // Call the handleRouteChange function when the pathname changes
  //   handleRouteChange();

  //   // return () => {
  //   //   handleRouteChange();
  //   // };
  // }, [pathname]);
};

export default GoogleTranslate;
