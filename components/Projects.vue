<template>
  <div>
    <h2 class="mb-3">
      {{ title }}
    </h2>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 class="pa-2">
        <ProjectThumbnail v-for="p in projects" :key="p.text" :project="p" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ProjectThumbnail from '@/components/ProjectThumbnail'
import breakpoint from '@/mixins/breakpoint'
export default {
  name: 'PersonalProjects',
  components: {
    ProjectThumbnail
  },
  mixins: [breakpoint],
  props: {
    title: {
      type: String,
      required: true
    },
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>
