<template>
	<div>
		<v-header page-name="发现"></v-header>
		<router-link to="/explore/moments" tag="div" class="option-cell clearfix">
			<span class="left">
				<svg class="icon" aria-hidden="true">
				    <use xlink:href="#icon-pengyouquan"></use>
				</svg>
				朋友圈
			</span>
			<svg class="icon right gray-c" aria-hidden="true">
			    <use xlink:href="#icon-open-right"></use>
			</svg>
		</router-link>
		<v-footer></v-footer>
	</div>
</template>	
<script type="text/javascript">
import header from '../components/header.vue'
import footer from '../components/footer.vue'
export default {
  name: 'explore',
  components:{
  	'v-header':header,
  	'v-footer':footer
  }
}
</script>
<style lang="stylus" scoped>
.option-cell
	background-color #fff
	padding 8px 10px
	border-width 1px 0
	border-style solid
	border-color #ddd
	position relative
</style>