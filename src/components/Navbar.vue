<template>
<nav >
    <v-navigation-drawer app v-model="drawer" permanant mobile-break-point="1000" class="nav-drawer purple darken-2">
        <v-layout column align-center>
          <v-flex class="avatar mt-5">
              <v-avatar size="100">
                  <img class="text-lg-center" src="/anthony.jpg">
              </v-avatar>
              <p class="white--text subheading mt-1 mb-0">Anthony Dionise</p>
              <div class="white--text caption my-0">Web Developer Extraordinaire</div>
          </v-flex> 
        </v-layout>
        <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-action>
                <v-icon class="navicon light-blue--text">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/projects' },
        { icon: 'person', text: 'Github Contributions', route: '/github' },
      ],
      snackbar: false,
    };
  },
};
</script>

<style lang="stylus">
.nav-drawer{
  background-image: linear-gradient(to right top, #7f2dcb, #7b31cc, #7735cc, #7239cd, #6e3ccd);
}
</style>
