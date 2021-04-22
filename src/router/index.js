import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import NewUser from '@/views/NewUser';
import EditUser from '@/views/EditUser';
import User from '@/views/User';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/usuarios/novo',
    name: 'NewUser',
    component: NewUser
  },
  {
    path: '/usuarios/:id',
    name: 'User',
    component: User,
    props: true
  },
  {
    path: '/usuarios/:id/editar',
    name: 'EditUser',
    component: EditUser,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
