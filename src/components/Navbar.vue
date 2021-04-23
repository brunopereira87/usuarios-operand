<template>
  <nav id="navbar">
    <button type="button" @click="UPDATE_MOBILE_OPEN(false)" v-if="isMobile">X</button>
    <ul>
      <li>
        <router-link to="/">Usuários</router-link>
      </li>
      <li>
        <router-link to="/usuarios/novo">Novo Usuário</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'NavBar',
  computed: {
    ...mapState(['isMobile','mobileMenuOpen'])
  },
  methods: {
    ...mapMutations(['UPDATE_MOBILE_OPEN'])
  }

}
</script>

<style lang="scss" scoped>
#navbar {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  @include bgcolor("first");
  position: fixed;


  ul {
    padding-top: 8rem;
  }
  li {
    list-style: none;
    text-align: center;
    margin-bottom: 1.5rem;
    a {
      @include fontsize("medium1");
      font-weight: 700;
      @include textcolor("white");
      &:hover,
      &:active {
        @include textcolor("light");
      }
    }

  }

  button {
    position: absolute ;
    background: none;
    @include fontsize("large");
    font-weight: 700;
    @include textcolor("white");
    top: 2rem;
    right: 3rem;
  }
}

@media( min-width: 768px) {
  #navbar {
    /* height: 100%; */
    position: relative;
  }
}

</style>