<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        v-model="term"
        type="text"
        class="form-control"
        placeholder="Buscar entrada"
      />
    </div>

    <div class="mt-2 d-flex flex-column">
      <button
        class="btn btn-primary mx-3"
        @click="$router.push({ name: 'view-entry', params: { id: 'new' } })"
      >
        <i class="fa fa-plus-circle"></i>
        Nueva Entrada
      </button>
    </div>

    <div class="entry-scrollarea">
      <entry
        v-for="(entry, index) in entriesByTerm"
        :key="index"
        :entry="entry"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

// import Entry from "../components/entry.vue";
export default {
  name: "EntryList",
  components: {
    Entry: defineAsyncComponent(() => import("../components/entry.vue")),
  },

  data() {
    return {
      term: "",
    };
  },

  computed: {
    ...mapGetters("daybookModule", ["getEntriesByTerm"]),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  //   border: 1px solid blue;
  overflow-y: scroll;
  height: calc(100vh - 150px);
}
</style>
