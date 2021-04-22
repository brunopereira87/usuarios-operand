import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import VueFormulate from '@braid/vue-formulate';


Vue.config.productionTip = false
Vue.use(VueFormulate, {
  locales: {
    en : {
      required(){
        return 'Por favor, preencha este campo'
      },
      email(){
        return 'Por favor, insira um email válido'
      }
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
