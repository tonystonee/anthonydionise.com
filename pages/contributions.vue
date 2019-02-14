<template>
  <div />
</template>
<script>
import axios from 'axios'
export default {
  mounted() {
    const endpoint = 'https://api.github.com'
    const get = '/users/tonystonee/repos?type=fork'
    const query = `${endpoint}${get}`
    axios
      .get(query)
      .then(function(response) {
        const forks = response.data.filter(repo => {
          return repo.fork
        })
        console.log(response)
        console.log(forks)
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>
