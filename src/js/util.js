export default{
  methods:{
    makeEnemy(){
      let isOnly = false
      let tempNum = ''
      while(!isOnly){
        tempNum = String(Math.floor(Math.random() * 10000))
        tempNum = ('0000' + tempNum).slice(-4)
        isOnly = this.checkOnlyNum(tempNum)
      }
      return tempNum
    },
    countBlow(enemyNum, inputNum){
      let blow = 0
      for(let i = 0; i < 4; i++){
        if(enemyNum.includes(inputNum.charAt(i))){
          blow++
        }
      }
      return blow
    },
    countHit(enemyNum, inputNum){
      let hit = 0
      for(let i = 0; i < 4; i++){
        if(enemyNum.charAt(i) == inputNum.charAt(i)){
          hit++
        }
      }
      return hit
    },
    makeHint(enemyNum, inputNum){
      let hint = {}
      hint.num = inputNum
      hint.blow = this.countBlow(enemyNum, inputNum)
      hint.hit = this.countHit(enemyNum, inputNum)
      return hint
    },
    makeInfoMessage(hint){
      return '入力：' + hint.num + ',  blow：' + hint.blow + ',  hit：' + hint.hit
    },

    // チェックメソッド
    checkInputNum(num){
      if(!num){
        return '数字を入力してください'
      }
      if(num.length != 4){
        return '4文字で入力してください'
      }
      if(/\D/g.test(num)){
        return '数字を入力してください'
      }
      if(!this.checkOnlyNum(num)){
        return '同じ数字は一つまでです'
      }
      
      return ''
    },
    checkOnlyNum(num){
      for(let i = 0; i < 10; i++){
        if((num.split(i).length - 1) > 1) {
          return false
        }
      }
      return true
    },
    checkFinish(hint){
      if(hint.hit == 4){
        return true
      }
      return false
    },
  }
}