<template>
<nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
        <span>Awesome! You added a new project.</span>
        <v-btn color="white" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-navigation-drawer app v-model="drawer" permanant class="drawer purple darken-2">
        <v-layout column align-center>
        <v-flex class="avatar mt-5">
            <v-avatar size="100">
                <img class="text-lg-center" src="/anthony.jpg">
            </v-avatar>
            <p class="white--text subheading mt-1">Anthony Dionise</p>
        </v-flex>
        </v-layout>
        <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-action>
                <v-icon class="light-blue--text text--lighten-2">{{ link.icon }}</v-icon>
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
        { icon: 'person', text: 'Team', route: '/team' },
      ],
      snackbar: false,
    };
  },
};
</script>
