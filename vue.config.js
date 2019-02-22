/*
 * @Author: gys
 * @Date: 2019-02-21
 */

const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  publicPath: './', // 静态资源引用路径
  outputDir: 'dist', // 打包文件放置位置
  assetsDir: 'static', // 静态资源文件夹
  indexPath: 'index.html', // 入口文件位置，相对于outputDir
  filenameHashing: true, // 是否使用md5码
  lintOnSave: true, // eslint 错误处理，true表示对待eslint错误为warnings，warnings不会导致编译失败
  productionSourceMap: false, // 生产环境关闭source map
  integrity: false, // 内容安全策略及子资源完整性
  devServer: { // 代理配置
    proxy: {
      '^/api': {
        ws: false,
        target: 'http://wzh1.run.hzmantu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // disableHostCheck: true
    port: 8084
  },
  css:{
    sourceMap:false,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75.0,
            propList: ['*']
          })
        ]
      }
    }
  }
}
