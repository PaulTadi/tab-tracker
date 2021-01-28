<template>
  <div id="App">
    <!-- <img src="./assets/logo.png"> -->
    <v-app>
        <Page-Header app/>
      <v-main>
        <v-container class="mt-16">
      <v-row no-gutters>
        <v-col>
          <router-view app />
        </v-col>
      </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  },
  data: () => ({
    alignments: [
      'start',
      'center',
      'end'
    ]
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
