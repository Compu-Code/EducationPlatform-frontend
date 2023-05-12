<template>
  <VolunteerDetails />
</template>

<script>
import { defineAsyncComponent } from "vue";

const VolunteerDetails = defineAsyncComponent(() =>
  import(
    "../../../components/AdminsComponents/VolunteerWithus/VolunteerDetails.vue"
  )
);

export default {
  components: { VolunteerDetails },
};
</script>
