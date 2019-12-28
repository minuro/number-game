<template>
  <div>
    <HintListItem 
    v-for="hint in $store.state.hints" 
    :key="hint.id"
    v-bind="hint"
    />
  </div>
</template>

<script>
import HintListItem from './HintListItem'

export default {
  components: {
    HintListItem
  }
}
</script>
