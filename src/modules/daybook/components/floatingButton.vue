.<template>
  <button class="btn pointer btn-primary" @click="$emit('on-click')">
    <!-- <i :class="`fa fa-2x ${icon}`"></i> -->
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  name: "FloatingButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  // methods: {
  //   handleEmit() {
  //     this.$emit("on-click");
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 100%;
  bottom: 20px;
  height: 60px;
  position: absolute;
  right: 20px;
  width: 60px;
}
</style>
