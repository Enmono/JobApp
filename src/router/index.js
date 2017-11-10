import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/home'
import Company from '@/components/pages/company'
import Message from '@/components/pages/message'
import My from '@/components/pages/my'
import Chat from '@/components/common/message/chat'
import Interact from '@/components/common/message/interact'
import ChatDetail from '@/components/common/message/chatDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/company',
      component: Company
    },
    {
      path: '/message',
      component: Message,
      children: [
        {
          path: '',
          component: Chat
        },
        {
          path: 'chat',
          component: Chat
        },
        {
          path: 'interact',
          component: Interact
        }
      ]
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/chatDetail',
      component: ChatDetail
    }
  ]
})
