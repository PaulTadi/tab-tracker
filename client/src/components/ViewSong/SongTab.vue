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
import Panel from '@/components/Panel'
export default {
  props: [
    'songTab'
  ],
  components: {
    Panel
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-tab{
  font-family: monospace;
  font-size: 100%;
}
</style>
