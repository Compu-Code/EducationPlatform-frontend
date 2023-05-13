<template>
  <div class="flex justify-between mx-auto h-[40px]">
    <NavbarLeftside />
    <NavbarRightside :isHide="true" />
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
