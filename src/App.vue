<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
    }
  }
};
</script>

<style lang="scss">
a {
    text-decoration: none;
}
</style>