<template>
  <div class="permissions-layout">
    <PermissionsPage />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const PermissionsPage = defineAsyncComponent(() =>
  import(
    "../../../components/AdminsComponents/PermissionsComponents/PermissionsPage.vue"
  )
);

export default {
  components: { PermissionsPage },
};
</script>

<style scoped>
.permissions-layout {
  height: calc(100% - 70px);
}
</style>
