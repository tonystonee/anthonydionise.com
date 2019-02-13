export default {
  computed: {
    breakpoint() {
      // just an example, could be one specific value if that's all you need
      return this.isHydrated ? this.$vuetify.breakpoint : {} // "empty" $breakpoint object with initial values
    }
  },

  mounted() {
    this.isHydrated = true
  }
}
