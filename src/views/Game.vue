<template>
<v-container text-center>
  <v-layout row wrap justify-center>
    <v-flex xs12>
      <v-alert
      border="left"
      colored-border
      type="info"
      elevation="2"
      v-if="infoMessage"
      >
        {{infoMessage}}
      </v-alert>
      <v-alert
      border="left"
      colored-border
      type="error"
      elevation="2"
      v-if="errorMessage"
      >
        {{errorMessage}}
      </v-alert>
    </v-flex>
    <v-flex xs12>
      <h1>４桁の数字を入力してください。{{enemyNum}}</h1>
    </v-flex>
    <v-flex xs12 mt-3>
      <router-link :to="{ name: 'top' }">
        <v-btn width="10rem" color="info" @click="clear">トップへ</v-btn>
      </router-link>
    </v-flex>
    <v-flex xs6 sm4 md2 mt-10>
      <v-text-field 
      class="display-1"
      maxlength="4" 
      solo 
      single-line
      v-model="inputNum"
      @keyup.enter="submit"
      :disabled="isFinished"
      >
      </v-text-field>
      <v-btn width="10rem" color="info" @click="submit" :disabled="isFinished">決定</v-btn>
    </v-flex>
    <v-flex xs12>
      <HintList/>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import HintList from '../components/HintList'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  components: {
    HintList
  },
  data() {
    return {
      hint: {},
      inputNum: '',
      enemyNum: '',
      infoMessage: '',
      errorMessage: '',
      isFinished: false
    }
  },
  methods: {
    submit(){
      this.clearMessage()
      if(this.inputCheck(this.inputNum)){
        this.hint.num = this.inputNum
        this.hint.blow = this.countBlow(this.inputNum)
        this.hint.hit = this.countHit(this.inputNum)
        this.infoMessage = '入力：' + this.hint.num + ',  blow：' + this.hint.blow + ',  hit：' + this.hint.hit
        this.addHint(this.hint)
        this.inputNum = ''
      }
      if(this.checkFinish()){
        this.addHistory({answer: this.enemyNum, count: this.hintCount})
        alert("おめでとう！\n答え：" + this.enemyNum + '\n入力回数：' + this.hintCount)
      }
      this.hint = {}
    },
    clear(){
      this.clearMessage()
      this.clearHint()
    },
    inputCheck(num){
      if(!num){
        this.errorMessage = '数字を入力してください'
        return false
      }
      if(num.length != 4){
        this.errorMessage = '4文字で入力してください'
        return false
      }
      if(/\D/g.test(num)){
        this.errorMessage = '数字を入力してください'
        return false
      }
      if(!this.onlyCheck(num)){
        this.errorMessage = '同じ数字は一つまでです'
        return false
      }
      
      return true
    },
    onlyCheck(num){
      for(let i = 0; i < 10; i++){
        if((num.split(i).length - 1) > 1) {
          return false
        }
      }
      return true
    },
    validate() { 
      this.inputNum = this.inputNum.replace(/\D/g, '')
    },
    clearMessage(){
      this.infoMessage = ''
      this.errorMessage = ''
    },
    makeEnemy(){
      let isOnly = false
      let tempNum = ''
      while(!isOnly){
        tempNum = String(Math.floor(Math.random() * 10000))
        tempNum = ('0000' + tempNum).slice(-4)
        isOnly = this.onlyCheck(tempNum)
      }
      this.enemyNum = tempNum
    },
    countBlow(num){
      let blow = 0
      for(let i = 0; i < 4; i++){
        if(this.enemyNum.includes(num.charAt(i))){
          blow++
        }
      }
      return blow
    },
    countHit(num){
      let hit = 0
      for(let i = 0; i < 4; i++){
        if(this.enemyNum.charAt(i) == num.charAt(i)){
          hit++
        }
      }
      return hit
    },
    checkFinish(){
      if(this.hint.hit == 4){
        this.isFinished = true
        return true
      }
      return false
    },
    ...mapActions(['addHint', 'clearHint', 'addHistory'])
  },
  created() {
    this.makeEnemy()
  },
  computed: {
    ...mapGetters(['hintCount'])
  }
}
</script>

