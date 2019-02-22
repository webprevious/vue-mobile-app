# rem-vant-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### 目录介绍

> 处理了移动自适应问题，100px = 1rem，解决了vant中但是px转换成rem，封装了axios和vuex持久化

##### public目录是项目index.html和title上的icon

##### src是项目源码目录

* assets目录
> 放置图片，样式静态资源目录
* components目录
> 放置组件，组件以大驼峰命名，可以按模块使用文件夹进行管理，文件夹命名推荐使用小写-进行连接
* utils目录
> 放置工具函数，比如axios请求，此处axios封装比较简单，还可以对axios的请求和返回进行拦截分析，配置参考axios官网
* views目录
> 放置页面，可以使用文件夹进行管理，根据项目需求，一般不需要按文件夹进行管理
* vuex目录
> 状态管理目录，大型项目建议按模块进行划分，根据项目需求使用sessionStorage或者localStorage进行数据持久化
* App.vue
> 项目主组件
* main.js
> 项目入口文件
* router.js
> 路由配置文件，当前有2个路由页面home和about

##### .editorconfig是vs code编辑器代码编辑爱好

##### .env文件是项目环境监控文件

##### .env.development是开发环境时项目环境配置，配置的键值对可以在全局process.env中获取

##### .env.production是生产环境时（也就是线上环境）项目环境配置，配置的键值对可以在全局process.env中获取

##### .env.production是测试环境时（也就是线上预发测试环境）项目环境配置，配置的键值对可以在全局process.env中获取

##### .gitignore项目上传到git时的忽略文件，也就是不上传的文件

##### babel.config.js babel打包转译时的配置文件，里面配置本次移动端开发

##### package.json，package-lock.json项目依赖配置文件

##### vue.config.js vue-cli3项目的配置文件，简化了vue-cli2的webpack配置

##### yarn.lock 使用yarn包管理工具的配置文件
