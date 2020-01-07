import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/login/login'
import SystemHome from '@/pages/portal/system/home'
import TenantHome from '@/pages/portal/tenant/home'
import GroupHome from '@/pages/portal/group/home'
import UserHome from '@/pages/portal/user/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login_page',
      component: LoginPage
    },
    {
      path: '/',
      name: 'system_home',
      component: SystemHome
    },
    {
      path: '/tenants/:tenant_id',
      name: 'tenant_home',
      component: TenantHome
    },
    {
      path: '/tenants/:tenant_id/groups/:group_id',
      name: 'group_home',
      component: GroupHome
    },
    {
      path: '/tenants/:tenant_id/groups/:group_id/users/:user_id',
      name: 'user_home',
      component: UserHome
    }
  ]
})
