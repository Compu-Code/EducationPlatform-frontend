import { defineStore } from "pinia";

export const useNavbarStore = defineStore("navbarStore", {
  state: () => ({
    navbarMenus: [
      { id: 1, title: "Home", link: "/Home", isActive: true },
      { id: 2, title: "About us", link: "/About", isActive: false },
      { id: 3, title: "Lecturers", link: "/Lecturers", isActive: false },
      { id: 4, title: "Contact", link: "/Contact", isActive: false },
      { id: 5, title: "FAQs", link: "/FAQs", isActive: false },
    ],
  }),
  actions: {
    setActive(id) {
      const menu = this.navbarMenus.find((m) => m.id === id);
      if (!menu.isActive) {
        for (let i = 0; i < this.navbarMenus.length; i++) {
          this.navbarMenus[i].isActive = false;
          menu.isActive = true;
        }
      }
    },
  },
});
