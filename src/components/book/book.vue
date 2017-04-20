<template>
	<div>book</div>
</template>
<script type="text/javascript">
export default {
  name:'book',
  mounted:function(){
	this.$http.get("/viewsmovie/in_theaters").then(function(res){
		console.log(res)
	});
  }
}  
</script>
