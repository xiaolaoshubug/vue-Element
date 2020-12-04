### 下载安装nodeJS

- https://nodejs.org/en/download/

### cmd命令行下面查看版本

- node -v
- npm -v

### 安装node.js淘宝镜像加速器(cnpm)

- npm install cnpm -g

    ![image-20201202203329576](C:\Users\Administrator.DESKTOP-FV1ALCC\AppData\Roaming\Typora\typora-user-images\image-20201202203329576.png)

### 安装vue-cli

- npm install vue-cli -g

    ![image-20201202203426998](C:\Users\Administrator.DESKTOP-FV1ALCC\AppData\Roaming\Typora\typora-user-images\image-20201202203426998.png)

- 查看是否安装成功

    - vue list

        ![image-20201202203444854](C:\Users\Administrator.DESKTOP-FV1ALCC\AppData\Roaming\Typora\typora-user-images\image-20201202203444854.png)

### 创建vue-cli应用程序

- 创建一个基于webpack模板的vue应用程序

    - 在项目文件夹下：vue init webpack myvue (手动安装，全部选no)

        ![image-20201202203543857](C:\Users\Administrator.DESKTOP-FV1ALCC\AppData\Roaming\Typora\typora-user-images\image-20201202203543857.png)

- 进入myvue项目，安装项目依赖环境

    - npm install	(安装，如果失败了，会有提示你怎么去修复)

        ![image-20201202203635809](C:\Users\Administrator.DESKTOP-FV1ALCC\AppData\Roaming\Typora\typora-user-images\image-20201202203635809.png)

        ​			注：这里提示错误了

        ![image-20201202203734487](C:\Users\Administrator.DESKTOP-FV1ALCC\AppData\Roaming\Typora\typora-user-images\image-20201202203734487.png)

        - 根据提示修改

            ![image-20201202203820037](C:\Users\Administrator.DESKTOP-FV1ALCC\AppData\Roaming\Typora\typora-user-images\image-20201202203820037.png)

    - npm run dev  (命令行，启动项目)

        ![image-20201202203845198](C:\Users\Administrator.DESKTOP-FV1ALCC\AppData\Roaming\Typora\typora-user-images\image-20201202203845198.png)

### 下载安装webpack

- npm install webpack -g

    ![image-20201203183247642](C:\Users\Administrator.DESKTOP-FV1ALCC\AppData\Roaming\Typora\typora-user-images\image-20201203183247642.png)

- npm install webpack-cli -g

    ![image-20201203183431584](C:\Users\Administrator.DESKTOP-FV1ALCC\AppData\Roaming\Typora\typora-user-images\image-20201203183431584.png)

- 测试安装是否成功

    - webpack -v

    - webpack-cli -v

        ![image-20201203183620593](C:\Users\Administrator.DESKTOP-FV1ALCC\AppData\Roaming\Typora\typora-user-images\image-20201203183620593.png)

#### 配置文件webpack.config.js

- entry：入口文件

- output：输出，指定webpack吧处理完的文件放置到指定路径

- module：模块，用于处理各种类型的文件

- plugins：插件，如：热更新，代码重用等

- resolve：设置路径指向

- watch：监听，用于设置文件改动后直接打包

#### 使用webpack

- 打包：webpack
- 监听打包：webpack --watch

### vue-router路由

- 在当前项目下安装：npm install vue-router --save-dev

- 使用vue-router

    - 在components下面创建一个`Main.vue`组件

        ````vue
        <template>
            <h1>首页</h1>
        </template>

        <script>
            export default {
                //  这里的name命名必须以大写开头，不然浏览器会提示语法错误，不影响功能
                name: "Main"
            }
        </script>

        <style scoped>

        </style>

        ````

    - 创建路由文件夹来存放路由文件，index.js

        ````js
        /*
        主配置文件
        */
        /*导入 相当于Java导入jar包 */
        import Vue from 'vue'
        import VueRouter from "vue-router";
        import Content from "../components/Content";
        import Main from "../components/Main";

        /*安装路由*/
        Vue.use(VueRouter);

        /*
        配置导出路由*/
        export default new VueRouter({
          routes: [
            {
              //  配置路由请求路径    相当于Java RequestMapping("/content")
              path: '/content',
              name: 'content',		//	这个name可以不用写
              //  跳转的组件
              component: Content
            }, {
              //  路由路径
              path: '/main',
              name: 'content',
              //  跳转的组件
              component: Main
            }
          ]
        });

        ````

    - 在main.js里面导入路由文件夹并配置路由

        ````js
        import Vue from 'vue'
        import App from './App'
        import router from './router' // 自动扫描路由文件

        Vue.config.productionTip = false

        new Vue({
          el: '#app',
          //  配置路由  这里必须写router和上面对应，不然报错
          router,
          components: {App},
          template: '<App/>'
        })
        ````

    - App.vue使用已配置的路由

        ````vue
        <template>
          <div id="app">
            <h1>Vue-Router</h1>
            <!--控制页面链接，这里可以看做a标签，to属性相当于href属性-->
            <router-link to="/main">首页</router-link>
            <router-link to="/content">内容</router-link>
            <!--这里点击链接展示的页面内容-->
            <router-view></router-view>
          </div>
        </template>

        <script>

        export default {
          name: 'App'
        }
        </script>

        <style>
        #app {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
        }
        </style>
        ````


### 创建vue项目整体步骤

- 在目录下创建vue项目：`vue init webpack myvue`  (一路no，自己安装)
- 安装路由vue-router：`npm install vue-router --save-dev`  (进入项目目录)
- 安装Element UI：`npm i element-ui -S`
- 安装依赖：`npm install`
- 安装 SASS 加速器：`cnpm install sass-loader node-sass --save-dev`    (同时安装sass-loader、node-sass，可能会出现版本不兼容问题，降低版本)
- 命令缩语：`save   (-S)  dev  (D)`
- 启动Vue项目测试：`npm run dev`
- 上面命令如果出现安装失败，可以使用cnpm安装，前提是已经安装了cnpm
- 参考博客地址：https://blog.csdn.net/okForrest27/article/details/106849246?utm_medium=distribute.pc_feed_404.none-task-blog-BlogCommendFromBaidu-2.nonecase&depth_1-utm_source=distribute.pc_feed_404.none-task-blog-BlogCommendFromBaidu-2.nonecas

