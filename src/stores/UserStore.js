import { defineStore } from "pinia";
import { RouterLink } from "vue-router";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
import { useAuthStore } from "./AuthStore";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    isUserDataLoading: false,
    userData: "",
    // user data
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
    async getUserData() {
      try {
        this.isUserDataLoading = true;
        const response = await axios.post(
          this.AuthStore.baseURL + "/api/admin/user/info",
          null,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.userData = response.data.data.user;
        console.log(this.userData);
        this.userFname = this.userData.first_name;
        this.userLname = this.userData.last_name;
        this.userFullName = this.userFname + " " + this.userLname;
        this.userId = this.userData.id;
        this.userEmail = this.userData.email;
        this.userUniversity = this.userData.university_name;
        this.userMajor = this.userData.major;
        this.userPhone = this.userData.phone;
        this.userPic = this.userData.profile_pic;
        this.userRoles = this.userData.roles;
        this.userRolesPermissions = this.userData.roles_permissions;
        console.log(this.userFname);
        console.log(this.userLname);
        console.log(this.userFullName);
        console.log(this.userId);
        console.log(this.userEmail);
        console.log(this.userUniversity);
        console.log(this.userMajor);
        console.log(this.userPhone);
        console.log(this.userPic);
        console.log(this.userRoles);
        console.log(this.userRolesPermissions);
        // to get all pages that allow to user open it in dashboard
        // for (const permission in this.userRolesPermissions) {
        //   console.log(permission);
        // }
        this.isUserDataLoading = false;
      } catch (error) {
        this.isUserDataLoading = false;
        console.log(error);
      }
    },
  },
  getters: {},
});
