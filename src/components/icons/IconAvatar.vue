<template>
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 17.5C0 7.83501 7.83501 0 17.5 0C27.1649 0 35 7.83501 35 17.5C35 27.1649 27.1649 35 17.5 35C7.83501 35 0 27.1649 0 17.5ZM17.4998 7C13.6338 7 10.4998 10.134 10.4998 14C10.4998 17.8659 13.6338 21 17.4998 21C21.3657 21 24.4998 17.8659 24.4998 14C24.4998 10.134 21.3657 7 17.4998 7ZM26.4451 24.4955C27.7713 25.3495 27.7065 27.2109 26.4989 28.2254C24.0655 30.269 20.9267 31.5 17.5002 31.5C14.0964 31.5 10.9763 30.2853 8.54973 28.2656C7.33129 27.2515 7.26673 25.3806 8.59864 24.521C9.01327 24.2534 9.4648 24.0189 9.95486 23.817C11.9265 23.0041 14.4448 22.75 17.5 22.75C20.5706 22.75 23.1031 22.9878 25.08 23.792C25.5738 23.9928 26.0285 24.2272 26.4451 24.4955Z"
      :fill="toggleIconColor"
    />
  </svg>
</template>
<script>
import { useNavbarStore } from "../../stores/NavbarStore";

export default {
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  computed: {
    toggleIconColor() {
      if (this.navbarStore.darkMode) {
        return "#DAE6F9";
      } else {
        return "#01041B";
      }
    },
  },
};
</script>
