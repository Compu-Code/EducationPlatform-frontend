<template>
  <div>
    <div class="error-id">activity ID: {{ activityID }}</div>
    <div class="error-message">
      test
      <!-- {{ errorlogsStore.errorDetails.error_message }} -->
    </div>
    <div class="error-description">
      test
      <!-- {{ errorlogsStore.errorDetails.error_description }} -->
    </div>
    <div class="error-created-at">
      test
      <!-- {{ errorlogsStore.errorDetails.created_at }} -->
    </div>
    <div class="error-updated-at">
      test
      <!-- {{ errorlogsStore.errorDetails.updated_at }} -->
    </div>
    <div class="btns flex justify-between">
      <router-link :to="{ name: 'admin-activity-logs' }">
        <icon-deflated :direction="left" :border="true">Back</icon-deflated>
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useActivitylogsStore } from "../../../stores/ActivitylogsStore";
import { useNavbarStore } from "../../../stores/NavbarStore";

const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);

const IconDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/IconDeflated.vue")
);

export default {
  props: ["activityID"],
  components: {
    NormalDeflated,
    IconDeflated,
  },
  data() {
    return {};
  },
  setup() {
    const activitylogsStore = useActivitylogsStore();
    const navbarStore = useNavbarStore();
    return { activitylogsStore, navbarStore };
  },
  // mounted() {
  //   this.errorlogsStore.showErrorData();
  // },
};
</script>

<style scoped></style>
