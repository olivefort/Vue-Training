import Vue from 'vue'
import App from './App.vue'
import Contenu from './components/Contenu.vue'
import Liste from './components/Liste/Liste.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Routes from './Routes'

//pour que les branches communiques entre elles sans qu'elles soient lié directement parent/enfant il va falloir exporter un 'bus' à partir du main.js qui est l'élément root
export const bus = new Vue();

Vue.component('contenu', Contenu);
Vue.component('liste', Liste);

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
