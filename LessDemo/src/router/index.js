import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VariateView from '../views/01_variate.vue'
import NestView from '../views/02_nest.vue'
import MethodView from '../views/03_method.vue'
import ExtendView from '../views/04_extend.vue'
import ImportView from '../views/05_import.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/variate',
      name: 'variate',
      component: VariateView
    },
    {
      path: '/nest',
      name: 'nest',
      component: NestView
    },
    {
      path: '/method',
      name: 'method',
      component: MethodView
    },
    {
      path: '/extend',
      name: 'extend',
      component: ExtendView
    },
    {
      path: '/import',
      name: 'import',
      component: ImportView
    },
  ]
})

export default router
