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
      d="M12.5 25C19.4035 25 25 19.4035 25 12.5C25 5.59644 19.4035 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4035 5.59644 25 12.5 25ZM7.38636 14.2045C8.32773 14.2045 9.09091 13.4414 9.09091 12.5C9.09091 11.5586 8.32773 10.7955 7.38636 10.7955C6.44497 10.7955 5.68182 11.5586 5.68182 12.5C5.68182 13.4414 6.44497 14.2045 7.38636 14.2045ZM14.2045 12.5C14.2045 13.4414 13.4414 14.2045 12.5 14.2045C11.5586 14.2045 10.7955 13.4414 10.7955 12.5C10.7955 11.5586 11.5586 10.7955 12.5 10.7955C13.4414 10.7955 14.2045 11.5586 14.2045 12.5ZM19.3182 12.5C19.3182 13.4414 18.555 14.2045 17.6136 14.2045C16.6723 14.2045 15.9091 13.4414 15.9091 12.5C15.9091 11.5586 16.6723 10.7955 17.6136 10.7955C18.555 10.7955 19.3182 11.5586 19.3182 12.5Z"
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
