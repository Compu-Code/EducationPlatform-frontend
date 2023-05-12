import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useContactusStore = defineStore("contactusStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    contactUsData: [
      {
        id: 1,
        first_name: "Christian",
        last_name: "Legros",
        email: "thelma.bartell@bogan.com",
        subjact:
          "Eos quidem et voluptatem. Accusantium commodi inventore commodi quod provident recusandae ut. Tenetur nihil placeat natus ad et dolor expedita. Aspernatur sit laborum nostrum voluptatem exercitationem dolor quibusdam est.",
        description:
          "Voluptatem laudantium quia et assumenda quo facilis iste voluptates maiores eligendi quia.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 2,
        first_name: "Lyric",
        last_name: "Daniel",
        email: "eziemann@hotmail.com",
        subjact:
          "Voluptatum rerum reiciendis laboriosam velit beatae qui sit. Et repellat sunt optio dolores porro est nobis. Cupiditate rem optio id hic. Recusandae blanditiis velit consequatur sed neque inventore.",
        description:
          "Est asperiores quae possimus consequatur exercitationem rerum eos ea quo consequatur velit quos deserunt consequatur sequi qui harum distinctio autem.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 3,
        first_name: "Margaretta",
        last_name: "Schaden",
        email: "retha.runte@yahoo.com",
        subjact:
          "Ex placeat doloremque vel quidem corrupti. Blanditiis enim quisquam ea qui. Expedita consequatur fugit quidem eum. Consequatur nobis et voluptas qui modi. Pariatur laborum voluptates aut veritatis est. Adipisci dolores accusantium sed ab ex delectus.",
        description:
          "Et incidunt et adipisci cum officiis iusto ipsam nihil dolores magni asperiores quia quae nihil in.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 4,
        first_name: "Rosario",
        last_name: "Bruen",
        email: "dorian.stark@yahoo.com",
        subjact:
          "Commodi dolores iure quis quisquam doloribus eius. Corporis ex quod voluptas. Harum quo facilis voluptatem rerum laborum nihil id. Vel et aut necessitatibus magni sunt iusto. Maxime voluptates illo ut.",
        description:
          "Perspiciatis vero ea quis itaque mollitia aut laudantium blanditiis quod nostrum pariatur velit quis.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 5,
        first_name: "Breanna",
        last_name: "Jaskolski",
        email: "marlin.erdman@king.net",
        subjact:
          "Vero consequatur vero qui provident dolor. Et unde expedita officia enim nam eum rerum placeat. Culpa reprehenderit neque atque blanditiis quo facilis molestiae nihil. Iste cum reiciendis dolores sed. Culpa possimus est facilis enim.",
        description:
          "Quo rem autem reiciendis dolor iusto sit nihil maxime ex ipsum repellendus voluptatibus at.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
    ],
    contactUsDetails: null,
  }),
  actions: {
    async deleteContactUs(id) {
      const contactUs = this.contactUsData.find(
        (contactUs) => contactUs.id === id
      );
      console.log("delete contactUs id:" + contactUs.id);
      // start test
      // console.log(contactUs.id);
      // const index = this.contactUsData.indexOf(contactUs);
      // if (index > -1) {
      //   this.contactUsData.splice(index, 1);
      // }
      // console.log(this.contactUsData);
      // end test

      //TODO: run this code for backend test
      // try {
      //   const response = await axios.delete(
      //     this.AuthStore.baseURL + `/api/admin/contact-us/${contactUs.id}`,
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
        // this.errorLogsData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showContactUsData(id) {
      const contactUs = this.contactUsData.find(
        (contactUs) => contactUs.id === id
      );

      // start test
      // console.log(contactUs.id);
      //end test

      //TODO: run this code for backend test
      // try {
      //   const response = await axios.get(
      //     this.AuthStore.baseURL + `/api/admin/contact-us/${contactUs.id}`,
      //     {
      //       headers: {
      //         "Access-Control-Allow-Origin": "*",
      //         Authorization: `Bearer ${this.AuthStore.userToken}`,
      //         "content-type": "application/json",
      //       },
      //     }
      //   );
      this.$router.push({
        name: "contactUsDetails",
        params: { contactUsID: contactUs.id },
      });
      //   console.log(response);
      //   console.log(response.data);
      //   this.contactUsDetails = response.data;
      // } catch (error) {
      //   console.log(error);
      // }
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
