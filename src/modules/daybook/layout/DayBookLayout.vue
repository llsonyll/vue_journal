<template>
  <nav-bar />

  <div class="d-flex">
    <div class="col-4">
      <entry-list />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
// import navBar from "../components/navBar.vue";

export default {
  name: "DayBookLayout",
  components: {
    // navBar,
    NavBar: defineAsyncComponent(() => import("../components/navBar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../components/entryList.vue")
    ),
  },
};
</script>

<style lang="scss" scoped></style>
