import Vue from 'vue'
import App from './App.vue'
import vuetify from './config/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
