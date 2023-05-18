import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useRatesStore = defineStore("ratesStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    ratesData: [],
    rateDetails: null,
  }),
  actions: {
    async deleteRate(id) {
      const rate = this.ratesData.find((rate) => rate.id === id);
      console.log("delete rate id:" + rate.id);

      try {
        const response = await axios.delete(
          this.AuthStore.baseURL + `/api/admin/website-rates/${rate.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.ratesData.splice(
          this.ratesData.map((rate) => rate.id).indexOf(rate.id),
          1
        );
        console.log(response);
        console.log(response.data);
        this.$router.replace({ name: "admin-rating" });
      } catch (error) {
        console.log(error);
      }
    },
    async getRatesData() {
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + "/api/admin/website-rates?page=1",
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
        // to add isMenuActive into all rates to check later if popup menu open or not
        // ratesData = response.data.forEach((rate) => {
        //   isMenuActive = false;
        // });
        this.ratesData = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showRateData(id) {
      await this.getRatesData();
      const rate = this.ratesData.find((rate) => rate.id === id);
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + `/api/admin/website-rates/${rate.id}`,
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
        this.$router.push({
          name: "ratesDetails",
          params: { rateID: rate.id },
        });
        this.rateDetails = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    openMenu(ID) {
      const rate = this.ratesData.find((rate) => rate.id === ID);
      if (rate.isMenuActive) {
        rate.isMenuActive = false;
      } else {
        for (let i = 0; i < this.ratesData.length; i++) {
          this.ratesData[i].isMenuActive = false;
        }
        rate.isMenuActive = true;
      }
    },
    toggleMenu(ID) {
      const rate = this.ratesData.find((rate) => rate.id === ID);
      if (rate.isMenuActive) {
        rate.isMenuActive = false;
      } else {
        rate.isMenuActive = true;
      }
    },
    closeMenus() {
      for (let i = 0; i < this.ratesData.length; i++) {
        this.ratesData[i].isMenuActive = false;
      }
    },
  },
});
