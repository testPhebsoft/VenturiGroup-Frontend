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

    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  let code = await getCooKies("selectedLocationCode");
  console.log("getCode");

  if (code) {
    code = code.value;
  } else {
    if (ip) {
      try {
        let data = await fetch(`https://api.country.is/?${ip}`);
        let incomingCountry = (await data.json()).country;

        if (["GB", "UK", "DE", "Nl"].includes(incomingCountry)) {
          code = (await data.json()).country;
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
