import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/info/Info.vue'

// 导入路由
import Chat from '../views/chat/Chat.vue'
import infoList from '../views/modules/infoList.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, children: [
    { path: '/info', component: Info },
    { path: '/chat', component: Chat }
  ]}
]

const router = new VueRouter({
  routes
})

export default router
