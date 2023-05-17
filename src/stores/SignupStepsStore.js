import { defineStore } from "pinia";
import { RouterLink, RouterView, createWebHistory } from "vue-router";
import { useUserStore } from "./UserStore";

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
    lowerCaseCheck: false,
    upperCaseCheck: false,
    oneDigitCheck: false,
    oneSpecialCharCheck: false,
    charMinimumCheck: false,
    signupStep1: false,
    signupStep2: false,
    signupStep3: false,
  }),
  actions: {},
});
