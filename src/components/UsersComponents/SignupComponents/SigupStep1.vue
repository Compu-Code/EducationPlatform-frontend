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
      class="Container2 grid z-10 relative top-[50%] left-[4.688rem] grid-cols-6 grid-rows-6"
      :class="[
        navbarStore.darkMode ? 'text-dark-text-color' : 'text-light-text-color',
      ]"
    >
      <!-- stepsbar -->
      <StepsBar />

      <!-- choose your acc -->
      <div class="text w-fit absolute left-[11.563rem]">
        <p class="text-5xl leading-[3.813rem]">
          Choose Your Account <br />
          Type
        </p>
        <p class="py-1">Step 1</p>
      </div>

      <!-- student || lecturer -->
      <div class="acc-type flex col-start-3 col-end-5 row-start-3 row-end-6">
        <div class="w-64 border border-white">student</div>
        <div class="w-64 border border-white">Lecturer</div>
      </div>

      <!-- don't have acc ? login -->
      <div
        class="self-center justify-self-center col-start-3 col-end-5 row-start-6"
      >
        <p>
          Don’t have an account ?
          <router-link
            to="/login"
            :class="[
              navbarStore.darkMode
                ? 'text-dark-blue-normal'
                : 'text-light-blue-normal',
            ]"
            class="login font-openSans font-bold text-sm"
            >Log In</router-link
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { useNavbarStore } from "../../../stores/NavbarStore";
import VectorupSignup from "../../icons/VectorupSignup.vue";
import VectordownSignup from "../../icons/VectordownSignup.vue";
import StepsBar from "./StepsBar.vue";
// import threeTest from "../../three test/threeTest.vue";

export default {
  components: { VectorupSignup, VectordownSignup, StepsBar },
  data() {
    return {};
  },
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  computed: {
    changeLoginColor() {
      if (this.navbarStore.darkMode) {
        return "#4B6FDD";
      } else {
        return "#2246CD";
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
}

.login:hover {
  color: v-bind(changeLoginColor);
}
</style>
