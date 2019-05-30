import Vue from 'vue'
import Router from 'vue-router'

// const loginModel = resolve => require(['@/views/loginModel/loginModel'],resolve)

const layout = resolve => require(['@/views/layout/layout'],resolve)

Vue.use(Router)

const router = new Router({
  routes:[
    {path:'/loginModel',name:'loginModel',component:()=> import('@/views/loginModel/loginModel')},
    {path:'/',meta: { requiresAuth: true },component: layout,
      children:[

      ],
    }
  ]
})




export default router
