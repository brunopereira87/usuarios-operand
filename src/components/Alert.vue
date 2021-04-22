<template>
  <div class="alert">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  computed: {
    error(){
      return this.$store.state.error;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>