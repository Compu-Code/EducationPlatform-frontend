import { defineStore } from "pinia";
import { RouterLink, RouterView, createWebHistory } from "vue-router";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    signupLoading: false,
    signupMessage: "",
    loginLoading: false,
    loginMessage: "",

    // user data
    userToken: null,
    userData: useLocalStorage("userData", ""),
    userFname: "",
    userLname: "",
    userFullName: "",
    userId: "",
    userEmail: "",
    userUniversity: "",
    userMajor: "",
    userPhone: "",
    userPic: "",
    userRoles: "",
    userRolesPermissions: "",
  }),
  actions: {
    async signup(payload) {
      this.signupLoading = true;
      try {
        const response = await axios.post(
          "https://6cf4-109-107-253-177.ngrok-free.app/api/auth/register",
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
          "https://6cf4-109-107-253-177.ngrok-free.app/api/auth/login",
          payload
        );
        this.loginLoading = false;

        this.userData = response.data.data.user;
        this.userToken = response.data.data.user.token;
        //
        // this.userFname = this.userData.first_name;
        // this.userLname = this.userData.last_name;
        // this.userFullName = this.userFname + " " + this.userLname;
        // this.userId = this.userData.id;
        // this.userEmail = this.userData.email;
        // this.userUniversity = this.userData.university_name;
        // this.userMajor = this.userData.major;
        // this.userPhone = this.userData.phone;
        // this.userPic = this.userData.profile_pic;
        // this.userRoles = this.userData.roles;
        // this.userRolesPermissions = this.userData.roles_permissions;
        //
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
          "https://6cf4-109-107-253-177.ngrok-free.app/api/auth/logout",
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
