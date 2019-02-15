<template>
  <v-container>
    <v-layout
      column
      justify-center
      align-center
    >
      <v-flex
        xs12
        sm8
        md6
      >
        <div class="text-xs-center">
          <logo />
        </div>
        <v-card>
          <v-card-title class="headline">
            Welcome to the Personal Website of Anthony Dionise.
          </v-card-title>
          <v-card-text>
            <p>
              I first started making simple websites as a young man trying to make a little money. 
            </p>
          
            <p> 
              Pretty quickly thereafter,
              I wanted to learn <span class="yellow--text text--darken-1">
                HTML
              </span> & <span class="blue--text ">
                CSS
              </span> to have complete control over the design of my websites. Once I did that,
              I immidiately got hooked and continued to learn 
              <span class="red--text text--lighten-1">
                Javascript
              </span>, <span class="yellow--text">
                jQuery
              </span>, and <span class="green--text">
                PHP
              </span>, 
              making my website much more
              dynamic AND fun. I was able to find work with my skills and have been addicted to continuously progressing ever since.
            </p>
            <p>
              For more information on my story and experience, click continue down below.
            </p>
            <p class="subheading">
              My main goal is to have as much influence on a business as I can. I like to treat 
              all work projects as my own, so making everything perfect with the finest technology stack is my passion.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              flat
              nuxt
              to="/about"
            >
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <ExperiencePanel class="my-5" />
    </v-layout>
    <PersonalProjects />
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ExperiencePanel from '@/components/ExperiencePanel'
import PersonalProjects from '@/components/PersonalProjects'
export default {
  components: {
    ExperiencePanel,
    PersonalProjects,
    Logo
  }
}
</script>
