<template>
  <div
    class="create-user-popup h-full w-[400px] fixed right-0 overflow-hidden"
    :class="navbarStore.darkMode ? 'bg-[#272937]' : 'bg-white'"
  >
    <div
      class="header"
      :class="navbarStore.darkMode ? 'bg-[#3c3e4d]' : 'bg-slate-100'"
    >
      <div class="px-6 py-5 flex justify-between items-center">
        <span
          class="font-bold text-lg"
          :class="
            navbarStore.darkMode
              ? 'text-dark-text-color'
              : 'text-light-text-color'
          "
          >Create User</span
        >
        <IconClose
          class="cursor-pointer"
          :class="
            navbarStore.darkMode
              ? 'text-dark-text-color'
              : 'text-light-text-color'
          "
          @click="$emit('close')"
        />
      </div>
    </div>
    <div class="body p-6 user-data-form">
      <form @submit.prevent="createUser">
        <!-- first + last name -->
        <div class="flex w-full">
          <input
            name="fName"
            type="text"
            class="w-1/2"
            placeholder="First Name"
            v-model="createStore.userFirstName"
            @keyup="getUserFirstName($event.target.value)"
            @blur="checkFirstNameValidity"
          />
          <input
            name="lName"
            type="text"
            class="w-1/2"
            placeholder="Last Name"
            v-model="createStore.userLastName"
            @keyup="getUserLastName($event.target.value)"
            @blur="checkLastNameValidity"
          />
        </div>

        <!-- email -->
        <input
          name="email"
          class="w-full"
          placeholder="Email Address"
          @keyup="getUserEmail($event.target.value)"
          @blur="checkEmailValidate"
          v-model="createStore.userEmail"
        />

        <!-- pass -->
        <pass-field
          class="mb-[17px]"
          :placeHolder="4"
          @checkPassValidate="
            [checkPassValidate($event), (showPassConstraint = false)]
          "
          @showPassConstraint="showPassConstraint = true"
          @userPass="getUserPass"
          v-model:model-value="createStore.userPassword"
          :isValid="isPassValid"
        ></pass-field>

        <!-- pass constraint -->
        <div
          class="pass-constraint flex justify-between items-start mt-4 mb-4"
          v-if="showPassConstraint"
        >
          <div>
            <span :class="{ active: createStore.lowerCaseCheck }">
              <IconCheckconstraints />
              <p>Lowercase Character</p>
            </span>
            <span :class="{ active: createStore.upperCaseCheck }">
              <IconCheckconstraints />
              <p>One Uppercase Character</p>
            </span>
            <span :class="{ active: createStore.oneDigitCheck }">
              <IconCheckconstraints />
              <p>One Number</p>
            </span>
          </div>
          <div>
            <span :class="{ active: createStore.oneSpecialCharCheck }">
              <IconCheckconstraints />
              <p>One Special Character</p>
            </span>
            <span :class="{ active: createStore.charMinimumCheck }">
              <IconCheckconstraints />
              <p>8 Character Minimum</p>
            </span>
          </div>
        </div>

        <!-- university -->
        <input
          name="university"
          type="text"
          class="w-full"
          placeholder="University Name"
          @keyup="getUserUniversity($event.target.value)"
          @blur="checkUniversityValidity"
          v-model="createStore.userUniversity"
        />

        <!-- major -->
        <input
          name="major"
          type="text"
          class="w-full"
          placeholder="Major"
          @keyup="getUserMajor($event.target.value)"
          @blur="checkMajorValidity"
          v-model="createStore.userMajor"
        />
        <!-- roles -->
        <div
          class="roles"
          :class="
            navbarStore.darkMode
              ? 'text-dark-text-color'
              : 'text-light-text-color'
          "
        >
          <span v-for="role in rolesStore.rolesData">
            <span class="inline-block mr-2">
              <input
                class="mr-1 cursor-pointer"
                type="checkbox"
                :name="role.name"
                :id="role.id"
                :value="String(role.id)"
                v-model="selectedRoles"
              />
              <label :for="role.id" class="cursor-pointer">{{
                role.name
              }}</label>
            </span>
          </span>
        </div>
      </form>
    </div>
    <div class="footer flex justify-start p-6">
      <normal-filled
        class="create-btn mr-2 flex items-center justify-center"
        @click="createUser"
      >
        <span v-if="!usersStore.createLoading">Create</span>
        <div class="spinner" v-if="usersStore.createLoading"></div>
      </normal-filled>
      <normal-filled class="cancel-btn" @click="$emit('close')"
        >Cancel</normal-filled
      >
    </div>
  </div>
</template>

<script>
// functions to change field color in normal and hover and clicked dynamically
function changeFieldColor(arg1) {
  if (arg1) {
    return "#4CC38AE5";
  } else if (arg1 === false) {
    return "#FF6369E5";
  } else {
    return "transparent";
  }
}
function changeFieldHoverColor(arg1) {
  if (arg1) {
    return "#4CC38AE5";
  } else if (arg1 === false) {
    return "#FF6369E5";
  }
}
function changeFieldClickedColor(arg1) {
  if (arg1) {
    return "#4CC38AE5";
  } else if (arg1 === false) {
    return "#FF6369E5";
  }
}
// to change bg of fields in light mode
function changeBgFieldColor(arg1) {
  if (!useNavbarStore().darkMode) {
    if (arg1 === true) {
      return "rgba(41, 151, 100, 0.1)";
    } else if (arg1 === false) {
      return "rgba(220, 61, 67, 0.1)";
    } else if (arg1 === "") {
      return "rgba(53, 92, 239, 0.1)";
    }
  } else {
    return "rgba(240, 244, 255, 0.2)";
  }
}

import { defineAsyncComponent } from "vue";

import { useNavbarStore } from "../../../stores/NavbarStore";
import { useUsersStore } from "../../../stores/UsersStore";
import { useCreateStore } from "../../../stores/CreateStore";
import { useRolesStore } from "../../../stores/RolesStore";

const IconClose = defineAsyncComponent(() =>
  import("../../icons/IconClose.vue")
);
const IconCheckconstraints = defineAsyncComponent(() =>
  import("../../icons/IconCheckconstraints.vue")
);
const PassField = defineAsyncComponent(() =>
  import("../../UsersComponents/SignupComponents/PassField.vue")
);
const NormalFilled = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalFilled.vue")
);
const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);

export default {
  components: {
    IconClose,
    PassField,
    NormalFilled,
    NormalDeflated,
    IconCheckconstraints,
  },
  data() {
    return {
      isEmailValid: "",
      isPassValid: "",
      isFirstNameValid: "",
      isLastNameValid: "",
      isUniversityValid: "",
      isMajorValid: "",
      selectedRoles: [],
      showPassConstraint: false,
    };
  },
  setup() {
    const navbarStore = useNavbarStore();
    const usersStore = useUsersStore();
    const createStore = useCreateStore();
    const rolesStore = useRolesStore();
    return { navbarStore, usersStore, rolesStore, createStore };
  },
  methods: {
    checkFirstNameValidity() {
      if (this.createStore.userFirstName.length > 0) {
        this.isFirstNameValid = true;
      } else {
        this.isFirstNameValid = false;
      }
    },
    checkLastNameValidity() {
      if (this.createStore.userLastName.length > 0) {
        this.isLastNameValid = true;
      } else {
        this.isLastNameValid = false;
      }
    },
    // get user name,email & pass
    getUserFirstName(userFname) {
      this.createStore.userFirstName = userFname.trim();
      if (this.isFirstNameValid === true) {
        this.checkFirstNameValidity();
      } else if (this.isFirstNameValid === false) {
        this.checkFirstNameValidity();
      }
    },
    getUserLastName(userLname) {
      this.createStore.userLastName = userLname.trim();
      if (this.isLastNameValid === true) {
        this.checkLastNameValidity();
      } else if (this.isLastNameValid === false) {
        this.checkLastNameValidity();
      }
    },
    getUserEmail(userEmail) {
      this.createStore.userEmail = userEmail;
      if (this.isEmailValid === true) {
        this.checkEmailValidate();
      } else if (this.isEmailValid === false) {
        this.checkEmailValidate();
      }
    },
    // get user pass and check password constraint
    getUserPass(userPass) {
      this.createStore.userPassword = userPass;
      //check pass parts (pass constraint)
      // lower case check
      if (/(?=.*[a-z])/.test(this.createStore.userPassword)) {
        this.createStore.lowerCaseCheck = true;
      } else {
        this.createStore.lowerCaseCheck = false;
      }
      // upper case check
      if (/(?=.*[A-Z])/.test(this.createStore.userPassword)) {
        this.createStore.upperCaseCheck = true;
      } else {
        this.createStore.upperCaseCheck = false;
      }
      // one digit check
      if (/(?=.*\d)/.test(this.createStore.userPassword)) {
        this.createStore.oneDigitCheck = true;
      } else {
        this.createStore.oneDigitCheck = false;
      }
      // one special char check
      if (/(?=.*[@$!%*?&#^])/.test(this.createStore.userPassword)) {
        this.createStore.oneSpecialCharCheck = true;
      } else {
        this.createStore.oneSpecialCharCheck = false;
      }
      // 8 char minimum check
      if (/[A-Za-z\d@$!%*#^?&]{8,}/.test(this.createStore.userPassword)) {
        this.createStore.charMinimumCheck = true;
      } else {
        this.createStore.charMinimumCheck = false;
      }
      if (this.isPassValid === true) {
        this.checkPassValidate();
      } else if (this.isPassValid === false) {
        this.checkPassValidate();
      }
    },
    //check email validity (regexp)
    checkEmailValidate() {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.createStore.userEmail
        )
      ) {
        this.isEmailValid = true;
      } else {
        this.isEmailValid = false;
        this.createStore.signupStep2 = false;
      }
    },
    togglePassConstraint(e) {
      if (e === "show") {
        return "flex";
      } else if (e === "hide") {
        return "none";
      }
    },
    // check pass validate
    checkPassValidate(userPass) {
      // to check whole pass and change passValid
      if (userPass) {
        this.createStore.userPassword = userPass;
      }
      if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?#^&]{8,}$/.test(
          this.createStore.userPassword
        )
      ) {
        this.isPassValid = true;
      } else {
        this.isPassValid = false;
        this.createStore.signupStep2 = false;
      }
      // check all parts of pass
      if (/(?=.*[a-z])/.test(this.createStore.userPassword)) {
        this.createStore.lowerCaseCheck = true;
      } else {
        this.createStore.lowerCaseCheck = false;
      }
      // upper case check
      if (/(?=.*[A-Z])/.test(this.createStore.userPassword)) {
        this.createStore.upperCaseCheck = true;
      } else {
        this.createStore.upperCaseCheck = false;
      }
      // one digit check
      if (/(?=.*\d)/.test(this.createStore.userPassword)) {
        this.createStore.oneDigitCheck = true;
      } else {
        this.createStore.oneDigitCheck = false;
      }
      // one special char check
      if (/(?=.*[@$!%*?&#^])/.test(this.createStore.userPassword)) {
        this.createStore.oneSpecialCharCheck = true;
      } else {
        this.createStore.oneSpecialCharCheck = false;
      }
      // 8 char minimum check
      if (/[A-Za-z\d@$!%*#^?&]{8,}/.test(this.createStore.userPassword)) {
        this.createStore.charMinimumCheck = true;
      } else {
        this.createStore.charMinimumCheck = false;
      }
    },
    // change border color of first name field and check if valid become green and if invalid become red otherwise stay like the other fields
    changeFirstNameFieldColor() {
      return changeFieldColor(this.isFirstNameValid);
    },
    changeFirstNameFieldHoverColor() {
      return changeFieldHoverColor(this.isFirstNameValid);
    },
    changeFirstNameFieldClickedColor() {
      return changeFieldClickedColor(this.isFirstNameValid);
    },
    changeFirstNameFieldBgColor() {
      return changeBgFieldColor(this.isFirstNameValid);
    },
    // change border color of last name field and check if valid become green and if invalid become red otherwise stay like the other fields
    changeLastNameFieldColor() {
      return changeFieldColor(this.isLastNameValid);
    },
    changeLastNameFieldHoverColor() {
      return changeFieldHoverColor(this.isLastNameValid);
    },
    changeLastNameFieldClickedColor() {
      return changeFieldClickedColor(this.isLastNameValid);
    },
    changeLastNameFieldBgColor() {
      return changeBgFieldColor(this.isLastNameValid);
    },
    // change border color of email field and check if valid become green and if invalid become red otherwise stay like the other fields
    changeEmailFieldColor() {
      return changeFieldColor(this.isEmailValid);
    },
    changeEmailFieldHoverColor() {
      return changeFieldHoverColor(this.isEmailValid);
    },
    changeEmailFieldClickedColor() {
      return changeFieldClickedColor(this.isEmailValid);
    },
    changeEmailFieldBgColor() {
      return changeBgFieldColor(this.isEmailValid);
    },

    // university and major
    getUserUniversity(userUniversity) {
      this.createStore.userUniversity = userUniversity.trim();
      if (this.isUniversityValid === true) {
        this.checkUniversityValidity();
      } else if (this.isUniversityValid === false) {
        this.checkUniversityValidity();
      }
    },
    checkUniversityValidity() {
      if (this.createStore.userUniversity.length > 1) {
        this.isUniversityValid = true;
      } else {
        this.isUniversityValid = false;
      }
    },
    changeUniversityFieldColor() {
      return changeFieldColor(this.isUniversityValid);
    },
    changeUniversityFieldHoverColor() {
      return changeFieldHoverColor(this.isUniversityValid);
    },
    changeUniversityFieldClickedColor() {
      return changeFieldClickedColor(this.isUniversityValid);
    },
    changeUniversityFieldBgColor() {
      return changeBgFieldColor(this.isUniversityValid);
    },
    getUserMajor(userMajor) {
      this.createStore.userMajor = userMajor.trim();
      if (this.isMajorValid === true) {
        this.checkMajorValidity();
      } else if (this.isMajorValid === false) {
        this.checkMajorValidity();
      }
    },
    checkMajorValidity() {
      if (this.createStore.userMajor.length > 1) {
        this.isMajorValid = true;
      } else {
        this.isMajorValid = false;
      }
    },
    changeMajorFieldColor() {
      return changeFieldColor(this.isMajorValid);
    },
    changeMajorFieldHoverColor() {
      return changeFieldHoverColor(this.isMajorValid);
    },
    changeMajorFieldClickedColor() {
      return changeFieldClickedColor(this.isMajorValid);
    },
    changeMajorFieldBgColor() {
      return changeBgFieldColor(this.isMajorValid);
    },
    async createUser() {
      if (
        this.createStore.userFirstName &&
        this.createStore.userLastName &&
        this.createStore.userEmail &&
        this.createStore.userPassword &&
        this.createStore.userUniversity &&
        this.createStore.userMajor &&
        this.selectedRoles.length > 0
      ) {
        await this.usersStore.createUser({
          first_name: this.createStore.userFirstName,
          last_name: this.createStore.userLastName,
          email: this.createStore.userEmail,
          password: this.createStore.userPassword,
          university_name: this.createStore.userUniversity,
          major: this.createStore.userMajor,
          roles: this.selectedRoles,
        });
        if (this.usersStore.createdSuccessfully) {
          this.createStore.$reset();
          this.selectedRoles = [];
          this.$emit("close");
        }
      }
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
    changeFieldsBGColor() {
      if (this.navbarStore.darkMode) {
        return "rgba(240, 244, 255, 0.2)";
      } else {
        return "rgba(53, 92, 239, 0.1)";
      }
    },
  },
  mounted() {
    this.rolesStore.getRolesData();
  },
  unmounted() {
    this.createStore.$reset();
  },
};
</script>

<style scoped>
.user-data-form form input {
  padding: 11.5px 30px;
  margin-bottom: 17px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: v-bind(changeFieldsBGColor);
  color: #8394b1;
  transition: all 0.1s;
  outline: none;
}
.roles span:not(:last-child) {
  margin-right: 5px;
}

/* email field border color */
.user-data-form form input[name="email"] {
  border-color: v-bind(changeEmailFieldColor());
  background-color: v-bind(changeEmailFieldBgColor()) !important;
}
.user-data-form form input[name="email"]:hover {
  border-color: v-bind(changeEmailFieldHoverColor());
}
.user-data-form form input[name="email"]:focus {
  border-color: v-bind(changeEmailFieldClickedColor());
}

.pass-constraint {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 110%;
  color: #6b6b6b;
  width: 100%;
}
.pass-constraint .active {
  color: #4cc38a;
}
.pass-constraint div span {
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 5px;
}
.pass-constraint div span p {
  padding-left: 5px;
}
/* first name field border color */
.user-data-form form input[name="fName"] {
  margin-right: 15px;
  border-color: v-bind(changeFirstNameFieldColor());
  background-color: v-bind(changeFirstNameFieldBgColor()) !important;
}
.user-data-form form input[name="fName"]:hover {
  border-color: v-bind(changeFirstNameFieldHoverColor());
}
.user-data-form form input[name="fName"]:focus {
  border-color: v-bind(changeFirstNameFieldClickedColor());
}

/* last name field border color */
.user-data-form form input[name="lName"] {
  border-color: v-bind(changeLastNameFieldColor());
  background-color: v-bind(changeLastNameFieldBgColor()) !important;
}
.user-data-form form input[name="lName"]:hover {
  border-color: v-bind(changeLastNameFieldHoverColor());
}
.user-data-form form input[name="lName"]:focus {
  border-color: v-bind(changeLastNameFieldClickedColor());
}
/* university field border color */
.user-data-form form input[name="university"] {
  border-color: v-bind(changeUniversityFieldColor());
  background-color: v-bind(changeUniversityFieldBgColor());
}
.user-data-form form input[name="university"]:hover {
  border-color: v-bind(changeUniversityFieldHoverColor());
}
.user-data-form form input[name="university"]:focus {
  border-color: v-bind(changeUniversityFieldClickedColor());
}

/* major field border color */
.user-data-form form input[name="major"] {
  border-color: v-bind(changeMajorFieldColor());
  background-color: v-bind(changeMajorFieldBgColor());
}
.user-data-form form input[name="major"]:hover {
  border-color: v-bind(changeMajorFieldHoverColor());
}
.user-data-form form input[name="major"]:focus {
  border-color: v-bind(changeMajorFieldClickedColor());
}
.create-btn {
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
