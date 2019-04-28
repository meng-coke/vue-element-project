import Vue from 'vue'
import Router from 'vue-router'

const loginModel = resolve => require(['@/views/loginModel/loginModel'],resolve)

Vue.use(Router)

const router = new Router({
  routes:[
    {path:'/',name:'loginModel',component:loginModel},
  ]
})




export default router
