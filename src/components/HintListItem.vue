<template>
  <div>
    <span>{{id}} : {{num}}</span>
    <span class="ml-5">blow : {{blow}}</span>
    <span class="ml-5">hit : {{hit}}</span>
  </div>
</template>

<script>
export default {
  props: ['id', 'num', 'blow', 'hit']
}
</script>
