import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      userProfile: null,
      userPreferences: {
        theme: "light",
      },
      wallet: {
        address: null,
        name: null,
        balance: null,
        status: "idle",
      },
      addUser: (user) => set({ userProfile: user }),
      removeUser: () => set({ userProfile: null }),
      updateUser: (property, value) =>
        set((state) => ({
          userProfile: {
            ...state.userProfile,
            [property]: value,
          },
        })),
      updateUserPreferences: (property, value) =>
        set((state) => ({
          userPreferences: {
            ...state.userPreferences,
            [property]: value,
          },
        })),
      assignWallet: (wallet) => set({ wallet }),
      updateWallet: (property, value) =>
        set((state) => ({
          wallet: {
            ...state.wallet,
            [property]: value,
          },
        })),
    }),
    {
      name: "user-storage", // unique name
      getStorage: () => createJSONStorage(() => localStorage), // use localStorage
      serialize: (state) => {
        // If there is a user profile, use the user's id as the key
        if (state.userProfile) {
          return [state.userProfile._id, JSON.stringify(state)];
        }
        // If there is no user profile, use the default key
        return ["user-storage", JSON.stringify(state)];
      },
      deserialize: (str) => {
        // Ignore the key and just parse the state
        const [, stateStr] = str;
        return JSON.parse(stateStr);
      },
    }
  )
);

export default useUserStore;
