// 导入
import Vue from 'vue'
import Router from 'vue-router'
import Main from "../views/Main";
import Login from "../views/Login";
import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";
import NotFound from "../views/NotFound";

//  安装路由
Vue.use(Router);

//  配置路由
export default new Router({
  /**
   * 路由模式有两种
   * hash：路径带 # 符号，如 http://localhost/#/login  (默认方式)
   * history：路径不带 # 符号，如 http://localhost/login
   */
  mode: 'history',
  routes:
    [
      {
        //首页
        path: '/main',
        component: Main,
        name: 'Main',
        //  写入子模块
        children: [
          //  传递id参数
          {
            path: '/user/profile/:id',
            component: UserProfile,
            //  对象名
            name: 'UserProfile',
            //  绑定参数
            props: true
          },
          {
            path: '/user/list', component: UserList
          }
        ]
      }, {
      //登陆页
      path: '/login',
      component: Login
    }, {
      path: '/goHome',
      redirect: '/main'
    },
      //  配置404页面
      {
        path: '*',
        component: NotFound
      },
    ]
});
