<template>
  <div class="alert" :class="alertType || ''">
    <button @click="$store.dispatch('resetAlert')">
      <i class="fas fa-times"></i>
    </button>
    <p>
      <strong>{{alertMessage}}</strong>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Alert',
  data() {
    return {
      timeout: null
    }
  },
  computed: {
    ...mapState(['alertMessage', 'alertType'])
  },
  created(){
    this.timeout = setTimeout(() => {
      this.$store.dispatch('resetAlert');
    }, 3500)
  },
  beforeDestroy(){
    clearTimeout(this.timeout)
  }
}
</script>

<style lang="scss" scoped>
.alert {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  padding: 2rem;
  
  @include textcolor("white");
  display: flex;
  justify-content: center;
  align-items: center;
  
  p {
    text-align: center;
    @include fontsize("medium");
  }

  button {
    background: none;
    @include textcolor("white");
    @include fontsize("medium");
    position: absolute;
    top: 5px;
    right: 10px;
  }
}
.error {
  @include bgcolor("bgerror");
}
.success {
  @include bgcolor("bgsuccess");
}
</style>