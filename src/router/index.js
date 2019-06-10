import Vue from 'vue'
import Router from 'vue-router'

const loginModel = resolve => require(['@/views/loginModel/loginModel'],resolve)

const layout = resolve => require(['@/views/layout/layout'],resolve)
//商家
const business = resolve => require(['@/views/business/business'],resolve)

Vue.use(Router)

const router = new Router({
  routes:[
    {path:'/loginModel',name:'loginModel',component:loginModel,meta: { requiresAuth: false }},
    {path:'/',meta: { requiresAuth: true },component: layout,
      children:[
        {path:'/business',name:'business',component:business},

      ],
    }
  ]
})

router.beforeEach((to, from, next) => {
  let knock_knock = window.localStorage.getItem('knock_knock');
  if (to.matched.some(
      record => record.meta.requiresAuth)&& (!knock_knock || knock_knock === null)) {

    window.location.href = '/loginModel';

  } else {
    next()
  }
})


export default router
