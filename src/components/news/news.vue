<template>
	<div class="feed-wrap">
			<a class="feed-item" v-for="item in newsList">
				<div v-if="1==item.type" class="feed-photos">
					<div class="main-cont" :style="{backgroundImage:'url('+item.imgUrl+')'}" style="background-position:50% 50%; backgroundSize:cover;">
						<div></div>
					</div>
					<div class="feed-name">{{item.name}}</div>
					<div class="feed-description">{{item.description}}</div>
				</div>
				<div v-else class="feed-letter">
					<div class="">{{item.name}}</div>
					<div>{{item.description}}</div>
				</div>
			</a>
		</div>
</template>
<script type="text/javascript">
import axios from 'axios'
export default {
  name:'news',
  data(){
  	return{
  		newsList:[]
  	}	
  },
  mounted:function(){
  	var that=this;
	this.$http.get("static/data/news.json").then(function(res){
		that.newsList=res.data.news
	});
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.feed-wrap 
	.feed-item
		display block 
		padding 25px 18px 
		position relative 
		color #494949 
		border-bottom 1px solid #ddd
	.main-cont
		width 100% 
		height 220px
	.feed-name
		padding 5px 0
		font-weight 500
		font-size 1.5rem
	.feed-description
		font-size 1.2rem
</style>