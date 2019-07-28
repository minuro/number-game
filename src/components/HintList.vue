<template>
  <v-container text-center>
    <v-layout wrap column justify-center>
      <v-flex xs12>
        <HintListItem 
        v-for="hint in $store.state.hints" 
        :key="hint.id"
        v-bind="hint"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HintListItem from './HintListItem'

export default {
  components: {
    HintListItem
  }
}
</script>
