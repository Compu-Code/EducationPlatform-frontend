import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";

export const useVolunteerStore = defineStore("volunteerStore", {
  state: () => ({
    AuthStore: useAuthStore(),
    volunteerData: [
      {
        id: 1,
        first_name: "Leopoldo",
        last_name: "Wolf",
        email: "damore.geo@effertz.org",
        description:
          "Perspiciatis omnis natus asperiores modi quo facere. Officiis nesciunt sit minus itaque nostrum unde iste. Hic placeat voluptatibus iste explicabo. Repellat explicabo molestias officia eos.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 2,
        first_name: "Mason",
        last_name: "Terry",
        email: "kohler.kelsi@ernser.info",
        description:
          "Ut quia et et aut. Quia consequatur voluptatem natus est. Illum sapiente voluptatem vel id fugit. Nihil dolor sint vero et esse sunt. Sapiente quis voluptatem ut pariatur sunt earum illo.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 3,
        first_name: "Gisselle",
        last_name: "Rath",
        email: "breinger@vonrueden.com",
        description:
          "Nemo illum ea praesentium velit velit. Maiores animi aspernatur eos aut assumenda qui. Quod quia asperiores reiciendis impedit repellat architecto est. Quos vel unde veniam nam eum veniam commodi.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 4,
        first_name: "Colleen",
        last_name: "Legros",
        email: "kshlerin.kali@zemlak.com",
        description:
          "Qui architecto reiciendis numquam necessitatibus quia. Vel perspiciatis placeat quibusdam vel dolores architecto sit.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
      {
        id: 5,
        first_name: "Cassidy",
        last_name: "Breitenberg",
        email: "robb13@wilderman.net",
        description:
          "Porro eum pariatur et aliquam. Unde voluptates modi ea mollitia ad voluptatum. Error molestias odit illum qui. Molestiae voluptatum ut labore itaque at odit autem.",
        created_at: "2023-05-11T11:40:23.000000Z",
        updated_at: "2023-05-11T11:40:23.000000Z",
        isMenuActive: false,
      },
    ],
    volunteerDetails: null,
  }),
  actions: {
    async deleteVolunteer(id) {
      const volunteer = this.volunteerData.find(
        (volunteer) => volunteer.id === id
      );
      console.log("delete volunteer id:" + volunteer.id);
      // start test
      // console.log(volunteer.id);
      // const index = this.volunteerData.indexOf(volunteer);
      // if (index > -1) {
      //   this.volunteerData.splice(index, 1);
      // }
      // console.log(this.volunteerData);
      // end test

      //TODO: run this code for backend test
      // try {
      //   const response = await axios.delete(
      //     this.AuthStore.baseURL + `/api/admin/volunteer-withus/${volunteer.id}`,
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
        // this.volunteerData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async showVolunteerData(id) {
      const volunteer = this.volunteerData.find(
        (volunteer) => volunteer.id === id
      );

      // start test
      // console.log(volunteer.id);
      //end test

      //TODO: run this code for backend test
      // try {
      //   const response = await axios.get(
      //     this.AuthStore.baseURL + `/api/admin/volunteer-withus/${volunteer.id}`,
      //     {
      //       headers: {
      //         "Access-Control-Allow-Origin": "*",
      //         Authorization: `Bearer ${this.AuthStore.userToken}`,
      //         "content-type": "application/json",
      //       },
      //     }
      //   );
      this.$router.push({
        name: "volunteerDetails",
        params: { volunteerID: volunteer.id },
      });
      //   console.log(response);
      //   console.log(response.data);
      //   this.volunteerData = response.data;
      // } catch (error) {
      //   console.log(error);
      // }
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
