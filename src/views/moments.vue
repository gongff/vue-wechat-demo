<template>
	<div class="bg-white">
		<header class="header clearfix"> 
			<div class="header-left">
				<router-link to="/explore">
					<svg class="icon white" aria-hidden="true">
					    <use xlink:href="#icon-xiangzuo"></use>
					</svg>
				</router-link>
			</div>
			<div class="header-center">
				朋友圈
			</div>
		</header>
		<div class="backdrop" style="background-image:url('http://pic1.win4000.com/wallpaper/4/57cfaa657b9c1.jpg')">
			<div class="avatar">
				<img width="100%" height="100%" src="http://img.newyx.net/tujian/201701/07/933b425b7a.jpg"/>
			</div>
			<div class="username">鲁班七号</div>
		</div>
		<div class="moments-wrap" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
			<div class="moments-item clearfix" v-for="(item,$index) in momentsList" :key="item.id">
				<router-link to="/" tag="div" class="moments-avatar">
					<img width="100%" height="100%" :src="item.avatar"/>
				</router-link>
				<div class="moments-box">
					<router-link to="/" tag="h4" class="link">{{item.name}}</router-link>
					<div class="moments-cont">{{item.content}}</div>
					<div class="thumbnails" v-if="item.picList!==undefined">
						<div v-for="(pic,index) in item.picList" :class="'thumbnail-'+item.picList.length">
							<img width="100%" height="100%" :src="pic"/>
						</div>
					</div>
					<div class="moments-toolbar">
						<span class="moments-datatime">{{item.dateTime}}</span>
						<div class="moments-action" v-on:click="actionMenuToggle(item.id)">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-xinxi"></use>
							</svg>
						</div>	
						<div v-show="item.id==itemMark" class="moments-menu">
							<span class="option" v-on:click="makePraise(item)">
								<svg class="icon white" aria-hidden="true">
									<use xlink:href="#icon-zan"></use>
								</svg>
								<span v-if="!item.isPraised">赞</span>
								<span v-else>取消</span>
							</span>
							<span class="option" v-on:click="makeComment(item.id)">
								<svg class="icon white" aria-hidden="true">
									<use xlink:href="#icon-pinglun"></use>
								</svg>
								评论
							</span>
						</div>
					</div>
					<div class="moments-comments" v-if="(item.praises!==undefined && item.praises.length>0) || item.comments!==undefined">
						<svg class="icon i-triangle" aria-hidden="true">
							<use xlink:href="#icon-sanjiao-copy-copy"></use>
						</svg>
						<div v-if="item.praises!==undefined">
							<svg class="icon link" aria-hidden="true">
								<use xlink:href="#icon-zan"></use>
							</svg>
							<router-link class="moments-praises" v-for="praise in item.praises" :key="praise.userId" :to="{path:'/profile',query:{wxid:praise.userId}}">{{praise.name}}，</router-link>
						</div>
					</div>
				</div>
			</div>
			<v-loading :loading-show="busy"></v-loading>
		</div>	
	</div>
</template>	
<script type="text/javascript">
import Vue from 'vue'
import loading from '../components/loading.vue'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)
export default {
  name: 'moments',
  data(){
  	return{
  		momentsList:[],
  		pageNo:1,
  		pageSize:3,
  		count:0,
  		busy:false,
  		isloadingComplete:false,
  		itemMark:-1
  	}	
  },
  components:{
  	'v-loading':loading
  },
  methods:{
  	actionMenuToggle:function(id){
  		this.itemMark=this.itemMark==id?-1:id;
  	},
  	makePraise:function(item){
  		if(!item.isPraised){
  			var obj={};
  			obj.userId=1;
  			obj.name="鲁班七号";
  			item.praises.push(obj);
  		}else{
  			for(var i in item.praises){
  				if(item.praises[i].userId==1){
  					item.praises.splice(i,1)	
  				}
  			}
  		}
  		item.isPraised=!item.isPraised;
  	},
  	getMomentsData:function(){
  		var that=this;
		this.$store.dispatch('getMoments').then(function(res){
			var momentsData=res.moments;
			var pageTotal=momentsData.length;
			that.busy=false;	
			for(var i=that.count;i<that.pageSize*that.pageNo;i++){
				if(that.count<pageTotal){
					that.momentsList.push(momentsData[that.count]);
					that.count++;
				}else{
					that.isloadingComplete=true;
					return false
				}	
			}					
		});
  	},
  	loadMore:function(){
  		if (!this.isloadingComplete) {
  			this.busy = true;
  			this.getMomentsData();
  			this.pageNo++;
  		}
  	}
  }
}
</script>
<style lang="stylus" scoped> 
.avatar
	width 80px 
	height 80px 
	border 2px solid #fff 
	position absolute 
	bottom -20px 
	right 20px
.backdrop
	position relative
	width 100%
	height 370px
	background-position 60% 60% 
	background-size cover
	margin-top -60px
	.username
		position absolute
		right 110px
		bottom 10px
		font-size 18px
		color #fff
.moments-wrap
	margin-top 30px		
.moments-item 
	display table
	padding 15px 20px 15px 15px
	border-bottom 1px solid #eee
.moments-avatar
	width 50px 
	height 50px 	
	display table-cell
.moments-box
	padding-left 10px
	display table-cell
	vertical-align top
	font-size 16px
	h4
		font-size 16px
.moments-cont
	max-height 200px	
	padding-top 6px
.thumbnails
	width: 100%;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap
.thumbnail-2,.thumbnail-4
	width 50%
	float left
	padding 5px	
	box-sizing:border-box;
	-moz-box-sizing:border-box; 
	-webkit-box-sizing:border-box; 
.thumbnail-3,.thumbnail-5
	float left
	width 33%
	padding 5px
	box-sizing:border-box;
	-moz-box-sizing:border-box; 
	-webkit-box-sizing:border-box; 
.moments-toolbar	
	position relative
.moments-datatime
	float left
	font-size 14px
	color #999
.moments-action
	float right	
.moments-menu
	position absolute
	top -10px
	right 20px
	width 150px
	display flex
	display -webkit-flex
	display -ms-flexbox
	background-color #444	
	color #fff
	text-align center
	border-radius 3px
	padding 8px 0
	.option
		display inline-block
		flex 1
		border-right 1px solid #000
	.option:last-child
		border-right 0	
.moments-comments	
	position relative
	margin-top 30px
	padding 5px
	background-color #eee
	.i-triangle
		position absolute
		top -10px
		left 10px
		color #eee
	.moments-praises
		color #094dcc
</style>