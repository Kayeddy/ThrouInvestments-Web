import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  userProfile: null,
  projects: [],

  addUser: (user) => set({ userProfile: user }),
  assignProjects: (projects) => set({ projects: projects }),
});

const useStore = create(store);

export default useStore;
