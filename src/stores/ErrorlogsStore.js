import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useErrorlogsStore = defineStore("errorlogsStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    errorLogsData: [],
    errorDetails: null,
  }),
  actions: {
    async deleteError(id) {
      const error = this.errorLogsData.find((error) => error.id === id);

      try {
        const response = await axios.delete(
          this.AuthStore.baseURL + `/api/admin/error-logs/${error.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.errorLogsData.splice(
          this.errorLogsData.map((error) => error.id).indexOf(error.id),
          1
        );
        console.log(response);
        console.log(response.data);
        console.log(response.data.success);
        this.$router.replace({ name: "admin-error-logs" });
      } catch (error) {
        console.log(error);
      }
    },
    async getErrorLogsData() {
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + "/api/admin/error-logs",
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
        // to add isMenuActive into all errorlogs to check later if popup menu open or not
        // errorLogsData = response.data.forEach((error) => {
        //   isMenuActive = false;
        // });
        this.errorLogsData = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showErrorData(id) {
      await this.getErrorLogsData();
      const error = this.errorLogsData.find((error) => error.id === id);
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + `/api/admin/error-logs/${error.id}`,
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
        this.errorDetails = response.data.data;
        this.$router.push({
          name: "errorDetails",
          params: { errorID: error.id },
        });
      } catch (error) {
        console.log(error);
      }
    },
    openMenu(ID) {
      const error = this.errorLogsData.find((error) => error.id === ID);
      if (error.isMenuActive) {
        error.isMenuActive = false;
      } else {
        for (let i = 0; i < this.errorLogsData.length; i++) {
          this.errorLogsData[i].isMenuActive = false;
        }
        error.isMenuActive = true;
      }
    },
    toggleMenu(ID) {
      const error = this.errorLogsData.find((error) => error.id === ID);
      if (error.isMenuActive) {
        error.isMenuActive = false;
      } else {
        error.isMenuActive = true;
      }
    },
    closeMenus() {
      for (let i = 0; i < this.errorLogsData.length; i++) {
        this.errorLogsData[i].isMenuActive = false;
      }
    },
  },
});
