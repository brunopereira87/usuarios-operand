<template>
  <nav id="navbar">
    <button type="button" @click="UPDATE_MOBILE_OPEN(false)" v-if="mobile">X</button>
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
import { mapMutations } from 'vuex';
export default {
  name: 'NavBar',
  computed: {
    menuOpen(){
      return this.$store.state.mobileMenuOpen;
    },
    mobile(){
      return this.$store.state.mobileMenu;
    }
  },
  methods: {
    ...mapMutations(['UPDATE_MOBILE_OPEN'])
  }

}
</script>

<style lang="scss" scoped>
#navbar {
  width: 100%;
  height: 100vh;
  @include bgcolor("first");
  position: relative;

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
</style>