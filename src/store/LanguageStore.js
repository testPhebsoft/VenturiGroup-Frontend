import { setCookies } from "@/lib/actions";
import { getLangCode } from "@/lib/serverUtils/getCode";
import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  selectedLangLocationCode: "init",
  setSelectedLangLocationCode: (incomingLocationCode) => {
    set((state) => {
      if (incomingLocationCode == state.selectedLangLocationCode) return state;

      setCookies("selectedLangLocationCode", incomingLocationCode);
      // we are setting the location code in the cookies of Google translate not in the language store

      // let value =
      //   incomingLocationCode == "GB"
      //     ? "en"
      //     : incomingLocationCode == "en-gb"
      //     ? "en"
      //     : incomingLocationCode;
      // value = "/en/" + value.toString();
      // console.log("value", value, value.toString());
      // setCookies("googtrans", value);
      return { selectedLangLocationCode: incomingLocationCode };
    });
  },

  initializeLanguageCode: async () => {
    const langCode = (await getLangCode()) || "en";
    console.log("langCode", langCode);
    set({ selectedLangLocationCode: langCode });
  },
}));
