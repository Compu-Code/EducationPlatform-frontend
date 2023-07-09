<template>
  <div class="relative top-3 w-full">
    <div
      class="user-header flex flex-col p-3 justify-between mt-10 flex-wrap w-1/2"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">User ID :</span>
        {{ userID }}
      </div>
      <div class="mb-5">
        <span class="font-bold">User First Name :</span>
        {{ usersStore.userDetails.first_name }}
      </div>
      <div class="mb-5">
        <span class="font-bold">User Last Name :</span>
        {{ usersStore.userDetails.last_name }}
      </div>
      <div class="">
        <span class="font-bold">User Email :</span>
        {{ usersStore.userDetails.email }}
      </div>
    </div>
    <div
      class="user-body mt-8 p-4 w-1/2"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">User Phone :</span>
        <span v-if="usersStore.userDetails.phone">
          {{ usersStore.userDetails.phone }}
        </span>
        <span v-else> Not Set Yet </span>
      </div>
      <div class="mb-5">
        <span class="font-bold">User University :</span>
        {{ usersStore.userDetails.university_name }}
      </div>
      <div class="mb-5">
        <span class="font-bold">User Major :</span>
        {{ usersStore.userDetails.major }}
      </div>
      <div class="mb-5">
        <span class="font-bold">User Gender :</span>
        <span v-if="usersStore.userDetails.gender">
          {{ usersStore.userDetails.gender }}
        </span>
        <span v-else> Not Set Yet</span>
      </div>
      <div class="mb-5">
        <span class="font-bold">User Country :</span>
        <span v-if="usersStore.userDetails.country">
          {{ usersStore.userDetails.country }}
        </span>
        <span v-else> Not Set Yet </span>
      </div>
      <div class="mb-5">
        <span class="font-bold">User City :</span>
        <span v-if="usersStore.userDetails.city">
          {{ usersStore.userDetails.city }}
        </span>
        <span v-else> Not Set Yet </span>
      </div>
      <div class="mb-5">
        <span class="font-bold">User Birthdate :</span>
        <span v-if="usersStore.userDetails.birthdate">
          {{ usersStore.userDetails.birthdate }}
        </span>
        <span v-else> Not Set Yet </span>
      </div>
      <div class="">
        <span class="font-bold">User Roles :</span>
        <div v-for="(value, key) of usersStore.userDetails.roles">
          {{ key }}
        </div>
      </div>
    </div>
    <div class="btns flex justify-between mt-24 mb-5">
      <router-link :to="{ name: 'admin-users' }">
        <icon-deflated :direction="'left'" :border="true">Back</icon-deflated>
      </router-link>
      <div class="right-btns">
        <normal-deflated
          @click="
            {
              openEditPopup(usersStore.userDetails);
            }
          "
          class="edit-btn mr-4"
          >Assign Role</normal-deflated
        >
        <normal-deflated
          @click="usersStore.deleteUser(Number(userID))"
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
              (isEditPopupOpened = false), (usersStore.editLoading = false);
            }
          "
        ></div>
      </transition>
    </Teleport>
    <Teleport to="body">
      <Transition name="sponsors-popup">
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
    <!-- </div> -->
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useUsersStore } from "../../../stores/UsersStore";
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

const AssignRole = defineAsyncComponent(() => import("./AssignRole.vue"));

export default {
  props: ["userID"],
  components: {
    NormalDeflated,
    IconDeflated,
    OverlayBase,
    AssignRole,
  },
  data() {
    return {
      isEditPopupOpened: false,
      userRolesForEditPopup: [],
      userIdForEdit: null,
    };
  },
  setup() {
    const usersStore = useUsersStore();
    const navbarStore = useNavbarStore();
    return { usersStore, navbarStore };
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
  mounted() {
    this.usersStore.showUserData(Number(this.userID));
  },
};
</script>

<style scoped>
.user-header,
.user-body {
  width: 100%;
  /* min-width: 100%; */
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
}
.user-container {
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
  z-index: 10;
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
