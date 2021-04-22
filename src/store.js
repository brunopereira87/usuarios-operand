import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    mobileMenu: true,
    mobileMenuOpen: false,
    error:null
  },

  mutations: {
    UPDATE_LOADING(state, payload){
      state.loading = payload;
    },
    UPDATE_MOBILE(state, payload){
      state.mobileMenu = payload;
    },
    UPDATE_MOBILE_OPEN(state, payload){
      state.mobileMenuOpen = payload;
    },
    UPDATE_ERROR(state, payload){
      state.error = payload;
    }
  }
})