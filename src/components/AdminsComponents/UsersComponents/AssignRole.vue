<template>
  <div class="permissions-popup w-96">
    <div class="Container p-4 w-full">
      <IconClose class="cursor-pointer" @click="$emit('close')" />
      <form @submit.prevent="" class="flex flex-col px-3 pt-3">
        <p>Assign Roles :</p>
        <div
          class="Container h-60 overflow-y-auto mt-2 mb-3 border border-gray"
        >
          <ul class="px-3 py-2">
            <li v-for="role in rolesStore.rolesData" :key="role.id">
              <div class="flex items-center">
                <input
                  class="roles mr-2 cursor-pointer"
                  type="checkbox"
                  :name="role.name"
                  :id="role.id"
                  :value="String(role.id)"
                  v-model="selectedRoles"
                />
                <label :for="role.id" class="cursor-pointer">{{
                  role.name
                }}</label>
              </div>
            </li>
          </ul>
        </div>
        <!-- buttons -->
        <div class="flex">
          <normal-filled
            v-if="primaryBtn === 'edit'"
            class="confirm-btn mr-2 flex items-center justify-center"
            @click="assignRole"
          >
            <span v-if="!usersStore.editLoading">Confirm</span>
            <div class="spinner" v-if="usersStore.editLoading"></div>
          </normal-filled>
          <normal-filled class="cancel-btn" @click="$emit('close')"
            >Cancel</normal-filled
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const IconClose = defineAsyncComponent(() =>
  import("../../icons/IconClose.vue")
);
const NormalFilled = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalFilled.vue")
);
const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);
import { useNavbarStore } from "../../../stores/NavbarStore";
import { useRolesStore } from "../../../stores/RolesStore";
import { useUsersStore } from "../../../stores/UsersStore";

export default {
  components: {
    IconClose,
    NormalFilled,
    NormalDeflated,
  },
  emits: ["close"],
  props: ["editUserRoles", "primaryBtn", "userId"],
  data() {
    return {
      permissionRoles: null,
      selectedRoles: [],
    };
  },
  setup() {
    const navbarStore = useNavbarStore();
    const rolesStore = useRolesStore();
    const usersStore = useUsersStore();
    return { navbarStore, rolesStore, usersStore };
  },
  methods: {
    // edit flow
    async assignRole() {
      console.log(this.selectedRoles);
      if (this.selectedRoles.length > 0) {
        await this.usersStore.assignRoleUser(
          {
            roles: this.selectedRoles,
          },
          this.userId
        );
        if (this.usersStore.updatedSuccessfully) {
          this.$emit("close");
        }
      }
    },
    // get roles data from the form
    getSelectedRoles(id) {
      this.selectedRoles.push(String(id));
      console.log(this.selectedRoles);
    },
  },
  computed: {
    changeColor() {
      if (this.navbarStore.darkMode) {
        return "#3C3954";
      } else {
        return "#F1F1F2";
      }
    },
    changeHoverColor() {
      if (this.navbarStore.darkMode) {
        return "#423F59";
      } else {
        return "#E9E9EB";
      }
    },
  },
  mounted() {
    this.rolesStore.getRolesData();
    if (this.editUserRoles) {
      if (this.editUserRoles.length > 0) {
        this.selectedRoles = this.editUserRoles;
      }
    }
  },
  unmounted() {
    this.selectedRoles = [];
  },
};
</script>

<style scoped>
.permissions-popup {
  background-color: white;
  height: fit-content;
  left: calc(50% - 12rem);
  top: 25vh;
  position: fixed;
  box-shadow: 0px 0px 5px 3px rgb(0, 0, 0, 0.2);
  border-radius: 5px;
}
.create-btn,
.confirm-btn {
  padding: 8px 20px !important;
}
.cancel-btn {
  padding: 8px 20px !important;
  background-color: v-bind(changeColor);
  color: #a0a3a8;
}
.cancel-btn:hover {
  background-color: v-bind(changeHoverColor);
}
.cancel-btn:active {
  background-color: v-bind(changeHoverColor);
}
form input {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 11.5px;
  padding-bottom: 11.5px;
  border: 2px solid rgb(159, 159, 159);
  border-radius: 8px;
  color: black;
  outline: none;
  transition: all 0.2s;
}
form textarea {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 11.5px;
  padding-bottom: 11.5px;
  border: 2px solid rgb(159, 159, 159);
  border-radius: 8px;
  color: black;
  transition: all 0.2s;
  outline: none;
}
form input:hover {
  border-color: black;
}
form input:focus {
  border-color: black;
}
form textarea:hover {
  border-color: black;
}
form textarea:focus {
  border-color: black;
}
.spinner {
  width: 24px;
  display: inline-flex;
  height: 24px;
  border-radius: 50%;
  border: 3.8px solid #ffffff;
  animation: spinner-bulqg1 0.8s infinite linear alternate,
    spinner-oaa3wk 1.6s infinite linear;
}

@keyframes spinner-bulqg1 {
  0% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
  }

  12.5% {
    clip-path: polygon(
      50% 50%,
      0 0,
      50% 0%,
      100% 0%,
      100% 0%,
      100% 0%,
      100% 0%
    );
  }

  25% {
    clip-path: polygon(
      50% 50%,
      0 0,
      50% 0%,
      100% 0%,
      100% 100%,
      100% 100%,
      100% 100%
    );
  }

  50% {
    clip-path: polygon(
      50% 50%,
      0 0,
      50% 0%,
      100% 0%,
      100% 100%,
      50% 100%,
      0% 100%
    );
  }

  62.5% {
    clip-path: polygon(
      50% 50%,
      100% 0,
      100% 0%,
      100% 0%,
      100% 100%,
      50% 100%,
      0% 100%
    );
  }

  75% {
    clip-path: polygon(
      50% 50%,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%,
      50% 100%,
      0% 100%
    );
  }

  100% {
    clip-path: polygon(
      50% 50%,
      50% 100%,
      50% 100%,
      50% 100%,
      50% 100%,
      50% 100%,
      0% 100%
    );
  }
}

@keyframes spinner-oaa3wk {
  0% {
    transform: scaleY(1) rotate(0deg);
  }

  49.99% {
    transform: scaleY(1) rotate(135deg);
  }

  50% {
    transform: scaleY(-1) rotate(0deg);
  }

  100% {
    transform: scaleY(-1) rotate(-135deg);
  }
}
</style>
