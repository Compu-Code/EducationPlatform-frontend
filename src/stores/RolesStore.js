import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useRolesStore = defineStore("rolesStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    rolesData: [],
    roleDetails: [],
    createLoading: false,
    createdSuccessfully: false,
    editLoading: false,
    updatedSuccessfully: false,
  }),
  actions: {
    // ROLES CRUD
    async getRolesData() {
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + "/api/admin/roles?page=1",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        console.log(response);
        console.log(response.data.data);
        // to add isMenuActive into all errorlogs to check later if popup menu open or not
        // errorLogsData = response.data.forEach((error) => {
        //   isMenuActive = false;
        // });
        this.rolesData = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showRoleData(id) {
      await this.getRolesData();
      const role = this.rolesData.find((role) => role.id === id);
      console.log(role);
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + `/api/admin/roles/${role.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        console.log(response.data.data);
        this.roleDetails = response.data.data;
        this.$router.push({
          name: "roleDetails",
          params: { roleID: role.id },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async createRole(payload) {
      try {
        this.createLoading = true;
        const response = await axios.post(
          this.AuthStore.baseURL + "/api/admin/roles",
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
        this.getRolesData();
      } catch (error) {
        this.createLoading = false;
        console.log(error);
      }
    },
    async updateRole(payload, id) {
      const role = this.rolesData.find((role) => role.id === id);
      try {
        this.editLoading = true;
        const response = await axios.put(
          this.AuthStore.baseURL + `/api/admin/roles/${role.id}`,
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
        this.roleDetails = response.data.data;
        this.getRolesData();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteRole(id) {
      const role = this.rolesData.find((role) => role.id === id);
      console.log(role);
      try {
        const response = await axios.delete(
          this.AuthStore.baseURL + `/api/admin/roles/${role.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.rolesData.splice(
          this.rolesData.map((role) => role.id).indexOf(role.id),
          1
        );
        console.log(response);
        console.log(response.data);
        console.log(response.data.success);
        this.$router.replace({ name: "admin-roles" });
      } catch (error) {
        console.log(error);
      }
    },
    openMenu(ID) {
      const role = this.rolesData.find((role) => role.id === ID);
      if (role.isMenuActive) {
        role.isMenuActive = false;
      } else {
        for (let i = 0; i < this.rolesData.length; i++) {
          this.rolesData[i].isMenuActive = false;
        }
        role.isMenuActive = true;
      }
    },
    toggleMenu(ID) {
      const role = this.rolesData.find((role) => role.id === ID);
      if (role.isMenuActive) {
        role.isMenuActive = false;
      } else {
        role.isMenuActive = true;
      }
    },
    closeMenus() {
      for (let i = 0; i < this.rolesData.length; i++) {
        this.rolesData[i].isMenuActive = false;
      }
    },
  },
});
