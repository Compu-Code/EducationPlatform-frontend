<template>
  <div class="error-logs-layout">
    <ErrorLogs />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const ErrorLogs = defineAsyncComponent(() =>
  import("../../../components/AdminsComponents/ErrorLogs/ErrorLogs.vue")
);

export default {
  components: { ErrorLogs },
};
</script>

<style scoped>
.error-logs-layout {
  height: calc(100% - 70px);
}
</style>
