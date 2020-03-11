import Vue from 'vue';
import App from './App.vue';
import vuetify from './config/vuetify';
import VueRouter from 'vue-router';

import Home from './views/Home';
import Pets from './views/Pets';

Vue.config.productionTip=false;
Vue.use(VueRouter)


const routes= [
  { path: "/", component:Home},
  { path: "/pets", component:Pets}
]
let router = new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
