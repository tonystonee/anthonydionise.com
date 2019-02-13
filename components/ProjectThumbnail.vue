<template>
  <v-tooltip top>
    <a
      slot="activator"
      :class="{'shake animated': animated}"
      class="projectLink"
      target="
      __blank"
      :href="project.link"
    >
      <v-card hover>
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
    </a>
    <span>
      {{ project.desc }}
    </span>
  </v-tooltip>
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
      animated: false
    }
  }
}
</script>
