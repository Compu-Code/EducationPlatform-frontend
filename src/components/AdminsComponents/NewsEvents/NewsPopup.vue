<template>
  <div class="news-popup w-96">
    <div class="Container p-4 w-full">
      <IconClose class="cursor-pointer" @click="$emit('close')" />
      <form @submit.prevent="" class="flex flex-col px-3 pt-3">
        <input
          class="mt-3 mb-3"
          type="text"
          name="title"
          placeholder="title"
          @keyup="getNewsTitle($event.target.value)"
          @blur="getNewsTitle($event.target.value)"
          :value="editNewsTitle || null"
        />
        <textarea
          class="resize-none mb-5"
          name="description"
          @keyup="getNewsDescription($event.target.value)"
          @blur="getNewsDescription($event.target.value)"
          :value="editNewsDescription || null"
          placeholder="description"
          rows="5"
        >
          Description
        </textarea>
        <!-- buttons -->
        <div class="flex">
          <normal-filled
            v-if="primaryBtn === 'create'"
            class="create-btn mr-2 flex items-center justify-center"
            @click="createNews"
          >
            <span v-if="!ournewsStore.createLoading">Create</span>
            <div class="spinner" v-if="ournewsStore.createLoading"></div>
          </normal-filled>
          <normal-filled
            v-else-if="primaryBtn === 'edit'"
            class="confirm-btn mr-2 flex items-center justify-center"
            @click="updateNews"
          >
            <span v-if="!ournewsStore.editLoading">Confirm</span>
            <div class="spinner" v-if="ournewsStore.editLoading"></div>
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
import { useOurnewsStore } from "../../../stores/OurnewsStore";

export default {
  components: {
    IconClose,
    NormalFilled,
    NormalDeflated,
  },
  emits: ["close"],
  props: ["editNewsTitle", "editNewsDescription", "primaryBtn", "newsId"],
  data() {
    return {
      newsTitle: null,
      newsDescription: null,
    };
  },
  setup() {
    const navbarStore = useNavbarStore();
    const ournewsStore = useOurnewsStore();
    return { navbarStore, ournewsStore };
  },
  methods: {
    //create flow
    async createNews() {
      if (this.newsTitle && this.newsDescription) {
        await this.ournewsStore.createNews({
          title: this.newsTitle,
          description: this.newsDescription,
        });
        if (this.ournewsStore.createdSuccessfully) {
          this.$emit("close");
        }
      }
    },
    // edit flow
    async updateNews() {
      if (this.newsTitle) {
        this.newsDescription =
          document.getElementsByName("description")[0].value;
      } else if (this.newsDescription) {
        this.newsTitle = document.getElementsByName("title")[0].value;
      }
      if (this.newsTitle && this.newsDescription) {
        await this.ournewsStore.updateNews(
          {
            title: this.newsTitle,
            description: this.newsDescription,
          },
          this.newsId
        );
        if (this.ournewsStore.updatedSuccessfully) {
          this.$emit("close");
        }
      }
    },
    // get news data from form
    getNewsTitle(title) {
      this.newsTitle = title;
    },
    getNewsDescription(description) {
      this.newsDescription = description;
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
};
</script>

<style scoped>
.news-popup {
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
