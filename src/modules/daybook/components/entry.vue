<template>
  <div class="entry-container mb-3 pointer p-2" @click="goToEntry()">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-5">{{ month }}</span>
      <span class="mx-2 fw-light"> {{ yearDay }}</span>
    </div>
    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>
import { getDateMonthYear } from "../helpers/getDayMonthYear";

export default {
  name: "Entry",
  props: {
    // id: {
    //   type: Number,
    //   required: false,
    //   default: 10,
    // },
    // description: {
    //   type: String,
    //   default:
    //     "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    // },
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortText() {
      return this.entry.text.length > 180
        ? this.entry.text.substring(0, 180) + "..."
        : this.entry.text;
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
    goToEntry() {
      this.$router.push({
        name: "view-entry",
        params: { id: this.$props.entry.id },
      });
    },
  },
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
