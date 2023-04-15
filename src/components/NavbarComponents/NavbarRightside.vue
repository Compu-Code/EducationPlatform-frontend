<template>
  <section class="flex items-center justify-center">
    <div class="icons flex mr-6">
      <div class="mode pr-[5px]">
        <IconDark
          v-if="!navbarStore.darkMode"
          class="cursor-pointer"
          @click="navbarStore.toggleMode"
        />
        <IconLight
          v-else-if="navbarStore.darkMode"
          class="cursor-pointer"
          @click="navbarStore.toggleMode"
        />
      </div>
      <div class="pl-[5px]">
        <IconLanguage class="cursor-pointer" />
      </div>
    </div>
    <div>
      <router-link
        to="/login"
        class="login mr-3"
        :class="[navbarStore.darkMode ? 'login-dark' : 'login-light']"
        >Login</router-link
      >
      <router-link to="/signup" class="signup text-white font-inter"
        >Sign Up</router-link
      >
    </div>
  </section>
</template>

<script>
import IconLight from "../icons/IconLight.vue";
import IconDark from "../icons/IconDark.vue";
import IconLanguage from "../icons/IconLanguage.vue";
import { useNavbarStore } from "../../stores/NavbarStore";

export default {
  components: { IconLight, IconDark, IconLanguage },
  data() {
    return {};
  },
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
};
</script>

<style scoped>
.login-light {
  background: linear-gradient(104.06deg, var(--gradient-light-mode));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.login-dark {
  background: linear-gradient(104.06deg, var(--gradient-dark-mode));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.signup {
  background: linear-gradient(104.06deg, var(--gradient-light-mode));
  padding: 10px 24px;
  border-radius: 8px;
}
</style>
