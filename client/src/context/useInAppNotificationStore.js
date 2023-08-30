import { create } from "zustand";

const useInAppNotificationStore = create((set) => ({
  modals: {
    wallet: { isOpen: false, type: null, data: null },
    authentication: { isOpen: false, type: null, data: null },
  },
  openModal: (name, type, data) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [name]: { isOpen: true, type, data },
      },
    })),
  closeModal: (name) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [name]: { isOpen: false, type: null, data: null },
      },
    })),
}));

export default useInAppNotificationStore;
