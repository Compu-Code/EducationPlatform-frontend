<template>
  <main
    class="volunteer-with-us mt-6 w-full duration-300 mb-10"
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
      <VolunteerTable />
    </div>
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useNavbarStore } from "../../../stores/NavbarStore.js";
import { useSidebarStore } from "../../../stores/SidebarStore";
import { useVolunteerStore } from "../../../stores/VolunteerStore";
const VolunteerTable = defineAsyncComponent(() =>
  import("./VolunteerTable.vue")
);

export default {
  components: { VolunteerTable },
  setup() {
    const navbarStore = useNavbarStore();
    const SidebarStore = useSidebarStore();
    const volunteerStore = useVolunteerStore();
    return { navbarStore, SidebarStore, volunteerStore };
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
.volunteer-with-us {
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
