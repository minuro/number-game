<template>
  <v-container text-center>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1>履歴</h1>
      </v-flex>
      <v-flex xs12 mt-3>
        <router-link :to="{ name: 'top' }">
          <v-btn width="10rem" color="info">トップへ</v-btn>
        </router-link>
      </v-flex>
      <v-flex xs12>
        <HistoryList/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HistoryList from '../components/HistoryList'

export default {
  components: {
    HistoryList
  }
}
</script>


