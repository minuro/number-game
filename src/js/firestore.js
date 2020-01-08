import db from 'firebase'
import {mapActions} from 'vuex'

export default{
  data(){
    return {
      dbRoomId: ''
    }
  },
  methods:{
    makeRoom(roomNo){
      this.getRoom(roomNo)
      setTimeout(() => {
        this.setRoom(roomNo, 1)
        this.$router.push({name: 'multiwait'})
      }, 500);
    },
    joinRoom(roomNo){
      this.getRoom(roomNo)
      setTimeout(() => {
        this.setRoom(roomNo, 2)
        this.$router.push({name: 'multigame'})
      }, 500);
    },
    setRoom(roomNo, num){
      if(!this.dbRoomId){
        let room = {}
        room.roomNo = roomNo
        room.player1 = 1
        room.player2 = -1
        room.turn -1
        room.player1Num = ''
        room.player2Num = ''
        let ref = db.firestore().collection("rooms").doc()
        ref.set(room)
        this.setRoomID(ref.id)
      }
      else if(num == 2){
        db.firestore().collection("rooms").doc(this.$store.state.roomID).update({
          player2: 1
        })
      }
    },
    getRoom(roomNo){
      db.firestore().collection('rooms').where("roomNo", "==", roomNo).limit(1).get().then(snapshot => {
        snapshot.forEach(doc => {
          this.dbRoomId = doc.id
          this.setRoomID(this.dbRoomId)
        })
      })
    },
    getEnemy(roomID, playerNo){
      db.firestore().collection('rooms').doc(roomID).get().then(snapshot => {
        snapshot.forEach(doc => {
          if(playerNo == 1){
            this.setEnemy(doc.player1Num)
          }
          else{
            this.setEnemy(doc.player2Num)
          }
        })
      })
    },
    changeTurn(playerNo){
      db.firestore().collection("rooms").doc(this.$store.state.roomID).update({
        turn: playerNo
      })
    },
    ...mapActions(['setRoomID'])
  }
}