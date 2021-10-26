<template>
  <nav-bar />

  <div class="row justify-content-md-center" v-if="isLoading">
    <div class="col-3 alert-info text-center mt-5">
      Espere porfavor...
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>

  <div class="d-flex" v-else>
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
import { mapActions, mapState } from "vuex";
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

  computed: {
    ...mapState("daybookModule", ["isLoading"]),
  },

  methods: {
    ...mapActions("daybookModule", ["loadEntries"]),
  },

  created() {
    this.loadEntries();
  },
};
</script>

<style lang="scss" scoped></style>
