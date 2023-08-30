import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isRegistering: {
        state: false,
        loading: false,
        success: undefined,
        error: undefined,
        Method: undefined,
      },
      accessToken: "",
      auth: {},
      toggleRegistering: (state) => set({ isRegistering: state }),
      assignAccessToken: (token) => set({ accessToken: token }),
      assignAuth: (auth) => set({ auth: auth }),
    }),
    {
      name: "auth-storage",
      getStorage: () => sessionStorage,
    }
  )
);
export default useAuthStore;
