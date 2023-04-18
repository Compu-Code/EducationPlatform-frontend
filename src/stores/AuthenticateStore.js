import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useAuthenticateStore = defineStore("authenticateStore", {
  state: () => ({
    isUserAuthenticated: true,
  }),
  actions: {},
});
