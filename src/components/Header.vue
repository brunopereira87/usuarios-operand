<template>
  <header>
    <transition>
      <Navbar v-if="$store.state.mobileMenuOpen" />
    </transition>
    <div class="header-bar">
      <button class="mobile-button" aria-label="Menu" @click="UPDATE_MOBILE_OPEN(true)"></button>
    </div>
  </header>
</template>

<script>
import Navbar from './Navbar';
import { mapMutations } from 'vuex';
export default {
  name: 'Header',
  components: {
    Navbar
  },
  methods: {
    ...mapMutations(['UPDATE_MOBILE_OPEN'])
  }
}
</script>

<style lang="scss" scoped>
.header-bar {
  width: 100%;
  height: 6rem;
  @include bgcolor("first");
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.mobile-button {
  @include bgcolor("light");
  border-radius: 0.2rem;
  height: 3.6rem;
  width: 3.6rem;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  margin-right: 2rem;
}

.mobile-button::after {
  content: "";
  display: block;
  width: 2rem;
  height: 2px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 6px #fff, 0 -6px #fff;
  transition: 0.2s;
}

.v-enter,
.v-leave-to {
  transform: translateY(-10vh);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
</style>