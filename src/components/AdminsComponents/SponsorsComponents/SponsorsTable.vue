<template>
  <div class="p-[0.8rem] flex justify-between">
    <!-- <normal-filled class="export-btn">Export</normal-filled> -->
    <div
      class="search-box flex items-center rounded-md py-1 duration-300"
      :class="[
        navbarStore.darkMode
          ? 'bg-dark-primary-color border-dark-text-color'
          : 'bg-light-primary-color border-light-text-color',
      ]"
    >
      <div class="block float-left cursor-pointer ml-1">
        <IconSearch />
      </div>

      <input
        type="search"
        name=""
        id=""
        placeholder="Search Sponsors"
        class="text-base bg-transparent w-full focus:outline-none ml-1"
      />
    </div>
    <normal-filled
      class="create-Sponsor-btn ml-2"
      @click="createSponsorsClicked = true"
      >Create Sponsor</normal-filled
    >
    <Teleport to="body">
      <transition name="overlay">
        <div
          v-if="createSponsorsClicked"
          id="overlay"
          :class="{ hidden: !createSponsorsClicked }"
          @click="
            {
              (createSponsorsClicked = false),
                (sponsorsStore.createLoading = false);
            }
          "
        ></div>
      </transition>
    </Teleport>
    <Teleport to="body">
      <Transition name="sponsors-popup">
        <SponsorsPopup
          :primary-btn="'create'"
          v-if="createSponsorsClicked"
          @close="
            {
              (createSponsorsClicked = false),
                (sponsorsStore.createLoading = false);
            }
          "
          class="z-20"
        />
      </Transition>
    </Teleport>
  </div>
  <hr />
  <div class="table-container overflow-x-auto">
    <table class="min-w-[800px] w-full relative">
      <thead class="border-b sticky top-0 bg-white z-[1]">
        <tr>
          <!-- <th class="px-4 text-sm font-semibold tracking-wide text-left">
            <input type="checkbox" name="" id="" />
          </th> -->
          <th
            class="frozen-column px-4 text-sm font-semibold tracking-wide text-left"
          >
            ID
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Sponsor Name
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Sponsor Description
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Created at
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Updated at
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-center">
            Actions
          </th>
        </tr>
      </thead>

      <tbody class="">
        <tr
          class="border-b"
          v-for="sponsor in sponsorsStore.sponsorsData"
          :key="sponsor.id"
        >
          <!-- <td class="px-4 text-sm"><input type="checkbox" name="" id="" /></td> -->
          <td class="frozen-column px-4 text-sm">{{ sponsor.id }}</td>
          <td class="td-message px-4 text-sm">
            {{ sponsor.sponsor_name }}
          </td>
          <td class="td-description px-4 text-sm">
            {{ sponsor.sponsor_description }}
          </td>
          <td class="td-created-at px-4 text-sm">{{ sponsor.created_at }}</td>
          <td class="td-updated-at px-4 text-sm">{{ sponsor.updated_at }}</td>
          <td class="px-4 text-sm w-full relative">
            <div>
              <KebabMenu
                @menuOpen="sponsorsStore.openMenu(sponsor.id)"
                class="kebab-menu z-[0] relative"
              />
            </div>
            <PopupMenu
              @viewClicked="
                {
                  sponsorsStore.showSponsorData(sponsor.id);
                  sponsorsStore.toggleMenu(sponsor.id);
                }
              "
              @deleteClicked="
                {
                  sponsorsStore.deleteSponsor(sponsor.id);
                  sponsorsStore.toggleMenu(sponsor.id);
                }
              "
              @editClicked="
                {
                  openEditPopup(sponsor);
                  sponsorsStore.toggleMenu(sponsor.id);
                }
              "
              v-if="sponsor.isMenuActive"
              :action1="true"
              :action2="true"
              :action4="true"
              class="popup-menu absolute top-[83%] right-[35%] z-[1]"
            />
          </td>
        </tr>
      </tbody>
    </table>
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
          :edit-sponsors-logo="logoForEditPopup"
          :primary-btn="'edit'"
          :sponsorId="sponsorIdForEdit"
          class="z-20"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useSponsorsStore } from "../../../stores/SponsorsStore";
import { useNavbarStore } from "../../../stores/NavbarStore";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

const IconSearch = defineAsyncComponent(() =>
  import("../../icons/IconSearch.vue")
);

const NormalFilled = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalFilled.vue")
);
const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);
const KebabMenu = defineAsyncComponent(() =>
  import("../../UI/BasesButton/KebabMenu.vue")
);
const PopupMenu = defineAsyncComponent(() =>
  import("../../UI/BasesPopup/PopupMenu.vue")
);
const OverlayBase = defineAsyncComponent(() =>
  import("../../UI/OverlayBase.vue")
);

const SponsorsPopup = defineAsyncComponent(() => import("./SponsorsPopup.vue"));

export default {
  components: {
    NormalFilled,
    KebabMenu,
    PopupMenu,
    NormalDeflated,
    IconSearch,
    SponsorsPopup,
    OverlayBase,
  },
  data() {
    return {
      // isMenuOpen: false,
      menuId: null,
      createSponsorsClicked: false,
      isEditPopupOpened: false,
      logoForEditPopup: null,
      nameForEditPopup: null,
      descriptionForEditPopup: null,
      sponsorIdForEdit: null,
    };
  },
  setup() {
    const sponsorsStore = useSponsorsStore();
    const navbarStore = useNavbarStore();

    const target = ref(null);
    onClickOutside(target, (event) => sponsorsStore.closeMenus());

    return { sponsorsStore, navbarStore, target };
  },
  methods: {
    // openMenu(ID) {
    //   const error = this.errors.find((error) => error.id === ID);
    //   this.menuId = error.id;
    //   this.isMenuOpen = !this.isMenuOpen;
    // },
    openEditPopup(sponsor) {
      this.logoForEditPopup = sponsor.sponsor_logo;
      this.nameForEditPopup = sponsor.sponsor_name;
      this.descriptionForEditPopup = sponsor.sponsor_description;
      this.sponsorIdForEdit = sponsor.id;
      this.isEditPopupOpened = true;
    },
  },
  computed: {
    changeTableColor() {
      if (this.navbarStore.darkMode) {
        return "#272937";
      } else {
        return "#ffffff";
      }
    },
    // change create-news-btn colors
    changeColor() {
      if (this.navbarStore.darkMode) {
        return "#6188ff";
      } else {
        return "#355CEF";
      }
    },
    changeHoverColor() {
      if (this.navbarStore.darkMode) {
        return "#4b6fdd";
      } else {
        return "#2246CD";
      }
    },
    changeClickedColor() {
      if (this.navbarStore.darkMode) {
        return "#3858bb";
      } else {
        return "#1433AB";
      }
    },
  },
  // isMenuOpened(ID){

  // }
};
</script>

<style scoped>
.frozen-column {
  position: sticky;
  left: 0;
  z-index: 1;
  background-color: v-bind(changeTableColor);
}
table,
thead {
  background-color: v-bind(changeTableColor);
  white-space: nowrap;
}
.view-btn,
.delete-btn {
  padding: 2.5px 9px;
}
.export-btn {
  padding: 6px 30px;
}

input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
td,
th {
  height: 48px;
}
tr {
  transition: all 0.1s ease-in-out;
}
/* table tr:not(thead tr):hover {
  background-color: rgb(213, 213, 213);
} */
.td-message {
  /* min-width: 200px; */
  max-width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.td-description {
  /* min-width: 200px; */
  max-width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
thead {
  /* box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2); */
}

td:last-child {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.td-created-at,
.td-updated-at {
  /* min-width: 200px; */
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
