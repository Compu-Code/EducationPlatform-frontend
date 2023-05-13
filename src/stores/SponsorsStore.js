import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useSponsorsStore = defineStore("sponsorsStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    sponsorsData: [
      {
        id: 1,
        sponsor_name:
          "Quo enim eum autem sit recusandae reprehenderit nihil. Eum ex voluptatem blanditiis alias reprehenderit veritatis. Deleniti sit esse modi et enim. Expedita ut dolore error vel sit eligendi sequi.",
        sponsor_logo:
          "Quae aspernatur et quos quasi est et error. Sit consequatur et et enim enim omnis minus. Aut ratione illum dolore maxime.",
        sponsor_description:
          "Aut sit porro quod reprehenderit. Tempore nisi reiciendis non nemo ut aperiam et. Distinctio odit qui quaerat rerum ea officiis. Sit doloribus suscipit dolore in reiciendis fugit.",
        created_at: "2023-05-13T16:19:11.000000Z",
        updated_at: "2023-05-13T16:19:11.000000Z",
        isMenuActive: false,
      },
      {
        id: 2,
        sponsor_name:
          "Temporibus qui architecto dolores illum quo. Rem error molestiae consequatur exercitationem vitae. Rem blanditiis unde quae nesciunt consectetur sed iusto. Aperiam omnis nemo corporis consequatur.",
        sponsor_logo:
          "Eius alias doloribus culpa. Exercitationem consequuntur tempore eum. Sit commodi quisquam esse commodi occaecati. Impedit error vel cupiditate vel iure suscipit quas est. Est quo nihil aut praesentium.",
        sponsor_description:
          "Magni repudiandae quam facilis ea aliquam deleniti pariatur. Pariatur aperiam voluptas et fuga ad eos. Necessitatibus voluptatem sed modi ex a.",
        created_at: "2023-05-13T16:19:11.000000Z",
        updated_at: "2023-05-13T16:19:11.000000Z",
        isMenuActive: false,
      },
      {
        id: 3,
        sponsor_name:
          "Ea aut occaecati inventore. Iste quam voluptas sint error necessitatibus voluptas. Tenetur ea sunt vitae qui cum eveniet id. Nam aspernatur dolor id laboriosam veniam.",
        sponsor_logo:
          "Cumque voluptatem debitis est sit aut necessitatibus esse. Quis aut omnis natus inventore dolore. In et corrupti culpa dolorum.",
        sponsor_description:
          "Repellat earum minima sit nulla sed veniam qui. Et cupiditate aperiam possimus itaque eaque maiores maiores sit. Sit sit est quaerat repellat culpa qui. Modi fuga rerum laudantium.",
        created_at: "2023-05-13T16:19:11.000000Z",
        updated_at: "2023-05-13T16:19:11.000000Z",
        isMenuActive: false,
      },
      {
        id: 4,
        sponsor_name:
          "Atque ad quia hic quis sit qui voluptas rerum. Eveniet et veniam cum illum. Ab fugit deserunt ut voluptate impedit. Qui quia repudiandae iusto officia a officia voluptates.",
        sponsor_logo:
          "Odit cumque nam odio perferendis magnam. Aut sed ducimus quia mollitia nihil omnis. Facilis repellendus porro nobis placeat sed dolores.",
        sponsor_description:
          "Aut unde voluptatem delectus. Aliquam nesciunt dolor qui error qui. Id nostrum nihil dolorem enim.",
        created_at: "2023-05-13T16:19:11.000000Z",
        updated_at: "2023-05-13T16:19:11.000000Z",
        isMenuActive: false,
      },
      {
        id: 5,
        sponsor_name:
          "Est modi minus ipsum consectetur deleniti. Non ad quaerat quo fugit cupiditate maxime. Quo eos voluptas velit sed neque. Autem officiis est accusamus voluptas aperiam aut.",
        sponsor_logo:
          "Error nesciunt velit et magnam quos fugiat autem debitis. Omnis et ipsam molestiae at dolor. Quae nesciunt accusamus natus eos beatae placeat non vitae. Consectetur eius porro officia amet ut exercitationem ut.",
        sponsor_description:
          "Quia qui velit sapiente excepturi quos quasi. Porro qui est sunt quas neque voluptas itaque. Quod possimus ut soluta laborum ad iste. Dolor adipisci qui ipsum voluptatibus accusamus nam magnam.",
        created_at: "2023-05-13T16:19:11.000000Z",
        updated_at: "2023-05-13T16:19:11.000000Z",
        isMenuActive: false,
      },
    ],
    sponsorDetails: null,
    createLoading: false,
    createdSuccesfully: false,
    editLoading: false,
    updatedSuccesfully: false,
  }),
  actions: {
    // CRUD
    async getSponsorsData() {
      try {
        const response = await axios.get(
          //TODO: update URL (error-logs) => (News)
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
        this.sponsorsData = response.data.forEach((sponsor) => {
          isMenuActive = false;
        });
        this.sponsorsData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showSponsorData(id) {
      const sponsor = this.sponsorsData.find((sponsor) => sponsor.id === id);
      console.log("sponsor id" + sponsor.id);
      // try {
      //   const response = await axios.get(
      //     this.AuthStore.baseURL + `/api/admin/sponsors/${sponsor.id}`,
      //     {
      //       headers: {
      //         "Access-Control-Allow-Origin": "*",
      //         Authorization: `Bearer ${this.AuthStore.userToken}`,
      //         "content-type": "application/json",
      //       },
      //     }
      //   );
      this.$router.push({
        name: "sponsorDetails",
        params: { sponsorID: sponsor.id },
      });
      //   console.log(response);
      //   console.log(response.data);
      //   this.errorDetails = response.data;
      // } catch (error) {
      //   console.log(error);
      // }
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
        this.createdSuccesfully = response.success;
      } catch (error) {
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
        this.updatedSuccesfully = response.success;
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
        console.log(response);
        console.log(response.data);
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
