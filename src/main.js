import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// // import style
// import 'swiper/css/swiper.css'
// // If you use Swiper 6.0.0 or higher
// import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
