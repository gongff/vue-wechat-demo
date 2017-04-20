<template>
	<header class="header clearfix">
		<div class="header-left">
			<router-link to="/">
				<svg class="icon white" aria-hidden="true">
				    <use xlink:href="#icon-xiangzuo"></use>
				</svg>
			</router-link>
		</div>
		<div class="header-center">{{$route.query.msgItem.name}}</div>
		<div class="header-right">
			<router-link to="/selfInfo">
				<svg class="icon white" aria-hidden="true">
				    <use xlink:href="#icon-ren"></use>
				</svg>
			</router-link>
		</div>
  </header>
</template>	
<script type="text/javascript">
export default {
  name: 'dialogue'
}
</script>