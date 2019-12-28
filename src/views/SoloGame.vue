<template>
  <v-container text-center>
    <v-layout row wrap justify-center>
      <Modal @close="closeModal" v-if="modal">
        <p>{{modalMessage}}</p>
        <v-btn color="info" @click="closeModal">閉じる</v-btn>
      </Modal>

      <v-flex xs12>
        <AlertArea alert-type="info" v-bind:message="infoMessage"/>
        <AlertArea alert-type="error" v-bind:message="errorMessage"/>
      </v-flex>
      <v-flex xs12>
        <h1>４桁の数字を入力してください</h1>
      </v-flex>
      <v-flex xs12 mt-3>
        <router-link :to="{ name: 'top' }">
          <v-btn width="10rem" color="info" @click="clear">トップへ</v-btn>
        </router-link>
      </v-flex>
      <v-flex xs6 sm4 md2 mt-10>
        <NumberInput ref="numberInput" @submit="submit" :isFinished="isFinished" />
      </v-flex>
      <v-flex xs12 mt-3>
        <HintList/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HintList from '../components/HintList'
import AlertArea from '../components/AlertArea'
import NumberInput from '../components/NumberInput'
import Modal from '../components/Modal'
import Util from '../js/util'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  components: {
    HintList,
    AlertArea,
    NumberInput,
    Modal
  },
  mixins: [Util],
  data() {
    return {
      hint: {},
      enemyNum: '',
      infoMessage: '',
      errorMessage: '',
      isFinished: false,
      modalMessage: '',
      modal: false,
    }
  },
  methods: {
    submit(inputNum){
      this.clearMessage()
      this.errorMessage = this.checkInputNum(inputNum)
      if(!this.errorMessage){
        this.hint = this.makeHint(this.enemyNum, inputNum)
        this.infoMessage = this.makeInfoMessage(this.hint)
        this.addHint(this.hint)
        this.$refs.numberInput.clear()
      }
      if(this.checkFinish(this.hint)){
        this.isFinished = true
        this.addHistory({answer: this.enemyNum, count: this.hintCount})
        //alert("おめでとう！\n答え：" + this.enemyNum + '\n入力回数：' + this.hintCount)
        this.modalMessage = "おめでとう！\n答え：" + this.enemyNum + '\n入力回数：' + this.hintCount
        this.openModal()
      }
      this.hint = {}
    },
    clear(){
      this.clearMessage()
      this.clearHint()
    },
    clearMessage(){
      this.infoMessage = ''
      this.errorMessage = ''
    },
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    ...mapActions(['addHint', 'clearHint', 'addHistory'])
  },
  created() {
    this.enemyNum = this.makeEnemy()
  },
  computed: {
    ...mapGetters(['hintCount'])
  }
}
</script>

