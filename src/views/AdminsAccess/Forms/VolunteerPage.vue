<template>
  <div class="volunteer-with-us-layout">
    <VolunteerPage />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const VolunteerPage = defineAsyncComponent(() =>
  import(
    "../../../components/AdminsComponents/VolunteerWithus/VolunteerPage.vue"
  )
);

export default {
  components: { VolunteerPage },
};
</script>

<style scoped>
.volunteer-with-us-layout {
  height: calc(100% - 70px);
}
</style>
