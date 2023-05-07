<template>
  <div class="h-screen overflow-y-hidden overflow-x-auto bg-white">
    <div class="p-2 flex justify-between">
      <normal-filled>test</normal-filled>
      <div>
        <normal-filled>test</normal-filled>
        <normal-filled>test</normal-filled>
      </div>
    </div>
    <hr />
    <div class="table-wrapper w-full">
      <table class="w-full">
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
          <tr class="border-b" v-for="error in errors" :key="error.id">
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

<style scoped></style>
