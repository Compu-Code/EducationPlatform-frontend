<template>
  <PermissionDetails />
</template>

<script>
import { defineAsyncComponent } from "vue";

const PermissionDetails = defineAsyncComponent(() =>
  import(
    "../../../components/AdminsComponents/PermissionsComponents/PermissionDetails.vue"
  )
);

export default {
  components: { PermissionDetails },
};
</script>
