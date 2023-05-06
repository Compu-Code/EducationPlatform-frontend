<template>
  <section class="flex items-center justify-center">
    <div class="icons flex mr-[1.6875rem] items-center relative">
      <div class="mode pr-[5px]">
        <IconMode class="cursor-pointer" @click="navbarStore.toggleMode" />
      </div>
      <div class="pl-[5px]">
        <IconLanguage
          class="cursor-pointer"
          @click="navbarStore.toggleLanguageMenu"
          ref="target"
        />
      </div>

      <!-- language dropdown menu and transitions -->
      <transition name="language-dropdown">
        <ul
          v-if="navbarStore.isLanguageMenuOpen"
          class="language-menu absolute top-[2.188rem] right-0 z-10"
          :class="[
            navbarStore.darkMode
              ? 'bg-dark-primary-color text-dark-text-color'
              : 'bg-light-primary-color text-light-text-color',
          ]"
        >
          <div class="py-5 px-[0.625rem]">
            <li>
              <button
                class="p-[0.625rem] w-full text-left mb-[0.625rem]"
                :class="changeColorOfLanguageSelected"
                @click="
                  navbarStore.toggleLanguageMenu();
                  navbarStore.toggleLanguage(
                    makeLanguageSelectedTop.slice(0, 2)
                  );
                "
              >
                {{ makeLanguageSelectedTop }}
              </button>
            </li>
            <li>
              <button
                class="p-[0.625rem] w-full text-left"
                @click="
                  navbarStore.toggleLanguageMenu();
                  navbarStore.toggleLanguage(
                    makeLanguageUnselectedDown.slice(0, 2)
                  );
                "
              >
                {{ makeLanguageUnselectedDown }}
              </button>
            </li>
          </div>
        </ul>
      </transition>
    </div>

    <!-- if user auth => will show avatar and dropmenu -->
    <RightAuthenticated v-if="AuthStore.isAuthenticated" />

    <!-- if user not auth => will show login and signup -->
    <div v-if="!AuthStore.isAuthenticated && isHide">
      <router-link to="/login" class="login mr-3">Log In</router-link>
      <router-link to="/signup" class="signup text-white font-inter"
        >Sign Up</router-link
      >
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent } from "vue";

const RightAuthenticated = defineAsyncComponent(() =>
  import("./RightAuthenticated.vue")
);

import IconLanguage from "../icons/IconLanguage.vue";
import IconMode from "../icons/IconMode.vue";
import { useNavbarStore } from "../../stores/NavbarStore";
import { useAuthStore } from "../../stores/AuthStore";
import { useUserStore } from "../../stores/UserStore";
// import RightAuthenticated from "./RightAuthenticated.vue";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

export default {
  components: {
    IconMode,
    IconLanguage,
    RightAuthenticated,
  },
  props: ["isHide"],
  data() {
    return {};
  },
  setup() {
    // on click outside close menu or anything you
    const target = ref(null);
    onClickOutside(target, (event) => (navbarStore.isLanguageMenuOpen = false));

    const navbarStore = useNavbarStore();
    const AuthStore = useAuthStore();
    const UserStore = useUserStore();
    return { navbarStore, AuthStore, UserStore, target };
  },
  computed: {
    changeNormalColor() {
      if (this.navbarStore.darkMode) {
        return "#6188ff";
      } else {
        return "#355cef";
      }
    },
    changeHoverColor() {
      if (this.navbarStore.darkMode) {
        return "#4b6fdd";
      } else {
        return "#2246cd";
      }
    },
    changeHoverMenuColor() {
      if (this.navbarStore.darkMode) {
        return "rgba(240, 244, 255, 0.05)";
      } else {
        return "rgba(1, 4, 27, 0.05)";
      }
    },
    makeLanguageSelectedTop() {
      if (this.navbarStore.appLanguage === "En") {
        this.appLanguage = "En";
        return "English";
      } else {
        return "Arabic";
      }
    },
    makeLanguageUnselectedDown() {
      if (this.makeLanguageSelectedTop == "English") {
        return "Arabic";
      } else {
        return "English";
      }
    },
    changeColorOfLanguageSelected() {
      if (this.navbarStore.darkMode) {
        return "bg-dark-menu-hover";
      } else {
        return "bg-light-menu-hover";
      }
    },
  },
  methods: {
    userLogout() {
      this.AuthStore.logout();
    },
  },
};
</script>

<style scoped>
.login {
  border: 2px solid v-bind("changeNormalColor");
  color: v-bind("changeNormalColor");
  border-radius: 8px;
  padding: 8px 16px;
}
.signup {
  background-color: v-bind("changeNormalColor");
  padding: 10px 24px;
  border-radius: 8px;
}

.login:hover {
  border-color: v-bind("changeHoverColor");
  color: v-bind("changeHoverColor");
  background-color: rgba(34, 70, 205, 0.1);
}
.signup:hover {
  background-color: v-bind("changeHoverColor");
}

.language-menu {
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.language-menu li {
  width: 7.75rem;
}

.language-menu button {
  transition: all 300ms;
}

.language-menu button:hover {
  background-color: v-bind(changeHoverMenuColor);
  border-radius: 2px;
}

/* create animation for language dropdown (down from up & go to up from down) */
.language-dropdown-enter-from,
.language-dropdown-leave-to {
  transform: translateY(-175.8px);
}
.language-dropdown-enter-active,
.language-dropdown-leave-active {
  transition: transform 300ms ease;
}
.language-dropdown-enter-to,
.language-dropdown-leave-from {
  transform: translateY(0);
}
/* create animation for language dropdown (down from up & go to up from down) */
</style>
