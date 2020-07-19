import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlanList from "../views/PlanList.vue";
import PlanPage from "../views/PlanPage.vue";
import PlanProduction from "../views/PlanProduction.vue";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'PlanProduction',
    component: PlanProduction
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

    {
      name: "plan-list",
      path: "/planlist",
      component: PlanList
    },
    {
      name: "plan-page",
      path: "/planpage",
      component: PlanPage
    },
]

const router = new VueRouter({
  mode: 'hash',
    scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
})

export default router
