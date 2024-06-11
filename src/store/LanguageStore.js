import { setCookies } from "@/lib/actions";
import { getLangCode } from "@/lib/serverUtils/getCode";
import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  selectedLangLocationCode: "init",
  setSelectedLangLocationCode: (incomingLocationCode) => {
    set((state) => {
      setCookies("selectedLangLocationCode", incomingLocationCode);

      return { selectedLangLocationCode: incomingLocationCode };
    });
  },

  initializeLanguageCode: async () => {
    const langCode = (await getLangCode()) || "en";
    console.log("langCode", langCode);
    set({ selectedLangLocationCode: langCode });
  },
}));
