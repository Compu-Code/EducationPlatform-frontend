<template>
  <NavbarRightside :isHide="false" />
</template>

<script>
import { defineAsyncComponent } from "vue";

const NavbarRightside = defineAsyncComponent(() =>
  import("../../NavbarComponents/NavbarRightside.vue")
);
export default {
  components: {
    NavbarRightside,
  },
};
</script>

<style scoped></style>
