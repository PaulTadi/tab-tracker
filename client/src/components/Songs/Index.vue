<template>
<v-container>
  <v-row>
    <v-col md="8"
        offset-md="2">
        <songs-panel />
    </v-col>
  </v-row>
</v-container>
</template>
<script>

import SongsPanel from '@/components/Songs/SongsPanel'
export default {
  components: {
    SongsPanel
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
