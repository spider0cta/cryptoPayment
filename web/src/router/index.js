import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Products from '@/pages/products'
import Checkout from '@/pages/checkout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/products',
    name: 'Products',
    component: Products
  }, {
    path: '/checkout/:id',
    name: 'Checkout',
    component: Checkout
  }]
})
