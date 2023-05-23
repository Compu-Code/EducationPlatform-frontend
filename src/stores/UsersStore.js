import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    usersData: [],
    userDetails: [],
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
    userUniversity: "",
    userMajor: "",
    lowerCaseCheck: false,
    upperCaseCheck: false,
    oneDigitCheck: false,
    oneSpecialCharCheck: false,
    charMinimumCheck: false,
    createLoading: false,
    createdSuccessfully: false,
    editLoading: false,
    updatedSuccessfully: false,
  }),
  actions: {
    // USER CRUD
    async getUsersData() {
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + "/api/admin/users?page=1",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        console.log(response);
        console.log(response.data);
        console.log(response.data.data);
        // console.log(response.data.data.user);
        // to add isMenuActive into all errorlogs to check later if popup menu open or not
        // errorLogsData = response.data.forEach((error) => {
        //   isMenuActive = false;
        // });
        this.usersData = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showUserData(id) {
      await this.getUsersData();
      const user = this.usersData.find((user) => user.user.id === id);
      console.log(user);
      console.log(user.user);
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + `/api/admin/users/${user.user.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        console.log(response.data.data);
        this.userDetails = response.data.data.user;
        this.$router.push({
          name: "userDetails",
          params: { userID: user.user.id },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async createUser(payload) {
      try {
        this.createLoading = true;
        const response = await axios.post(
          this.AuthStore.baseURL + "/api/admin/users",
          payload,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.createLoading = false;
        console.log(response);
        console.log(response.data);
        if (response.data) {
          this.createdSuccessfully = true;
        }
        this.getUsersData();
      } catch (error) {
        this.createLoading = false;
        console.log(error);
      }
    },
    async assignRoleUser(payload, id) {
      console.log(id);
      const user = this.usersData.find((user) => user.user.id === id);
      console.log(user);
      try {
        this.editLoading = true;
        const response = await axios.put(
          this.AuthStore.baseURL +
            `/api/admin/users/assign-roles/${user.user.id}`,
          payload,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.editLoading = false;
        console.log(response);
        console.log(response.data);
        if (response.data) {
          this.updatedSuccessfully = true;
        }
        this.userDetails = response.data.data;
        this.showUserData(user.user.id);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser(id) {
      const user = this.usersData.find((user) => user.user.id === id);
      console.log(user);
      try {
        const response = await axios.delete(
          this.AuthStore.baseURL + `/api/admin/users/${user.user.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.usersData.splice(
          this.usersData.map((user) => user.user.id).indexOf(user.user.id),
          1
        );
        console.log(response);
        console.log(response.data);
        console.log(response.data.success);
        this.$router.replace({ name: "admin-users" });
      } catch (error) {
        console.log(error);
      }
    },
    openMenu(ID) {
      const user = this.usersData.find((user) => user.user.id === ID);
      if (user.user.isMenuActive) {
        user.user.isMenuActive = false;
      } else {
        for (let i = 0; i < this.usersData.length; i++) {
          this.usersData[i].user.isMenuActive = false;
        }
        user.user.isMenuActive = true;
      }
    },
    toggleMenu(ID) {
      const user = this.usersData.find((user) => user.user.id === ID);
      if (user.user.isMenuActive) {
        user.user.isMenuActive = false;
      } else {
        user.user.isMenuActive = true;
      }
    },
    closeMenus() {
      for (let i = 0; i < this.usersData.length; i++) {
        this.usersData[i].user.isMenuActive = false;
      }
    },
  },
});
