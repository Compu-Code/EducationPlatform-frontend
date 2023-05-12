import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useActivitylogsStore = defineStore("activitylogsStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    activityLogsData: [
      {
        id: 1,
        user_id: 17,
        name: "test test",
        subject: "store sponsore",
        url: "http://localhost:8000",
        method: "GET",
        ip: "109.107.243.170",
        created_at: "2023-05-11T11:42:29.000000Z",
        updated_at: "2023-05-11T11:42:29.000000Z",
        isMenuActive: false,
      },
      {
        id: 2,
        user_id: 17,
        name: "test test",
        subject: "delete sponsore",
        url: "http://localhost:8000",
        method: "GET",
        ip: "109.107.243.170",
        created_at: "2023-05-11T11:44:00.000000Z",
        updated_at: "2023-05-11T11:44:00.000000Z",
        isMenuActive: false,
      },
      {
        id: 3,
        user_id: 17,
        name: "test test",
        subject: "store sponsore",
        url: "http://localhost:8000",
        method: "GET",
        ip: "109.107.243.170",
        created_at: "2023-05-11T11:44:55.000000Z",
        updated_at: "2023-05-11T11:44:55.000000Z",
        isMenuActive: false,
      },
    ],
    activityDetails: null,
  }),
  actions: {
    async getActivityLogsData() {
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + "/api/admin/activity-logs",
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
        // to add isMenuActive into all activityLogs to check later if popup menu open or not
        // activityLogsData = response.data.forEach((error) => {
        //   isMenuActive = false;
        // });
        // this.errorLogsData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showActivityData(id) {
      const activity = this.activityLogsData.find(
        (activity) => activity.id === id
      );

      // start test
      // console.log(error.id);
      //end test

      //TODO: run this code for backend test
      // try {
      //   const response = await axios.get(
      //     this.AuthStore.baseURL + `/api/admin/error-logs/${error.id}`,
      //     {
      //       headers: {
      //         "Access-Control-Allow-Origin": "*",
      //         Authorization: `Bearer ${this.AuthStore.userToken}`,
      //         "content-type": "application/json",
      //       },
      //     }
      //   );
      this.$router.push({
        name: "activityDetails",
        params: { activityID: activity.id },
      });
      //   console.log(response);
      //   console.log(response.data);
      //   this.errorDetails = response.data;
      // } catch (error) {
      //   console.log(error);
      // }
    },
    openMenu(ID) {
      const activity = this.activityLogsData.find(
        (activity) => activity.id === ID
      );
      if (activity.isMenuActive) {
        activity.isMenuActive = false;
      } else {
        for (let i = 0; i < this.activityLogsData.length; i++) {
          this.activityLogsData[i].isMenuActive = false;
        }
        activity.isMenuActive = true;
      }
    },
    toggleMenu(ID) {
      const activity = this.activityLogsData.find(
        (activity) => activity.id === ID
      );
      if (activity.isMenuActive) {
        activity.isMenuActive = false;
      } else {
        activity.isMenuActive = true;
      }
    },
    closeMenus() {
      for (let i = 0; i < this.activityLogsData.length; i++) {
        this.activityLogsData[i].isMenuActive = false;
      }
    },
  },
});
