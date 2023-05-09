<template>
  <div class="error-log-layout">
    <ErrorLogs />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const ErrorLogs = defineAsyncComponent(() =>
  import("../../components/AdminsComponents/ErrorLogs.vue")
);

export default {
  components: { ErrorLogs },
};
</script>

<style scoped>
.error-log-layout {
  height: calc(100% - 70px);
}
</style>
