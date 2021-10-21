<template>
  <div class="entry-container mb-3 pointer p-2" @click="goToEntry(index)">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021 Jueves</span>
    </div>
    <div class="entry-description">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source.
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry",
  props: {
    id: {
      type: Number,
      required: false,
      default: 10
    }
  },
  methods: {
    goToEntry() {
      this.$router.push({name: 'view-entry', params: {id: this.$props.id }});
    }
  }
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-title {
    align-items: baseline;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>
