import { setCookies } from "@/lib/actions";
import { getLangCode } from "@/lib/serverUtils/getCode";
import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  selectedLangLocationCode: "init",
  setSelectedLocationCode: (incomingLocationCode) => {
    set((state) => {
      setCookies("selectedLangLocationCode", incomingLocationCode);

      return { selectedLangLocationCode: incomingLocationCode };
    });
  },

  initializeLanguageCode: async () => {
    const locationCode = (await getLangCode()) || "GB";
    set({ selectedLangLocationCode: locationCode });
  },
}));
