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
export function Languages({ data, className }) {
  let FlagList = [];
  if (data) {
    FlagList = data.map((item) => (
      <Flag
        key={"gb"}
        className="size-5"
        code={String(item.code).toLowerCase()}
      />
    ));
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
          <Select defaultValue={"1"}>
            <SelectTrigger className={cn("", className)}>
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
              {FlagList.map((flag, index) => (
                <SelectItem key={`${index}`} value={`${index}`}>
                  {flag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      {!data && <div> Unable to load</div>}
    </>
  );
}
