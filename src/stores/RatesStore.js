import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useRatesStore = defineStore("ratesStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    ratesData: [
      {
        id: 1,
        user_name: "Filomena Christiansen sameer",
        rate: 0,
        message:
          "Fuga sapiente exercitationem magni consequatur. Aliquid et voluptates impedit aut sed. Labore quo occaecati ipsum voluptatem sit consequuntur.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 2,
        user_name: "Freda Turcotte sameer",
        rate: 0,
        message:
          "Dolor qui voluptatem non maiores aut nam ad. Ea ut sint sint odit provident possimus molestiae. In illo minima deleniti accusantium excepturi vitae praesentium. Commodi tenetur maiores porro quod culpa consequuntur vitae qui.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 3,
        user_name: "Nestor Koss III sameer",
        rate: 0,
        message:
          "Aliquam quis adipisci sed nulla. Architecto quas sapiente consectetur sit eveniet quia. Dolore iste dolorum aut esse voluptatibus. Ea et delectus impedit veniam ex voluptas. Non impedit minus nemo aspernatur.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 4,
        user_name: "Janice Runte sameer",
        rate: 0,
        message:
          "Eum est ipsum beatae vel. Laborum suscipit tempora dolores nihil earum. Excepturi consequatur qui provident delectus aut. Vel laboriosam magni dolore rerum rerum non.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 5,
        user_name: "Sabina Ryan sameer",
        rate: 0,
        message:
          "Autem cumque aperiam nulla assumenda cupiditate. Nulla reprehenderit hic omnis quo. Esse incidunt tempora veniam earum. Laborum sequi eaque illum maiores ipsa. Error non et temporibus dolor quia vitae quod.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 6,
        user_name: "test test",
        rate: 5,
        message: "test",
        created_at: "2023-05-11T12:06:11.000000Z",
        updated_at: "2023-05-11T12:06:11.000000Z",
        isMenuActive: false,
      },
    ],
    rateDetails: null,
  }),
  actions: {
    async deleteRate(id) {
      const rate = this.ratesData.find((rate) => rate.id === id);
      console.log("delete rate id:" + rate.id);
      // start test
      // console.log(rate.id);
      // const index = this.ratesData.indexOf(rate);
      // if (index > -1) {
      //   this.ratesData.splice(index, 1);
      // }
      // console.log(this.ratesData);
      // end test

      //TODO: run this code for backend test
      // try {
      //   const response = await axios.delete(
      //     this.AuthStore.baseURL + `/api/admin/website-rates/${rate.id}`,
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
        // this.ratesData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showRateData(id) {
      const rate = this.ratesData.find((rate) => rate.id === id);

      // start test
      // console.log(rate.id);
      //end test

      //TODO: run this code for backend test
      // try {
      //   const response = await axios.get(
      //     this.AuthStore.baseURL + `/api/admin/website-rates/${rate.id}`,
      //     {
      //       headers: {
      //         "Access-Control-Allow-Origin": "*",
      //         Authorization: `Bearer ${this.AuthStore.userToken}`,
      //         "content-type": "application/json",
      //       },
      //     }
      //   );
      this.$router.push({
        name: "ratesDetails",
        params: { rateID: rate.id },
      });
      //   console.log(response);
      //   console.log(response.data);
      //   this.errorDetails = response.data;
      // } catch (error) {
      //   console.log(error);
      // }
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
