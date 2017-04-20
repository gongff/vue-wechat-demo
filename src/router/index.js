import Vue from 'vue'
import Router from 'vue-router'
import messages from '../views/messages'
import dialogue from '../views/dialogue'
import explore from '../views/explore'
import moments from '../views/moments'
import profile from '../views/profile'
import contacts from '../views/contacts'
import self from '../views/self'

Vue.use(Router)
export default new Router({
  base: "/",
  routes: [
    {
      path: '/',
      name: 'messages',
      redirect:'/messages',
      component: messages
    },
    {
      path: '/messages/dialogue',
      name: 'dialogue',
      component: dialogue
    },
    {
      path:'/contacts',
      name:'contacts',
      component:contacts
    },
    {
      path: '/explore',
      component: explore
    },
    { 
      path: '/explore/moments',
      component: moments
    },
    {
      path:'/contacts/profile',
      name:'profile',
      component:profile
    },
    {
      path:'/self',
      name:'self',
      component:self
    },
    {
      path: '*',
      component: messages
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
    }
})
