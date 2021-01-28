<template>
 <panel title="Songs">
      <v-btn
        slot="action"
        class="mt-2 accent-2"
        fab
        light
        medium
        absolute
        right
        middle
        color="cyan"
        to="/songs/create"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
            <div v-for="song in songs"
            class="song"
            :key="song.id">
              <v-row dense>
              <v-col col="6">
              <v-row dense>
                <div class="song-title">
                  {{song.title}}
                </div>
              </v-row>
              <v-row dense>
                <div class="song-artist">
                  {{song.artist}}
                </div>
              </v-row>
              <v-row dense>
                <div class="song-genre">
                  {{song.genre}}
                </div>
              </v-row>
              <v-row dense>
                <v-btn
                dark
                class="mt-1"
                color="cyan"
                @click="navigateTo({
                name: 'song',
                params: {
                  songId: song.id
                  }
                })">
                View
                </v-btn>
              </v-row>
              </v-col>
              <v-col col="6">
                <img class="album-image" :src="song.albumImageUrl" />
              </v-col>
              </v-row>
            </div>
        </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  methods: {
  // navigation methode not utilised
    navigateTo (route) {
      this.$router.push(route)
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
.song{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title{
  font-size: 30px;
}
.song-artist{
  font-size: 24px;
}
.song-genre{
  font-size: 24px;
}
.album-image {
  width: 100%;
  margin: 0 auto;
}
</style>
