<template>
  <div id="app">
    <!-- 所有视图统一切换效果 -->
  	<transition name="custom-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
  		<router-view></router-view>
  	</transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return{
      enterAnimate:'',
      leaveAnimate:''  
    }
  },
  watch: {
      "$route" (to, from) {
          //导航即将要去的路由
          var toRouter = to.path.split('/').length;
          //当前导航正要离开的路由
          var fromRouter = from.path.split('/').length;
          //同一级页面无需设置过渡效果
          console.log(toRouter,fromRouter)
          if (toRouter === fromRouter) {
              this.enterAnimate='';
              this.leaveAnimate='';
              return;
          }
          this.enterAnimate = toRouter > fromRouter ? "animated fadeInRight" : "animated fadeInLeft";
          this.leaveAnimate = toRouter > fromRouter ? "animated fadeOutLeft" : "animated fadeOutRight";
            
          console.log(this.enterAnimate,this.leaveAnimate)
      }
  }
}
</script>

<style>
@import "assets/css/reset.css";
@import "assets/css/common.css";
@import "assets/css/animate.css";
@import "assets/css/weui.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 50px;
}
</style>
