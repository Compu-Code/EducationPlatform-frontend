<template>
  <div>
    <div class="error-id">Error ID: {{ errorID }}</div>
    <div class="error-message">
      Error Message:gg
      <!-- {{ errorlogsStore.errorDetails.error_message }} -->
    </div>
    <div class="error-description">
      Error Description:
      <!-- {{ errorlogsStore.errorDetails.error_description }} -->
    </div>
    <div class="error-created-at">
      Error Created At:
      <!-- {{ errorlogsStore.errorDetails.created_at }} -->
    </div>
    <div class="error-updated-at">
      Error Updated At:
      <!-- {{ errorlogsStore.errorDetails.updated_at }} -->
    </div>
    <div class="btns flex justify-between">
      <router-link :to="{ name: 'admin-error-logs' }">
        <icon-deflated :direction="left" :border="true">Back</icon-deflated>
      </router-link>
      <normal-deflated @click="errorlogsStore.deleteError(errorID)"
        >Delete</normal-deflated
      >
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useErrorlogsStore } from "../../../stores/ErrorlogsStore";
import { useNavbarStore } from "../../../stores/NavbarStore";

const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);

const IconDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/IconDeflated.vue")
);

export default {
  props: ["errorID"],
  components: {
    NormalDeflated,
    IconDeflated,
  },
  data() {
    return {};
  },
  setup() {
    const errorlogsStore = useErrorlogsStore();
    const navbarStore = useNavbarStore();
    return { errorlogsStore, navbarStore };
  },
  // mounted() {
  //   this.errorlogsStore.showErrorData();
  // },
};
</script>

<style scoped></style>
