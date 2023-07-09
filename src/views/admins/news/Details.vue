<template>
  <div class="relative top-3 w-full">
    <!-- <div class="news-container"> -->
    <div
      class="news-header flex flex-col p-3 justify-between mt-10 flex-wrap w-1/2"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">News ID :</span>
        {{ newsID }}
      </div>
      <div class="mb-5">
        <span class="font-bold">News created at :</span>
        <!-- TODO: newsDetails instead of ourNewsData -->
        {{ ournewsStore.newsDetails.created_at }}
      </div>
      <div class="">
        <span class="font-bold">News updated at :</span>
        <!-- TODO: newsDetails instead of errorLogsData -->
        {{ ournewsStore.newsDetails.updated_at }}
      </div>
    </div>
    <div
      class="news-body mt-8 p-4 w-1/2"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">News Title :</span>

        <!-- TODO: newsDetails instead of ourNewsData -->
        {{ ournewsStore.newsDetails.title }}
      </div>
      <div class="">
        <span class="font-bold">News Description :</span>
        <!-- TODO: newsDetails instead of ourNewsData -->
        {{ ournewsStore.newsDetails.description }}
      </div>
    </div>
    <div class="btns flex justify-between mt-24 mb-5">
      <router-link :to="{ name: 'admin-news-events' }">
        <icon-deflated :direction="'left'" :border="true">Back</icon-deflated>
      </router-link>
      <div class="right-btns">
        <normal-deflated
          @click="
            {
              //TODO: newsDetails instead of ourNewsData
              openEditPopup(ournewsStore.newsDetails);
            }
          "
          class="edit-btn mr-4"
          >Edit</normal-deflated
        >
        <normal-deflated
          @click="ournewsStore.deleteNews(Number(newsID))"
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
              (isEditPopupOpened = false), (ournewsStore.editLoading = false);
            }
          "
        ></div>
      </transition>
    </Teleport>
    <Teleport to="body">
      <Transition name="news-popup">
        <NewsPopup
          v-if="isEditPopupOpened"
          @close="
            {
              (isEditPopupOpened = false), (ournewsStore.editLoading = false);
            }
          "
          :edit-news-title="titleForEditPopup"
          :edit-news-description="descriptionForEditPopup"
          :primary-btn="'edit'"
          :newsId="newsIdForEdit"
          class="z-20"
        />
      </Transition>
    </Teleport>
    <!-- </div> -->
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useOurnewsStore } from "../../../stores/OurnewsStore";
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

const NewsPopup = defineAsyncComponent(() => import("./NewsPopup.vue"));

export default {
  props: ["newsID"],
  components: {
    NormalDeflated,
    IconDeflated,
    OverlayBase,
    NewsPopup,
  },
  data() {
    return {
      isEditPopupOpened: false,
      titleForEditPopup: null,
      descriptionForEditPopup: null,
      newsIdForEdit: null,
    };
  },
  setup() {
    const ournewsStore = useOurnewsStore();
    const navbarStore = useNavbarStore();
    return { ournewsStore, navbarStore };
  },
  methods: {
    openEditPopup(news) {
      console.log(news);
      this.titleForEditPopup = news.title;
      this.descriptionForEditPopup = news.description;
      this.newsIdForEdit = news.id;
      this.isEditPopupOpened = true;
    },
  },
  mounted() {
    this.ournewsStore.showNewsData(Number(this.newsID));
  },
};
</script>

<style scoped>
.news-header,
.news-body {
  width: 100%;
  /* min-width: 100%; */
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
}
.news-container {
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
.news-popup-enter-active {
  animation: modal 0.2s ease-out;
}
.news-popup-leave-active {
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
