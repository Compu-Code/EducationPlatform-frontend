<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM10.8094 6.93115L18.6479 11.2858C19.6004 11.815 19.6004 13.185 18.6479 13.7142L10.8094 18.0689C9.69851 18.686 8.33333 17.8828 8.33333 16.6119V8.38808C8.33333 7.11728 9.69851 6.31399 10.8094 6.93115Z"
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
