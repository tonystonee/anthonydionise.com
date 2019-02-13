<template>
  <v-app>
    <navbar/>
    <v-content class="content">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
      //
    };
  },
};
</script>

<style lang="stylus">

a{
  color: white;
  text-decoration: none;
  &:visited{
    color:white;
  }
}
  .content{
    font-family: 'Rubik', sans-serif;
    background: #373737;
  }
</style>
