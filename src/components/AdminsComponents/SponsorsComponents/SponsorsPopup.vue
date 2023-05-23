<template>
  <div class="sponsors-popup w-96">
    <div class="Container p-4 w-full">
      <IconClose class="cursor-pointer" @click="$emit('close')" />
      <form @submit.prevent="" class="flex flex-col px-3 pt-3">
        <div class="sponsor-logo flex flex-col justify-center">
          <div class="logo-container flex justify-center" v-if="selectedFile">
            <img
              :src="url"
              alt="Sponsor Logo"
              class="img-logo cursor-pointer w-24 h-24 border-2 border-dark-blue-normal hover:opacity-80 duration-100"
              @click="$refs.fileInput.click()"
            />
          </div>
          <div
            class="logo-container2 flex justify-center"
            v-else-if="!selectedFile"
          >
            <IconAvatar
              class="w-24 h-24 cursor-pointer hover:opacity-80 duration-100"
              @click="$refs.fileInput.click()"
            />
          </div>
          <div class="edit-logo flex justify-center items-center w-full mt-3">
            <input
              type="file"
              name="sponsor-logo"
              @change="onFileSelected"
              style="display: none"
              ref="fileInput"
            />
          </div>
        </div>
        <input
          class="mt-3 mb-3"
          type="text"
          name="name"
          placeholder="sponsor name"
          @keyup="getSponsorName($event.target.value)"
          @blur="getSponsorName($event.target.value)"
          :value="editSponsorsName || null"
        />
        <textarea
          class="resize-none mb-5"
          name="description"
          @keyup="getSponsorDescription($event.target.value)"
          @blur="getSponsorDescription($event.target.value)"
          :value="editSponsorsDescription || null"
          placeholder="sponsor description"
          rows="5"
        >
          Description
        </textarea>
        <!-- buttons -->
        <div class="flex">
          <normal-filled
            v-if="primaryBtn === 'create'"
            class="create-btn mr-2 flex items-center justify-center"
            @click="createSponsor"
          >
            <span v-if="!sponsorsStore.createLoading">Create</span>
            <div class="spinner" v-if="sponsorsStore.createLoading"></div>
          </normal-filled>
          <normal-filled
            v-else-if="primaryBtn === 'edit'"
            class="confirm-btn mr-2 flex items-center justify-center"
            @click="updateSponsor"
          >
            <span v-if="!sponsorsStore.editLoading">Confirm</span>
            <div class="spinner" v-if="sponsorsStore.editLoading"></div>
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
const IconAvatar = defineAsyncComponent(() =>
  import("../../icons/IconAvatar.vue")
);
import { useNavbarStore } from "../../../stores/NavbarStore";
import { useSponsorsStore } from "../../../stores/SponsorsStore";

export default {
  components: {
    IconClose,
    NormalFilled,
    NormalDeflated,
    IconAvatar,
  },
  emits: ["close"],
  props: [
    "editSponsorsName",
    "editSponsorsDescription",
    "editSponsorsLogo",
    "primaryBtn",
    "sponsorId",
  ],
  data() {
    return {
      sponsorName: null,
      sponsorDescription: null,
      selectedFile: null,
      url: null,
    };
  },
  setup() {
    const navbarStore = useNavbarStore();
    const sponsorsStore = useSponsorsStore();
    return { navbarStore, sponsorsStore };
  },
  methods: {
    //create flow
    async createSponsor() {
      if (
        this.sponsorName &&
        this.sponsorDescription &&
        this.selectedFile &&
        this.selectedFile.type.startsWith("image/")
      ) {
        console.log(this.selectedFile);
        await this.sponsorsStore.createSponsor({
          // TODO: ask backend how he want to receive img
          sponsor_logo: this.selectedFile,
          sponsor_name: this.sponsorName,
          sponsor_description: this.sponsorDescription,
        });
        if (this.sponsorsStore.createdSuccessfully) {
          this.$emit("close");
        }
      }
    },
    // edit flow
    async updateSponsor() {
      if (this.sponsorName) {
        this.sponsorDescription =
          document.getElementsByName("description")[0].value;
      } else if (this.sponsorDescription) {
        this.sponsorName = document.getElementsByName("name")[0].value;
      }
      console.log(this.sponsorName);
      console.log(this.sponsorDescription);
      if (this.sponsorName && this.sponsorDescription) {
        await this.sponsorsStore.updateSponsor(
          {
            sponsor_name: this.sponsorName,
            sponsor_description: this.sponsorDescription,
          },
          this.sponsorId
        );
        if (this.sponsorsStore.updatedSuccessfully) {
          this.$emit("close");
        }
      }
    },
    // get news data from form
    getSponsorName(name) {
      this.sponsorName = name;
    },
    getSponsorDescription(description) {
      this.sponsorDescription = description;
    },
    // get img from form and make it url
    onFileSelected(event) {
      // console.log(event.target.files[0]);
      // const reader = new FileReader();
      // reader.readAsDataURL(event.target.files[0]);
      // console.log(reader.result);
      // let data = new FormData();
      console.log(event);
      this.selectedFile = event.target.files[0];

      this.url = URL.createObjectURL(this.selectedFile);
      console.log(this.selectedFile);
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
.img-logo {
  border-radius: 50%;
}
.pick-image-btn {
  padding: 3px 7px !important;
  font-size: 13px !important;
}

.sponsors-popup {
  background-color: white;
  height: fit-content;
  left: calc(50% - 12rem);
  top: 20vh;
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
form input:not(input[name="sponsor-logo"]) {
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
