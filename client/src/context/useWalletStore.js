import { create } from "zustand";

const useWalletStore = create((set) => ({
  wallet: {
    address: null,
    name: null,
    balance: null,
    status: "idle",
  },

  assignWallet: (wallet) => set({ wallet }),
  updateWallet: (property, value) =>
    set((state) => ({
      wallet: {
        ...state.wallet,
        [property]: value,
      },
    })),
}));

export default useWalletStore;
