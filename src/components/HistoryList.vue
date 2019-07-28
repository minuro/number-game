<template>
  <v-container text-center>
    <v-layout wrap column justify-center>
      <v-flex xs12>
        <HistoryListItem 
        v-for="history in $store.state.histories" 
        :key="history.id"
        v-bind="history"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HistoryListItem from './HistoryListItem'

export default {
  components: {
    HistoryListItem
  }
}
</script>
