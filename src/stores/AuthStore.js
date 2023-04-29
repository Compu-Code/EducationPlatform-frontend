import { defineStore } from "pinia";
import { RouterLink, RouterView, createWebHistory } from "vue-router";
import { useLocalStorage } from "@vueuse/core";
import { useUserStore } from "./UserStore";
import axios from "axios";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    UserStore: useUserStore(),
    signupLoading: false,
    signupMessage: "",
    signupSuccess: false,
    loginLoading: false,
    loginMessage: "",

    userToken: null,
    userData: null,
  }),
  actions: {
    async signup(payload) {
      this.signupLoading = true;
      try {
        const response = await axios.post(
          "https://3b43-109-107-253-177.ngrok-free.app/api/auth/register",
          payload
        );
        this.signupLoading = false;
        console.log(response.data);
        console.log(response.data.message);
        console.log(response.data.success);
        this.signupMessage = response.data.message;
        this.signupSuccess = response.data.success;
      } catch (error) {
        this.signupLoading = false;
        console.log(error);
      }
    },
    async login(payload) {
      this.loginLoading = true;
      try {
        const response = await axios.post(
          "https://3b43-109-107-253-177.ngrok-free.app/api/auth/login",
          payload
        );
        this.loginLoading = false;

        this.userData = response.data.data.user;
        this.userToken = response.data.data.user.token;
        //
        this.UserStore.userFname = this.userData.first_name;
        this.UserStore.userLname = this.userData.last_name;
        this.UserStore.userFullName = this.userFname + " " + this.userLname;
        this.UserStore.userId = this.userData.id;
        this.UserStore.userEmail = this.userData.email;
        this.UserStore.userUniversity = this.userData.university_name;
        this.UserStore.userMajor = this.userData.major;
        this.UserStore.userPhone = this.userData.phone;
        this.UserStore.userPic = this.userData.profile_pic;
        this.UserStore.userRoles = this.userData.roles;
        this.UserStore.userRolesPermissions = this.userData.roles_permissions;

        // TODO: search for axios credentials IMPORTANT
        document.cookie = "userToken=" + "#" + this.userToken + "#";

        if (this.userToken) {
          this.loginMessage = "Successfully login";
        } else {
        }
        this.$router.push({ name: "dashboard", replace: true });
      } catch (error) {
        this.loginLoading = false;
        console.log(error);
      }
    },
    async logout() {
      try {
        console.log(this.userToken);
        const response = await axios.post(
          "https://3b43-109-107-253-177.ngrok-free.app/api/auth/logout",
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
