<template>
<v-layout column>
    <div class="dark elevation-2">
      <v-toolbar flat dense dark color="cyan">
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="action" />
      </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
            <slot>
                no slot content defined.
            </slot>
        </div>
    </div>
</v-layout>
</template>
<script>
export default {
//   data () {
//     return {
//       title: 'hello world'
//     }
//   }
  props: [
    'title'
  ]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
