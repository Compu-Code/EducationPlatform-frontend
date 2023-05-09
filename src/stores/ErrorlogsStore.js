import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useErrorlogsStore = defineStore("errorlogsStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    errorLogsData: null,
    errorDetails: null,
  }),
  actions: {
    async deleteError(id) {
      const error = this.errorLogsData.find((error) => error.id === id);

      // start test
      // console.log(error.id);
      // const index = this.errorLogsData.indexOf(error);
      // if (index > -1) {
      //   this.errorLogsData.splice(index, 1);
      // }
      // console.log(this.errorLogsData);
      // end test

      //TODO: run this code for backend test
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
        console.log(response);
        console.log(response.data);
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
        // this.errorLogsData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showErrorData(id) {
      const error = this.errorLogsData.find((error) => error.id === id);

      // start test
      // console.log(error.id);
      //end test

      //TODO: run this code for backend test
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
        this.$router.push({
          name: "errorDetails",
          params: { errorID: error.id },
        });
        console.log(response);
        console.log(response.data);
        this.errorDetails = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
