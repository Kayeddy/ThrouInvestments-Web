import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  userProfile: null,
  projects: [],
  isRegistering: false,
  accessToken: "",
  auth: {},
  walletAddress: null,

  addUser: (user) => set({ userProfile: user }),
  assignProjects: (projects) => set({ projects: projects }),
  toggleRegistering: (state) => set({ isRegistering: state }),
  assignAccessToken: (token) => set({ accessToken: token }),
  assignAuth: (auth) => set({ auth: auth }),
  assignWalletAddress: (address) => set({ walletAddress: address }),
});

const useStore = create(store);

export default useStore;
