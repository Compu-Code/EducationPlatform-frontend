<template>
  <section
    class="Container relative top-0 right-0 overflow-hidden"
    :class="[
      navbarStore.darkMode ? 'bg-dark-primary-color' : 'bg-light-primary-color',
    ]"
  >
    <!-- Vectors -->
    <div class="z-0">
      <VectorupSignup class="absolute top-0 right-0" />
      <VectordownSignup class="absolute bottom-0 left-0" />
    </div>

    <div
      class="Container2 grid z-10 relative top-[50%] left-[4.688rem] grid-rows-6 gap-y-28"
      :class="[
        navbarStore.darkMode ? 'text-dark-text-color' : 'text-light-text-color',
      ]"
    >
      <!-- stepsbar -->
      <StepsBar />

      <!-- tell us about you -->
      <div class="text w-fit absolute left-[11.563rem]">
        <p class="py-1">Step 2</p>
        <p class="text-5xl leading-[3.813rem]">Tell Us About You</p>
      </div>

      <!-- form to get user data -->
      <div
        class="user-data-form flex col-start-2 col-end-5 row-start-2 row-end-6"
      >
        <form @submit.prevent="">
          <!-- first + last name -->
          <div class="flex w-full">
            <input
              name="fName"
              type="text"
              class="w-1/2"
              placeholder="First Name"
            />
            <input
              name="lName"
              type="text"
              class="w-1/2"
              placeholder="Last Name"
            />
          </div>
          <!-- email -->
          <input
            name="email"
            type="email"
            class="w-full"
            placeholder="Your Email Address"
          />

          <!-- pass -->
          <div class="relative">
            <PassField :placeHolder="1" />
          </div>

          <!-- confirm pass -->
          <div class="relative">
            <PassField :placeHolder="2" />
          </div>

          <div class="flex justify-between">
            <router-link to="/signup/step1" replace>
              <button>Back</button>
            </router-link>
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
      <div class="col-start-5 col-end-8 row-start-1 row-end-6 ml-16">
        <img
          src="../../../assets/images/InformationDetails.png"
          alt="InformationDetailsImg"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { useNavbarStore } from "../../../stores/NavbarStore";
import StepsBar from "./StepsBar.vue";
import VectorupSignup from "../../icons/VectorupSignup.vue";
import VectordownSignup from "../../icons/VectordownSignup.vue";
import PassField from "./PassField.vue";

export default {
  components: {
    StepsBar,
    VectorupSignup,
    VectordownSignup,
    PassField,
  },
  data() {
    return {};
  },
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  computed: {
    changeFieldsBGColor() {
      if (this.navbarStore.darkMode) {
        return "rgba(240, 244, 255, 0.2)";
      } else {
        return "rgba(53, 92, 239, 0.1)";
      }
    },
  },
};
</script>

<style scoped>
.Container {
  width: 100vw;
  height: 100vh;
}
.Container2 {
  width: 100%;
  height: 500px;
  transform: translateY(-50%);
  grid-template-columns: repeat(6, minmax(0, 185px));
}

/* background: rgba(53, 92, 239, 0.1); light */
/* color: #8394b1;  the same*/

/* background: rgba(240, 244, 255, 0.2); dark */
/* color: #8394B1; the same*/

.user-data-form form input {
  margin-bottom: 17px;
  padding-left: 30px;
  padding-top: 11.5px;
  padding-bottom: 11.5px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: v-bind(changeFieldsBGColor);
  color: #8394b1;
  transition: all 0.1s;
  outline: none;
}
.user-data-form form div:first-child input:first-child {
  margin-right: 15px;
}
.user-data-form form input:hover {
  border: 2px solid #8394b1;
}
.user-data-form form input:focus {
  border: 2px solid #b2c4e4;
}
img {
  user-select: none;
  -webkit-user-drag: none;
}

input[name="pass"]:first-child:focus ~ .pass-icon {
}
</style>
