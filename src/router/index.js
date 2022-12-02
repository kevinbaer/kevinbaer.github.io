import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import GalleryPage from '../views/GalleryPage.vue'
import InfoPage from '../views/InfoPage.vue'
import ContactPage from '../views/ContactPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }, {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryPage
  }, {
    path: '/info',
    name: 'Info',
    component: InfoPage
  }, {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }, {
    path: '/',
    redirect: '/home'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
