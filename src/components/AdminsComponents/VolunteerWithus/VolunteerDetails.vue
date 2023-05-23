<template>
  <div class="relative top-10">
    <div
      class="contact-header flex flex-col p-3 justify-between mt-10 flex-wrap"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">Volunteer ID :</span>
        {{ volunteerID }}
      </div>
      <div class="mb-5">
        <span class="font-bold">Volunteer created at :</span>
        <!-- TODO: volunteerDetails instead of volunteerData -->
        {{ volunteerStore.volunteerDetails.created_at }}
      </div>
      <div class="">
        <span class="font-bold">Volunteer updated at :</span>
        <!-- TODO: volunteerDetails instead of volunteerData -->
        {{ volunteerStore.volunteerDetails.updated_at }}
      </div>
    </div>
    <div
      class="contact-body mt-8 p-4"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">First Name :</span>

        <!-- TODO: volunteerDetails instead of volunteerData -->
        {{ volunteerStore.volunteerDetails.first_name }}
      </div>
      <div class="mb-5">
        <span class="font-bold">Last Name :</span>
        <!-- TODO: volunteerDetails instead of volunteerData -->
        {{ volunteerStore.volunteerDetails.last_name }}
      </div>
      <div class="mb-5">
        <span class="font-bold">Email :</span>
        <!-- TODO: volunteerDetails instead of volunteerData -->
        {{ volunteerStore.volunteerDetails.email }}
      </div>
      <div class="">
        <span class="font-bold">Description :</span>
        <!-- TODO: volunteerDetails instead of volunteerData -->
        {{ volunteerStore.volunteerDetails.description }}
      </div>
    </div>
    <div class="btns flex justify-between mt-10 mb-5">
      <router-link :to="{ name: 'admin-volunteer-forms' }">
        <icon-deflated :direction="'left'" :border="true">Back</icon-deflated>
      </router-link>
      <normal-deflated
        @click="volunteerStore.deleteVolunteer(Number(volunteerID))"
        class="delete-btn"
        >Delete</normal-deflated
      >
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useVolunteerStore } from "../../../stores/VolunteerStore";
import { useNavbarStore } from "../../../stores/NavbarStore";

const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);

const IconDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/IconDeflated.vue")
);

export default {
  props: ["volunteerID"],
  components: {
    NormalDeflated,
    IconDeflated,
  },
  data() {
    return {};
  },
  setup() {
    const volunteerStore = useVolunteerStore();
    const navbarStore = useNavbarStore();
    return { volunteerStore, navbarStore };
  },
  mounted() {
    this.volunteerStore.showVolunteerData(Number(this.volunteerID));
  },
};
</script>

<style scoped>
.contact-header,
.contact-body {
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
}
.delete-btn {
  color: rgb(235, 35, 35);
  border-color: rgb(235, 35, 35);
}
.delete-btn:hover {
  color: rgb(235, 35, 35);
  border-color: rgb(235, 35, 35);
}
.delete-btn:active {
  color: rgb(235, 35, 35);
  border-color: rgb(235, 35, 35);
}
</style>
