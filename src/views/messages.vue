<template>
  <div>
		<v-header page-name="hello vue"></v-header>
		<div class="msg-warp">
      <div class="msg-item" v-for="(item,index) in msgList" :key="item.id">
        <router-link  :to="{ path: '/messages/dialogue',query:{msgItem:item}}" class="msg-box clearfix" v-swiper>
          <img class="msg-pic" :src="item.avatar"/>
          <div class="msg-info">
            <h3>{{item.name}}</h3>
            <p class="msg-cont">{{item.msg}}</p>
          </div>
        </router-link>  
        <div class="operate-box">
          <div class="operate-del" v-on:click="deleteMsg(index)">删除</div>
        </div>
      </div>
    </div>  
		<v-footer></v-footer>
	</div>
</template>
<script type="text/javascript">
import Vue from 'vue'
import axios from 'axios'
import footer from '../components/footer.vue'
import header from '../components/header.vue'
export default {
  name:'message',
  components:{
    'v-header':header,
    'v-footer':footer
  },
  data(){
    return{
      msgList:[]
    } 
  },
  mounted:function(){
    var that=this;
    this.$store.dispatch('getMessages').then(function(res){
      that.msgList=res.msg
    });
  },
  methods:{
    deleteMsg:function(index){
      this.msgList.splice(index,1)  
    }
  },
  directives:{
    swiper:{
      bind:function(el, binding){
        el.addEventListener('touchstart',touch, false);  
        el.addEventListener('touchmove',touch, false);  
        el.addEventListener('touchend',touch, false);  
        var startX=0,startY=0,isTouchLeft=false;
        function touch(event){
          switch(event.type){  
            case "touchstart":  
                startX=event.touches[0].clientX;
                startY=event.touches[0].clientY;
                break;  
            case "touchmove":  
                event.preventDefault();  
                var distanceX=startX-event.changedTouches[0].clientX; 
                var distanceY=startY-event.changedTouches[0].clientY; 
            
                //滑动
                if(Math.abs(distanceX)>Math.abs(distanceY)){
                  if(Math.abs(distanceX)<100 && Math.abs(distanceX)>20){
                    el.style.transition = "0";
                    el.style.transform = "translateX("+distanceX+")";
                  }
                }
                break;      
            case "touchend":  
                var distanceX=startX-event.changedTouches[0].clientX; 
                var distanceY=startY-event.changedTouches[0].clientY; 
                if(isTouchLeft){
                  //如果已经向右滑动，无论怎么滑都关闭操作，向右滑动
                  el.style.transition = "0.3s";
                  el.style.transform = "translateX(0)";
                  isTouchLeft=false
                }else{
                  //向左滑动    
                  if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX>0){
                    if(Math.abs(distanceX)>20){
                      el.style.transition = "0.3s";
                            el.style.transform = "translateX(-100px)";
                            isTouchLeft=true;
                    } 
                  }
                }
                break;      
            }  
        }

      }
    }
  }
} 
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.msg-warp
  background-color #fff
  margin-bottom 60px
.msg-item
  position relative
  z-index 2
  width 100%
  border-bottom 1px solid #ddd
  .msg-box
    display block
    z-index 2
    padding 10px
    position relative
    background-color #fff
    .msg-pic
      width 55px
      height 55px
      float left
      border-radius 3px
    .msg-info
      float left
      margin-left 1rem
      h3
        font-size 16px
        color #000
        font-weight 500
      .msg-cont
        margin-top 10px 
        font-size 15px
        color #999
  .operate-box    
    position absolute
    z-index 1
    height 77px
    width 100px
    right 0
    top 0
    background-color #ff3b30
    color #fff
    font-size 16px
    text-align center
    .operate-del
      line-height 77px
</style>