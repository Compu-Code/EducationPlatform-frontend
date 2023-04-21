import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useNavbarStore = defineStore("navbarStore", {
  state: () => ({
    navbarMenus: [
      { id: 1, title: "Home", link: "/home" },
      { id: 2, title: "About us", link: "/about" },
      { id: 3, title: "Lecturers", link: "/lecturers" },
      { id: 4, title: "Contact", link: "/contact" },
      { id: 5, title: "FAQs", link: "/FAQs" },
    ],
    darkMode: useLocalStorage("darkMode", false),
    isLanguageMenuOpen: false,
    isProfileMenuOpen: false,
    appLanguage: useLocalStorage("lang", "En"),
  }),
  actions: {
    toggleMode() {
      this.darkMode = !this.darkMode;
    },
    toggleLanguageMenu() {
      this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
    },
    toggleProfileMenuOpen() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen;
    },
    toggleLanguage(Language) {
      if (Language !== this.appLanguage) {
        this.appLanguage = Language;
      }
    },
  },
});
