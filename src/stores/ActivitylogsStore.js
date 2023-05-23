import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useActivitylogsStore = defineStore("activitylogsStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    activityLogsData: [],
    activityDetails: [],
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
        this.activityLogsData = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showActivityData(id) {
      await this.getActivityLogsData();
      const activity = this.activityLogsData.find(
        (activity) => activity.id === id
      );

      try {
        const response = await axios.get(
          this.AuthStore.baseURL + `/api/admin/activity-logs/${activity.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.$router.push({
          name: "activityDetails",
          params: { activityID: activity.id },
        });
        console.log(response);
        console.log(response.data);
        this.activityDetails = response.data.data;
      } catch (error) {
        console.log(error);
      }
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
