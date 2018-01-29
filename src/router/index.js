import Vue from 'vue';
import Router from 'vue-router';
import { requireAuth } from '../../utils/auth';
import Gate from '../components/Gate';
import Callback from '../components/Callback';
import Dashboard from '../components/Dashboard';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Gate',
      component: Gate,
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: requireAuth,
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
