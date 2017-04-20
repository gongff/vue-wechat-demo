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
				我
			</div>
		</header>
		<div class="weui-cells">
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<img class="medium-avatar radius3" src="http://img.newyx.net/tujian/201701/07/933b425b7a.jpg"/>
				</div>
				<div class="weui-cell-bd">
					<p class="profile-nickname">	
						鲁班七号
						<svg class="icon" aria-hidden="true">
					    	<use xlink:href="#icon-man"></use>
						</svg>
					</p>
					<p class="gray-9">微信号：lubanqihao</p>
				</div>
			</div>
		</div>
		<div class="weui-cells">
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__hd mr10">
					<svg class="icon" aria-hidden="true">
					    <use xlink:href="#icon-xiangce"></use>
					</svg> 
				</div>
				<div class="weui-cell__bd">
					相册
				</div>
				<div class="weui-cell__ft"></div>
			</div>
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__hd mr10"> 
					<svg class="icon" aria-hidden="true">
					    <use xlink:href="#icon-shoucang"></use>
					</svg>
				</div>
				<div class="weui-cell__bd">
					收藏
				</div>
				<div class="weui-cell__ft"></div>
			</div>
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__hd mr10"> 
					<svg class="icon white" aria-hidden="true">
					    <use xlink:href="#icon-qianbao"></use>
					</svg>
				</div>
				<div class="weui-cell__bd">
					钱包
				</div>
				<div class="weui-cell__ft"></div>
			</div>
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__hd mr10"> 
					<svg class="icon white" aria-hidden="true">
					    <use xlink:href="#icon-kabao"></use>
					</svg>
				</div>	
				<div class="weui-cell__bd"> 
					卡卷
				</div>
				<div class="weui-cell__ft"></div>
			</div>
		</div>
		<div class="weui-cells">
			<div class="weui-cell weui-cell_access">
	          <div class="weui-cell__hd mr10">
	          	<svg class="icon white" aria-hidden="true">
				    <use xlink:href="#icon-biaoqing"></use>
				</svg>
	          </div>
	          <div class="weui-cell__bd">
	            表情
	          </div>
	          <div class="weui-cell__ft"></div>
	        </div>  
      	</div>
      	<div class="weui-cells">
	        <div class="weui-cell weui-cell_access">
	          <div class="weui-cell__hd mr10">
	            <svg class="icon white" aria-hidden="true">
				    <use xlink:href="#icon-shezhi"></use>
				</svg>
	          </div>
	          <div class="weui-cell__bd">
	           	设置
	          </div>
	          <div class="weui-cell__ft"></div>
	        </div>
      	</div>
	</div>
</template>
<script>
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