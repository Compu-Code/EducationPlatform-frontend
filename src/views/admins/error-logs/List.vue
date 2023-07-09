<template>
  <div class="error-logs-layout">
    <main
      class="error-logs mt-6 w-full duration-300 mb-10"
      :class="[
        navbarStore.darkMode
          ? ' text-dark-text-color'
          : 'text-light-text-color',
      ]"
    >
      <!-- <div
    class="filter w-full h-20 mb-5"
      :class="[navbarStore.darkMode ? ' bg-[#272937]' : 'bg-white']"
    >
      <div>Filter</div>
    </div> -->
      <div
        class="table-sh"
        :class="[navbarStore.darkMode ? ' bg-[#272937]' : 'bg-white']"
      >
        <ErrorlogsTable />
      </div>
    </main>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useNavbarStore } from "../../../stores/NavbarStore.js";
import { useSidebarStore } from "../../../stores/SidebarStore";
import { useErrorlogsStore } from "../../../stores/ErrorlogsStore";
const ErrorlogsTable = defineAsyncComponent(() =>
  import("./ErrorlogsTable.vue")
);

export default {
  components: { ErrorlogsTable },
  setup() {
    const navbarStore = useNavbarStore();
    const SidebarStore = useSidebarStore();
    const errorlogsStore = useErrorlogsStore();
    return { navbarStore, SidebarStore, errorlogsStore };
  },
  data() {
    return {};
  },
  mounted() {
    this.errorlogsStore.getErrorLogsData();
  },
};
</script>

<style scoped>
.error-logs-layout {
  height: calc(100% - 70px);
}
.error-logs {
  height: calc(100% - 24px);
}
.filter,
.table-sh {
  box-shadow: 0 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0 3px 4px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0 1px 8px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 5px;
}
.table-sh {
  /* height: calc(100% - 103px); */
}
</style>
