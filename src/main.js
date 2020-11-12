import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import App from './App.vue'
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTailwind from 'vue-tailwind'
import Meta from 'vue-meta';


import '@/assets/css/tailwind.css';

Vue.config.productionTip = false
Vue.use(VueScrollReveal);
Vue.use(require('vue-moment'));
Vue.use(VueAxios, axios)
Vue.use(Meta);

const settings = {
  // Single tag elements
  TPagination: {
    classes: {
      wrapper: 'table border-collapse text-center mx-auto text-xmd',
      element: 'w-12 h-12 table-cell p-sm',
      disabledElement: 'w-12 h-12 table-cell',
      ellipsisElement: 'w-12 h-12 hidden md:table-cell',
      activeButton: 'bg-primary text-white w-full h-full rounded',
      disabledButton: 'opacity-25 w-full h-full cursor-not-allowed rounded',
      button: 'hover:bg-chili-red hover:text-white w-full h-full focus:outline-none rounded',
      ellipsis: '',
    }
  }
}

// Add the settings as the second parameter when you register your component
Vue.use(VueTailwind, settings)



Vue.use(PrismicVue, {
  endpoint: "https://chilinotchilly.cdn.prismic.io/api/v2",
  linkResolver,
  htmlSerializer,
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')