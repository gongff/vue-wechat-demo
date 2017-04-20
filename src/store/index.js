import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'


Vue.use(Vuex)

const state={
	currentPageName:'hello vue'
}

const store=new Vuex.Store({
  state:state,
  actions:api
})

export default store