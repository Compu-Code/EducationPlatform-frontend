<template>
  <ActivityDetails />
</template>

<script>
import { defineAsyncComponent } from "vue";

const ActivityDetails = defineAsyncComponent(() =>
  import(
    "../../../components/AdminsComponents/ActivityLogs/ActivityDetails.vue"
  )
);

export default {
  components: { ActivityDetails },
};
</script>
