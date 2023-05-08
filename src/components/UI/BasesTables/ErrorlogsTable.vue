<template>
  <div class="p-2 flex justify-between w-full">
    <normal-filled>Export</normal-filled>
    <div>
      <normal-filled>test</normal-filled>
      <normal-filled>test</normal-filled>
    </div>
  </div>
  <hr />
  <div class="w-full overflow-x-auto overflow-y-hidden">
    <div class="w-full">
      <table class="min-w-[800px]">
        <thead class="border-b">
          <tr>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">
              <input type="checkbox" name="" id="" />
            </th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">
              ID
            </th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">
              Message
            </th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">
              Description
            </th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">
              Created at
            </th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">
              Updated at
            </th>
            <th class="p-3 text-sm font-semibold tracking-wide text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="border-b"
            v-for="error in errors.slice().reverse()"
            :key="error.id"
          >
            <td class="p-3 text-sm"><input type="checkbox" name="" id="" /></td>
            <td class="p-3 text-sm">{{ error.id }}</td>
            <td class="p-3 text-sm">{{ error.error_message }}</td>
            <td class="p-3 text-sm">{{ error.error_description }}</td>
            <td class="p-3 text-sm">{{ error.created_at }}</td>
            <td class="p-3 text-sm">{{ error.updated_at }}</td>
            <td class="p-3 text-sm">action</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
const NormalFilled = defineAsyncComponent(() =>
  import("../BasesButton/NormalFilled.vue")
);
export default {
  components: {
    NormalFilled,
  },
  props: ["errors"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.header-table {
  /* TODO: edit the box shadow */
  box-shadow: 0 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0 3px 4px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0 1px 8px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 5px;
}
</style>
