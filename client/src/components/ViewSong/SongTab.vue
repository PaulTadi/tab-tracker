<template>
<panel title="Tabs">
    <v-textarea
    class="song-tab"
    label="Tab"
    readonly
    v-model="songTab"
    >
    </v-textarea>
</panel>
</template>

<script>
export default {
  props: [
    'songTab'
  ]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-tab{
  font-family: monospace;
  font-size: 100%;
}
</style>
