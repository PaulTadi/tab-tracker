<template>
    <v-layout column>
        <panel title="Songs">
            <div v-for="song in songs"
            :key="song.title">
                {{song.title}} -
                {{song.artist}} -
                {{song.album}}
            </div>
        </panel>
    </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // do  a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
