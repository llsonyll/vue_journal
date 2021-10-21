<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar entrada" />
    </div>

    <div class="entry-scrollarea">
      <entry v-for="(entry, index) in 100" :key="index" :id="index" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

// import Entry from "../components/entry.vue";
export default {
  name: "EntryList",
  components: {
    Entry: defineAsyncComponent(() => import("../components/entry.vue")),
  },
  //   computed: {
  //       filteredEntrys() {

  //       }
  //   }
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  //   border: 1px solid blue;
  overflow-y: scroll;
  height: calc(100vh - 120px);
}
</style>
