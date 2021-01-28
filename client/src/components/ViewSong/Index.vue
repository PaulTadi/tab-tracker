<template>
  <v-container>
    <v-row dense>
      <v-col md="6">
        <song-metadata :song="song" />
      </v-col>
      <v-col md="6">
        <song-tube :youtubeId="song.youtubeId" />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col md="4">
        <song-lyrics :lyrics="song.lyrics" />
      </v-col>
      <v-col md="8">
        <song-tab :songTab="song.tab" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SongMetadata from '@/components/ViewSong/SongMetadata'
import SongsService from '@/services/SongsService'
import SongTab from '@/components/ViewSong/SongTab'
import SongTube from '@/components/ViewSong/SongTube'
import SongLyrics from '@/components/ViewSong/SongLyrics'
// import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    // Panel,
    SongMetadata,
    SongTab,
    SongTube,
    SongLyrics
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
