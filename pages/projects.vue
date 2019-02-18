<template>
  <div>
    <v-container>
      <div class="pa-5">
        <Projects title="Personal Projects" :projects="personal" />
        <Projects title="Paid Projects" :projects="paid" />
      </div>
    </v-container>
    <v-container :fluid="breakpoint.smAndDown" :class="{'px-0 pb-0': breakpoint.smAndDown}">
      <v-layout class="grey darken-4 pa-5" row wrap>
        <h2 class="mb-3">
          CSE 498 - <span class="green--text text--darken-4">
            MSU
          </span> Senior Capstone Project
        </h2>
        <v-flex xs12>
          <div class="title">
            Humana Bot
          </div>
          <div class="subheading">
            Front end lead and backend co-lead for a 5-person team working on a 
            <a target="__blank" class="purple--text text--lighten-2" href="https://www.cse.msu.edu/~cse498/2017-08/projects/humana/">
              chatbot for Humana.
            </a> 
          </div>
        </v-flex>
        <v-flex xs12 sm6 class="pa-2">
          <v-img max-width="100%" src="img/chat.jpg" />
        </v-flex>
        <v-flex xs12 sm6 class="pa-2">
          <div class="subheading pa-3">
            Utilized Microsoft LUIS for natural language processing, Microsoft Bot Framework (C# .NET) for the back-end and ASP.NET Core MVC for the webpage and administrative portal.
          </div>
          <v-img max-width="100%" src="img/diagram.png" />
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="px-4 pb-5">
      <v-btn to="/" class="mx-0 mt-2 py-4" color="purple">
        Back Home
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import Projects from '@/components/Projects'
import PersonalProjects from '@/mixins/PersonalProjects'
import breakpoint from '@/mixins/breakpoint'
export default {
  head() {
    return {
      title: `Anthony Dionise | Projects`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Browse some of Anthony's public projects!"
        }
      ]
    }
  },
  components: {
    Projects
  },
  mixins: [breakpoint, PersonalProjects],
  data() {
    return {
      paid: [
        {
          thumbnail: 'img/pura.png',
          text: 'Pura Organics',
          link: 'https://puraorganics.com',
          desc: [
            'Pura Organics is a skin care product line.',
            "Built with Shopify and Shopify's templating language liquid."
          ]
        }
      ]
    }
  }
}
</script>
<style>
</style>
