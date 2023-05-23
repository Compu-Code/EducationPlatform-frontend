import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useOurnewsStore = defineStore("ournewsStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    ourNewsData: [],
    newsDetails: [],
    createLoading: false,
    createdSuccessfully: false,
    editLoading: false,
    updatedSuccessfully: false,
  }),
  actions: {
    // CRUD
    async getourNewsData() {
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + "/api/admin/our-news?page=1",
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
        // this.ourNewsData = response.data.forEach((news) => {
        //   isMenuActive = false;
        // });
        this.ourNewsData = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showNewsData(id) {
      await this.getourNewsData();
      const news = this.ourNewsData.find((news) => news.id === id);
      console.log("news id" + news.id);
      try {
        const response = await axios.get(
          this.AuthStore.baseURL + `/api/admin/our-news/${news.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.$router.push({
          name: "newsDetails",
          params: { newsID: news.id },
        });
        console.log(response);
        console.log(response.data);
        this.newsDetails = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async createNews(payload) {
      console.log(payload);
      try {
        this.createLoading = true;
        const response = await axios.post(
          this.AuthStore.baseURL + "/api/admin/our-news",
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
        this.getourNewsData();
      } catch (error) {
        console.log(error);
      }
    },
    async updateNews(payload, id) {
      console.log(payload);
      console.log(id);
      const news = this.ourNewsData.find((news) => news.id === id);
      try {
        this.editLoading = true;
        const response = await axios.put(
          this.AuthStore.baseURL + `/api/admin/our-news/${news.id}`,
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
        this.getourNewsData();
        this.showNewsData();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteNews(id) {
      const news = this.ourNewsData.find((news) => news.id === id);
      console.log("delete news id:" + news.id);

      try {
        const response = await axios.delete(
          this.AuthStore.baseURL + `/api/admin/our-news/${news.id}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${this.AuthStore.userToken}`,
              "content-type": "application/json",
            },
          }
        );
        this.ourNewsData.splice(
          this.ourNewsData.map((news) => news.id).indexOf(news.id),
          1
        );
        console.log(response);
        console.log(response.data);
        this.$router.replace({ name: "admin-news-events" });
      } catch (error) {
        console.log(error);
      }
    },

    openMenu(ID) {
      const news = this.ourNewsData.find((news) => news.id === ID);
      if (news.isMenuActive) {
        news.isMenuActive = false;
      } else {
        for (let i = 0; i < this.ourNewsData.length; i++) {
          this.ourNewsData[i].isMenuActive = false;
        }
        news.isMenuActive = true;
      }
    },
    toggleMenu(ID) {
      const news = this.ourNewsData.find((news) => news.id === ID);
      if (news.isMenuActive) {
        news.isMenuActive = false;
      } else {
        news.isMenuActive = true;
      }
    },
    closeMenus() {
      for (let i = 0; i < this.ourNewsData.length; i++) {
        this.ourNewsData[i].isMenuActive = false;
      }
    },
  },
});
