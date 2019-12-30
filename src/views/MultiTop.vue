<template>
  <v-container text-center>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <AlertArea alert-type="error" :message="errorMessage"/>
      </v-flex>
      <v-flex xs12>
        <h1>部屋を作成または入室してください</h1>
      </v-flex>
      <v-flex xs12 mt-3>
        <router-link :to="{ name: 'top' }">
          <v-btn width="10rem" color="info">トップへ</v-btn>
        </router-link>
      </v-flex>
      <v-flex  xs6 sm4 md2 mt-10>
        <v-text-field 
        class="display-1"
        maxlength="4" 
        v-model="roomNo"
        solo 
        single-line
        />
      </v-flex>
      <v-flex xs12 mt-3>
        <v-btn width="10rem" color="info" @click="makeGame">作る</v-btn>
      </v-flex>
      <v-flex xs12 mt-3>
        <v-btn width="10rem" color="info" @click="joinGame">入る</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AlertArea from '../components/AlertArea'
import FireStore from '../js/firestore'
import Util from '../js/util'

export default {
  mixins: [FireStore, Util],
  components: {
    AlertArea
  },
  data() {
    return {
      roomNo: '',
      errorMessage: ''
    }
  },
  methods: {
    makeGame(){
      this.errorMessage = this.checkInputNum(this.roomNo)
      if(!this.errorMessage){
        this.makeRoom(this.roomNo)
      }
    },
    joinGame(){
      this.errorMessage = this.checkInputNum(this.roomNo)
      if(!this.errorMessage){
        this.joinRoom(this.roomNo)
      }
    }
  }
}
</script>