<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div class="">
      <span class="mx-2 fs-4 fw-light">Entry: {{ currentId }}</span>
      <span class="text-sucess fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021, jueves</span>
    </div>

    <div class="">
      <button class="btn btn-danger mx-2">
        Borrar <i class="fa fa-trash-alt"> </i>
      </button>

      <button class="btn btn-primary">
        Subir Foto <i class="fa fa-upload"> </i>
      </button>
    </div>
  </div>

  <hr />

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Would you like to say something?"></textarea>
  </div>

  <floating-button :icon="haveId" />

  <img
    src="https://summa.es/wp-content/uploads/2020/02/img_portada.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "vEntryView",
  components: {
    FloatingButton: defineAsyncComponent(() =>
      import("../components/floatingButton.vue")
    ),
  },
  computed: {
    currentId() {
      return this.$route.params.id;
    },
    haveId() {
      return this.$route.params.id ? 'fa-save' : 'fa-plus'
    }
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20;
  border: none;
  height: 100%;

  resize: none;

  &:focus {
    outline: none;
  }
}

img {
  width: 250px;
  position: fixed;
  bottom: 100px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
