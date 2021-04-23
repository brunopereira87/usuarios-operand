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
    <Header v-if="isMobile" />
    <Sidebar v-else />
    <main class="main-container">
      <router-view/>
    </main>
  </div>
</template>

<script>

import Header from '@/components/Header'; 
import Sidebar from '@/components/Sidebar'; 
import Alert from '@/components/Alert'; 
import Modal from '@/components/Modal'; 
import Loading from '@/components/Loading'; 

import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Alert,
    Modal,
    Loading
  },
  computed: {
    ...mapState(['isMobile', 'alertMessage', 'loading'])
  },
  methods: {
    ...mapMutations(['UPDATE_IS_MOBILE','UPDATE_MOBILE_OPEN','UPDATE_LOADING']),
    setIsMobile(){
      const { matches } = window.matchMedia('(max-width: 767px)');
      this.UPDATE_IS_MOBILE(matches);
    }
  },
  mounted(){
    window.addEventListener('resize',this.setIsMobile);
    this.setIsMobile();
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.setIsMobile)
  },
  watch: {
    $route(){
      this.UPDATE_MOBILE_OPEN(false);
      this.UPDATE_LOADING(true);
      // this.$store.dispatch('resetAlert');
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
  transition: all .3s;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .3s;
}
.btn {
  padding: 1rem 3rem;
  @include fontsize("default");
  border-radius: 5px;
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
  margin: 0 auto;
  .page-title {
    text-align: center;
    margin-bottom: 3rem;
    @include fontsize("large");
  }
}

.formulate-form {
  .btn {
    margin-top: 1rem;
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

@media (min-width: 768px) {
  #app {
    display: grid;
    grid-template-columns: #{"min(40vw, 350px)"} 1fr ;
  }
}
</style>
