<template>
  <v-container text-center>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1>number-game</h1>
      </v-flex>
      <v-flex xs12 mt-3>
        <router-link :to="{ name: 'sologame' }">
          <v-btn width="10rem" color="info">ソロ</v-btn>
        </router-link>
      </v-flex>
      <!-- <v-flex xs12 mt-3>
        <router-link :to="{ name: 'multitop' }">
          <v-btn width="10rem" color="info" :disabled="false">マルチ</v-btn>
        </router-link>
        <br>※準備中
      </v-flex> -->
      <v-flex xs12 mt-3>
        <router-link :to="{ name: 'history' }">
          <v-btn width="10rem" color="info">ソロ履歴</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    
}
</script>
