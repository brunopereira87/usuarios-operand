<template>
  <div id="app">
    <transition name="modal">
      <Modal v-if="loading">
        <Loading />
      </Modal>
    </transition>
    <transition name="alert">
      <Alert v-if="alertMessage" />
    </transition>
    <Header v-if="mobile" />
    <main class="main-container">
      <router-view/>
    </main>
  </div>
</template>

<script>

import Header from '@/components/Header'; 
import Alert from '@/components/Alert'; 
import Modal from '@/components/Modal'; 
import Loading from '@/components/Loading'; 

import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    Header,
    Alert,
    Modal,
    Loading
  },
  computed: {
    ...mapState(['mobile', 'alertMessage', 'loading'])
  },
  watch: {
    $route(){
      this.$store.commit('UPDATE_MOBILE_OPEN', false);
      this.$store.dispatch('resetAlert');
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;// 1rem == 10px
}

body {
  @include fontsize("default");
  @include fontfamily("first");
  @include textcolor("dark");
}

h2 {
  @include fontsize("medium1");  
}
a {
  text-decoration: none;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .3s;
}
.btn {
  padding: 1rem 2rem;
  @include fontsize("default");
  border-radius: 5px;
  transition: all .2s;
}

.btn-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  @include bgcolor("highlight");
  @include textcolor("white");
  width: 3rem;
  height: 3rem;
  @include fontsize("default");
  border-radius: 3px;
  
  &:hover,
  &:active{
    @include textcolor("light");
  }
}
.btn-primary {
  @include bgcolor("first");
  @include textcolor("white");

  &:hover {
    opacity: 0.7;
  }
}
.main-container {
  width: 100%;
  max-width: 86rem;
  padding: 2rem;

  .page-title {
    text-align: center;
    margin-bottom: 3rem;
  }
}

.formulate-input {
  margin-bottom: 1rem;
}
.form-group {
  width: 100%;
  label {
    @include fontsize("default");
    @include textcolor("dark");
    font-weight: 700;
    margin-bottom: .5rem;
    display: block;
  }
}

.form-control {
  width: 100%;
  padding: 1rem;
  border: none;
  border-bottom: 2px solid map-get($colors,"light");
  outline: none;
  @include textcolor("dark");
  @include fontsize("default");

  &:focus {
    border-bottom: 2px solid map-get($colors,"dark");
  }
}

.formulate-input-errors {
  list-style: none;

  li {
    @include fontsize("small2");
    @include textcolor("error");
  }
}
.alert-enter,
.alert-leave-to {
  transform: translateY(-10vh);
  opacity: 0;
}

.alert-enter-active,
.alert-leave-active {
  transition: all 0.3s ease;
}

.modal-enter,
.modal-leave-to {
  transform: translateY(-10vh);
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}
</style>
