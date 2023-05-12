<template>
  <div class="activity-logs-layout">
    <ActivityLogs />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const ActivityLogs = defineAsyncComponent(() =>
  import("../../components/AdminsComponents/ActivityLogs/ActivityLogs.vue")
);

export default {
  components: { ActivityLogs },
};
</script>

<style scoped>
.activity-logs-layout {
  height: calc(100% - 70px);
}
</style>
