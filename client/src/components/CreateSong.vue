<template>
  <v-container fill-height>
    <v-row dense>
      <v-col cols="3">
        <panel title="Song Metadata">
          <v-text-field label="Title" v-model="title"></v-text-field>
          <v-text-field label="Artist" v-model="artist"></v-text-field>
          <v-text-field label="Genre" v-model="genre"></v-text-field>
          <v-text-field label="Album" v-model="album"></v-text-field>
          <v-text-field label="Album Image Url" v-model="albumImageUrl"></v-text-field>
          <v-text-field label="YouTube ID" v-model="youtubeId"></v-text-field>
        </panel>
      </v-col>
      <v-col cols="9">
        <panel title="Song Detail">
          <v-textarea label="Lyrics" v-model="lyrics"></v-textarea>
          <v-textarea label="Tab" v-model="tab"></v-textarea>
          <v-btn class="cyan" dark @click="create">Create Song</v-btn>
        </panel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  date () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
