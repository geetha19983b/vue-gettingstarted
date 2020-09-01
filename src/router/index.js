import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '@/views/page-not-found';

Vue.use(VueRouter)
const parseProps = r => ({ id: parseInt(r.params.id) });

const routes = [
  {
    path: '/',
    redirect: '/heroes',
  },
  {
    path: '/heroes',
    name: 'heroes',
    component: () =>
      import(/* webpackChunkName: "bundle.heroes" */ '../views/07_heroes.vue'),
  },
  {
    path: '/heroes/:id',
    name: 'hero-detail',
    // props: true,
    props: parseProps,
    component: () =>
      import(/* webpackChunkName: "bundle.heroes" */ '../views/07_hero-detail.vue'),
  },
  {
    path: '/villains',
    name: 'villains',
    component: () =>
      import(/* webpackChunkName: "bundle.villains" */ '../views/07_villains.vue'),
  },
  {
    path: '/villains/:id',
    name: 'villain-detail',
    // props: true,
    props: parseProps,
    component: () =>
      import(/* webpackChunkName: "bundle.villains" */ '../views/07_villain-detail.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  },
  {
    path: '*',
    component: PageNotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
