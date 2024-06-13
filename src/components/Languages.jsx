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
