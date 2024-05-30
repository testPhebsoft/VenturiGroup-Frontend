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
