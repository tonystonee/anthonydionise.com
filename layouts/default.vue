<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      width="240"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <div class="py-3 text-xs-center">
        <v-avatar :size="miniVariant ? 50 : 150">
          <img class="text-lg-center" src="/img/anthony.jpg">
        </v-avatar>
      </div>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-2" v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <div class="text-xs-center">
        <a v-for="s in social" :key="s.link" class="px-2" target="__blank" :href="s.link">
          <v-icon>{{ s.icon }}</v-icon>
        </a>
      </div>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      :flat="!clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn :active-class="null" to="/" icon>
        <v-icon>home</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <a v-for="s in social" :key="s.link" class="px-2" target="__blank" :href="s.link">
        <v-icon :color="s.color">{{ s.icon }}</v-icon>
      </a>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      class="px-3"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: null,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'book',
          title: 'My Story',
          to: '/about'
        },
        {
          icon: 'folder',
          title: 'Projects',
          to: '/projects'
        },
        {
          icon: 'build',
          title: 'Github Contributions',
          to: '/contributions'
        },
        {
          icon: 'work',
          title: 'Professional Experience',
          to: '/experience'
        }
      ],
      social: [
        {
          icon: 'fab fa-github',
          link: 'https://github.com/tonystonee',
          color: 'purple lighten-2'
        },
        {
          icon: 'fab fa-linkedin in',
          link: 'https://www.linkedin.com/in/anthony-dionise-292b8790/',
          color: 'blue lighten-1'
        }
      ],
      miniVariant: false,
      right: true,
      title: 'Anthony Dionise'
    }
  }
}
</script>

<style lang="stylus">
a {
  text-decoration: none;
  color: white;
}
</style>
