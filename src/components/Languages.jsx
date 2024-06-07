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

  // useEffect(() => {
  //   const includedLanguages = data
  //     .map((lang) => lang.code.toLowerCase())
  //     .join(",");
  //   console.log(includedLanguages);
  //   function googleTranslateElementInit() {
  //     new window.google.translate.TranslateElement(
  //       {
  //         pageLanguage: "auto",
  //         includedLanguages,
  //       },
  //       "google_translate_element"
  //     );
  //   }

  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  const onChange = (value) => {
    // console.log("i rand=");
    // const lang = "/en/" + value;
    // setLangCookie(lang);
    const element = document.querySelectorAll(".goog-te-combo");
    // console.log(element);

    element[0].value = value;
    element[1].value = value;

    // console.log(value);
    element[0].dispatchEvent(new Event("change"));
    element[1].dispatchEvent(new Event("change"));

    // console.log();
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
          {/* <div id="google_translate_element"> </div> */}
          <Select onValueChange={onChange} defaultValue={"gb"}>
            <SelectTrigger
              className={cn(" w-[50px] bg-transparent", className)}
            >
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent className=" bg-background">
              {FlagList.map((flag, index) => (
                <SelectItem
                  key={`${index}`}
                  value={String(flag.code).toLowerCase()}
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
