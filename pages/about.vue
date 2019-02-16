<template>
  <v-container class="about pa-5">
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
        <v-card>
          <v-card-title class="headline">
            Hi. I'm Anthony.
          </v-card-title>
          <v-card-text class="card_content">
            <p>
              I am a fullstack web developer. My favorite language is <span class="red--text text--lighten-1">
                Javascript.
              </span>
            </p>
            <p>
              I first started making simple websites as a young man trying to make a little money. 
            </p>
          
            <p> 
              Pretty quickly thereafter,
              I wanted to learn <span class="yellow--text text--darken-1">
                HTML
              </span> &amp; <span class="blue--text ">
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
              I was working at the <a target="__blank" class="purple--text text--lighten-1" href="https://www.nscl.msu.edu/">
                NATIONAL SUPERCONDUCTING CYCLOTRON LABORATORY
              </a> my freshman year of college doing electrical work as a Student Labor Assistant. I did not know what
              I wanted to do with my life, but was quickly drawn to programming as I continued learning in my 
              free time. While working there, I heard someone asking around for someone that could do website work.
              I was learning <span class="red--text text--lighten-1">
                Javascript
              </span> and <span class="yellow--text">
                jQuery
              </span> at the time so I knew I could help out. I helped this person out and quickly switched positions
              to a web devloper. I was fixing design issues with <a
                target="__blank"
                class="purple--text text--lighten-1"
                href="http://controlsystemstudio.org/"
              >
                controlsystemstudio.org
              </a>, the website for the widely used Control System Studio software. I also used the <a
                target="__blank"
                class="purple--text text--lighten-1"
                href="https://developer.github.com/v3/"
              >
                Github API
              </a> to pull contributor information into the site. It was at this time that I learn how to work
              with <span class="red--text">
                JSON
              </span> and <span class="red--text">
                API
              </span>'s. I was amazed.
            </p>
            <p>
              I first found a real tech job by helping a friend with his website. He was running an eCommerce business,
              and he was having trouble with his developer. He was using <span class="purple--text text--lighten-2">
                Shopify
              </span> at the time and needed some changes on the front end. I offered to help when we were hanging out and 
              I made the changes he needed. I was just happy to help out a friend and generally intereseted in solving the problem
              he was having.
            </p>

            <p>
              Him and his team were so impressed by my work that the word spread around. It turned out, someone he knew 
              needed a PHP devloper. At the time, I had just bought a book on PHP and had learned how to make dynamic websites. 
              I was happy to accept the job offer that followed. It was at this job that I learned all about Object Oriented
              Programming and MVC. We were using <span class="green--text">
                CakePHP
              </span> to create a new Administration and Employee system. I was so amazed with the concept of 
              <span class="blue--text">
                MVC
              </span> because I had been trying to figure out a way to seperate the front end from backend logic. This new
              structure seemed like a godsend. It is also here where I realized how big our community is. It still
              excites me to know how much us devlopers help eachother out in the open source community.
            </p>

            <p>
              These are the major highlights of my story and how I began my career. I have never stopped continuosly 
              learning new things, progressing, and challenging myself. No feat is too large or scary for me.
            </p>

            <p>
              Currently, I am heavily using <a target="__blank" href="https://vuejs.org/" class="green--text text--lighten-1">
                Vue
              </a>, <a target="__blank" href="https://www.mongodb.com/" class="orange--text text--lighten-1">
                MongoDB
              </a>, <a target="__blank" href="https://expressjs.com/" class="blue--text">
                Express
              </a>, and <a target="__blank" href="https://nodejs.org/en/" class="green--text">
                Node
              </a>.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              flat
              nuxt
              to="/"
            >
              Go Back Home
              <v-icon right>
                keyboard_arrow_right
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'About',
  head() {
    return {
      title: `Anthony Dionise | About`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Learn more about Anthony's journey in web development!"
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.about {
  .card_content{
    a {
      text-decoration: underline;
    }
  }
}
</style>
