"use server";
import { getCooKies, setCookies } from "@/lib/actions";
import { headers } from "next/headers";
import { normalizeIPv6toIPv4 } from "../utils";

export const getCode = async () => {
  let ip;
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    ip = normalizeIPv6toIPv4(forwardedFor);
    // ip = "206.81.17.253";
  }

  let code = await getCooKies("selectedLocationCode");
  console.log("getCode");

  if (code) {
    code = code.value;
  } else {
    if (ip) {
      console.log("inside ip ");
      try {
        console.log(`https://api.country.is/${ip}`);
        let data = await fetch(`https://api.country.is/${ip}`);
        let incomingCountry = (await data.json()).country;
        console.log(ip, incomingCountry);
        if (
          ["GB", "UK", "DE", "NL"].filter((cu) => cu == incomingCountry)
            .length !== 0
        ) {
          code = incomingCountry;
          setCookies("selectedLocationCode", code);
        } else {
          throw "country unavailbale";
        }
      } catch (e) {
        setCookies("selectedLocationCode", "GB");
        code = "GB";
      }
    } else {
      setCookies("selectedLocationCode", "GB");
      code = "GB";
    }
  }

  return code;
};
export const getCodeServer = async () => {
  let code = await getCooKies("selectedLocationCode");
  console.log("getCodeServer");
  if (code) {
    code = code.value;
  } else {
    code = "GB";
  }

  return code;
};

export const getLangCodeServer = async () => {
  let code = await getCooKies("selectedLangLocationCode");
  console.log("getLangCodeServer");

  if (code) {
    code = code.value;
  } else {
    code = "en";
  }

  return code;
};

export const getLangCode = async () => {
  console.log("getLangCode");

  let code = await getCooKies("selectedLangLocationCode");
  if (code) {
    if (code.value == "GB") {
      console.log("Hereeeeeeeeeeeeee");
      setCookies("selectedLangLocationCode", "en");
    }
  }
  if (code) {
    code = code.value;
  } else {
    code = "en";
    setCookies("selectedLangLocationCode", "en");
  }

  return code;
};
