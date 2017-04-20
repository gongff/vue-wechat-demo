<template>
    <div v-show="loadingShow">
        <svg class="icon i-loading loading" aria-hidden="true">
		    <use xlink:href="#icon-load"></use>
		</svg>
    </div>
</template>
<script>
export default {
     props: ['loadingShow']
};
</script>
<style>
.i-loading{
    display: block;
    width: 2rem;
    height: 2rem;
    margin:10px auto;
    color:#aaa;
}
.loading{
    -webkit-animation: loading 1s linear infinite;
    animation: loading 1s linear infinite;
}	
@keyframes loading {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}	
@-webkit-keyframes loading {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}
</style>
