<template>
	<div>
		<header class="header clearfix"> 
			<div class="header-left">
				<div v-on:click="$router.go(-1)">
					<svg class="icon white" aria-hidden="true">
					    <use xlink:href="#icon-xiangzuo"></use>
					</svg>
					<span class="return-back">{{$route.query.lastPage}}</span>
				</div>
			</div>
			<div class="header-center">
				详细资料
			</div>
		</header>
		<div class="weui-cells">
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<img class="medium-avatar radius3" :src="userInfo.avatar"/>
				</div>
				<div class="weui-cell-bd">
					<p class="profile-nickname">	
						{{userInfo.nickname}}
						<svg class="icon" aria-hidden="true" v-if="userInfo.sex==1">
					    	<use xlink:href="#icon-man"></use>
						</svg>
						<svg v-else class="icon" aria-hidden="true">
						    <use xlink:href="#icon-women"></use>
						</svg>		
					</p>
					<p class="gray-9">微信号：{{userInfo.userId}}</p>
				</div>
			</div>
		</div>
		<div class="weui-cells">
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__bd"> 
					设置备注及标签
				</div>
				<div class="weui-cell__ft"></div>
			</div>
		</div>	
		<div class="weui-cells">
			<div class="weui-cell">
				<div class="weui-cell__hd"> 
					地区
				</div>
				<div class="weui-cell__bd">
					<div class="profile-area">{{userInfo.area}}</div>
				</div>
			</div>
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__hd"> 
					个人相册
				</div>
				<div class="weui-cell__bd">
					<div class="profile-album">
						<img v-for="image in userInfo.album" :src="image"/>
					</div>
				</div>
				<div class="weui-cell__ft">
					
				</div>
			</div>
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__bd"> 
					更多
				</div>
				<div class="weui-cell__ft"></div>
			</div>
		</div>
		<div class="weui-btn-area">
			<a href="#" class="weui-btn weui-btn_primary">发消息</a>	  
		    <a href="#" class="weui-btn weui-btn_default">视频聊天</a>     
		</div>	
	</div>
</template>
<script>
export default{
	data(){
		return{
			userInfo:this.$route.query.userInfo
		}
	}
}
</script>
<style lang="stylus" scoped>
.profile-nickname
	font-size 18px
	font-weight 500
	margin-bottom 5px
.profile-album
	margin 5px 0 5px 10px;
	>img
		width 50px 
		height 50px
		margin 0 5px
.profile-area
	margin-left 45px		
</style>