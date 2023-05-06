<template>
  <div class="flex justify-between mx-auto container h-[40px]">
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
@import "../../../styles/main.css";
</style>
