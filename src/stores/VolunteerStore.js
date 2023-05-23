import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useVolunteerStore = defineStore("volunteerStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    volunteerData: [],
    volunteerDetails: [],
  }),
  actions: {
    async deleteVolunteer(id) {
      const volunteer = this.volunteerData.find(
        (volunteer) => volunteer.id === id
      );
      console.log("delete volunteer id:" + volunteer.id);

      try {
        const response = await axios.delete(
          this.AuthStore.baseURL +
            `/api/admin/volunteer-withus/${volunteer.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.volunteerData.splice(
          this.volunteerData
            .map((volunteer) => volunteer.id)
            .indexOf(volunteer.id),
          1
        );
        this.$router.replace({ name: "admin-volunteer-forms" });
        console.log(response);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getVolunteerData() {
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + "/api/admin/volunteer-withus",
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
        // to add isMenuActive into all volunteerData to check later if popup menu open or not
        // volunteerData = response.data.forEach((volunteer) => {
        //   isMenuActive = false;
        // });
        this.volunteerData = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showVolunteerData(id) {
      await this.getVolunteerData();
      const volunteer = this.volunteerData.find(
        (volunteer) => volunteer.id === id
      );

      try {
        const response = await axios.get(
          this.AuthStore.baseURL +
            `/api/admin/volunteer-withus/${volunteer.id}`,
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
        this.volunteerDetails = response.data.data;
        this.$router.push({
          name: "volunteerDetails",
          params: { volunteerID: volunteer.id },
        });
      } catch (error) {
        console.log(error);
      }
    },
    openMenu(ID) {
      const volunteer = this.volunteerData.find(
        (volunteer) => volunteer.id === ID
      );
      if (volunteer.isMenuActive) {
        volunteer.isMenuActive = false;
      } else {
        for (let i = 0; i < this.volunteerData.length; i++) {
          this.volunteerData[i].isMenuActive = false;
        }
        volunteer.isMenuActive = true;
      }
    },
    toggleMenu(ID) {
      const volunteer = this.volunteerData.find(
        (volunteer) => volunteer.id === ID
      );
      if (volunteer.isMenuActive) {
        volunteer.isMenuActive = false;
      } else {
        volunteer.isMenuActive = true;
      }
    },
    closeMenus() {
      for (let i = 0; i < this.volunteerData.length; i++) {
        this.volunteerData[i].isMenuActive = false;
      }
    },
  },
});
