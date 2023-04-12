<template>
  <div
    class="bg-light-primary-color h-screen pt-6 duration-300 overflow-x-hidden scrollbar"
    :class="OpenMenuWidth"
    @mouseover="isMenuOpen = true"
    @mouseleave="isMenuOpen = false"
  >
    <section class="pl-4 relative flex">
      <div class="inline-flex">
        <IconLogo class="cursor-pointer text-4xl float-left block mr-2" />
        <h1
          class="text-light-text-color origin-left font-medium duration-300 text-lg pt-1"
          :class="{ 'scale-0': !isMenuOpen }"
        >
          Dashboard
        </h1>
      </div>
      <span class="absolute right-3 top-1" :class="{ hidden: !isMenuOpen }">
        <input
          type="radio"
          name=""
          id=""
          class="custom-radio"
          :class="{ highlight: isRadioChecked }"
          v-model="isRadioChecked"
          @click="toggleOpen"
        />
      </span>
    </section>

    <section class="pl-5 pr-5">
      <div
        class="flex items-center rounded-md bg-light-primary-color mt-2 py-1 border-light-text-color duration-100"
        :class="{ border: isMenuOpen, SearchPaddingInClose }"
      >
        <IconSearch
          class="block float-left cursor-pointer ml-1"
          :class="SearchIconMarginInClose"
        />
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          class="text-base bg-transparent w-full text-light-text-color focus:outline-none"
          :class="{ hidden: !isMenuOpen }"
        />
      </div>
    </section>

    <ul class="pt-2">
      <!-- TODO: Make every list a router link not only the text of list -->
      <li
        v-for="Menu in Menus"
        class="duration-300"
        :class="Menu.spacing ? 'mt-9' : 'mt-2'"
        @click="
          testRoute(Menu.link);
          toggleSubmenu();
        "
      >
        <div
          class="pl-4 items-center flex mt-2 p-2 hover:bg-light-secondary-color rounded-r-3xl cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
        >
          <span class="text-2xl block float-left ml-2 duration-300">
            <component :is="Menu.icon"></component
          ></span>
          <span
            class="text-base font-medium duration-300"
            :class="{ hidden: !isMenuOpen }"
            ><router-link
              tag="list"
              :to="'' + Menu.link"
              class="text-light-text-color items-start gap-x-4 ml-2 duration-150"
              >{{ Menu.title }}</router-link
            ></span
          >
          <span v-if="Menu.submenu && isMenuOpen" class="duration-150">
            <IconArrow
              :class="{ 'rotate-90': isSubmenuOpen && isMenuOpen }"
              class="duration-150 self-end"
            />
          </span>
        </div>
        <ul v-if="isSubmenuOpen && Menu.submenu && isMenuOpen">
          <template v-for="Menu in Menus">
            <li
              v-for="submenu in Menu.submenuItem"
              class="hover:bg-light-secondary-color px-5 rounded-r-3xl cursor-pointer"
            >
              {{ submenu.title }}
            </li>
          </template>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import MainMenu from "../../core/config/MainMenuConfig";
import IconArrow from "../icons/IconArrow.vue";
import IconDoubleArrow from "../icons/IconDarrow.vue";
import IconLogo from "../icons/IconLogo.vue";
import IconSearch from "../icons/IconSearch.vue";
import IconDashboard from "../icons/IconDashboard.vue";
import IconUsers from "../icons/IconUsers.vue";
import IconCourses from "../icons/IconCourses.vue";
import IconTransactions from "../icons/IconTransactions.vue";
import IconOrders from "../icons/IconOrders.vue";
import IconErrors from "../icons/IconErrors.vue";
import IconForms from "../icons/IconForms.vue";
import IconRoles from "../icons/IconRoles.vue";
import IconRating from "../icons/IconRating.vue";
import IconNews from "../icons/IconNews.vue";
import IconChat from "../icons/IconChat.vue";
import IconActivity from "../icons/IconActivity.vue";
import IconSponsors from "../icons/IconSponsors.vue";
import IconMycourses from "../icons/IconMycourses.vue";
import IconCalender from "../icons/IconCalender.vue";
import IconConfirm from "../icons/IconConfirm.vue";
import IconHistory from "../icons/Iconhistory.vue";
import IconStudents from "../icons/IconStudents.vue";

export default {
  components: {
    IconDoubleArrow,
    IconLogo,
    IconSearch,
    IconDashboard,
    IconArrow,
    IconUsers,
    IconCourses,
    IconTransactions,
    IconOrders,
    IconErrors,
    IconForms,
    IconRating,
    IconNews,
    IconRoles,
    IconChat,
    IconActivity,
    IconSponsors,
    IconMycourses,
    IconCalender,
    IconConfirm,
    IconHistory,
    IconStudents,
    MainMenu,
  },
  data() {
    return {
      isMenuOpen: true,
      isSubmenuOpen: false,
      isRadioChecked: true,
      Menus: MainMenu,
    };
  },
  computed: {
    OpenMenuWidth() {
      if (this.isMenuOpen) {
        return "w-64";
      } else {
        return "w-16";
      }
    },
    SearchPaddingInClose() {
      if (this.isMenuOpen) {
        return "px-2.5";
      } else {
        return "px-4";
      }
    },
    SearchIconMarginInClose() {
      if (this.isMenuOpen) {
        return "mr-2";
      }
    },
  },
  methods: {
    toggleOpen() {
      this.isMenuOpen = !this.isMenuOpen;
      this.isRadioChecked = !this.isRadioChecked;
    },
    testRoute(link) {
      this.$router.push(link);
    },
    toggleSubmenu() {
      this.isSubmenuOpen = !this.isSubmenuOpen;
    },
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
.custom-radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #ccc;
  margin-right: 8px;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: pointer;
}

.highlight {
  background-color: #4286e5;
  color: #fff;
}

@layer utilities {
  .scrollbar::-webkit-scrollbar {
    width: 5px;
    /* height: 6px; */
  }

  .scrollbar::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #dae6f9;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background: #c1bfbf;
    border-radius: 100vh;
    /* border: 3px solid #f6f7ed; */
  }

  .scrollbar::-webkit-scrollbar-thumb:hover {
    width: 12px;

    background: #d7d5d5;
  }
}
</style>
