<template>
  <div id="app">
    <Header v-if="mobile" />
    <main class="main-container">
      <router-view/>
    </main>
  </div>
</template>

<script>

import Header from '@/components/Header'; 
export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    mobile(){
      return this.$store.state.mobileMenu;
    },
    error(){
      return this.$store.state.error;
    }
  },
  watch: {
    $route(){
      this.$store.commit('UPDATE_MOBILE_OPEN', false);
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
}
.btn {
  padding: 1rem 2rem;
  @include fontsize("default");
  border-radius: 5px;
  transition: all .2s;
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
  }
}
</style>
