import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    isMobile: true,
    mobileMenuOpen: false,
    alertMessage:null,
    alertType:'success'
  },

  mutations: {
    UPDATE_LOADING(state, payload){
      state.loading = payload;
    },
    UPDATE_IS_MOBILE(state, payload){
      state.isMobile = payload;
    },
    UPDATE_MOBILE_OPEN(state, payload){
      state.mobileMenuOpen = payload;
    },
    UPDATE_ALERT_MESSAGE(state, payload){
      state.alertMessage = payload;
    },
    UPDATE_ALERT_TYPE(state, payload){
      state.alertType = payload;
    },
  },
  actions: {
    setAlert(context, payload){
      context.commit('UPDATE_ALERT_TYPE',payload.type)
      context.commit('UPDATE_ALERT_MESSAGE',payload.message);
    },
    resetAlert(context){
      context.dispatch('setAlert',{
        type: 'success',
        message: null
      })
    }
  }
})