<template>
  <div class="about">
    <div class="text">about me {{userInfo.userName}}</div>
    <div>
      <van-button type="default" @click="getGithubUserInfo">测试axios</van-button>
    </div>
    <div>测试结果：{{result}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'about',
  data () {
    return {
      result: null
    }
  },
  computed: {
    ...mapState({
      // 登陆者信息
      userInfo: state => state.userInfo.userInfo
    })
  },
  methods: {
    async getGithubUserInfo () {
      let data = {}
      let res = await this.$axios('/business/common/get_host', data)
      console.log(res)
    }
  }
}
</script>

<style lang="less">
.about {
  font-size: 0.5rem;
  text-align: center;
  .text {
    color: pink;
    text-align: center;
  }
}
</style>
