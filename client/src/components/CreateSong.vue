<template>
  <v-container>
    <v-row dense>
      <v-col cols="4">
        <panel title="Song Metadata">
          <v-text-field
          label="Title*"
          required
          :rules="[required]"
          v-model="song.title">
          </v-text-field>
          <v-text-field
          label="Artist*"
          required
          :rules="[required]"
          v-model="song.artist">
          </v-text-field>
          <v-text-field
          label="Genre*"
          required
          :rules="[required]"
          v-model="song.genre">
          </v-text-field>
          <v-text-field
          label="Album*"
          required
          :rules="[required]"
          v-model="song.album">
          </v-text-field>
          <v-text-field
          label="Album Image Url*"
          required
          :rules="[required]"
          v-model="song.albumImageUrl">
          </v-text-field>
          <v-text-field
          label="YouTube ID*"
          required
          :rules="[required]"
          v-model="song.youtubeId">
          </v-text-field>
        </panel>
      </v-col>
      <v-col cols="8">
        <panel title="Song Detail">
          <v-textarea
          label="Lyrics*"
          required
          :rules="[required]"
          v-model="song.lyrics">
          </v-textarea>
          <v-textarea
          label="Tab*"
          required
          :rules="[required]"
          v-model="song.tab">
          </v-textarea>
            <v-alert
            dense
            outlined
            type="error"
            v-if="error"
            >
            Please <strong>fill in all </strong> the <strong>required</strong> fields.
            </v-alert>
          <v-btn class="cyan" dark @click="create">Create Song</v-btn>
        </panel>
      </v-col>
      </v-row>
  </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
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
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
