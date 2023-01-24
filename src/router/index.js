import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import PaylahPageView from '../views/ui_ux/PaylahPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    
    // ----- HOME PAGE -----
    {
      path: '/eportfolio/',
      name: 'Home',
      component: HomeView,
    },
    
    // ----- UI/UX Folder -----
    {
      path: '/eportfolio/ui_ux/new_approach_to_paylah_app',
      name: 'UIUX_Paylah',
      component: PaylahPageView,
    },
  ]
})

export default router
