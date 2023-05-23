<template>
  <div class="relative top-3 w-full">
    <!-- <div class="activity-container"> -->
    <div
      class="activity-header flex flex-col p-3 justify-between mt-10 flex-wrap w-1/2"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">Activity ID :</span>
        {{ activityID }}
      </div>
      <div class="mb-5">
        <span class="font-bold">Activity created at :</span>
        <!-- TODO: activityDetails instead of activityLogsData -->
        {{ activitylogsStore.activityDetails.created_at }}
      </div>
      <div class="">
        <span class="font-bold">Activity updated at :</span>
        <!-- TODO: activityDetails instead of errorLogsData -->
        {{ activitylogsStore.activityDetails.updated_at }}
      </div>
    </div>
    <div
      class="activity-body mt-8 p-4 w-1/2"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">User ID :</span>

        <!-- TODO: activityDetails instead of activityLogsData -->
        {{ activitylogsStore.activityDetails.user_id }}
      </div>
      <div class="mb-5">
        <span class="font-bold"> User Name :</span>
        <!-- TODO: activityDetails instead of activityLogsData -->
        {{ activitylogsStore.activityDetails.name }}
      </div>
      <div class="mb-5">
        <span class="font-bold"> Subject :</span>
        <!-- TODO: activityDetails instead of activityLogsData -->
        {{ activitylogsStore.activityDetails.subject }}
      </div>
      <div class="mb-5">
        <span class="font-bold"> URL :</span>
        <!-- TODO: activityDetails instead of activityLogsData -->
        {{ activitylogsStore.activityDetails.url }}
      </div>
      <div class="mb-5">
        <span class="font-bold"> Method :</span>
        <!-- TODO: activityDetails instead of activityLogsData -->
        {{ activitylogsStore.activityDetails.method }}
      </div>
      <div class="">
        <span class="font-bold"> IP Address :</span>
        <!-- TODO: activityDetails instead of activityLogsData -->
        {{ activitylogsStore.activityDetails.ip }}
      </div>
    </div>
    <div class="btns flex justify-between mt-24 mb-5">
      <router-link :to="{ name: 'admin-activity-logs' }">
        <icon-deflated :direction="'left'" :border="true">Back</icon-deflated>
      </router-link>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useActivitylogsStore } from "../../../stores/ActivitylogsStore";
import { useNavbarStore } from "../../../stores/NavbarStore";

const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);

const IconDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/IconDeflated.vue")
);

export default {
  props: ["activityID"],
  components: {
    NormalDeflated,
    IconDeflated,
  },
  data() {
    return {};
  },
  setup() {
    const activitylogsStore = useActivitylogsStore();
    const navbarStore = useNavbarStore();
    return { activitylogsStore, navbarStore };
  },
  mounted() {
    this.activitylogsStore.showActivityData(Number(this.activityID));
  },
};
</script>

<style scoped>
.activity-header,
.activity-body {
  width: 100%;
  /* min-width: 100%; */
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
}
.activity-container {
  /* width: fit-content; */
  /* margin-right: 0; */
  /* width: 100%; */
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
}
</style>
