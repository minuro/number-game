<template>
  <div>
    <span>{{id}} : </span>
    <span class="ml-5">答え ： {{answer}}</span>
    <span class="ml-5">入力回数 : {{count}}</span>
  </div>
</template>

<script>
export default {
  props: ['id', 'answer', 'count']
}
</script>
