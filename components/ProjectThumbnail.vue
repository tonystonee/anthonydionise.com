<template>
  <v-tooltip top>
    <a slot="activator" class="projectLink" target="__blank" :href="project.link">
      <v-card hover>
        <v-img :src="project.thumbnail" :alt="project.text" max-width="100%" />
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
  }
}
</script>
