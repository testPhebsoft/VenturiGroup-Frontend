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

export function Languages({ data, className }) {
  const pathname = usePathname();

  const selectedLangLocationCode = useLanguageStore(
    (state) => state.selectedLangLocationCode
  );
  const setSelectedLangLocationCode = useLanguageStore(
    (state) => state.setSelectedLangLocationCode
  );
  console.log(selectedLangLocationCode);

  let FlagList = [];

  const onChange = (value) => {
    // const element = document.querySelectorAll(".goog-te-combo");
    setSelectedLangLocationCode(value);

    // [...element].forEach((el) => {
    //   el.value = value;
    //   el.dispatchEvent(new Event("change"));
    //   setSelectedLangLocationCode(value);
    // });
  };
  sdf;

  useEffect(() => {
    const handleChange = async () => {
      const elements = document.querySelectorAll(".goog-te-combo");
      if (elements.length > 0) {
        const langCode = await getLangCode();
        elements.forEach((el) => {
          el.value = "en";
          el.dispatchEvent(new Event("change"));

          setSelectedLangLocationCode(langCode);
        });
      }
    };
    handleChange();
    // const observer = new MutationObserver((mutationsList, observer) => {
    //   for (const mutation of mutationsList) {
    //     if (mutation.type === "childList") {
    //       console.log("here ");
    //       handleChange();
    //       observer.disconnect();
    //     }
    //   }
    // });

    // observer.observe(document.body, {
    //   childList: true,
    //   subtree: true,
    // });

    // return () => observer.disconnect();
  }, [selectedLangLocationCode]);

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
  console.log(selectedLangLocationCode);

  return (
    <>
      {data && (
        <div>
          <Select
            onValueChange={onChange}
            defaultValue={selectedLangLocationCode}
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
                      ? "en"
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
