<template>
  <div>
    <h2 class="px-4 pb-2">
      Contributions
    </h2>
    <v-list class="mb-3">
      <v-list-tile v-for="c in contributions" :key="c.name" target="__blank" :href="c.link">
        {{ c.name }}
      </v-list-tile>
    </v-list>
    <h2 class="px-4 pb-2">
      Notable Forks
    </h2>
    <v-list v-if="forks" class="mb-3">
      <v-list-tile v-for="f in forks" :key="f.name" target="__blank" :href="f.homepage">
        {{ f.name }}
      </v-list-tile>
    </v-list>
    <v-progress-circular
      v-else
      class="mx-5"
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    />

    <v-btn color="purple" target="__blank" href="https://github.com/tonystonee">
      Find Me on Github!
      <v-icon right>
        fab fa-github
      </v-icon>
    </v-btn>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  head() {
    return {
      title: `Anthony Dionise | Github Contributions`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Anthony's Github Contributions and Noteable forks."
        }
      ]
    }
  },
  data() {
    return {
      forks: null,
      contributions: [
        {
          name: 'DefinleyTyped',
          link: 'https://github.com/DefinitelyTyped/DefinitelyTyped'
        }
      ]
    }
  },
  mounted() {
    this.$_getForks()
  },
  methods: {
    $_getForks() {
      const endpoint = 'https://api.github.com'
      const get = '/users/tonystonee/repos?type=fork'
      const query = `${endpoint}${get}`
      const self = this
      axios.get(query).then(function(response) {
        const forks = response.data.filter(repo => {
          return repo.fork && repo.homepage
        })
        self.forks = forks
      })
    }
  }
}
</script>
