<template>
	<nav class="footer">
		<router-link to="/" class="nav-item">
			<svg class="icon" aria-hidden="true">
			    <use xlink:href="#icon-xiaoxi"></use>
			</svg>
			<p>消息</p>
		</router-link>
		<router-link to="/contacts" class="nav-item">
			<svg class="icon" aria-hidden="true">
			    <use xlink:href="#icon-tongxunlu"></use>
			</svg>
			<p>通讯录</p>
		</router-link>
		<router-link to="/explore" class="nav-item">
			<svg class="icon" aria-hidden="true">
			    <use xlink:href="#icon-444"></use>
			</svg>
			<p>发现</p>
		</router-link>
		<router-link to="/self" class="nav-item">
			<svg class="icon" aria-hidden="true">
			    <use xlink:href="#icon-iconfontwohover"></use>
			</svg>
			<p>我</p>
		</router-link>
	</nav>
</template>
<script type="text/javascript">
	export default {

	}
</script>
<style lang="stylus" scoped>
.footer
	position fixed
	bottom 0
	left 0
	z-index 3
	width 100% 
	display flex
	display	-webkit-flex
	overflow hidden
	border-top 1px solid #ccc
	padding 10px 0
	background-color #fff
	.nav-item
		flex:1
		text-align center
		> i 
			font-size 20px
	.nav-item.router-link-active	
		color #0bb908	

</style>
