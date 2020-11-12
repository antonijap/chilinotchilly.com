import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import App from './App.vue'
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal';
import axios from 'axios'
import VueAxios from 'vue-axios'

import '@/assets/css/tailwind.css';

Vue.config.productionTip = false
Vue.use(VueScrollReveal);
Vue.use(require('vue-moment'));
Vue.use(VueAxios, axios)

Vue.use(PrismicVue, {
  endpoint: "https://chilinotchilly.cdn.prismic.io/api/v2",
  linkResolver,
  htmlSerializer,
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')