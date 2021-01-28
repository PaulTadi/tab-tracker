<template>
<panel title="Song Metadata">
    <v-row dense>
        <v-col>
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
                name: 'song-edit',
                params: {
                  songId: song.id
                  }
                })">
                edit
                </v-btn>
            </v-row>
        </v-col>
        <v-col>
            <img class="album-image" :src="song.albumImageUrl" />
            <div class="song-album">
                {{song.album}}
            </div>
        </v-col>
    </v-row>
</panel>
</template>

<script>
export default {
  props: [
    'song'
  ],
  methods: {
    // navigation methode not utilised
    navigateTo (route) {
      this.$router.push(route)
    }
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
  font-size: 24px;
}
.song-artist{
  font-size: 24px;
}
.song-genre{
  font-size: 24px;
}
.album-image{
  width: 75%;
  margin: 0 auto;
}
</style>
