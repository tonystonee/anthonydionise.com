<template>
  <div class="projectLink">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
        class="mx-0 px-0"
        color="red"
        dark
      >
        <v-icon>keyboard_arrow_right</v-icon>
      </v-btn>
      <v-card>
        <v-card-title
          class="headline purple"
          primary-title
        >
          {{ project.text }}
        </v-card-title>

        <v-card-text v-html="project.desc" />

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn class="light-blue" target="__blank" :href="project.link">
            Check it out!
          </v-btn>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <v-card hover @click="thumbnailAction">
      <v-img aspect-ratio="1.95568" :src="project.thumbnail" :alt="project.text" max-width="100%">
        <v-layout
          slot="placeholder"
          fill-height
          align-center
          justify-center
          ma-0
        >
          <v-progress-circular indeterminate color="purple " />
        </v-layout>
      </v-img>
    </v-card>
    <p class="text-xs-center subheading py-1 pb-0 mb-0">
      {{ project.text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    thumbnailAction() {
      if (this.$route.name === 'projects') {
        this.dialog = true
      } else {
        this.$router.push({ path: '/projects' })
      }
    }
  }
}
</script>
<style lang="stylus">
.projectLink{
  position: relative;
  bottom: 0;
  transition: bottom .2s;
  &:hover{
    bottom: 10px;
  }
}
</style>
