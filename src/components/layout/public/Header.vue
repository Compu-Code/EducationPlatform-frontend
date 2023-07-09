<template>
  <div
    id="navbar"
    class="font-inter w-screen px-[77px] py-[15px] text-sm duration-300 sticky"
    :class="[
      navbarStore.darkMode
        ? 'bg-dark-primary-color border-b border-dark-navbar-border-bottom'
        : 'bg-light-primary-color border-light-navbar-border-bottom',
    ]"
  >
    <NavbarContainer />
  </div>
</template>

<script>
import NavbarContainer from "./navbar/NavbarContainer.vue";
import { useNavbarStore } from "@/stores/NavbarStore";

export default {
  components: { NavbarContainer },
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
#navbar {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #b2c4e4;
  inset-block-start: 0;
}
</style>
