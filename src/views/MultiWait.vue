<template>
  <v-container text-center>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1>対戦相手を探しています</h1>
        <br>
        <v-img
          :src="require('../assets/loading.gif')"
          contain
          height="200"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'
// import firestore from '../js/firestore'

export default {
  data(){
    return{
      unsubscribe: Function
    }
  },
  mounted(){
    this.unsubscribe = firebase.firestore().collection("rooms").doc(this.$store.state.roomID).onSnapshot(snapshot => {
      let data = snapshot.data()
      if(data.player2 != -1){
        this.$router.push('multigame')
      }
    })
  },
  destroyed(){
    this.unsubscribe()
  }
}
</script>