<template>
  <div class="relative">
    <div
      ref="target"
      @click="navbarStore.toggleProfileMenuOpen"
      class="flex justify-center items-center"
    >
      <IconAvatar class="mr-2 cursor-pointer" />
      <IconThickarrow class="cursor-pointer" />
    </div>
    <transition name="acc-dropdown">
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
              <RouterLink :to="{ name: currentRouterPath }">
                <button
                  class="py-[0.625rem] pl-4 w-full text-left mb-[0.625rem] flex items-center"
                >
                  <div class="pr-[0.625rem]">
                    <IconDdropmenu />
                  </div>
                  {{ currentRouteName }}
                </button>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/profile/settings">
                <button
                  class="py-[0.625rem] pl-4 w-full text-left mb-[0.625rem] flex items-center"
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
                @click="userLogout"
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
    </transition>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const IconAvatar = defineAsyncComponent(() =>
  import("../icons/IconAvatar.vue")
);
const IconThickarrow = defineAsyncComponent(() =>
  import("../icons/IconThickarrow.vue")
);
const IconLogout = defineAsyncComponent(() =>
  import("../icons/IconLogout.vue")
);
const IconSettings = defineAsyncComponent(() =>
  import("../icons/IconSettings.vue")
);
const IconDdropmenu = defineAsyncComponent(() =>
  import("../icons/IconDdropmenu.vue")
);

import { ref } from "vue";
import { useNavbarStore } from "../../stores/NavbarStore";
import { useAuthStore } from "../../stores/AuthStore";
import { useUserStore } from "../../stores/UserStore";
import { onClickOutside } from "@vueuse/core";

export default {
  components: {
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

    const target = ref(null);
    onClickOutside(target, (event) => (navbarStore.isProfileMenuOpen = false));

    return { navbarStore, AuthStore, UserStore, target };
  },
  computed: {
    changeHoverMenuColor() {
      if (this.navbarStore.darkMode) {
        return "rgba(240, 244, 255, 0.05)";
      } else {
        return "rgba(1, 4, 27, 0.05)";
      }
    },
    currentRouteName() {
      if (this.$route.matched[0].name === "website") {
        return "Dashboard";
      } else if (this.$route.matched[0].name === "dashboard") {
        return "Home";
      }
    },
    currentRouterPath() {
      if (this.$route.matched[0].name === "website") {
        return "dashboard";
      } else if (this.$route.matched[0].name === "dashboard") {
        return "website";
      }
    },
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
.account-menu {
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.account-menu li {
  width: 13.313rem;
}

.account-menu button {
  transition: all 300ms;
}

.account-menu button:hover {
  background-color: v-bind(changeHoverMenuColor);
  border-radius: 2px;
}

/* create animation for language dropdown (down from up & go to up from down) */
.acc-dropdown-enter-from,
.acc-dropdown-leave-to {
  transform: translateY(-260.2px);
}
.acc-dropdown-enter-active,
.acc-dropdown-leave-active {
  transition: transform 300ms ease;
}
.acc-dropdown-enter-to,
.acc-dropdown-leave-from {
  transform: translateY(0);
}

/* create animation for language dropdown (down from up & go to up from down) */
</style>
