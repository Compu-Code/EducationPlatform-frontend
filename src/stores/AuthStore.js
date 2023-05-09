import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { useUserStore } from "./UserStore";
import axios from "axios";

// const instance = axios.create({
//   withCredentials: true,
// });

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    UserStore: useUserStore(),
    baseURL: "https://e739-109-107-243-170.ngrok-free.app",
    signupLoading: false,
    signupMessage: "",
    signupSuccess: "",
    loginLoading: false,
    loginMessage: "",
    loginSuccess: "",

    userToken: "",
    userData: null,
  }),
  actions: {
    async signup(payload) {
      // console.log(this.getCookie("JWT"));
      this.signupLoading = true;
      try {
        const response = await axios.post(
          this.baseURL + "/api/auth/register",
          payload
          // {
          //   timeout: 3000,
          // }
        );
        this.signupLoading = false;
        console.log(response.data);
        console.log(response.data.message);
        console.log(response.data.success);
        this.signupMessage = response.data.message;
        this.signupSuccess = response.data.success;
      } catch (error) {
        this.signupLoading = false;
        this.signupSuccess = false;
        this.signupMessage = response.data.message;
        console.log(error);
      }
    },
    async login(payload) {
      // console.log(this.getCookie("JWT"));
      this.loginLoading = true;
      try {
        const response = await axios.post(
          this.baseURL + "/api/auth/login",
          payload,
          {
            // withCredentials: true,
            // credentials: "include",
            // timeout: 10000,
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        console.log(response.data);
        this.loginLoading = false;
        this.loginSuccess = true;

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
        document.cookie = "JWT=" + this.userToken;

        if (this.userToken) {
          this.loginMessage = "Successfully login";
        } else {
        }
        // this.$router.push({ name: "dashboard", replace: true });
      } catch (error) {
        this.loginSuccess = false;
        this.loginLoading = false;
        console.log(error);
      }
    },
    async logout() {
      // console.log(this.getCookie("JWT"));
      try {
        console.log(this.userToken);
        const response = await axios.post(
          this.baseURL + "/api/auth/logout",
          null,
          {
            // withCredentials: true,
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        console.log(response.data);
        this.userToken = null;
        document.cookie = "JWT=" + "";
        this.$router.replace("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    isAuthenticated() {
      return !!this.userToken;
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop().split(";").shift();
      }
    },
  },
});
