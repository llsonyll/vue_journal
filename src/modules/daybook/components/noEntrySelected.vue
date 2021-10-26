<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>

  <fab @on-click="goToNewEntry" :icon="'fa-plus'" />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "noEntrySelected",
  components: {
    fab: defineAsyncComponent(() => import("../components/floatingButton.vue")),
  },
  methods: {
    goToNewEntry() {
      this.$router.push({ name: "view-entry", params: { id: "new" } });
    },
  },
};
</script>

<style FloatingButtonlang="scss" scoped>
div {
  height: 100%;
  border: 1px solid blue;
}
</style>
