<template>
  <v-app>
    <navbar/>
    <v-content class="black">

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
