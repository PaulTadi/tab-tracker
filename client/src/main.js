// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import vuetify from '@/plugins/vuetify'
import store from '@/store/store'
import vueYouTube from '@/plugins/vueYouTube'
import Panel from '@/components/globals/Panel'

Vue.config.productionTip = false

sync(store, router)
Vue.component('panel', Panel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  vuetify,
  vueYouTube,
  template: '<App/>'
})
