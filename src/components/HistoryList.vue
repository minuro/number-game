<template>
  <div>
    <HistoryListItem 
    v-for="history in $store.state.histories" 
    :key="history.id"
    v-bind="history"
    />
  </div>
</template>

<script>
import HistoryListItem from './HistoryListItem'

export default {
  components: {
    HistoryListItem
  }
}
</script>
