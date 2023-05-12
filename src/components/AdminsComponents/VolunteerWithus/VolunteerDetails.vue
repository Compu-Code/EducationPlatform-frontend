<template>
  <div>
    <div class="error-id">volunteerID : {{ volunteerID }}</div>
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
      <router-link :to="{ name: 'admin-volunteer-forms' }">
        <icon-deflated :direction="left" :border="true">Back</icon-deflated>
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useVolunteerStore } from "../../../stores/VolunteerStore";
import { useNavbarStore } from "../../../stores/NavbarStore";

const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);

const IconDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/IconDeflated.vue")
);

export default {
  props: ["volunteerID"],
  components: {
    NormalDeflated,
    IconDeflated,
  },
  data() {
    return {};
  },
  setup() {
    const volunteerStore = useVolunteerStore();
    const navbarStore = useNavbarStore();
    return { volunteerStore, navbarStore };
  },
  // mounted() {
  //   this.volunteerStore.showVolunteerData();
  // },
};
</script>

<style scoped></style>
