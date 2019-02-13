<template>
  <div class="pa-5">
    <h2 class="mb-3">
      Personal Projects
    </h2>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 class="pa-2">
        <ProjectThumbnail v-for="p in personal" :key="p.text" :project="p" />
      </v-flex>
    </v-layout>

    <h2 class="mb-3">
      Paid Side Projects
    </h2>
    <v-layout class="mb-3" row wrap>
      <v-flex xs12 sm6 md4 class="pa-2">
        <ProjectThumbnail v-for="p in paid" :key="p.text" :project="p" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ProjectThumbnail from '@/components/ProjectThumbnail'
export default {
  components: {
    ProjectThumbnail
  },
  data() {
    return {
      personal: [
        {
          thumbnail: 'img/dayonebros.png',
          text: 'DayOneBros.com',
          link: 'https://dayonebros.com',
          desc:
            'A web app that brings you the top ten videos of the day, overall and in multiple diffrent categories.'
        }
      ],
      paid: [
        {
          thumbnail: 'img/pura.png',
          text: 'Pura Organics',
          link: 'https://puraorganics.com',
          desc: 'Skin care product line.'
        }
      ]
    }
  }
}
</script>
