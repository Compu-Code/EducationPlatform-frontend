import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const usePermissionsStore = defineStore("permissionsStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    permissionsData: [],
    permissionDetails: [],
    createLoading: false,
    createdSuccessfully: false,
    editLoading: false,
    updatedSuccessfully: false,
  }),
  actions: {
    // PERMISSIONS CRUD
    async getPermissionsData() {
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + "/api/admin/permissions?page=1",
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
        this.permissionsData = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showPermissionData(id) {
      await this.getPermissionsData();
      const permission = this.permissionsData.find(
        (permission) => permission.id === id
      );
      console.log(permission);
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + `/api/admin/permissions/${permission.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        console.log(response.data.data);
        this.permissionDetails = response.data.data;
        this.$router.push({
          name: "permissionDetails",
          params: { permissionID: permission.id },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async createPermission(payload) {
      try {
        this.createLoading = true;
        const response = await axios.post(
          this.AuthStore.baseURL + "/api/admin/permissions",
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
        this.getPermissionsData();
      } catch (error) {
        this.createLoading = false;
        console.log(error);
      }
    },
    async updatePermission(payload, id) {
      const permission = this.permissionsData.find(
        (permission) => permission.id === id
      );
      try {
        this.editLoading = true;
        const response = await axios.put(
          this.AuthStore.baseURL + `/api/admin/permissions/${permission.id}`,
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
        this.permissionDetails = response.data.data;
        this.getPermissionsData();
      } catch (error) {
        console.log(error);
      }
    },
    async deletePermission(id) {
      const permission = this.permissionsData.find(
        (permission) => permission.id === id
      );
      console.log(permission);
      try {
        const response = await axios.delete(
          this.AuthStore.baseURL + `/api/admin/permissions/${permission.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.permissionsData.splice(
          this.permissionsData
            .map((permission) => permission.id)
            .indexOf(permission.id),
          1
        );
        console.log(response);
        console.log(response.data);
        console.log(response.data.success);
        this.$router.replace({ name: "admin-permissions" });
      } catch (error) {
        console.log(error);
      }
    },
    openMenu(ID) {
      const permission = this.permissionsData.find(
        (permission) => permission.id === ID
      );
      if (permission.isMenuActive) {
        permission.isMenuActive = false;
      } else {
        for (let i = 0; i < this.permissionsData.length; i++) {
          this.permissionsData[i].isMenuActive = false;
        }
        permission.isMenuActive = true;
      }
    },
    toggleMenu(ID) {
      const permission = this.permissionsData.find(
        (permission) => permission.id === ID
      );
      if (permission.isMenuActive) {
        permission.isMenuActive = false;
      } else {
        permission.isMenuActive = true;
      }
    },
    closeMenus() {
      for (let i = 0; i < this.permissionsData.length; i++) {
        this.permissionsData[i].isMenuActive = false;
      }
    },
  },
});
