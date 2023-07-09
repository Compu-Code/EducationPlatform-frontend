<template>
  <div class="flex justify-between mx-auto h-[40px]">
    <NavbarLeftSide />
    <NavbarRightSide :isHide="true" />
  </div>
</template>

<script>
import NavbarLeftSide from "./NavbarLeftSide.vue";
import NavbarRightSide from "./NavbarRightSide.vue";

export default {
  components: { NavbarLeftSide, NavbarRightSide },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import "@/assets/styles/main.css";
</style>
