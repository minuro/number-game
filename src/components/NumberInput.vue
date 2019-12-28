<template>
  <div>
    <v-text-field 
    class="display-1"
    maxlength="4" 
    solo 
    single-line
    v-model="inputNum"
    @keyup.enter="submit"
    :disabled="isFinished"
    />
    <v-btn width="10rem" color="info" @click="submit" :disabled="isFinished">決定</v-btn>
  </div>
</template>

<script>
export default {
    props: {
      isFinished:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return{
        inputNum: ''
      }
    },
    methods: {
      submit(){
        this.$emit('submit', this.inputNum)
      },
      clear(){
        this.inputNum = ''
      }
    }
}
</script>
