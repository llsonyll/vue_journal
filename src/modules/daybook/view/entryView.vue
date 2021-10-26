<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div class="">
        <span class="mx-2 fs-4 fw-light">Entry: {{ currentId }}</span>
        <span class="text-sucess fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-4 fw-light"> {{ yearDay }}</span>
      </div>

      <div class="">
        <button class="btn btn-danger mx-2" @click="removeThisEntry">
          Borrar <i class="fa fa-trash-alt"> </i>
        </button>

        <input
          v-show="false"
          ref="imagePicker"
          type="file"
          @change="readFile"
          accept="image/png, image/jpeg"
        />

        <button class="btn btn-primary" @click="handleFileUpload">
          Subir Foto <i class="fa fa-upload"> </i>
        </button>
      </div>
    </div>

    <hr />

    <div class="d-flex flex-column px-3 h-75">
      <textarea
        v-model="entry.text"
        placeholder="Would you like to say something?"
      ></textarea>
    </div>

    <floating-button :icon="haveId" @on-click="saveData" />

    <img
      v-if="entry.picture && !image"
      :src="entry.picture"
      alt="entry-picture"
      class="img-thumbnail"
    />

    <img v-if="image" :src="image" alt="entry-picture" class="img-thumbnail" />
  </template>
</template>

<script>
import { defineAsyncComponent } from "vue";

import { mapActions, mapGetters } from "vuex";

import { getDateMonthYear } from "../helpers/getDayMonthYear";

import uploadImage from "../helpers/uploadImage";

import Swal from "sweetalert2";

export default {
  name: "vEntryView",
  components: {
    FloatingButton: defineAsyncComponent(() =>
      import("../components/floatingButton.vue")
    ),
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      entry: null,
      // entry: {
      //   text: ''
      // },
      image: null,
      file: null,
    };
  },

  computed: {
    ...mapGetters("daybookModule", ["getEntryById"]),
    currentId() {
      return this.$props.id;
    },
    haveId() {
      return this.$props.id ? "fa-save" : "fa-plus";
    },
    day() {
      const { day } = getDateMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDateMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { year } = getDateMonthYear(this.entry.date);
      return year;
    },
  },

  methods: {
    ...mapActions("daybookModule", [
      "updateEntry",
      "createEntry",
      "removeEntry",
    ]),

    loadEntry() {
      let entry;

      if (this.id === "new") {
        entry = {
          text: "",
          date: new Date().getTime(),
        };
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }

      if (entry.picture) {
        this.image = null;
      }

      this.entry = entry;
    },

    async saveData() {
      new Swal({
        title: "Espere porfavor",
        allowOutsideClick: false,
      });

      Swal.showLoading();

      const pictureUrl = await uploadImage(this.file);

      this.entry.picture = pictureUrl;

      if (this.entry.id) {
        await this.updateEntry(this.entry);
      } else {
        const id = await this.createEntry(this.entry);
        this.$router.push({ name: "view-entry", params: { id: id } });
      }

      this.file = null;

      Swal.fire("Guardado", "Entrada con exito", "success");
    },

    async removeThisEntry() {
      const { isConfirmed } = await Swal.fire({
        title: "Esta seguro de eliminar esta entrada?",
        text: "No podra recuperar la entrada",
        showDenyButton: true,
        confirmButtonText: "Si estoy Seguro",
        // allowOutsideClick: false,
      });

      if (isConfirmed) {
        new Swal({
          title: "Espere porfavor",
          allowOutsideClick: false,
        });

        Swal.showLoading();

        await this.removeEntry(this.entry);
        this.$router.push({ name: "no-entry" });

        Swal.fire("Eliminado", "Entrada eliminada con exito", "success");
      }
    },

    readFile(event) {
      const file = event.target.files[0];
      console.log(file);

      if (!file) {
        this.image = null;
        this.file = null;
        return;
      }

      this.file = file;

      const fr = new FileReader();
      fr.onload = () => (this.image = fr.result);
      fr.readAsDataURL(file);
    },

    handleFileUpload() {
      console.log("File upload handle");
      this.$refs.imagePicker.click();
    },
  },

  created() {
    this.loadEntry();
  },

  watch: {
    id() {
      this.loadEntry();
    },
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
