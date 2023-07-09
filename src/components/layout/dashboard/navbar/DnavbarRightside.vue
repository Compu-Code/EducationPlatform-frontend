<template>
  <NavbarRightSide :isHide="false" />
</template>

<script>
import { defineAsyncComponent } from "vue";

const NavbarRightSide = defineAsyncComponent(() =>
  import("@/components/layout/public/navbar/NavbarRightSide.vue")
);
export default {
  components: {
    NavbarRightSide,
  },
};
</script>

<style scoped></style>
