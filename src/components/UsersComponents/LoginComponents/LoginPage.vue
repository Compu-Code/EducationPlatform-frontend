<template>
  <section
    class="Container relative top-0 right-0 overflow-hidden"
    :class="[
      navbarStore.darkMode ? 'bg-dark-primary-color' : 'bg-light-primary-color',
    ]"
  >
    <!-- Vectors -->
    <div class="z-0">
      <VectorupLogin class="absolute top-0 left-0" />
      <VectordownLogin class="absolute bottom-0 right-0" />
    </div>

    <div
      class="Container2 grid z-10 relative top-[50%] left-[4.688rem]"
      :class="[
        navbarStore.darkMode ? 'text-dark-text-color' : 'text-light-text-color',
      ]"
    >
      <!-- welcome to website -->
      <div
        class="title text w-full mb-8 absolute col-start-2 col-end-4 row-start-1 row-end-2"
      >
        <p class="text-5xl leading-[3.813rem]">Welcome Back to</p>
        <p class="py-1 text-3xl">website name</p>
      </div>

      <!-- user data email & pass -->
      <div
        class="user-data-form flex col-start-2 col-end-4 row-start-2 row-end-6"
      >
        <form
          @submit.prevent="checkAllFieldsAndSendUserData"
          class="w-full mt-8"
        >
          <!-- email -->
          <input
            name="email"
            class="w-full"
            placeholder="Enter your email address"
            @keyup="getUserEmail($event.target.value)"
            @blur="checkEmailValidate"
            v-model="userEmail"
          />
          <!-- v-model="signupStepsStore.userEmail" -->

          <!-- pass -->
          <div class="relative">
            <PassField
              :placeHolder="3"
              @checkPassValidate="checkPassValidate($event)"
              @userPass="getUserPass"
              v-model:model-value="userPass"
              :isValid="isPassValid"
            />
          </div>
          <div
            class="flex items-center justify-between w-full mt-[0.625rem] text-sm font-normal"
          >
            <div class="remember-me flex justify-center items-center">
              <input type="checkbox" name="rememberMe" id="" />
              <span class="ml-2">Remember me</span>
            </div>
            <div class="forget-pass">
              <router-link to="/reset-password">
                Forget password ?
              </router-link>
            </div>
          </div>
          <!-- v-model:model-value="signupStepsStore.userConfirmPass" class="flex duration-300 items-center"-->
          <normal-filled
            class="w-full login-btn mt-[3.125rem] flex items-center justify-center"
          >
            <span v-if="!authStore.loginLoading">Login</span>
            <div class="spinner mr-2" v-if="authStore.loginLoading"></div>
          </normal-filled>
        </form>

        <!-- don't have acc ? signup -->
      </div>
      <div
        class="signup-container self-center justify-self-center col-start-2 col-end-4 row-start-4 row-end-6 text-sm font-normal"
      >
        <p>
          Don’t have an account ?
          <router-link
            to="/signup"
            :class="[
              navbarStore.darkMode
                ? 'text-dark-blue-normal'
                : 'text-light-blue-normal',
            ]"
            class="signup font-openSans font-bold text-sm"
            >Sign Up</router-link
          >
        </p>
      </div>
      <!-- img beside form -->
      <div class="ml-16 col-start-5 col-end-8 row-start-1 row-end-4 self-start">
        <img src="../../../assets/images/login.png" alt="loginImg" />
      </div>
    </div>

    <transition name="overlay">
      <OverlayBase v-if="authStore.loginSuccess" @click="hideOverlayAndPopup" />
    </transition>
    <transition name="card">
      <popup-card
        v-if="authStore.loginSuccess"
        :numOfActions="1"
        firstActionLink="/dashboard"
      >
        <template v-slot:cardTitle>Successfully Login!</template>
        <template v-slot:cardDetails
          >You will be redirect to your Dashboard.</template
        >
        <template v-slot:cardFirstActionLink
          ><span @click="okClicked">Ok</span></template
        >
      </popup-card>
    </transition>

    <transition name="overlay">
      <OverlayBase
        v-if="authStore.loginSuccess === false"
        @click="hideOverlayAndPopup"
      />
    </transition>
    <transition name="card">
      <popup-card
        v-if="authStore.loginSuccess === false"
        :numOfActions="1"
        firstActionLink="/home"
      >
        <template v-slot:cardTitle>Failed!</template>
        <template v-slot:cardDetails>Sorry , there was a problem.</template>
        <template v-slot:cardFirstAction>Go to</template>
        <template v-slot:cardFirstActionLink
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
    return "rgba(240, 244, 255, 0.2)";
  }
}

import { useNavbarStore } from "../../../stores/NavbarStore";
import { useAuthStore } from "../../../stores/AuthStore";
import VectorupLogin from "../../icons/VectorupLogin.vue";
import VectordownLogin from "../../icons/VectordownLogin.vue";
import PassField from "../SignupComponents/PassField.vue";
import NormalFilled from "../../UI/BasesButton/NormalFilled.vue";
import OverlayBase from "../../UI/OverlayBase.vue";
import PopupCard from "../../UI/BasesPopup/PopupCard.vue";

export default {
  components: {
    VectorupLogin,
    VectordownLogin,
    PassField,
    NormalFilled,
    OverlayBase,
    PopupCard,
  },
  data() {
    return {
      userEmail: "",
      userPass: "",
      isEmailValid: "",
      isPassValid: "",
      emailValid: "",
      passValid: "",
      userRememberMe: false,
    };
  },
  setup() {
    const navbarStore = useNavbarStore();
    const authStore = useAuthStore();
    return { navbarStore, authStore };
  },
  methods: {
    okClicked() {
      this.authStore.loginSuccess = "";
      this.$router.replace({ name: "dashboard" });
    },
    actionClicked() {
      this.authStore.loginSuccess = "";
    },
    // get user email
    getUserEmail(userEmail) {
      this.userEmail = userEmail;
      if (this.isEmailValid === true) {
        this.checkEmailValidate();
      } else if (this.isEmailValid === false) {
        this.checkEmailValidate();
      }
    },
    checkEmailValidate() {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userEmail)
      ) {
        this.isEmailValid = "";
        this.emailValid = true;
      } else {
        this.isEmailValid = false;
        this.emailValid = false;
      }
    },
    // get user pass
    getUserPass(userPass) {
      this.userPass = userPass;
    },
    checkPassValidate(userPass) {
      // to check whole pass and change passValid
      if (userPass) {
        this.userPass = userPass.trim();
      }
      if (this.userPass !== "" && this.userPass.length > 7) {
        this.isPassValid = "";
        this.passValid = true;
      } else {
        this.isPassValid = false;
        this.passValid = false;
      }
    },
    // change border color of email field and check if valid become green and if invalid become red otherwise stay like the other fields
    changeEmailFieldColor() {
      return changeFieldColor(this.isEmailValid);
    },
    changeEmailFieldHoverColor() {
      return changeFieldHoverColor(this.isEmailValid);
    },
    changeEmailFieldClickedColor() {
      return changeFieldClickedColor(this.isEmailValid);
    },
    changeEmailFieldBgColor() {
      return changeBgFieldColor(this.isEmailValid);
    },
    // change border color of pass field and check if valid become green and if invalid become red otherwise stay like the other fields
    changePassFieldColor() {
      return changeFieldColor(this.isPassValid);
    },
    changePassFieldHoverColor() {
      return changeFieldHoverColor(this.isPassValid);
    },
    changePassFieldClickedColor() {
      return changeFieldClickedColor(this.isPassValid);
    },
    changePassFieldBgColor() {
      return changeBgFieldColor(this.isPassValid);
    },
    hideOverlayAndPopup() {
      this.authStore.loginSuccess = "";
    },
    async checkAllFieldsAndSendUserData() {
      this.checkEmailValidate();
      this.checkPassValidate();
      if (this.emailValid && this.passValid) {
        await this.authStore.login({
          email: this.userEmail,
          password: this.userPass,
        });
      }
    },
  },
  computed: {
    changeSignupColor() {
      if (this.navbarStore.darkMode) {
        return "#4B6FDD";
      } else {
        return "#2246CD";
      }
    },
    changeFieldsBGColor() {
      if (this.navbarStore.darkMode) {
        return "rgba(240, 244, 255, 0.2)";
      } else {
        return "rgba(53, 92, 239, 0.1)";
      }
    },
    changeHoverColor() {
      if (this.navbarStore.darkMode) {
        return "#4b6fdd";
      } else {
        return "#2246CD";
      }
    },
    changeClickedColor() {
      if (this.navbarStore.darkMode) {
        return "#3858bb";
      } else {
        return "#1433AB";
      }
    },
  },
};
</script>

<style scoped>
img {
  user-select: none;
  -webkit-user-drag: none;
}
.Container {
  width: 100vw;
  height: 100vh;
}
.Container2 {
  width: 100%;
  height: 500px;
  transform: translateY(-50%);
  grid-template-columns: repeat(8, minmax(186px, 186px));
  grid-template-rows: repeat(5, minmax(0, 1fr));
}
.login-btn {
  padding: 13px 16px !important;
}
.signup:hover {
  color: v-bind(changeSignupColor) !important;
}
.signup:active {
  color: v-bind(changeClickedColor) !important;
}
.user-data-form form input {
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
.user-data-form form input:first-child {
  margin-bottom: 17px;
}
input[type="checkbox"] {
  margin: 0 !important;
  padding: 0 !important;
}
.user-data-form
  form
  div:first-child
  input:first-child:not(input[type="password"]) {
  margin-right: 15px;
}

/* email field border color */
.user-data-form form input[name="email"] {
  border-color: v-bind(changeEmailFieldColor());
  background-color: v-bind(changeEmailFieldBgColor()) !important;
}
.user-data-form form input[name="email"]:hover {
  border-color: v-bind(changeEmailFieldHoverColor());
}
.user-data-form form input[name="email"]:focus {
  border-color: v-bind(changeEmailFieldClickedColor());
}
.forget-pass:hover {
  font-weight: bold;
  color: v-bind(changeHoverColor);
}
.forget-pass:active {
  font-weight: bold;
  color: v-bind(changeClickedColor);
}
.spinner {
  width: 24px;
  display: inline-flex;
  height: 24px;
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
@media (max-width: 414px) {
  .Container {
    overflow-y: visible;
  }
  .Container2 {
    left: 10px;
  }
  .user-data-form,
  .title,
  .signup-container {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>
