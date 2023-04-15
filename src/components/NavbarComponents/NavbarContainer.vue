<template>
  <div class="flex mx-auto container h-[40px]">
    <NavbarLeftside />
    <NavbarRightside />
  </div>
</template>

<script>
import NavbarLeftside from "./NavbarLeftside.vue";
import NavbarRightside from "./NavbarRightside.vue";

export default {
  components: { NavbarLeftside, NavbarRightside },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import "../../styles/main.css";
</style>
