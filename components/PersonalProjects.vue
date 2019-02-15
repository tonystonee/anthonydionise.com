<template>
  <div>
    <h2 class="mb-3">
      Personal Projects
    </h2>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 class="pa-2">
        <ProjectThumbnail v-for="p in personal" :key="p.text" :project="p" />
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
  data() {
    return {
      personal: [
        {
          thumbnail: 'img/dayonebros.png',
          text: 'DayOneBros.com',
          link: 'https://dayonebros.com',
          desc:
            'DayOneBros is a webapp designed to provide you the top ten videos of the day. Browse the site to see the top ten videos in multiple differnt catefories. Each page also comes with a RANDOM button, fetching a random video in the given category. <br><br>This app uses the YouTubeAPI and is built with VueJS 2, Vuetify, Vuex, Vue Router. Hosted on firebase. '
        }
      ],
      paid: [
        {
          thumbnail: 'img/pura.png',
          text: 'Pura Organics',
          link: 'https://puraorganics.com',
          desc:
            "Pura Organics is a skin care product line. <br><br> Built with Shopify and Shopify's templating language liquid."
        }
      ]
    }
  }
}
</script>
