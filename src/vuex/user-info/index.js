const USER_TEMPLATE = {
  userInfo: null
}

export default {
  state: Object.assign({}, USER_TEMPLATE),
  mutations: {
    SET_USERINFO (state, data) {
      state.userInfo = data
    }
  },
  getters: {},
  actions: {
    // 初始化本模块数据
    initUser ({ commit }, data) {
      let source = Object.assign({}, USER_TEMPLATE, data || {})
      commit('SET_USERINFO', source.userInfo)
    },
    // 测试
    saveUserInfo ({ commit }, data) {
      commit('SET_USERINFO', data)
    }
  }
}
