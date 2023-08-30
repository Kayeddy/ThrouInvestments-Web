import { create } from "zustand";

const useNotificationStore = create((set) => ({
  notifications: [
    {
      id: "verify-account",
      title: "Verificación de cuenta",
      message:
        "Completa el proceso de verificación para terminar con tu registro",
    },
  ],
  addNotification: (notification) =>
    set((state) => ({
      ...state,
      notifications: [...state.notifications, notification],
    })),
  removeNotification: (id) =>
    set((state) => ({
      ...state,
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));

export default useNotificationStore;
