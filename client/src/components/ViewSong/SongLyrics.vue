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
import Panel from '@/components/Panel'
export default {
  props: [
    'lyrics'
  ],
  components: {
    Panel
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-lyrics{
  font-family: monospace;
  font-size: 100%;
}
</style>
