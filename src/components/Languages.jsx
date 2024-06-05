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
// import { useEffect } from "react/cjs/react.production.min";
export function Languages({ data, className }) {
  let FlagList = [];

  useEffect(() => {
    const includedLanguages = data
      .map((lang) => lang.code.toLowerCase())
      .join(",");

    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "auto",
          includedLanguages,
        },
        "google_translate_element"
      );
    }

    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const onChange = (value) => {
    // console.log("i rand=");
    // const lang = "/en/" + value;
    // // setLangCookie(lang);
    // const element = document.querySelector(".goog-te-combo");
    // element.value = value;
    // element.dispatchEvent(new Event("change"));
  };
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
          <Select onValueChange={onChange} defaultValue={"1"}>
            <SelectTrigger
              className={cn(" w-[50px] bg-transparent", className)}
            >
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent className=" bg-background">
              {FlagList.map((flag, index) => (
                <SelectItem key={`${index}`} value={`${index}`}>
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
