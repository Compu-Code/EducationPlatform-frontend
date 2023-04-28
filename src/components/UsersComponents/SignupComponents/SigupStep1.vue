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
      class="Container2 grid z-10 relative top-[50%] left-[4.688rem] grid-rows-6"
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
      <div
        class="acc-type flex col-start-3 col-end-7 row-start-3 row-end-6 justify-self-center"
      >
        <div class="w-64 relative mr-[-30px]">
          <img
            src="../../../assets/images/Student.png"
            alt="student-img"
            class="absolute student-img"
            @click="studentChoosed"
          />
          <span
            class="text-dark-text-color student-span absolute"
            @click="studentChoosed"
          >
            Student
          </span>
        </div>
        <div class="w-64 relative">
          <img
            src="../../../assets/images/Lecturer.png"
            alt="lecturer-img"
            class="absolute lecturer-img"
            @click="lecturerChoosed"
          />
          <span
            class="text-dark-text-color lecturer-span absolute"
            @click="lecturerChoosed"
          >
            Lecturer
          </span>
        </div>
      </div>

      <!-- don't have acc ? login -->
      <div
        class="self-end justify-self-center col-start-4 col-end-6 row-start-6"
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
    return {
      accType: "",
    };
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
  methods: {
    studentChoosed() {
      this.accType = "Student";
      this.$router.replace({ name: "signup-step2" });
    },
    lecturerChoosed() {
      this.accType = "Lecturer";
      this.$router.replace({ name: "signup-step2" });
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

.login:hover {
  color: v-bind(changeLoginColor);
}

.student-img {
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
  -webkit-user-drag: none;
  cursor: pointer;
  z-index: 1;
}

.lecturer-img {
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
  -webkit-user-drag: none;
  cursor: pointer;
  z-index: 1;
}
.student-span,
.lecturer-span {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 2;
}
</style>
