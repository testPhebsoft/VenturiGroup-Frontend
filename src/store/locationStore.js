import { setCookies } from "@/lib/actions";
import { getCode } from "@/lib/serverUtils/getCode";
import { create } from "zustand";

export const useLocationStore = create((set) => ({
  selectedLocationCode: "init",
  setSelectedLocationCode: (incomingLocationCode) => {
    set((state) => {
      setCookies("selectedLocationCode", incomingLocationCode);

      return { selectedLocationCode: incomingLocationCode };
    });
  },

  initializeLocationCode: async () => {
    const locationCode = (await getCode()) || "GB";
    set({ selectedLocationCode: locationCode });
  },
}));
