import { getCooKies, setCookies } from "@/lib/actions";

export const getCode = async () => {
  let code = await getCooKies("selectedLocationCode");

  if (code) {
    code = code.value;
  } else {
    code = "GB";
    setCookies("selectedLocationCode", "GB");
  }

  return code;
};
export const getCodeServer = async () => {
  let code = await getCooKies("selectedLocationCode");

  if (code) {
    code = code.value;
  } else {
    code = "GB";
  }

  return code;
};

export const getLangCodeServer = async () => {
  let code = await getCooKies("selectedLangLocationCode");

  if (code) {
    code = code.value;
  } else {
    code = "en";
  }

  return code;
};

export const getLangCode = async () => {
  let code = await getCooKies("selectedLangLocationCode");
  if (code == "GB") {
    console.log("Hereeeeeeeeeeeeee");
    setCookies("selectedLangLocationCode", "en");
  }
  if (code) {
    code = code.value;
  } else {
    code = "en";
    setCookies("selectedLangLocationCode", "en");
  }

  return code;
};
