<template>
  <v-container class="experience pa-5">
    <ExperiencePanel />
  </v-container>
</template>

<script>
import ExperiencePanel from '@/components/ExperiencePanel'
export default {
  head() {
    return {
      title: `Anthony Dionise | Professional Experience`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Learn more about Anthony's professional work experience as a web and software developer."
        }
      ]
    }
  },
  components: {
    ExperiencePanel
  }
}
</script>
