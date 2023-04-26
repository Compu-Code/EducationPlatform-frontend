<template>
  <div class="flex justify-between mx-auto container h-[40px]">
    <DnavbarLeftside />
    <DnavbarRightside />
  </div>
</template>

<script>
import DnavbarLeftside from "./DnavbarLeftside.vue";
import DnavbarRightside from "./DnavbarRightside.vue";

export default {
  components: { DnavbarLeftside, DnavbarRightside },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import "../../../styles/main.css";
</style>
