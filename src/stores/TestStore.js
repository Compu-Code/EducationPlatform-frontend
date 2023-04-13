import { defineStore } from "pinia";

export const useTestStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "test", isFav: false },
      { id: 2, title: "test2", isFav: true },
    ],
    youCanMakeAnotherProps: "test",
  }),
  // to make some logics on data before return it => use getters
  getters: {
    favs() {
      // this = state
      // filter method doesn't change the main array , it return a new array
      // t.isFav => return all tasks that have true value inside isFav
      return this.tasks.filter((t) => t.isFav);
    },
  },
});
