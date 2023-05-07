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

      <!-- Share Some Education Details-->
      <div class="text w-fit absolute left-[11.563rem] mt-5 mb-4">
        <p class="py-1">Step 3</p>
        <p class="text-5xl leading-[3.813rem]">
          Share Some Education <br />
          Details
        </p>
      </div>

      <div
        class="user-data-form flex col-start-2 col-end-5 row-start-3 row-end-6 mt-7"
      >
        <form
          @submit.prevent="checkAllFieldsAndStore"
          @blur="
            checkUniversityValidity();
            checkMajorValidity();
          "
        >
          <!-- university + major -->
          <input
            name="university"
            type="text"
            class="w-full"
            placeholder="Your University Name"
            @keyup="getUserUniversity($event.target.value)"
            @blur="checkUniversityValidity"
            v-model="signupStepsStore.userUniversity"
          />

          <!-- input for major -->
          <input
            name="major"
            type="text"
            class="w-full"
            placeholder="Your Major"
            @keyup="getUserMajor($event.target.value)"
            @blur="checkMajorValidity"
            v-model="signupStepsStore.userMajor"
          />

          <!-- checkbox and agree terms and conditions -->
          <div
            class="agree-terms-conditions mb-7 flex items-center justify-start ml-1"
          >
            <span class="checkbox flex justify-center items-center">
              <input type="checkbox" name="" id="" v-model="isUserAgreeTerms" />
            </span>
            <p
              class="ml-2 para"
              :class="[
                navbarStore.darkMode
                  ? 'text-dark-text-color'
                  : 'text-light-text-color',
              ]"
            >
              By Siging up , I have read and agree to terms and Privacy policy.
            </p>
          </div>

          <!-- back & continue btns -->
          <div class="flex justify-between items-center mt-3">
            <!-- back button -->
            <router-link to="/signup/step2" replace>
              <icon-deflated direction="up" bordered="false" class="back-btn"
                >Back</icon-deflated
              >
            </router-link>
            <!-- continue button -->
            <normal-filled
              type="submit"
              :isDisabled="disabledBtn"
              class="flex duration-300 items-center"
            >
              <div class="spinner mr-2" v-if="authStore.signupLoading"></div>
              Continue</normal-filled
            >
          </div>
        </form>
      </div>
    </div>
    <transition name="overlay">
      <OverlayBase
        v-if="authStore.signupSuccess === true"
        @click="hideOverlayAndPopup"
      />
    </transition>
    <transition name="card">
      <popup-card
        v-if="authStore.signupSuccess === true"
        :numOfActions="1"
        firstActionLink="/login"
      >
        <template v-slot:cardTitle>Success!</template>
        <template v-slot:cardDetails>Your account has been created.</template>
        <template v-slot:cardFirstAction>Go to</template>
        <template v-slot:cardFirstActionLink>Login</template>
      </popup-card>
    </transition>

    <transition name="overlay">
      <OverlayBase
        v-if="authStore.signupSuccess === false"
        @click="hideOverlayAndPopup"
      />
    </transition>
    <transition name="card">
      <popup-card
        v-if="authStore.signupSuccess === false"
        :numOfActions="2"
        firstActionLink="/signup"
        secondActionLink="/home"
      >
        <template v-slot:cardTitle>Failed!</template>
        <template v-slot:cardDetails>Sorry , there was a problem.</template>
        <template v-slot:cardFirstAction>want to try again ?</template>
        <template v-slot:cardFirstActionLink
          ><span @click="actionClicked">Signup</span></template
        >
        <template v-slot:cardSecondAction>Go to</template>
        <template v-slot:cardSecondActionLink
          ><span @click="actionClicked">Home</span></template
        >
      </popup-card>
    </transition>
  </section>
</template>

<script>
// functions to change field color in normal and hover and clicked dynamically
function changeFieldColor(arg1) {
  if (arg1) {
    return "#4CC38AE5";
  } else if (arg1 === false) {
    return "#FF6369E5";
  } else {
    return "transparent";
  }
}
function changeFieldHoverColor(arg1) {
  if (arg1) {
    return "#4CC38AE5";
  } else if (arg1 === false) {
    return "#FF6369E5";
  }
}
function changeFieldClickedColor(arg1) {
  if (arg1) {
    return "#4CC38AE5";
  } else if (arg1 === false) {
    return "#FF6369E5";
  }
}
// to change bg of fields in light mode
function changeBgFieldColor(arg1) {
  if (!useNavbarStore().darkMode) {
    if (arg1 === true) {
      return "rgba(41, 151, 100, 0.1)";
    } else if (arg1 === false) {
      return "rgba(220, 61, 67, 0.1)";
    } else if (arg1 === "") {
      return "rgba(53, 92, 239, 0.1)";
    }
  } else {
    if (arg1 === true) {
      return "rgba(41, 151, 100, 0.1)";
    } else if (arg1 === false) {
      return "rgba(220, 61, 67, 0.1)";
    } else if (arg1 === "") {
      return "rgba(240, 244, 255, 0.2)";
    }
  }
}
function changeParaColor(arg1) {
  if (!useNavbarStore().darkMode) {
    if (arg1) {
      return "#01041b";
    } else if (arg1 === false) {
      return "#FF6369E5";
    } else if (arg1 === "") {
      return "#01041b";
    }
  } else {
    if (arg1) {
      return "#f0f4ff";
    } else if (arg1 === false) {
      return "#FF6369E5";
    } else if (arg1 === "") {
      return "#f0f4ff";
    }
  }
}

import { useNavbarStore } from "../../../stores/NavbarStore";
import { useAuthStore } from "../../../stores/AuthStore";
import { useSignupStepsStore } from "../../../stores/SignupStepsStore";
import StepsBar from "./StepsBar.vue";
import VectorupSignup from "../../icons/VectorupSignup.vue";
import VectordownSignup from "../../icons/VectordownSignup.vue";
import NormalFilled from "../../UI/BasesButton/NormalFilled.vue";
import IconDeflated from "../../UI/BasesButton/IconDeflated.vue";
import PopupCard from "../../UI/BasesPopup/PopupCard.vue";
import OverlayBase from "../../UI/OverlayBase.vue";

export default {
  components: {
    StepsBar,
    VectorupSignup,
    VectordownSignup,
    NormalFilled,
    IconDeflated,
    PopupCard,
    OverlayBase,
  },
  setup() {
    const navbarStore = useNavbarStore();
    const signupStepsStore = useSignupStepsStore();
    const authStore = useAuthStore();
    return { navbarStore, signupStepsStore, authStore };
  },
  data() {
    return {
      isUniversityValid: "",
      isMajorValid: "",
      isUserAgreeTerms: "",
      signupStatus: "",
    };
  },
  methods: {
    actionClicked() {
      (this.authStore.signupSuccess = ""), this.signupStepsStore.$reset();
    },
    hideOverlayAndPopup() {
      this.authStore.signupSuccess = "";
    },
    getUserUniversity(userUniversity) {
      this.signupStepsStore.userUniversity = userUniversity.trim();
      if (this.isUniversityValid === true) {
        this.checkUniversityValidity();
      } else if (this.isUniversityValid === false) {
        this.checkUniversityValidity();
      }
    },
    checkUniversityValidity() {
      if (this.signupStepsStore.userUniversity.length > 1) {
        this.isUniversityValid = true;
      } else {
        this.isUniversityValid = false;
      }
    },
    changeUniversityFieldColor() {
      return changeFieldColor(this.isUniversityValid);
    },
    changeUniversityFieldHoverColor() {
      return changeFieldHoverColor(this.isUniversityValid);
    },
    changeUniversityFieldClickedColor() {
      return changeFieldClickedColor(this.isUniversityValid);
    },
    changeUniversityFieldBgColor() {
      return changeBgFieldColor(this.isUniversityValid);
    },
    getUserMajor(userMajor) {
      this.signupStepsStore.userMajor = userMajor.trim();
      if (this.isMajorValid === true) {
        this.checkMajorValidity();
      } else if (this.isMajorValid === false) {
        this.checkMajorValidity();
      }
    },
    checkMajorValidity() {
      if (this.signupStepsStore.userMajor.length > 1) {
        this.isMajorValid = true;
      } else {
        this.isMajorValid = false;
      }
    },
    changeMajorFieldColor() {
      return changeFieldColor(this.isMajorValid);
    },
    changeMajorFieldHoverColor() {
      return changeFieldHoverColor(this.isMajorValid);
    },
    changeMajorFieldClickedColor() {
      return changeFieldClickedColor(this.isMajorValid);
    },
    changeMajorFieldBgColor() {
      return changeBgFieldColor(this.isMajorValid);
    },
    checkPara() {
      if (this.isUserAgreeTerms) {
        this.isUserAgreeTerms = true;
      } else {
        this.isUserAgreeTerms = false;
      }
    },
    changeParaColor() {
      return changeParaColor(this.isUserAgreeTerms);
    },
    async checkAllFieldsAndStore() {
      this.checkUniversityValidity();
      this.checkMajorValidity();
      this.checkPara();
      if (
        this.isUniversityValid &&
        this.isMajorValid &&
        this.isUserAgreeTerms === true &&
        this.signupStepsStore.userEmail !== "" &&
        this.signupStepsStore.userAccType !== ""
      ) {
        await this.authStore.signup({
          first_name: this.signupStepsStore.userFirstName,
          last_name: this.signupStepsStore.userLastName,
          email: this.signupStepsStore.userEmail,
          password: this.signupStepsStore.userPassword,
          university_name: this.signupStepsStore.userUniversity,
          major: this.signupStepsStore.userMajor,
          acc_type: this.signupStepsStore.userAccType,
        });
        this.signupStepsStore.signupStep3 = true;
        if (this.authStore.signupSuccess) {
          this.signupStatus = true;
          this.signupStepsStore.$reset();
        } else {
          this.signupStatus = false;
        }
      } else {
        // console.log("please check all fields");
      }
    },
  },
  computed: {
    changeFieldsBGColor() {
      if (this.navbarStore.darkMode) {
        return "rgba(240, 244, 255, 0.2)";
      } else {
        return "rgba(53, 92, 239, 0.1)";
      }
    },
    disabledBtn() {
      if (
        this.signupStepsStore.userMajor !== "" &&
        this.signupStepsStore.userUniversity !== "" &&
        this.isUserAgreeTerms === true
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  // when user refresh step 3 the store will be empty so user will return to step 1
  mounted() {
    // TODO: fix the bug (when user only write his email can navigate to step3)
    if (!this.signupStepsStore.signupStep1) {
      this.$router.replace({ name: "signup-step1" });
    } else if (!this.signupStepsStore.signupStep2) {
      this.$router.replace({ name: "signup-step2" });
    }
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

.user-data-form form input {
  margin-bottom: 20px;
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
input[type="checkbox"] {
  margin-bottom: 0 !important;
}
/* university field border color */
.user-data-form form input[name="university"] {
  border-color: v-bind(changeUniversityFieldColor());
  background-color: v-bind(changeUniversityFieldBgColor());
}
.user-data-form form input[name="university"]:hover {
  border-color: v-bind(changeUniversityFieldHoverColor());
}
.user-data-form form input[name="university"]:focus {
  border-color: v-bind(changeUniversityFieldClickedColor());
}

/* major field border color */
.user-data-form form input[name="major"] {
  border-color: v-bind(changeMajorFieldColor());
  background-color: v-bind(changeMajorFieldBgColor());
}
.user-data-form form input[name="major"]:hover {
  border-color: v-bind(changeMajorFieldHoverColor());
}
.user-data-form form input[name="major"]:focus {
  border-color: v-bind(changeMajorFieldClickedColor());
}
.para {
  color: v-bind(changeParaColor());
}
.agree-terms-conditions {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 110%;
}

.card-enter-from,
.card-leave-to {
  transform: translate(-50%, -49rem);
}
.card-enter-active,
.card-leave-active {
  transition: transform 800ms ease-in-out;
}
.card-enter-to,
.card-leave-from {
  transform: translate(-50%, -50%);
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: all 800ms ease-in-out;
}
.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
}
.spinner {
  width: 15px;
  display: inline-flex;
  height: 15px;
  border-radius: 50%;
  border: 3.8px solid #ffffff;
  animation: spinner-bulqg1 0.8s infinite linear alternate,
    spinner-oaa3wk 1.6s infinite linear;
}

@keyframes spinner-bulqg1 {
  0% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
  }

  12.5% {
    clip-path: polygon(
      50% 50%,
      0 0,
      50% 0%,
      100% 0%,
      100% 0%,
      100% 0%,
      100% 0%
    );
  }

  25% {
    clip-path: polygon(
      50% 50%,
      0 0,
      50% 0%,
      100% 0%,
      100% 100%,
      100% 100%,
      100% 100%
    );
  }

  50% {
    clip-path: polygon(
      50% 50%,
      0 0,
      50% 0%,
      100% 0%,
      100% 100%,
      50% 100%,
      0% 100%
    );
  }

  62.5% {
    clip-path: polygon(
      50% 50%,
      100% 0,
      100% 0%,
      100% 0%,
      100% 100%,
      50% 100%,
      0% 100%
    );
  }

  75% {
    clip-path: polygon(
      50% 50%,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%,
      50% 100%,
      0% 100%
    );
  }

  100% {
    clip-path: polygon(
      50% 50%,
      50% 100%,
      50% 100%,
      50% 100%,
      50% 100%,
      50% 100%,
      0% 100%
    );
  }
}

@keyframes spinner-oaa3wk {
  0% {
    transform: scaleY(1) rotate(0deg);
  }

  49.99% {
    transform: scaleY(1) rotate(135deg);
  }

  50% {
    transform: scaleY(-1) rotate(0deg);
  }

  100% {
    transform: scaleY(-1) rotate(-135deg);
  }
}
</style>
