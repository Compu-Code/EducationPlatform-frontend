import { defineStore } from "pinia";
import { RouterLink, RouterView, createWebHistory } from "vue-router";
import { useUserStore } from "./UserStore";
import axios from "axios";

export const useSignupStepsStore = defineStore("signupStepsStore", {
  state: () => ({
    userAccType: "",
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPass: "",
    userUniversity: "",
    userMajor: "",
  }),
  actions: {},
});
