<template>
  <main
    class="activity-logs mt-6 w-full duration-300 mb-10"
    :class="[
      navbarStore.darkMode ? ' text-dark-text-color' : 'text-light-text-color',
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
      <ActivitylogsTable />
    </div>
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useNavbarStore } from "../../../stores/NavbarStore.js";
import { useSidebarStore } from "../../../stores/SidebarStore";
import { useActivitylogsStore } from "../../../stores/ActivitylogsStore";
const ActivitylogsTable = defineAsyncComponent(() =>
  import("./ActivitylogsTable.vue")
);

export default {
  components: { ActivitylogsTable },
  setup() {
    const navbarStore = useNavbarStore();
    const SidebarStore = useSidebarStore();
    const activitylogsStore = useActivitylogsStore();
    return { navbarStore, SidebarStore, activitylogsStore };
  },
  data() {
    return {};
  },

  // mounted() {
  //   this.activitylogsStore.getActivityLogsData();
  //   document.body.classList.add("h-screen");
  // },
  // unmounted() {
  //   document.body.classList.remove("h-screen");
  // },
};
</script>

<style scoped>
.activity-logs {
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
