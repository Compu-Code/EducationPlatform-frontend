import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useSponsorsStore = defineStore("sponsorsStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    sponsorsData: [],
    sponsorDetails: [],
    createLoading: false,
    createdSuccessfully: false,
    editLoading: false,
    updatedSuccessfully: false,
  }),
  actions: {
    // CRUD
    async getSponsorsData() {
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + "/api/admin/sponsors?page=1",
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
        // to add isMenuActive into all to check later if popup menu open or not
        // this.sponsorsData = response.data.forEach((sponsor) => {
        //   isMenuActive = false;
        // });
        this.sponsorsData = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showSponsorData(id) {
      await this.getSponsorsData();
      const sponsor = this.sponsorsData.find((sponsor) => sponsor.id === id);
      console.log("sponsor id" + sponsor.id);
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + `/api/admin/sponsors/${sponsor.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.$router.push({
          name: "sponsorDetails",
          params: { sponsorID: sponsor.id },
        });
        console.log(response);
        console.log(response.data);
        this.sponsorDetails = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async createSponsor(payload) {
      console.log(payload);
      try {
        this.createLoading = true;
        const response = await axios.post(
          this.AuthStore.baseURL + "/api/admin/sponsors",
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
        this.getSponsorsData();
      } catch (error) {
        this.createLoading = false;
        console.log(error);
      }
    },
    async updateSponsor(payload, id) {
      console.log(payload);
      console.log(id);
      const sponsor = this.sponsorsData.find((sponsor) => sponsor.id === id);
      try {
        this.editLoading = true;
        const response = await axios.put(
          this.AuthStore.baseURL + `/api/admin/sponsors/${sponsor.id}`,
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
        this.sponsorDetails = response.data.data;
        this.getSponsorsData();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteSponsor(id) {
      const sponsor = this.sponsorsData.find((sponsor) => sponsor.id === id);
      console.log("delete sponsor id:" + sponsor.id);

      try {
        const response = await axios.delete(
          this.AuthStore.baseURL + `/api/admin/sponsors/${sponsor.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.sponsorsData.splice(
          this.sponsorsData.map((sponsor) => sponsor.id).indexOf(sponsor.id),
          1
        );
        console.log(response);
        console.log(response.data);
        this.$router.replace({ name: "admin-sponsors" });
      } catch (error) {
        console.log(error);
      }
    },

    openMenu(ID) {
      const sponsor = this.sponsorsData.find((sponsor) => sponsor.id === ID);
      if (sponsor.isMenuActive) {
        sponsor.isMenuActive = false;
      } else {
        for (let i = 0; i < this.sponsorsData.length; i++) {
          this.sponsorsData[i].isMenuActive = false;
        }
        sponsor.isMenuActive = true;
      }
    },
    toggleMenu(ID) {
      const sponsor = this.sponsorsData.find((sponsor) => sponsor.id === ID);
      if (sponsor.isMenuActive) {
        sponsor.isMenuActive = false;
      } else {
        sponsor.isMenuActive = true;
      }
    },
    closeMenus() {
      for (let i = 0; i < this.sponsorsData.length; i++) {
        this.sponsorsData[i].isMenuActive = false;
      }
    },
  },
});
