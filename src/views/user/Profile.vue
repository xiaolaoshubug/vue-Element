<template>
  <div>
    <h1>个人信息</h1>
    <!--第一种取值方式-->
    <!--{{$route.params.id}}-->
    <!--第二种取值方式-->
    {{id}}
  </div>
</template>

<script>
  export default {
    props: ['id'],
    name: "UserProfile",
    /**
     beforeRouteEnter：在进入路由前执行
     beforeRouteLeave：在离开路由前执行
     固定参数：to, from, next
     参数说明：
     to：路由将要跳转的路径信息
     from：路径跳转前的路径信息
     next：路由的控制参数
     next() 跳入下一个页面
     next(’/path’) 改变路由的跳转方向，使其跳到另一个路由
     next(false) 返回原来的页面
     next((vm)=>{}) 仅在 beforeRouteEnter 中可用，vm 是组件实例
     */
    beforeRouteEnter: (to, from, next) => {
      console.log('准备进入个人信息也')
      next(vm => {
        vm.getData();
      });
    },
    beforeRouteLeave: (to, from, next) => {
      console.log('准备离开个人信息页')
      next();
    },
    methods: {
      getData: function () {
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/static/mock/data.json',
        }).then((response) => {
          console.log(response);
        });
      }
    }
  }
</script>

<style scoped>

</style>
