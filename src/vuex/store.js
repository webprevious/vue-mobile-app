import Vue from 'vue'
import Vuex from 'vuex'
import { getSessionStorage, setSessionStorage } from '@/utils/session-storage/index.js'
import userInfo from './user-info/index.js'

Vue.use(Vuex)

const VUEX_STORAGE = 'VUEX_STORAGE'
let store = new Vuex.Store({
  modules: {
    userInfo
  }
})

// 订阅mutation事件，并且写入sessionStorage中，类似快照
store.subscribe((mutation, state) => {
  setSessionStorage(VUEX_STORAGE, state)
})

// 初始化vuex状态，从sessionStorage缓存中读取数据，这样页面就算刷新，也能保证页面正常运行
function initVuex () {
  let oldVuexStore = getSessionStorage(VUEX_STORAGE) || {}
  store.dispatch('initUser', oldVuexStore.userInfo)
}

// 初始化vuex
initVuex()

export default store
