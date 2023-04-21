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
        />
      </div>
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
                navbarStore.toggleLanguage(makeLanguageSelectedTop.slice(0, 2));
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
    </div>
    <div v-if="AuthStore.isAuthenticated" class="relative">
      <div
        @click="navbarStore.toggleProfileMenuOpen"
        class="flex justify-center items-center"
      >
        <IconAvatar class="mr-2 cursor-pointer" />
        <IconThickarrow class="cursor-pointer" />
      </div>
      <ul
        v-if="navbarStore.isProfileMenuOpen"
        class="account-menu absolute top-[2.188rem] right-0 z-10"
        :class="[
          navbarStore.darkMode
            ? 'bg-dark-primary-color text-dark-text-color'
            : 'bg-light-primary-color text-light-text-color',
        ]"
      >
        <div class="py-4 px-[0.625rem]">
          <div class="mb-3 flex w-full px-[0.938rem] items-end justify-start">
            <IconAvatar class="w-10 h-10" />
            <div class="ml-[0.5rem] px-[0.625rem]">
              <p class="font-bold text-s">
                {{ UserStore.userFullName }}
              </p>
              <p class="font-normal text-xs mt-[0.125rem]">
                {{ UserStore.userRoles[0] }}
              </p>
            </div>
          </div>
          <div>
            <li>
              <RouterLink to="/dashboard/admin">
                <button
                  class="py-[0.625rem] pl-4 w-full text-left mb-[0.625rem] flex items-center"
                  @click="navbarStore.toggleProfileMenuOpen"
                >
                  <div class="pr-[0.625rem]">
                    <IconDdropmenu />
                  </div>
                  Dashboard
                </button>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/profile/settings">
                <button
                  class="py-[0.625rem] pl-4 w-full text-left mb-[0.625rem] flex items-center"
                  @click="navbarStore.toggleProfileMenuOpen"
                >
                  <div class="pr-[0.625rem]">
                    <IconSettings />
                  </div>

                  Profile Settings
                </button>
              </RouterLink>
            </li>
            <li>
              <button
                class="py-[0.625rem] pl-4 w-full text-left flex items-center"
                @click="
                  navbarStore.toggleProfileMenuOpen();
                  userLogout();
                "
              >
                <div class="pr-[0.625rem]">
                  <IconLogout />
                </div>
                Log Out
              </button>
            </li>
          </div>
        </div>
      </ul>
    </div>

    <div v-if="!AuthStore.isAuthenticated">
      <router-link to="/login" class="login mr-3">Log In</router-link>
      <router-link to="/signup" class="signup text-white font-inter"
        >Sign Up</router-link
      >
    </div>
  </section>
</template>

<script>
import IconLanguage from "../icons/IconLanguage.vue";
import IconMode from "../icons/IconMode.vue";
import IconAvatar from "../icons/IconAvatar.vue";
import IconThickarrow from "../icons/IconThickarrow.vue";
import IconLogout from "../icons/IconLogout.vue";
import IconSettings from "../icons/IconSettings.vue";
import IconDdropmenu from "../icons/IconDdropmenu.vue";
import { useNavbarStore } from "../../stores/NavbarStore";
import { useAuthStore } from "../../stores/AuthStore";
import { useUserStore } from "../../stores/UserStore";

export default {
  components: {
    IconMode,
    IconLanguage,
    IconAvatar,
    IconThickarrow,
    IconLogout,
    IconSettings,
    IconDdropmenu,
  },
  data() {
    return {};
  },
  setup() {
    const navbarStore = useNavbarStore();
    const AuthStore = useAuthStore();
    const UserStore = useUserStore();
    return { navbarStore, AuthStore, UserStore };
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
    // getUserName() {
    //   if (this.UserStore.userData && !this.UserStore.isUserDataLoading) {
    //     return `${this.UserStore.userData.first_name} ${this.UserStore.userData.last_name}`;
    //   } else {
    //     return "loading ...";
    //   }
    // },
  },
  methods: {
    userLogout() {
      this.AuthStore.logout();
    },
  },
  mounted() {
    this.UserStore.getUserData();
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

.language-menu,
.account-menu {
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.language-menu li {
  width: 7.75rem;
}
.account-menu li {
  width: 13.313rem;
}

.language-menu button,
.account-menu button {
  transition: all 300ms;
}

.language-menu button:hover,
.account-menu button:hover {
  background-color: v-bind(changeHoverMenuColor);
  border-radius: 2px;
}
</style>
