import { getLocation, setCookies } from "@/lib/actions";
import { create } from "zustand";

const getCookie = async (name) => {
  let res = await getLocation(name);
  console.log(res);
  return res.value;
};
export const useLocationStore = create((set) => ({
  selectedLocationCode: "GB",
  setSelectedLocationCode: (incomingLocationCode) => {
    set((state) => {
      setCookies("selectedLocationCode", incomingLocationCode);

      return { selectedLocationCode: incomingLocationCode };
    });
  },

  initializeLocationCode: async () => {
    const locationCode = (await getCookie("selectedLocationCode")) || "GB";
    set({ selectedLocationCode: locationCode });
  },
}));
