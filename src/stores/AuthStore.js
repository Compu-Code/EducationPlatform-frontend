import { defineStore } from "pinia";
import { RouterLink } from "vue-router";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    userToken: null,
    userData: "",

    signupLoading: false,
    signupMessage: "",
    loginLoading: false,
    loginMessage: "",
  }),
  actions: {
    async signup(payload) {
      this.signupLoading = true;
      try {
        const response = await axios.post(
          "https://b69b-109-107-253-177.ngrok-free.app/api/auth/register",
          payload
        );
        this.signupLoading = false;
        console.log(response.data);
        console.log(response.data.message);
        console.log(response.data.success);
        this.signupMessage = response.data.message;
      } catch (error) {
        this.signupLoading = false;
        console.log(error);
      }
    },
    async login(payload) {
      this.loginLoading = true;
      try {
        const response = await axios.post(
          "https://b69b-109-107-253-177.ngrok-free.app/api/auth/login",
          payload
        );
        this.loginLoading = false;
        // console.log(response.data.data.user);
        // console.log(response.data.data.user.token);
        this.userData = response.data.data.user;
        this.userToken = response.data.data.user.token;

        // console.log(this.userData);
        // console.log(this.userData.token);
        // console.log(this.userData.first_name);
        document.cookie = "userToken=" + "#" + this.userToken + "#";
        if (this.userToken) {
          this.loginMessage = "Successfully login";
        } else {
        }
      } catch (error) {
        this.loginLoading = false;
        console.log(error);
      }
    },
    async logout() {
      try {
        console.log(this.userToken);
        const response = await axios.post(
          "https://b69b-109-107-253-177.ngrok-free.app/api/auth/logout",
          null,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        console.log(response.data);
        this.userToken = null;
        document.cookie = "userToken=" + null;
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    isAuthenticated() {
      return !!this.userToken;
    },
  },
});
