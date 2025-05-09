import { create } from "zustand";
import getPrice from "../lib/getPrice";

export default create((set, get) => ({
  // selectedVpsId: 24,
  selectedVpsId: 70,
  setSelectedVpsId: (selectedVpsId) => set({ selectedVpsId }),
  loading: true,
  setLoading: (loading) => set({ loading }),
  prices: null,
  getPrices: async (selectedVpsId) => {
    set({ selectedVpsId, prices: null, loading: true });

    const prices = await getPrice(selectedVpsId);

    set((state) => ({
      prices,
      loading: false,
    }));
  },
}));
