import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import App from './App.vue'
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.config.productionTip = false
Vue.use(VueScrollReveal);

Vue.use(PrismicVue, {
  endpoint: "https://chilinotchilly.cdn.prismic.io/api/v2",
  linkResolver,
  htmlSerializer,
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
