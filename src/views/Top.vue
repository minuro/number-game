<template>
  <v-container text-center>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1>number-game</h1>
      </v-flex>
      <v-flex xs12 mt-3>
        <router-link :to="{ name: 'game' }">
          <v-btn width="10rem" color="info">ゲーム開始</v-btn>
        </router-link>
        <router-link :to="{ name: 'history' }" class="ml-3">
          <v-btn width="10rem" color="info">履歴</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    
}
</script>
