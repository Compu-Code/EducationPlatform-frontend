<template>
  <div class="p-2 flex justify-between">
    <!-- <normal-filled class="export-btn">Export</normal-filled> -->
    <div
      class="search-box flex items-center rounded-md py-1 duration-300 w-40"
      :class="[
        navbarStore.darkMode
          ? 'bg-[#26292B] border-dark-text-color'
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
        placeholder="Search User"
        class="text-base bg-transparent w-full focus:outline-none ml-1"
      />
    </div>
    <normal-filled class="create-user-btn" @click="createUserClicked = true"
      >Create User</normal-filled
    >
    <Teleport to="body">
      <transition name="overlay">
        <div
          v-if="createUserClicked"
          id="overlay"
          :class="{ hidden: !createUserClicked }"
          @click="
            {
              (createUserClicked = false), (usersStore.createLoading = false);
            }
          "
        ></div>
      </transition>
    </Teleport>
    <Teleport to="body">
      <Transition name="create-user-popup">
        <CreateUser
          v-if="createUserClicked"
          class="z-20"
          @close="
            {
              (createUserClicked = false), (usersStore.createLoading = false);
            }
          "
        />
      </Transition>
    </Teleport>
  </div>
  <hr />
  <div class="table-container overflow-x-auto">
    <table class="min-w-[800px] w-full relative">
      <thead
        class="border-b sticky top-0 z-[1]"
        :class="[
          navbarStore.darkMode
            ? 'bg-[#26292B] border-dark-text-color'
            : 'bg-light-primary-color border-light-text-color',
        ]"
      >
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
            User
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Email
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Role
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            University Name
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Major
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-center">
            Actions
          </th>
        </tr>
      </thead>

      <tbody class="">
        <tr
          class="border-b"
          v-for="user in usersStore.usersData"
          :key="user.user.id"
        >
          <!-- <td class="px-4 text-sm"><input type="checkbox" name="" id="" /></td> -->
          <td class="frozen-column px-4 text-sm">{{ user.user.id }}</td>
          <td class="td-message px-4 text-sm">
            <div class="flex">
              <IconAvatar class="w-8 h-8 shrink-0" />
              <div class="ml-3 full-name self-center">
                {{ `${user.user.first_name} ${user.user.last_name}` }}
              </div>
            </div>
          </td>
          <td class="td-description px-4 text-sm">
            {{ user.user.email }}
          </td>
          <td class="td-created-at px-4 text-sm">
            <div v-for="(value, key) of user.user.roles">
              {{ key }}
            </div>
          </td>
          <td class="td-updated-at px-4 text-sm">
            {{ user.user.university_name }}
          </td>
          <td class="td-updated-at px-4 text-sm">{{ user.user.major }}</td>
          <td class="px-4 text-sm w-full relative">
            <div>
              <KebabMenu
                @menuOpen="usersStore.openMenu(user.user.id)"
                class="kebab-menu z-[0] relative"
              />
            </div>
            <PopupMenu
              @viewClicked="
                usersStore.showUserData(user.user.id);
                usersStore.toggleMenu(user.user.id);
              "
              @deleteClicked="
                usersStore.deleteUser(user.user.id);
                usersStore.toggleMenu(user.user.id);
              "
              @assignClicked="
                openEditPopup(user.user);
                usersStore.toggleMenu(user.user.id);
              "
              v-if="user.user.isMenuActive"
              :action1="true"
              :action3="true"
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
              (isEditPopupOpened = false), (rolesStore.editLoading = false);
            }
          "
        ></div>
      </transition>
    </Teleport>
    <Teleport to="body">
      <Transition name="roles-popup">
        <AssignRole
          v-if="isEditPopupOpened"
          @close="
            {
              (isEditPopupOpened = false), (usersStore.editLoading = false);
            }
          "
          :edit-user-roles="userRolesForEditPopup"
          :primary-btn="'edit'"
          :userId="userIdForEdit"
          class="z-20"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useUsersStore } from "@/stores/UsersStore";
import { useNavbarStore } from "@/stores/NavbarStore";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

const IconSearch = defineAsyncComponent(() =>
  import("@/components/icons/IconSearch.vue")
);
const IconAvatar = defineAsyncComponent(() =>
  import("@/components/icons/IconAvatar.vue")
);

const NormalFilled = defineAsyncComponent(() =>
  import("@/components/UI/BasesButton/NormalFilled.vue")
);
const NormalDeflated = defineAsyncComponent(() =>
  import("@/components/UI/BasesButton/NormalDeflated.vue")
);
const KebabMenu = defineAsyncComponent(() =>
  import("@/components/UI/BasesButton/KebabMenu.vue")
);
const PopupMenu = defineAsyncComponent(() =>
  import("@/components/UI/BasesPopup/PopupMenu.vue")
);
const CreateUser = defineAsyncComponent(() => import("./CreateUser.vue"));
const AssignRole = defineAsyncComponent(() => import("./AssignRole.vue"));

export default {
  components: {
    NormalFilled,
    KebabMenu,
    PopupMenu,
    NormalDeflated,
    IconSearch,
    IconAvatar,
    AssignRole,
    CreateUser,
  },
  data() {
    return {
      menuId: null,
      createUserClicked: false,
      isEditPopupOpened: false,
      userRolesForEditPopup: [],
      userIdForEdit: null,
    };
  },
  setup() {
    const usersStore = useUsersStore();
    const navbarStore = useNavbarStore();

    const target = ref(null);
    onClickOutside(target, (event) => usersStore.closeMenus());

    return { usersStore, navbarStore, target };
  },
  methods: {
    openEditPopup(user) {
      this.userRolesForEditPopup = [];
      for (const prop in user.roles) {
        this.userRolesForEditPopup.push(String(user.roles[prop]));
      }
      console.log(this.userRolesForEditPopup);
      this.userIdForEdit = user.id;
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
  },
  mounted() {
    document.body.style.overflowX = "hidden";
  },
  unmounted() {
    document.body.style.overflow = null;
  },
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
.td-message,
.full-name {
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
/* create user popup transition */
.create-user-popup-enter-from,
.create-user-popup-leave-to {
  transform: translateX(400px);
}
.create-user-popup-enter-active,
.create-user-popup-leave-active {
  transition: all 200ms ease-in-out;
}
.create-user-popup-enter-to,
.create-user-popup-leave-from {
  transform: translateX(0);
}
/* news popup transition */
/* TODO: edit class name */
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
