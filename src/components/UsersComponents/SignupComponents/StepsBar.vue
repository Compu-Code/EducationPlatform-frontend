<template>
  <div class="steps-bar absolute self-center">
    <transition name="step-1-transition" @before-enter="onBeforeEnter">
      <div class="step-1">
        <router-link :to="{ name: 'signup-step1' }">
          <span>1</span>
        </router-link>
      </div>
    </transition>

    <div class="step-2">
      <router-link :to="{ name: 'signup-step2' }">
        <span>2</span>
      </router-link>
    </div>

    <div class="step-3">
      <router-link :to="{ name: 'signup-step3' }">
        <span>3</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useNavbarStore } from "../../../stores/NavbarStore";
export default {
  data() {
    return {};
  },
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  computed: {
    changeStepsColor() {
      if (this.navbarStore.darkMode) {
        return "#F0F4FF";
      } else {
        return "#01041B";
      }
    },
    changeActiveStepColor() {
      if (this.navbarStore.darkMode) {
        return "#6188FF";
      } else {
        return "#355CEF";
      }
    },
  },
  methods: {
    onBeforeEnter(el) {
      console.log(el);
    },
  },
};
</script>

<style scoped>
.steps-bar a {
  width: 35px;
  height: 35px;
  border: 2px solid v-bind(changeStepsColor);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.steps-bar div {
  position: relative;
}
.steps-bar div:not(:last-child) {
  /* margin-bottom = height - 3 */
  margin-bottom: 7.163rem;
}
.steps-bar div:not(:first-child)::before {
  content: "";
  height: 7.25rem;
  width: 2px;
  background-color: v-bind(changeStepsColor);
  position: absolute;
  top: -7.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}
div .router-link-active {
  animation: circle-animation 1s forwards;
}
div .router-link-active div:not(:first-child)::before {
  /* background-color: v-bind(changeStepsColor); */
  background-color: red;
  transform: scaleY(0);
  transform-origin: top;
  animation: line-animation 1s forwards;
}

@keyframes line-animation {
  100% {
    transform: scaleY(1);
  }
}
@keyframes circle-animation {
  0% {
    /* border-color: v-bind(changeStepsColor); */
    /* color: v-bind(changeStepsColor); */
  }
  25% {
    border-top-color: v-bind(changeActiveStepColor);
  }
  50% {
    border-right-color: v-bind(changeActiveStepColor);
  }
  75% {
    border-bottom-color: v-bind(changeActiveStepColor);
  }
  100% {
    border-top-color: v-bind(changeActiveStepColor);
    border-right-color: v-bind(changeActiveStepColor);
    border-bottom-color: v-bind(changeActiveStepColor);
    border-left-color: v-bind(changeActiveStepColor);
    color: v-bind(changeActiveStepColor);
  }
}
</style>
