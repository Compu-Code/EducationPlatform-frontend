<template>
  <div class="relative top-10">
    <div
      class="error-header flex flex-col p-3 justify-between mt-10 flex-wrap"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="error-id mb-5">
        <span class="font-bold">Error ID :</span>
        {{ errorlogsStore.errorDetails.id }}
      </div>
      <div class="error-created-at mb-5">
        <span class="font-bold">Error created at :</span>
        <!-- TODO: errorLogsDetails instead of errorLogsData -->
        {{ errorlogsStore.errorDetails.created_at }}
      </div>
      <div class="error-updated-at">
        <span class="font-bold">Error updated at :</span>
        <!-- TODO: errorLogsDetails instead of errorLogsData -->
        {{ errorlogsStore.errorDetails.updated_at }}
      </div>
    </div>
    <div
      class="error-body mt-8 p-4"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="error-message mb-5">
        <span class="font-bold">Error message :</span>

        <!-- TODO: errorLogsDetails instead of errorLogsData -->
        {{ errorlogsStore.errorDetails.error_message }}
      </div>
      <div class="error-description">
        <span class="font-bold"> Error description :</span>
        <!-- TODO: errorLogsDetails instead of errorLogsData -->
        {{ errorlogsStore.errorDetails.error_description }}
      </div>
    </div>
    <div class="btns flex justify-between mt-32 mb-5">
      <router-link :to="{ name: 'admin-error-logs' }">
        <icon-deflated :direction="'left'" :border="true">Back</icon-deflated>
      </router-link>
      <normal-deflated
        @click="errorlogsStore.deleteError(Number(errorID))"
        class="delete-btn"
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
  beforeMount() {
    console.log(Number(this.errorID));
    this.errorlogsStore.showErrorData(Number(this.errorID));
  },
};
</script>

<style scoped>
.error-header,
.error-body {
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
}
.delete-btn {
  color: rgb(235, 35, 35);
  border-color: rgb(235, 35, 35);
}
.delete-btn:hover {
  color: rgb(235, 35, 35);
  border-color: rgb(235, 35, 35);
}
.delete-btn:active {
  color: rgb(235, 35, 35);
  border-color: rgb(235, 35, 35);
}
</style>
