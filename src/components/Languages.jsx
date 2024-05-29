"use client";
import { getLocations } from "@/actions/Getdata";
// import Flag from "react-world-flags";
import { Loctions } from "./Loctions";
export function Languages({ data = ["UK", "US", "DE", "NL"], className }) {
  // <Flag key={"nl"} className="size-5" code={"nl"} />
  return (
    <>
      {data && <Loctions {...{ className, data }} />}
      {!data && <div> Unable to load</div>}
    </>
  );
}
