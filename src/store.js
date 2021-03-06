import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hints: [],
    histories: [],
    roomID: '',
    enemy: '',
    playerNo: {
      type: Number
    }
  },
  mutations: {
    addHint(state, hint){
      hint.id = state.hints.length + 1
      state.hints.push(hint)
    },
    clearHint(state){
      state.hints = []
    },
    addHistory(state, history){
      history.id = state.histories.length + 1
      state.histories.push(history)
    },
    setRoomID(state, roomID){
      state.roomID = roomID
    },
    setPlayerNo(state, playerNo){
      state.playerNo = playerNo
    },
    setEnemy(state, enemy){
      state.enemy = enemy
    }
  },
  actions: {
    addHint({commit}, hint){
      commit('addHint', hint)
    },
    clearHint({commit}){
      commit('clearHint')
    },
    addHistory({commit}, history){
      commit('addHistory', history)
    },
    setRoomID({commit}, roomID){
      commit('setRoomID', roomID)
    },
    setPlayerNo({commit}, playerNo){
      commit('setRoomID', playerNo)
    },
    setEnemy({commit}, enemy){
      commit('setRoomID', enemy)
    }
  },
  getters: {
    hintCount: state => state.hints ? state.hints.length : 0
  }
})
