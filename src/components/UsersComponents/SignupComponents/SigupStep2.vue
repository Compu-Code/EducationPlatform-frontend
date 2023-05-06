<template>
  <section
    class="Container relative top-0 right-0 overflow-hidden"
    :class="[
      navbarStore.darkMode ? 'bg-dark-primary-color' : 'bg-light-primary-color',
    ]"
  >
    <!-- Vectors -->
    <div class="z-0">
      <VectorupSignup class="absolute top-0 right-0" />
      <VectordownSignup class="absolute bottom-0 left-0" />
    </div>

    <div
      class="Container2 grid z-10 relative top-[50%] left-[4.688rem] grid-rows-6 gap-y-28"
      :class="[
        navbarStore.darkMode ? 'text-dark-text-color' : 'text-light-text-color',
      ]"
    >
      <!-- stepsbar -->
      <StepsBar />

      <!-- tell us about you -->
      <div class="text w-fit absolute left-[11.563rem]">
        <p class="py-1">Step 2</p>
        <p class="text-5xl leading-[3.813rem]">Tell Us About You</p>
      </div>

      <!-- form to get user data -->

      <div
        class="user-data-form flex col-start-2 col-end-5 row-start-2 row-end-6"
      >
        <form @submit.prevent="checkAllFieldsAndStore">
          <!-- first + last name -->
          <div class="flex w-full">
            <input
              name="fName"
              type="text"
              class="w-1/2"
              placeholder="First Name"
              v-model="signupStepsStore.userFirstName"
              @keyup="getUserFirstName($event.target.value)"
              @blur="checkFirstNameValidity"
            />
            <input
              name="lName"
              type="text"
              class="w-1/2"
              placeholder="Last Name"
              v-model="signupStepsStore.userLastName"
              @keyup="getUserLastName($event.target.value)"
              @blur="checkLastNameValidity"
            />
          </div>
          <!-- email -->
          <input
            name="email"
            class="w-full"
            placeholder="Your Email Address"
            v-model="signupStepsStore.userEmail"
            @keyup="getUserEmail($event.target.value)"
            @blur="checkEmailValidate"
          />

          <!-- pass & constraint-->
          <div
            class="relative mb-[17px]"
            @focus="togglePassConstraint('show')"
            @blur="togglePassConstraint('hide')"
          >
            <pass-field
              :placeHolder="1"
              @checkPassValidate="
                [checkPassValidate($event), (showPassConstraint = false)]
              "
              @showPassConstraint="showPassConstraint = true"
              @userPass="getUserPass"
              v-model:model-value="signupStepsStore.userPassword"
              :isValid="isPassValid"
            ></pass-field>
            <!-- pass constraint -->
            <div
              class="pass-constraint flex justify-between items-start mt-4 mb-4"
              v-if="showPassConstraint"
            >
              <div>
                <span :class="{ active: signupStepsStore.lowerCaseCheck }">
                  <IconCheckconstraints />
                  <p>Lowercase Character</p>
                </span>
                <span :class="{ active: signupStepsStore.upperCaseCheck }">
                  <IconCheckconstraints />
                  <p>One Uppercase Character</p>
                </span>
                <span :class="{ active: signupStepsStore.oneDigitCheck }">
                  <IconCheckconstraints />
                  <p>One Number</p>
                </span>
              </div>
              <div>
                <span :class="{ active: signupStepsStore.oneSpecialCharCheck }">
                  <IconCheckconstraints />
                  <p>One Special Character</p>
                </span>
                <span :class="{ active: signupStepsStore.charMinimumCheck }">
                  <IconCheckconstraints />
                  <p>8 Character Minimum</p>
                </span>
              </div>
            </div>
          </div>

          <!-- confirm pass -->
          <div class="relative mb-[17px]">
            <PassField
              :placeHolder="2"
              @checkPassValidate="checkConfirmPass($event)"
              @userPass="getUserConfirmPass"
              v-model:model-value="signupStepsStore.userConfirmPass"
              :isValid="isConfirmMatch"
            />
          </div>

          <div class="flex justify-between items-center mt-3">
            <!-- back button -->
            <router-link to="/signup/step1" replace>
              <icon-deflated direction="up" bordered="false" class="back-btn"
                >Back</icon-deflated
              >
            </router-link>
            <!-- continue button -->
            <!-- TODO: make loading spinner in continue btn -->
            <normal-filled type="submit">Continue</normal-filled>
          </div>
        </form>
      </div>
      <!-- img beside form -->
      <div class="col-start-5 col-end-8 row-start-1 row-end-6 ml-16">
        <img
          src="../../../assets/images/InformationDetails.png"
          alt="InformationDetailsImg"
        />
      </div>
    </div>
  </section>
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

import { useNavbarStore } from "../../../stores/NavbarStore";
import { useSignupStepsStore } from "../../../stores/SignupStepsStore";
import StepsBar from "./StepsBar.vue";
import VectorupSignup from "../../icons/VectorupSignup.vue";
import VectordownSignup from "../../icons/VectordownSignup.vue";
import PassField from "./PassField.vue";
import NormalFilled from "../../UI/ButtonBases/NormalFilled.vue";
import IconDeflated from "../../UI/ButtonBases/IconDeflated.vue";
import IconCheckconstraints from "../../icons/IconCheckconstraints.vue";

export default {
  components: {
    StepsBar,
    VectorupSignup,
    VectordownSignup,
    PassField,
    NormalFilled,
    IconDeflated,
    IconCheckconstraints,
  },
  data() {
    return {
      userConfirmPass: "",
      isEmailValid: "",
      isPassValid: "",
      isConfirmMatch: "",
      isFirstNameValid: "",
      isLastNameValid: "",
      showPassConstraint: false,
    };
  },
  setup() {
    const navbarStore = useNavbarStore();
    const signupStepsStore = useSignupStepsStore();
    return { navbarStore, signupStepsStore };
  },
  methods: {
    // check first and last name
    checkFirstNameValidity() {
      if (this.signupStepsStore.userFirstName.length > 0) {
        this.isFirstNameValid = true;
      } else {
        this.isFirstNameValid = false;
        this.signupStepsStore.signupStep2 = false;
      }
    },
    checkLastNameValidity() {
      if (this.signupStepsStore.userLastName.length > 0) {
        this.isLastNameValid = true;
      } else {
        this.isLastNameValid = false;
        this.signupStepsStore.signupStep2 = false;
      }
    },
    //check email validity (regexp)
    checkEmailValidate() {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.signupStepsStore.userEmail
        )
      ) {
        this.isEmailValid = true;
      } else {
        this.isEmailValid = false;
        this.signupStepsStore.signupStep2 = false;
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
        this.signupStepsStore.userPassword = userPass;
      }
      if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?#^&]{8,}$/.test(
          this.signupStepsStore.userPassword
        )
      ) {
        this.isPassValid = true;
      } else {
        this.isPassValid = false;
        this.signupStepsStore.signupStep2 = false;
      }
      // check all parts of pass
      if (/(?=.*[a-z])/.test(this.signupStepsStore.userPassword)) {
        this.signupStepsStore.lowerCaseCheck = true;
      } else {
        this.signupStepsStore.lowerCaseCheck = false;
      }
      // upper case check
      if (/(?=.*[A-Z])/.test(this.signupStepsStore.userPassword)) {
        this.signupStepsStore.upperCaseCheck = true;
      } else {
        this.signupStepsStore.upperCaseCheck = false;
      }
      // one digit check
      if (/(?=.*\d)/.test(this.signupStepsStore.userPassword)) {
        this.signupStepsStore.oneDigitCheck = true;
      } else {
        this.signupStepsStore.oneDigitCheck = false;
      }
      // one special char check
      if (/(?=.*[@$!%*?&#^])/.test(this.signupStepsStore.userPassword)) {
        this.signupStepsStore.oneSpecialCharCheck = true;
      } else {
        this.signupStepsStore.oneSpecialCharCheck = false;
      }
      // 8 char minimum check
      if (/[A-Za-z\d@$!%*#^?&]{8,}/.test(this.signupStepsStore.userPassword)) {
        this.signupStepsStore.charMinimumCheck = true;
      } else {
        this.signupStepsStore.charMinimumCheck = false;
      }
      if (this.isConfirmMatch === true) {
        this.checkConfirmPass();
      } else if (this.isConfirmMatch === false) {
        this.checkConfirmPass();
      }
    },
    // check confirm pass
    checkConfirmPass(userConfirmPass) {
      if (userConfirmPass) {
        this.signupStepsStore.userConfirmPass = userConfirmPass;
      }
      if (
        this.signupStepsStore.userConfirmPass ===
          this.signupStepsStore.userPassword &&
        this.signupStepsStore.userPassword !== "" &&
        this.isPassValid
      ) {
        this.isConfirmMatch = true;
      } else {
        this.isConfirmMatch = false;
      }
    },
    // get user name,email,pass and confirm pass
    getUserFirstName(userFname) {
      this.signupStepsStore.userFirstName = userFname.trim();
      if (this.isFirstNameValid === true) {
        this.checkFirstNameValidity();
      } else if (this.isFirstNameValid === false) {
        this.checkFirstNameValidity();
      }
    },
    getUserLastName(userLname) {
      this.signupStepsStore.userLastName = userLname.trim();
      if (this.isLastNameValid === true) {
        this.checkLastNameValidity();
      } else if (this.isLastNameValid === false) {
        this.checkLastNameValidity();
      }
    },
    getUserEmail(userEmail) {
      this.signupStepsStore.userEmail = userEmail;
      if (this.isEmailValid === true) {
        this.checkEmailValidate();
      } else if (this.isEmailValid === false) {
        this.checkEmailValidate();
      }
    },
    // get user pass and check password constraint
    getUserPass(userPass) {
      this.signupStepsStore.userPassword = userPass;
      //check pass parts (pass constraint)
      // lower case check
      if (/(?=.*[a-z])/.test(this.signupStepsStore.userPassword)) {
        this.signupStepsStore.lowerCaseCheck = true;
      } else {
        this.signupStepsStore.lowerCaseCheck = false;
      }
      // upper case check
      if (/(?=.*[A-Z])/.test(this.signupStepsStore.userPassword)) {
        this.signupStepsStore.upperCaseCheck = true;
      } else {
        this.signupStepsStore.upperCaseCheck = false;
      }
      // one digit check
      if (/(?=.*\d)/.test(this.signupStepsStore.userPassword)) {
        this.signupStepsStore.oneDigitCheck = true;
      } else {
        this.signupStepsStore.oneDigitCheck = false;
      }
      // one special char check
      if (/(?=.*[@$!%*?&#^])/.test(this.signupStepsStore.userPassword)) {
        this.signupStepsStore.oneSpecialCharCheck = true;
      } else {
        this.signupStepsStore.oneSpecialCharCheck = false;
      }
      // 8 char minimum check
      if (/[A-Za-z\d@$!%*#^?&]{8,}/.test(this.signupStepsStore.userPassword)) {
        this.signupStepsStore.charMinimumCheck = true;
      } else {
        this.signupStepsStore.charMinimumCheck = false;
      }
      if (this.isPassValid === true) {
        this.checkPassValidate();
      } else if (this.isPassValid === false) {
        this.checkPassValidate();
      }
      if (this.isConfirmMatch === true) {
        this.checkConfirmPass();
      } else if (this.isConfirmMatch === false) {
        this.checkConfirmPass();
      }
    },
    getUserConfirmPass(userConfirmPass) {
      this.signupStepsStore.userConfirmPass = userConfirmPass;
      if (this.isConfirmMatch === true) {
        this.checkConfirmPass();
      } else if (this.isConfirmMatch === false) {
        this.checkConfirmPass();
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
    // change border color of confirm pass field and check if valid become green and if invalid become red otherwise stay like the other fields
    changeConfirmPassFieldColor() {
      return changeFieldColor(this.isConfirmMatch);
    },
    changeConfirmPassFieldHoverColor() {
      return changeFieldHoverColor(this.isConfirmMatch);
    },
    changeConfirmPassFieldClickedColor() {
      return changeFieldClickedColor(this.isConfirmMatch);
    },
    changeConfirmPassFieldBgColor() {
      return changeBgFieldColor(this.isConfirmMatch);
    },
    /*  TODO: store user data if all fields correct */
    checkAllFieldsAndStore() {
      console.log(this.signupStepsStore);
      this.checkFirstNameValidity();
      this.checkLastNameValidity();
      this.checkEmailValidate();
      this.checkPassValidate();
      this.checkConfirmPass();
      if (
        this.isEmailValid &&
        this.isPassValid &&
        this.isConfirmMatch &&
        this.signupStepsStore.userFirstName !== "" &&
        this.signupStepsStore.userLastName !== ""
      ) {
        this.signupStepsStore.signupStep2 = true;
        this.$router.replace({ path: "/signup/step3" });
      } else {
        console.log("please check all fields");
      }
    },
  },
  computed: {
    changeFieldsBGColor() {
      if (this.navbarStore.darkMode) {
        return "rgba(240, 244, 255, 0.2)";
      } else {
        return "rgba(53, 92, 239, 0.1)";
      }
    },
  },
  // when user refresh step 2 the store will be empty so user will return to step 1
  mounted() {
    if (!this.signupStepsStore.signupStep1) {
      this.$router.replace({ name: "signup-step1" });
    }
  },
};
</script>

<!-- TODO: fix scoped buges in signup -->
<style scoped>
.Container {
  width: 100vw;
  height: 100vh;
}
.Container2 {
  width: 100%;
  height: 500px;
  transform: translateY(-50%);
  grid-template-columns: repeat(6, minmax(0, 185px));
}
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
.user-data-form
  form
  div:first-child
  input:first-child:not(input[type="password"]) {
  margin-right: 15px;
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

/* first name field border color */
.user-data-form form input[name="fName"] {
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
.pass-constraint {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 110%;
  color: #6b6b6b;
  width: 90%;
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
img {
  user-select: none;
  -webkit-user-drag: none;
}
.normal-filled {
  padding: 12.5px 16px !important;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 110%;
}
.icon-deflated {
  padding: 12.5px 16px !important;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 110%;
}
</style>
