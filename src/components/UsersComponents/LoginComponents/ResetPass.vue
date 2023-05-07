<template>
  <section
    :class="[
      navbarStore.darkMode ? 'bg-dark-primary-color' : 'bg-light-primary-color',
    ]"
    class="parent relative top-0 right-0 overflow-hidden"
  >
    <!-- TODO: fix vectors -->
    <!-- <div class="z-0 vectors">
      <VectorupLogin class="absolute bottom-0 right-0" />
      <VectordownLogin class="absolute top-[-115px] left-[-163]" />
    </div> -->

    <div
      class="Container1 absolute"
      :class="[
        navbarStore.darkMode ? 'text-dark-text-color' : 'text-light-text-color',
      ]"
    >
      <!-- title -->
      <div class="text-5xl font-semibold title">Forgot Your Password</div>
      <!-- container 2 include form and btn -->
      <div class="Container2 w-fit mt-[0.625rem]">
        <div>
          <p class="text-base font-normal title-para">
            Please Enter Your Email To Receive A Verification Code
          </p>
        </div>
        <form @submit.prevent="" class="w-full mt-8">
          <!-- email -->
          <input
            name="email"
            class="w-full"
            placeholder="Enter your email address"
            @keyup="getUserEmail($event.target.value)"
            @blur="checkEmailValidate"
            v-model="userEmail"
          />

          <div class="mb-[0.625rem] mt-[1.875rem]">
            <normal-filled
              class="w-full send-btn text-base font-semibold flex items-center justify-center"
            >
              <!-- TODO: change conditions -->
              <span v-if="true">Send code</span>
              <div class="spinner mr-2" v-if="false"></div>
            </normal-filled>
          </div>
          <p class="flex justify-center">
            <span class="text-sm font-normal mr-1"> Go back to </span>
            <router-link
              :to="{ name: 'login' }"
              :class="[
                navbarStore.darkMode
                  ? 'text-dark-blue-normal'
                  : 'text-light-blue-normal',
              ]"
              class="login-page font-openSans font-bold text-sm"
            >
              Login Page
            </router-link>
          </p>
        </form>
      </div>
    </div>
    <transition name="overlay">
      <OverlayBase v-if="authStore.loginSuccess" @click="hideOverlayAndPopup" />
    </transition>
    <transition name="card">
      <popup-card
        v-if="authStore.loginSuccess"
        :numOfActions="2"
        firstActionLink="/reset-password"
        secondActionLink="/verify-email"
      >
        <template v-slot:cardTitle>Check Your Email</template>
        <template v-slot:cardDetails
          >we sent a verification code to your <br />
          {{ userEmail }}</template
        >
        <template v-slot:cardFirstAction
          ><span>Didn’t get the mail ?</span></template
        >
        <template v-slot:cardFirstActionLink
          ><span @click="okClicked">Resend mail</span></template
        >
        <template v-slot:cardSecondAction><span>Go to</span></template>
        <template v-slot:cardSecondActionLink
          ><span @click="okClicked">verify code</span></template
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
import VectordownLogin from "../../../components/icons/VectordownLogin.vue";
import VectorupLogin from "../../../components/icons/VectorupLogin.vue";
import NormalFilled from "../../../components/UI/BasesButton/NormalFilled.vue";
import OverlayBase from "../../../components/UI/OverlayBase.vue";
import PopupCard from "../../../components/UI/BasesPopup/PopupCard.vue";

export default {
  components: {
    VectordownLogin,
    VectorupLogin,
    NormalFilled,
    OverlayBase,
    PopupCard,
  },
  data() {
    return {
      userEmail: "",
      isEmailValid: "",
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
        this.isEmailValid = true;
      } else {
        this.isEmailValid = false;
      }
    },
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
  },
  computed: {
    changeLoginColor() {
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
  mounted() {
    if (this.navbarStore.darkMode) {
      document.body.classList.add(
        "bg-dark-primary-color",
        "w-screen",
        "h-screen",
        "relative"
      );
    } else {
      document.body.classList.add(
        "bg-light-primary-color",
        "w-screen",
        "h-screen",
        "relative"
      );
    }
    // document.body.append(document.querySelector(".vectors"));
  },
  unmounted() {
    document.body.classList.remove(
      "bg-dark-primary-color",
      "bg-light-primary-color",
      "w-screen",
      "h-screen"
    );
    // document.body.remove(document.querySelector(".vectors"));
  },
};
</script>

<style scoped>
.parent {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(8, minmax(180px, 1fr));
  grid-template-rows: repeat(3, auto);
}
.login-page:hover {
  color: v-bind(changeLoginColor) !important;
}
.login-page:active {
  color: v-bind(changeClickedColor) !important;
}
.send-btn {
  padding: 13px 16px !important;
}
.Container1 {
  top: 50%;
  transform: translateY(-50%);
}
form input {
  padding: 11.5px 30px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: v-bind(changeFieldsBGColor);
  color: #8394b1;
  transition: all 0.1s;
  outline: none;
}
/* email field border color */
form input[name="email"] {
  border-color: v-bind(changeEmailFieldColor());
  background-color: v-bind(changeEmailFieldBgColor()) !important;
}
form input[name="email"]:hover {
  border-color: v-bind(changeEmailFieldHoverColor());
}
form input[name="email"]:focus {
  border-color: v-bind(changeEmailFieldClickedColor());
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

@media screen and (max-width: 767px) {
  .title {
    font-size: 33px;
  }
  .title-para {
    font-size: 15px;
  }
  .Container1 {
    transform: translateY(-60%);
    padding: 20px;
  }
}

@media screen and (min-width: 767px) {
  .send-btn {
    letter-spacing: 0.7px;
  }
  .Container1 {
    grid-column-start: 2;
  }
}
</style>
