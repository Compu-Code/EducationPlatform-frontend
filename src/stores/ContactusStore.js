import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useContactusStore = defineStore("contactusStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    contactUsData: [],
    contactUsDetails: null,
  }),
  actions: {
    async deleteContactUs(id) {
      const contactUs = this.contactUsData.find(
        (contactUs) => contactUs.id === id
      );
      console.log("delete contactUs id:" + contactUs.id);
      try {
        const response = await axios.delete(
          this.AuthStore.baseURL + `/api/admin/contact-us/${contactUs.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.contactUsData.splice(
          this.contactUsData
            .map((contactUs) => contactUs.id)
            .indexOf(contactUs.id),
          1
        );
        console.log(response);
        console.log(response.data);
        this.$router.replace({ name: "admin-contact-forms" });
      } catch (error) {
        console.log(error);
      }
    },
    async getContactUsData() {
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + "/api/admin/contact-us",
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
        this.contactUsData = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showContactUsData(id) {
      await this.getContactUsData();

      const contactUs = this.contactUsData.find(
        (contactUs) => contactUs.id === id
      );
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + `/api/admin/contact-us/${contactUs.id}`,
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
        this.contactUsDetails = response.data.data;
        this.$router.push({
          name: "contactUsDetails",
          params: { contactUsID: contactUs.id },
        });
      } catch (error) {
        console.log(error);
      }
    },
    openMenu(ID) {
      const contactUs = this.contactUsData.find(
        (contactUs) => contactUs.id === ID
      );
      if (contactUs.isMenuActive) {
        contactUs.isMenuActive = false;
      } else {
        for (let i = 0; i < this.contactUsData.length; i++) {
          this.contactUsData[i].isMenuActive = false;
        }
        contactUs.isMenuActive = true;
      }
    },
    toggleMenu(ID) {
      const contactUs = this.contactUsData.find(
        (contactUs) => contactUs.id === ID
      );
      if (contactUs.isMenuActive) {
        contactUs.isMenuActive = false;
      } else {
        contactUs.isMenuActive = true;
      }
    },
    closeMenus() {
      for (let i = 0; i < this.contactUsData.length; i++) {
        this.contactUsData[i].isMenuActive = false;
      }
    },
  },
});
