<template>
  <div class="flex justify-between mx-auto h-[40px]">
    <DnavbarLeftside />
    <DnavbarRightside />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const DnavbarLeftside = defineAsyncComponent(() =>
  import("./DnavbarLeftside.vue")
);
const DnavbarRightside = defineAsyncComponent(() =>
  import("./DnavbarRightside.vue")
);

export default {
  components: { DnavbarLeftside, DnavbarRightside },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import "@/assets/styles/main.css";
</style>
