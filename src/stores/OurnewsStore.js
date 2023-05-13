import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useOurnewsStore = defineStore("ournewsStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    ourNewsData: [
      {
        id: 1,
        title:
          "Quisquam quis sunt suscipit nihil qui odio qui accusantium quo at quo quidem accusamus.",
        description:
          "Omnis facere qui maxime iste consequatur dicta voluptatibus est. Eveniet ut rerum sit corrupti officia. Magnam doloremque qui sint quasi error.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 2,
        title:
          "Aut neque velit incidunt suscipit minima incidunt accusantium asperiores quibusdam iusto vero.",
        description:
          "Optio accusantium incidunt quo non. Provident assumenda quaerat quo provident odio. Nostrum architecto unde suscipit perspiciatis perspiciatis.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 3,
        title:
          "Qui culpa ut qui assumenda odit voluptatem pariatur excepturi reprehenderit.",
        description:
          "Aut dolorem architecto nobis recusandae neque cum. Sapiente et quas at optio perspiciatis.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 4,
        title:
          "Ipsam veniam distinctio magni pariatur aperiam quis provident delectus quo aliquam.",
        description:
          "Mollitia ut veniam perferendis est sint recusandae quis ut. Est et ut itaque expedita similique veritatis. Sunt vitae sunt et saepe.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 5,
        title:
          "Voluptatem qui provident quisquam voluptatibus voluptatem sint sequi ullam.",
        description:
          "Suscipit voluptas ut in. Doloremque velit maiores tenetur sed excepturi neque omnis. Non possimus possimus qui eum dignissimos tempore et. Culpa et quis dolorem distinctio omnis.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
    ],
    newsDetails: null,
    createLoading: false,
    createdSuccesfully: false,
    editLoading: false,
    updatedSuccesfully: false,
  }),
  actions: {
    // CRUD
    async getourNewsData() {
      try {
        const response = await axios.get(
          //TODO: update URL (error-logs) => (News)
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
        this.ourNewsData = response.data.forEach((news) => {
          isMenuActive = false;
        });
        this.ourNewsData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showNewsData(id) {
      const news = this.ourNewsData.find((news) => news.id === id);
      console.log("news id" + news.id);
      // try {
      //   const response = await axios.get(
      //     this.AuthStore.baseURL + `/api/admin/our-news/${news.id}`,
      //     {
      //       headers: {
      //         "Access-Control-Allow-Origin": "*",
      //         Authorization: `Bearer ${this.AuthStore.userToken}`,
      //         "content-type": "application/json",
      //       },
      //     }
      //   );
      this.$router.push({
        name: "newsDetails",
        params: { newsID: news.id },
      });
      //   console.log(response);
      //   console.log(response.data);
      //   this.errorDetails = response.data;
      // } catch (error) {
      //   console.log(error);
      // }
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
        this.createdSuccesfully = response.success;
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
        this.updatedSuccesfully = response.success;
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
        console.log(response);
        console.log(response.data);
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
