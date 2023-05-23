import axios from "axios";
import { defineStore } from "pinia";

export const useCreateStore = defineStore("createStore", {
  state: () => ({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPassword: "",
    userUniversity: "",
    userMajor: "",
    lowerCaseCheck: false,
    upperCaseCheck: false,
    oneDigitCheck: false,
    oneSpecialCharCheck: false,
    charMinimumCheck: false,
    createLoading: false,
    createdSuccessfully: false,
    editLoading: false,
    updatedSuccessfully: false,
  }),
});
