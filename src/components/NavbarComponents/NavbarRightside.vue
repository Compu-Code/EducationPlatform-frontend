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
        class="language-menu absolute top-[3.325rem] right-0 z-10"
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
              @click="
                navbarStore.toggleLanguageMenu();
                navbarStore.appLanguage = 'Ar';
              "
            >
              Arabic
            </button>
          </li>
          <li>
            <button
              class="p-[0.625rem] w-full text-left"
              @click="
                navbarStore.toggleLanguageMenu();
                navbarStore.appLanguage = 'En';
              "
            >
              English
            </button>
          </li>
        </div>
      </ul>
    </div>
    <div
      v-if="AuthenticateStore.isUserAuthenticated"
      class="flex justify-center items-center"
    >
      <IconAvatar class="mr-2 cursor-pointer" />
      <IconThickarrow class="cursor-pointer" />
    </div>
    <div v-else>
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
import { useNavbarStore } from "../../stores/NavbarStore";
import { useAuthenticateStore } from "../../stores/AuthenticateStore";

export default {
  components: { IconMode, IconLanguage, IconAvatar, IconThickarrow },
  data() {
    return {};
  },
  setup() {
    const navbarStore = useNavbarStore();
    const AuthenticateStore = useAuthenticateStore();
    return { navbarStore, AuthenticateStore };
  },
};
</script>

<style scoped>
.login {
  border: 2px solid #355cef;
  color: #355cef;
  border-radius: 8px;
  padding: 8px 16px;
}
.signup {
  background-color: #355cef;
  padding: 10px 24px;
  border-radius: 8px;
}

.signup:hover {
  background-color: #2246cd;
}
.language-menu {
  border-radius: 0 0 8px 8px;
}

.language-menu li {
  width: 7.75rem;
}
.language-menu button:hover {
  background-color: slategray;
  border-radius: 2px;
}
</style>
