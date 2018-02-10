import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Index'
import CarBind from '@/components/Home/CarBind' 
import Apply from '@/components/Home/apply'
import ApplyListDetail from '@/components/Home/applyListDetail'
import myCar from '@/components/Home/myCar'
import myCarInfo from '@/components/Home/myCarInfo' 
import Contact from '@/components/Home/contact'
import News from '@/components/Home/news'
import Newsdetail from '@/components/Home/newsdetail'
import Personal from '@/components/Personal/index'
import ChangePhone from '@/components/Personal/changephone'
import SubUser from '@/components/Personal/subuser'
import MyAddress from '@/components/Personal/myAddress'
import ChildAddress from '@/components/Personal/childAddress' 
import MySub from '@/components/Personal/mysubuser' 
import Suggest from '@/components/Personal/suggest'
import Advice from '@/components/Personal/advice'
import Message from '@/components/Message/index'
import Move from '@/components/Move/index'
import MoveStatus from '@/components/Move/moveStatus'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/Carbind',
      name: 'CarBind',
      component: CarBind
    },
    {
      path: '/Apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/applyListDetail',
      name: 'ApplyListDetail',
      component: ApplyListDetail
    },
    {
      path: '/myCar',
      name: 'myCar',
      component: myCar
    },
    {
      path: '/myCarInfo/:id',
      name: 'myCarInfo',
      component: myCarInfo
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/newsdetail',
      name: 'Newsdetail',
      component: Newsdetail
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/ChangePhone',
      name: 'ChangePhone',
      component: ChangePhone
    },
    {
      path: '/subuser',
      name: 'SubUser',
      component: SubUser
    },
    {
      path: '/myAddress',
      name: 'MyAddress',
      component: MyAddress
    },
    {
      path: '/childAddress/:id',
      name: 'ChildAddress',
      component: ChildAddress
    }, 
    {
      path: '/mysub',
      name: 'MySub',
      component: MySub
    },
    {
      path: '/suggest',
      name: 'Suggest',
      component: Suggest
    },
    {
      path: '/suggest',
      name: 'Suggest',
      component: Suggest
    },
    {
      path: '/advice',
      name: 'Advice',
      component: Advice
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/move',
      name: 'Move',
      component: Move
    },
    {
      path: '/moveStatus',
      name: 'MoveStatus',
      component: MoveStatus
    },
  ]
})
