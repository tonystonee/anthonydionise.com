export default {
  computed: {
    breakpoint() {
      const bp = this.$vuetify.breakpoint
      // just an example, could be one specific value if that's all you need
      return this.isHydrated ? bp : {} // "empty" $breakpoint object with initial values
    }
  },

  mounted() {
    this.isHydrated = true
  }
}
