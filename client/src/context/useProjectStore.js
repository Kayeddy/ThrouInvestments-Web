import { create } from "zustand";

const useProjectStore = create((set) => ({
  projects: [],
  assignProjects: (projects) => set({ projects: projects }),
}));

export default useProjectStore;
