<template>
  <div
    id="navbar"
    class="font-inter w-screen px-[77px] py-[15px] text-sm"
    :class="[
      navbarStore.darkMode ? 'bg-dark-primary-color' : 'bg-light-primary-color',
    ]"
  >
    <NavbarContainer />
  </div>
</template>

<script>
import NavbarContainer from "./NavbarContainer.vue";
import { useNavbarStore } from "../../stores/NavbarStore";

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
}
</style>
