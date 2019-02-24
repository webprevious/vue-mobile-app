<template>
  <div class="home">
    <div class="text">hello world</div>
    <div class="input-wrap">
      <van-field v-model="userName" placeholder="请输入用户名" />
      <van-button @click="saveUserInfoToVuex" type="primary">保存用户名到vuex</van-button>
    </div>
    <div>
      <van-button type="default" @click="goTo">去关于页面</van-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      userName: ''
    }
  },
  computed: {
    ...mapState({
      // 登陆者信息
      userInfo: state => state.userInfo.userInfo
    })
  },
  methods: {
    saveUserInfoToVuex () {
      let userInfo = {
        userName: this.userName
      }
      this.saveUserInfo(userInfo)
    },
    goTo () {
      if (this.userInfo) {
        this.$router.push('/about')
      } else {
        this.$toast('请填写用户名')
      }
    },
    ...mapActions(['saveUserInfo'])
  }
}
</script>

<style lang="less" scoped>
.home {
  text-align: center;
  .text {
    color: red;
    font-size: 0.38rem;
  }
  .input-wrap {
    display: flex;
    padding: 0.5rem;
    text-align: center;
  }
}
</style>
