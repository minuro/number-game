<template>
  <v-container text-center>
    <v-layout row wrap justify-center>
      <Modal @close="closeModal" v-if="modal">
        <p>{{modalMessage}}</p>
        <v-btn color="info" @click="closeModal">閉じる</v-btn>
      </Modal>

      <v-flex xs12>
        <AlertArea alert-type="info" :message="infoMessage"/>
        <AlertArea alert-type="error" :message="errorMessage"/>
      </v-flex>
      <v-flex xs12>
        <h1>your number : {{myNum}}</h1>
        <h1>４桁の数字を入力してください</h1>
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
import firebase from 'firebase'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  components: {
    HintList,
    AlertArea,
    NumberInput,
    Modal
  },
  mixins: [Util, firebase],
  data() {
    return {
      hint: {},
      enemyNum: '',
      myNum: '',
      infoMessage: '',
      errorMessage: '',
      isFinished: false,
      modalMessage: '',
      modal: false,
      roomId: '',
      playerNo: '',
      ref: Object,
      unsubscribe: Function
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

        let nextPlayer = this.playerNo == 1 ? 2 : 1
        this.changeTurn(nextPlayer)
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
  mounted() {
    this.roomId = this.$store.state.roomID
    this.playerNo = this.$store.state.playerNo
    this.myNum = this.makeEnemy()
    this.ref = firebase.firestore().collection("rooms").doc(this.roomId)
    // this.unsubscribe = ref.onSnapshot(snapshot => {
    //   let data = snapshot.data()
    //   if(data.match.turn == this.playerNo){
        
    //   }
    // })
  },
  destroyed() {
    this.unsubscribe()
  },
  computed: {
    ...mapGetters(['hintCount'])
  }
}
</script>

