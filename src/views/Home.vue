<template>
  <div class="home pa-5">
    <v-layout row wrap>
      <v-flex lg8>
        <h1 class="white--text display-4">Hi.</h1>
        <div class="display-1 white--text py-2">
          My name is Anthony Dionise.
        </div>
        <div class="headline white--text my-4">
          I am a fullstack Web and Software Developer.
        </div>
        <div class="headline white--text my-4">
          My story as simple. I started making simple websites
          as a young man hoping to make a little money. Pretty quickly after starting that, I decided to
          learn HTML & CSS, wanting more control over the design of my pages. I then decided to learn Javascript/jQuery
          to make my pages more dynamic, where I immediately got hooked and got addicted to contrinuously progressing.
        </div>
        <div class="title white--text my-5">
          My favorite language is Javascript. Here are some of my favorite technologies:
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <img alt="Vue logo" src="../assets/logo.png">
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class Home extends Vue {}
</script>
