"use client";
import Flag from "react-world-flags";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import Script from "next/script";
import { useLanguageStore } from "@/store/LanguageStore";
import { getLangCode } from "@/lib/serverUtils/getCode";
import { usePathname } from "next/navigation";
import { setCookies } from "@/lib/actions";

export function Languages({ data, className }) {
  const pathname = usePathname();

  const selectedLangLocationCode = useLanguageStore(
    (state) => state.selectedLangLocationCode
  );
  const setSelectedLangLocationCode = useLanguageStore(
    (state) => state.setSelectedLangLocationCode
  );

  let FlagList = [];

  const onChange = (value) => {
    setSelectedLangLocationCode(value);
  };
  addHookAliases;
  useEffect(() => {
    const handleChange = async () => {
      const elements = document.querySelectorAll(".goog-te-combo");
      if (elements.length > 0) {
        const langCode = await getLangCode();
        elements.forEach((el) => {
          el.value =
            langCode == "GB" ? "ends" : langCode == "en-gb" ? "ends" : langCode;
          el.dispatchEvent(new Event("change"));
          console.log("Value change");

          if (selectedLangLocationCode != langCode)
            setSelectedLangLocationCode(langCode);
        });
      }
    };
    handleChange();
  }, [selectedLangLocationCode]);

  // useEffect(() => {
  //   const handleChange = async () => {
  //     const elements = document.querySelectorAll(".goog-te-combo");

  //     if (elements.length > 0) {
  //       let langCode = await getLangCode();
  //       if (langCode == "GB") {
  //         setCookies("selectedLangLocationCode", "en");
  //       }
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
  //           handleChange();
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

  if (data) {
    FlagList = data;
  } else {
    FlagList = [
      <Flag key={"gb"} className="size-5" code={"gb"} />,
      <Flag key={"us"} className="size-5" code={"us"} />,
      <Flag key={"de"} className="size-5" code={"de"} />,
      <Flag key={"nl"} className="size-5" code={"nl"} />,
    ];
  }

  return (
    <>
      {data && (
        <div>
          <Select
            onValueChange={onChange}
            defaultValue={selectedLangLocationCode}
            value={selectedLangLocationCode}
          >
            <SelectTrigger
              className={cn(" w-[50px] bg-transparent", className)}
            >
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent className=" bg-background">
              {FlagList.map((flag, index) => (
                <SelectItem
                  key={`${index}`}
                  value={String(
                    flag.code == "US"
                      ? "en"
                      : flag.code == "GB"
                      ? "en-gb"
                      : flag.code
                  ).toLowerCase()}
                >
                  <Flag key={flag.code} className="size-5" code={flag.code} />
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </>
  );
}
