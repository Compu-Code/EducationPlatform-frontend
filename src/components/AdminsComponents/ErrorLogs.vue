<template>
  <main class="error-logs h-fit mt-6 w-full">
    <div class="filter w-full h-20 bg-white mb-5">
      <div>Filter</div>
    </div>
    <ErrorlogsTable class="table max-w-full" :errors="errorsData" />
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useNavbarStore } from "../../stores/NavbarStore.js";
import { useSidebarStore } from "../../stores/SidebarStore";
const ErrorlogsTable = defineAsyncComponent(() =>
  import("../UI/BasesTables/ErrorlogsTable.vue")
);

export default {
  components: { ErrorlogsTable },
  setup() {
    const navbarStore = useNavbarStore();
    const SidebarStore = useSidebarStore();
    return { navbarStore, SidebarStore };
  },
  data() {
    return {
      errorsData: [
        {
          id: 4,
          error_message:
            "Facere et magni omnis perferendis deleniti. Quam voluptatum accusamus nobis quod. Quod autem tempore minus quo molestiae aut commodi. Cupiditate sed aut quos et consequuntur voluptatibus dolor consequuntur. Autem nesciunt et animi magnam omnis sunt.",
          error_description:
            "Quam doloribus velit architecto eligendi eum. Alias nihil non ut tempore earum. Voluptatum ad nihil doloribus et iste.",
          created_at: "2023-04-28T14:17:48.000000Z",
          updated_at: "2023-04-28T14:17:48.000000Z",
        },
        {
          id: 5,
          error_message:
            "Consequuntur corporis recusandae minima ducimus. Non veniam qui quos quia iste qui animi. Error iure qui qui aperiam quia. Omnis sit officiis pariatur voluptas dicta.",
          error_description:
            "Ratione tempora ducimus aperiam officiis commodi. Voluptates nam similique nulla quas et. Perspiciatis dolorem quam fuga alias nesciunt occaecati blanditiis. Aliquid doloremque consequatur quia.",
          created_at: "2023-04-28T14:17:48.000000Z",
          updated_at: "2023-04-28T14:17:48.000000Z",
        },
        {
          id: 6,
          error_message:
            "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
          error_description:
            "No query results for model [App\\Models\\ContactUs] 33",
          created_at: "2023-04-28T15:07:15.000000Z",
          updated_at: "2023-04-28T15:07:15.000000Z",
        },
        {
          id: 10,
          error_message:
            "C:\\xampp\\htdocs\\education_platform\\vendor\\laravel\\framework\\src\\Illuminate\\Routing\\Controller.php",
          error_description:
            "No query results for model [App\\Models\\OurNews] 6",
          created_at: "2023-05-06T12:36:34.000000Z",
          updated_at: "2023-05-06T12:36:34.000000Z",
        },
      ],
    };
  },
};
</script>

<style scoped>
.filter,
.table {
  /* TODO: edit the box shadow */
  box-shadow: 0 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0 3px 4px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0 1px 8px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 5px;
}
</style>
