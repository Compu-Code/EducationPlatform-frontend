<template>
  <div
    class="navbar font-inter bg-light-primary-color w-screen px-[77px] py-[15px]"
    :class="{}"
  >
    <NavbarContainer />
  </div>
</template>

<script>
import NavbarContainer from "./NavbarContainer.vue";
export default {
  components: { NavbarContainer },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
