<template>
  <v-alert
  border="left"
  colored-border
  :type="alertType"
  elevation="2"
  v-if="message"
  >
    {{message}}
  </v-alert>
</template>

<script>
export default {
  props: {
    alertType: {
      type: String,
      default: 'info',
      required: true
    },
    message: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>