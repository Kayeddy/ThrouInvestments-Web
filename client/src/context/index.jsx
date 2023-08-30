import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  userProfile: null,
  userVerified: {
    email: false,
    id: false,
  },
  notifications: [
    {
      id: "verify-account",
      title: "Verificación de cuenta",
      message:
        "Completa el proceso de verificación para terminar con tu registro",
    },
  ],
  projects: [],
  isRegistering: {
    loading: false,
    success: undefined,
    error: undefined,
    Method: undefined,
  },
  accessToken: "",
  auth: {},
  walletAddress: null,

  // User management modules
  addUser: (user) => set({ userProfile: user }),

  // User registration and log in modules
  toggleRegistering: (state) => set({ isRegistering: state }),
  assignAccessToken: (token) => set({ accessToken: token }),
  assignAuth: (auth) => set({ auth: auth }),
  assignWalletAddress: (address) => set({ walletAddress: address }),

  // Project management modules
  assignProjects: (projects) => set({ projects: projects }),

  // Verification modules
  checkUserVerification: (user) =>
    set((state) => {
      console.log("User verification status:", state.userVerified.email);
      if (!state.userVerified.email) {
        console.log("User not verified, adding notification...");
        state.addNotification({
          id: "verify-account",
          title: "Verify account",
          message: "Please verify your account",
        });
      }
    }),

  verifyUser: (step) =>
    set({
      userVerified: {
        ...step,
      },
    }),

  // Notification modules
  addNotification: (notification) =>
    set((state) => {
      console.log("Adding notification:", notification);
      return {
        notifications: [...state.notifications, notification],
      };
    }),

  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
});

const useStore = create(store);

export default useStore;
