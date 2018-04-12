import Vue from 'vue'
import Router from 'vue-router'
/*
import Home from '@/components/home/Home'
import CrrAdd from '@/components/crr/CrrAdd'
import CrrList from '@/components/crr/CrrList'
import Expenses from '@/components/expenses/Expenses'
import Dashboard from '@/components/dashboard/Dashboard'
import Cruds from '@/components/cruds/Cruds'
import Settings from '@/components/settings/Settings'
*/
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }
    /*,
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/crr',
      name: 'CrrList',
      component: CrrList
    },
    {
      path: '/crrAdd',
      name: 'CrrAdd',
      component: CrrAdd
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: Expenses
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/cruds',
      name: 'Cruds',
      component: Cruds
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
    */
  ]
})
