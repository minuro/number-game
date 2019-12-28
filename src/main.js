import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false
  
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCSEWy48qaEmutbavBhrcrpWiI6x0hDsNY",
  authDomain: "number-game-3b7b4.firebaseapp.com",
  databaseURL: "https://number-game-3b7b4.firebaseio.com",
  projectId: "number-game-3b7b4",
  storageBucket: "number-game-3b7b4.appspot.com",
  messagingSenderId: "1087258322294",
  appId: "1:1087258322294:web:e13504ef5619a5ad2d0657",
  measurementId: "G-TZEY4MRB8P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
