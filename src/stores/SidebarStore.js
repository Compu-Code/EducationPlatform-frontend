import { defineStore } from "pinia";

export const useSidebarStore = defineStore("SidebarStore", {
  state: () => ({
    isMenuOpen: false,
    isSidebarPinned: null,
  }),
});
