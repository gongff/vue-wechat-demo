<template>
	<div>
		<v-header page-name="通讯录"></v-header>
		<div class="anchor" id="search">
			<div class="weui-search-bar">
				<form class="weui-search-bar__form">
			        <div class="weui-search-bar__box">
			            <i class="weui-icon-search"></i>
			            <input type="search" class="weui-search-bar__input" id="search_input" placeholder="搜索" />
			        </div>
			    </form>
			</div>
		</div>
		<div class="weui-cells">
			<router-link class="weui-cell" to="/">
		        <div class="weui-cell__hd">
		        	<div class="icon-bg icon-bg-orange">
		        		<svg class="icon white" aria-hidden="true">
					    	<use xlink:href="#icon--xinpengyou"></use>
						</svg>
		        	</div>
		        </div>
		        <div class="weui-cell__bd">
		            <p>新朋友</p>
		        </div>
		    </router-link>
		    <router-link class="weui-cell" to="/">
		        <div class="weui-cell__hd">
		        	<div class="icon-bg icon-bg-green">
			            <svg class="icon white" aria-hidden="true">
						    <use xlink:href="#icon-Group"></use>
						</svg>
					</div>	
		        </div>
		        <div class="weui-cell__bd">
		            <p>群聊</p>
		        </div>
		    </router-link>
		    <router-link class="weui-cell" to="/">
		        <div class="weui-cell__hd">
		        	<div class="icon-bg icon-bg-blue">
			            <svg class="icon white" aria-hidden="true">
						    <use xlink:href="#icon-biaoqian"></use>
						</svg>
					</div>	
		        </div>
		        <div class="weui-cell__bd">
		            <p>标签</p>
		        </div>
		    </router-link>
		    <router-link class="weui-cell" to="/">
		        <div class="weui-cell__hd">
		        	<div class="icon-bg icon-bg-blue">
			            <svg class="icon white" aria-hidden="true">
						    <use xlink:href="#icon-gongzhonghao"></use>
						</svg>
					</div>	
		        </div>
		        <div class="weui-cell__bd">
		            <p>公众号</p>
		        </div>
		    </router-link>
		</div>
		<!-- 通讯录排序 -->
		<div style="margin-bottom:140px;">
			<div v-for="(value,key) in contactsList" :key="key">
				<div class="weui-cells__title anchor" :id="key">{{key}}</div>
		        <div class="weui-cells">
		            <router-link v-for="contact in value" :key="contact.userId" class="weui-cell" :to="{path:'/contacts/profile',query:{userInfo:contact,lastPage:'通讯录'}}">
		                <div class="weui-cell__hd">
		                    <img :src="contact.avatar" class="avatar-small">
		                </div>
		                <div class="weui-cell__bd">
		                    {{contact.remark?contact.remark:contact.nickname}}
		                </div>
		            </router-link>
		        </div>
			</div>
		</div>
		<!-- 通讯录首字母排序 -->
		<div class="initial-list">
			<a href="#search">
				<svg class="icon" aria-hidden="true">
			    	<use xlink:href="#icon-sou"></use>
				</svg>
			</a>
			<div v-for="initial in initialList">
				<a :href="'#'+initial">{{initial}}</a>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>	
<script type="text/javascript">
import header from '../components/header.vue'
import footer from '../components/footer.vue'
export default {
  name: 'contacts',
  components:{
  	'v-header':header,
  	'v-footer':footer
  },
  data(){
  	return{
  		contactsList:[],
  		initialList:[]
  	}	
  },
  created() {
  	var that=this;
	this.$store.dispatch('getContacts').then(function(res){
		//现将通讯录contacts根据首字母initial排序
		var contactsList=that.common.sortArr(res.contacts,"initial");
		that.getContactsData(contactsList);	
	});
  },
  methods:{
  	getContactsData(contactsList){
  		var initialList=[];
		var newContactsList={};
		for(var i=0;i<contactsList.length;i++){
			var initial=contactsList[i].initial.toUpperCase();
			if(initialList.indexOf(initial)==-1){
				initialList.push(initial)
				newContactsList[initial]=[];
			}
			newContactsList[initial].push(contactsList[i]);
		}
		this.contactsList=newContactsList;
		this.initialList=initialList;
  	}
  }
}
</script>
<style lang="stylus" scoped>
.anchor:before{ 
  display: block; 
  content: " "; 
  margin-top: -60px; 
  height: 60px; 
  visibility: hidden; 
}
.weui-cells
	margin-top:0;
.search-box
	background-color #fff
	border 1px solid #ccc
	border-radius 3px
	text-align center
	height 34px
	line-height 34px
	width 90%
	margin 10px auto 0
.initial-list
	position fixed
	right 0
	top 30%
	z-index 10	
	text-align center
	.icon 
		width 18px
		height 18px
</style>