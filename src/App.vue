<template>
  <div class="flex">
    <TheSidebar />
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import TheSidebar from "./components/TheSidebar/TheSidebar.vue";

export default {
  components: {
    TheSidebar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
