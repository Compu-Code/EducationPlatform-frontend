<template>
  <div class="relative top-3 w-full">
    <!-- <div class="sponsors-container"> -->
    <div
      class="sponsors-header flex flex-col p-3 justify-between mt-10 flex-wrap w-1/2"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">Sponsor ID :</span>
        {{ sponsorID }}
      </div>
      <div class="mb-5">
        <span class="font-bold">Sponsor created at :</span>
        <!-- TODO: sponsorDetails instead of sponsorsData -->
        {{ sponsorsStore.sponsorsData[0].created_at }}
      </div>
      <div class="">
        <span class="font-bold">Sponsor updated at :</span>
        <!-- TODO: sponsorDetails instead of sponsorsData -->
        {{ sponsorsStore.sponsorsData[0].updated_at }}
      </div>
    </div>
    <div
      class="sponsors-body mt-8 p-4 w-1/2"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <!-- sponsor logo -->
      <!-- <div class="mb-5"> -->
      <!-- <span class="font-bold">Sponsor Logo :</span> -->

      <!-- TODO: sponsorDetails instead of sponsorsData -->
      <!-- {{ sponsorsStore.sponsorsData[0].sponsor_logo }} -->
      <!-- </div> -->
      <div class="mb-5">
        <span class="font-bold">Sponsor Name :</span>

        <!-- TODO: sponsorDetails instead of sponsorsData -->
        {{ sponsorsStore.sponsorsData[0].sponsor_name }}
      </div>
      <div class="">
        <span class="font-bold">Sponsor Description :</span>
        <!-- TODO: sponsorDetails instead of sponsorsData -->
        {{ sponsorsStore.sponsorsData[0].sponsor_description }}
      </div>
    </div>
    <div class="btns flex justify-between mt-24 mb-5">
      <router-link :to="{ name: 'admin-sponsors' }">
        <icon-deflated :direction="'left'" :border="true">Back</icon-deflated>
      </router-link>
      <div class="right-btns">
        <normal-deflated
          @click="
            {
              //TODO: newsDetails instead of sponsorsData
              openEditPopup(sponsorsStore.sponsorsData[0]);
            }
          "
          class="edit-btn mr-4"
          >Edit</normal-deflated
        >
        <normal-deflated
          @click="sponsorsStore.deleteNews(sponsorID)"
          class="delete-btn"
          >Delete</normal-deflated
        >
      </div>
    </div>
    <Teleport to="body">
      <transition name="overlay">
        <div
          v-if="isEditPopupOpened"
          id="overlay"
          :class="{ hidden: !isEditPopupOpened }"
          @click="
            {
              (isEditPopupOpened = false), (sponsorsStore.editLoading = false);
            }
          "
        ></div>
      </transition>
    </Teleport>
    <Teleport to="body">
      <Transition name="sponsors-popup">
        <SponsorsPopup
          v-if="isEditPopupOpened"
          @close="
            {
              (isEditPopupOpened = false), (sponsorsStore.editLoading = false);
            }
          "
          :edit-sponsors-name="nameForEditPopup"
          :edit-sponsors-description="descriptionForEditPopup"
          :primary-btn="'edit'"
          :sponsorId="sponsorIdForEdit"
          class="z-20"
        />
      </Transition>
    </Teleport>
    <!-- </div> -->
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useSponsorsStore } from "../../../stores/SponsorsStore";
import { useNavbarStore } from "../../../stores/NavbarStore";

const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);

const IconDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/IconDeflated.vue")
);
const OverlayBase = defineAsyncComponent(() =>
  import("../../UI/OverlayBase.vue")
);

const SponsorsPopup = defineAsyncComponent(() => import("./SponsorsPopup.vue"));

export default {
  props: ["sponsorID"],
  components: {
    NormalDeflated,
    IconDeflated,
    OverlayBase,
    SponsorsPopup,
  },
  data() {
    return {
      isEditPopupOpened: false,
      nameForEditPopup: null,
      descriptionForEditPopup: null,
      sponsorIdForEdit: null,
    };
  },
  setup() {
    const sponsorsStore = useSponsorsStore();
    const navbarStore = useNavbarStore();
    return { sponsorsStore, navbarStore };
  },
  methods: {
    openEditPopup(sponsor) {
      this.nameForEditPopup = sponsor.sponsor_name;
      this.descriptionForEditPopup = sponsor.sponsor_description;
      this.sponsorIdForEdit = sponsor.id;
      this.isEditPopupOpened = true;
    },
  },
  mounted() {
    this.sponsorsStore.showSponsorData();
  },
};
</script>

<style scoped>
.sponsors-header,
.sponsors-body {
  width: 100%;
  /* min-width: 100%; */
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
}
.sponsors-container {
  /* width: fit-content; */
  /* margin-right: 0; */
  /* width: 100%; */
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
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

#overlay {
  position: fixed; /* Sit on top of the page content */
  /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* Black background with opacity */
  z-index: 10; /* Specify a stack order in case you're using a different order for other elements */
  /* cursor: pointer; Add a pointer on hover */
  /* animation: overlay 0.5s forwards normal; */
}
/* overlay transition */
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: all 200ms ease-in-out;
}
.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
}
/* news popup transition */
.sponsors-popup-enter-active {
  animation: modal 0.2s ease-out;
}
.sponsors-popup-leave-active {
  animation: modal reverse 0.2s ease-in;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
