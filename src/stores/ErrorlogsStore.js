import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useErrorlogsStore = defineStore("errorlogsStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    errorLogsData: [
      {
        id: 111,
        error_message:
          "Facere et magni omnis perferendis deleniti. Quam voluptatum accusamus nobis quod. Quod autem tempore minus quo molestiae aut commodi. Cupiditate sed aut quos et consequuntur voluptatibus dolor consequuntur. Autem nesciunt et animi magnam omnis sunt.",
        error_description:
          "Quam doloribus velit architecto eligendi eum. Alias nihil non ut tempore earum. Voluptatum ad nihil doloribus et iste.",
        created_at: "2023-04-28T14:17:48.000000Z",
        updated_at: "2023-04-28T14:17:48.000000Z",
        isMenuActive: false,
      },
      {
        id: 20,
        error_message:
          "Facere et magni omnis perferendis deleniti. Quam voluptatum accusamus nobis quod. Quod autem tempore minus quo molestiae aut commodi. Cupiditate sed aut quos et consequuntur voluptatibus dolor consequuntur. Autem nesciunt et animi magnam omnis sunt.",
        error_description:
          "Quam doloribus velit architecto eligendi eum. Alias nihil non ut tempore earum. Voluptatum ad nihil doloribus et iste.",
        created_at: "2023-04-28T14:17:48.000000Z",
        updated_at: "2023-04-28T14:17:48.000000Z",
        isMenuActive: false,
      },
      {
        id: 19,
        error_message:
          "Consequuntur corporis recusandae minima ducimus. Non veniam qui quos quia iste qui animi. Error iure qui qui aperiam quia. Omnis sit officiis pariatur voluptas dicta.",
        error_description:
          "Ratione tempora ducimus aperiam officiis commodi. Voluptates nam similique nulla quas et. Perspiciatis dolorem quam fuga alias nesciunt occaecati blanditiis. Aliquid doloremque consequatur quia.",
        created_at: "2023-04-28T14:17:48.000000Z",
        updated_at: "2023-04-28T14:17:48.000000Z",
        isMenuActive: false,
      },
      {
        id: 18,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "No query results for model [App\\Models\\ContactUs] 33",
        created_at: "2023-04-28T15:07:15.000000Z",
        updated_at: "2023-04-28T15:07:15.000000Z",
        isMenuActive: false,
      },
      {
        id: 17,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "No query results for model [App\\Models\\OurNews] 6",
        created_at: "2023-05-06T12:36:34.000000Z",
        updated_at: "2023-05-06T12:36:34.000000Z",
        isMenuActive: false,
      },
      {
        id: 16,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "The given role or permission should use guard `sanctum` instead of `web`.",
        created_at: "2023-05-06T17:03:21.000000Z",
        updated_at: "2023-05-06T17:03:21.000000Z",
        isMenuActive: false,
      },
      {
        id: 15,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "The given role or permission should use guard `sanctum` instead of `web`.",
        created_at: "2023-05-07T17:42:17.000000Z",
        updated_at: "2023-05-07T17:42:17.000000Z",
        isMenuActive: false,
      },
      {
        id: 14,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "The given role or permission should use guard `sanctum` instead of `web`.",
        created_at: "2023-05-07T17:43:55.000000Z",
        updated_at: "2023-05-07T17:43:55.000000Z",
        isMenuActive: false,
      },
      {
        id: 13,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "The given role or permission should use guard `sanctum` instead of `web`.",
        created_at: "2023-05-07T17:44:42.000000Z",
        updated_at: "2023-05-07T17:44:42.000000Z",
        isMenuActive: false,
      },
      {
        id: 12,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "The given role or permission should use guard `user` instead of `web`.",
        created_at: "2023-05-07T17:50:34.000000Z",
        updated_at: "2023-05-07T17:50:34.000000Z",
        isMenuActive: false,
      },
      {
        id: 11,
        error_message:
          "Facere et magni omnis perferendis deleniti. Quam voluptatum accusamus nobis quod. Quod autem tempore minus quo molestiae aut commodi. Cupiditate sed aut quos et consequuntur voluptatibus dolor consequuntur. Autem nesciunt et animi magnam omnis sunt.",
        error_description:
          "Quam doloribus velit architecto eligendi eum. Alias nihil non ut tempore earum. Voluptatum ad nihil doloribus et iste.",
        created_at: "2023-04-28T14:17:48.000000Z",
        updated_at: "2023-04-28T14:17:48.000000Z",
        isMenuActive: false,
      },
      {
        id: 10,
        error_message:
          "Consequuntur corporis recusandae minima ducimus. Non veniam qui quos quia iste qui animi. Error iure qui qui aperiam quia. Omnis sit officiis pariatur voluptas dicta.",
        error_description:
          "Ratione tempora ducimus aperiam officiis commodi. Voluptates nam similique nulla quas et. Perspiciatis dolorem quam fuga alias nesciunt occaecati blanditiis. Aliquid doloremque consequatur quia.",
        created_at: "2023-04-28T14:17:48.000000Z",
        updated_at: "2023-04-28T14:17:48.000000Z",
        isMenuActive: false,
      },
      {
        id: 9,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "No query results for model [App\\Models\\ContactUs] 33",
        created_at: "2023-04-28T15:07:15.000000Z",
        updated_at: "2023-04-28T15:07:15.000000Z",
        isMenuActive: false,
      },
      {
        id: 8,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "No query results for model [App\\Models\\OurNews] 6",
        created_at: "2023-05-06T12:36:34.000000Z",
        updated_at: "2023-05-06T12:36:34.000000Z",
        isMenuActive: false,
      },
      {
        id: 7,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "The given role or permission should use guard `sanctum` instead of `web`.",
        created_at: "2023-05-06T17:03:21.000000Z",
        updated_at: "2023-05-06T17:03:21.000000Z",
        isMenuActive: false,
      },
      {
        id: 6,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "The given role or permission should use guard `sanctum` instead of `web`.",
        created_at: "2023-05-07T17:42:17.000000Z",
        updated_at: "2023-05-07T17:42:17.000000Z",
        isMenuActive: false,
      },
      {
        id: 5,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "The given role or permission should use guard `sanctum` instead of `web`.",
        created_at: "2023-05-07T17:43:55.000000Z",
        updated_at: "2023-05-07T17:43:55.000000Z",
        isMenuActive: false,
      },
      {
        id: 4,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "The given role or permission should use guard `sanctum` instead of `web`.",
        created_at: "2023-05-07T17:44:42.000000Z",
        updated_at: "2023-05-07T17:44:42.000000Z",
        isMenuActive: false,
      },
      {
        id: 3,
        error_message:
          "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
        error_description:
          "The given role or permission should use guard `user` instead of `web`.",
        created_at: "2023-05-07T17:50:34.000000Z",
        updated_at: "2023-05-07T17:50:34.000000Z",
        isMenuActive: false,
      },
    ],
    errorDetails: null,
  }),
  actions: {
    async deleteError(id) {
      const error = this.errorLogsData.find((error) => error.id === id);
      console.log("delete error id:" + error.id);
      // start test
      // console.log(error.id);
      // const index = this.errorLogsData.indexOf(error);
      // if (index > -1) {
      //   this.errorLogsData.splice(index, 1);
      // }
      // console.log(this.errorLogsData);
      // end test

      //TODO: run this code for backend test
      // try {
      //   const response = await axios.delete(
      //     this.AuthStore.baseURL + `/api/admin/error-logs/${error.id}`,
      //     {
      //       headers: {
      //         "Access-Control-Allow-Origin": "*",
      //         Authorization: `Bearer ${this.AuthStore.userToken}`,
      //         "content-type": "application/json",
      //       },
      //     }
      //   );
      //   console.log(response);
      //   console.log(response.data);
      // } catch (error) {
      //   console.log(error);
      // }
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
        name: "errorDetails",
        params: { errorID: error.id },
      });
      //   console.log(response);
      //   console.log(response.data);
      //   this.errorDetails = response.data;
      // } catch (error) {
      //   console.log(error);
      // }
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
