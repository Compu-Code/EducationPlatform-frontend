<template>
  <Teleport to="body">
    <div id="overlay" class="z-10"></div>
    <transition name="card">
      <div class="popup-card absolute flex flex-col justify-center z-20">
        <div class="card-title">
          <slot name="cardTitle"></slot>
        </div>
        <div class="card-details">
          <slot name="cardDetails"></slot>
        </div>
        <div class="card-actions">
          <p class="first-action">
            <slot name="cardFirstAction"></slot>
            <span class="card-first-action-link">
              <router-link :to="firstActionLink" replace
                ><slot name="cardFirstActionLink"></slot
              ></router-link>
            </span>
          </p>
          <p v-if="numOfActions === '2'" class="second-action">
            <slot name="cardSecondAction"></slot>
            <span class="card-second-action-link">
              <router-link :to="secondActionLink" replace
                ><slot name="cardSecondActionLink"></slot
              ></router-link>
            </span>
          </p>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
import { useNavbarStore } from "../../../stores/NavbarStore";

export default {
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  props: ["numOfActions", "firstActionLink", "secondActionLink"],
  computed: {
    changeBackgroundColor() {
      if (this.navbarStore.darkMode) {
        return "rgba(240, 244, 255, 0.2)";
      } else {
        return "rgba(53, 92, 239, 0.1)";
      }
    },
    changeColor() {
      if (this.navbarStore.darkMode) {
        return "#f0f4ff";
      } else {
        return "#01041b";
      }
    },
    changeLinkColor() {
      if (this.navbarStore.darkMode) {
        return "#6188ff";
      } else {
        return "#355CEF";
      }
    },
    changeLinkHoverColor() {
      if (this.navbarStore.darkMode) {
        return "#4b6fdd";
      } else {
        return "#2246CD";
      }
    },
    changeLinkClickedColor() {
      if (this.navbarStore.darkMode) {
        return "#3858bb";
      } else {
        return "#1433AB";
      }
    },
    changeOverlayColor() {
      if (this.navbarStore.darkMode) {
        return "#01041B";
      } else {
        return "#F0F4FF";
      }
    },
  },
};
</script>

<style scoped>
.popup-card {
  width: 31.25rem;
  height: 25rem;
  border-radius: 20px;
  color: v-bind(changeColor);
  background-color: v-bind(changeBackgroundColor);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.popup-card div {
  display: flex;
  justify-content: center;
}
.card-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 160%;
  margin-top: 6.625rem;
}
.card-details {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  margin-top: 0.313rem;
  margin-bottom: 3.125rem;
}
.first-action,
.second-action {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 110%;
}
.first-action span a,
.second-action span a {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 110%;
  padding-left: 4px;
  color: v-bind(changeLinkColor);
}
.first-action span a:hover,
.second-action span a:hover {
  color: v-bind(changeLinkHoverColor);
}
.first-action span a:active,
.second-action span a:active {
  color: v-bind(changeLinkClickedColor);
}
.card-enter-from,
.card-leave-to {
  transform: translateY(-100px);
  transform: scale(0.8);
}
.card-enter-active,
.card-leave-active {
  transition: all 0.4s;
}
.card-enter-to,
.card-leave-from {
  transform: translateY(0);
  transform: scale(1);
}
#overlay {
  position: fixed;
  background-color: v-bind(changeOverlayColor);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
}
</style>
