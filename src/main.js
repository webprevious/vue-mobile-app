import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from '@/vuex/store.js'
import axios from '@/utils/axios/ajax.js'
import '@/assets/reset.css'
import MintUI from 'mint-ui'
import { Button, Field, Toast } from 'vant'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.use(Button).use(Field).use(Toast)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
