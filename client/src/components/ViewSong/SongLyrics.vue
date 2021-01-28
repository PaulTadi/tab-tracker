<template>
    <panel title="Lyrics">
        <v-textarea
        class="song-lyrics"
        v-model="lyrics"
        >
        </v-textarea>
    </panel>
</template>

<script>
export default {
  props: [
    'lyrics'
  ]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-lyrics{
  font-family: monospace;
  font-size: 100%;
}
</style>
