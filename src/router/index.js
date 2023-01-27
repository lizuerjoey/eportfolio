import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

import PaylahPageView from '../views/ui_ux/PaylahPage.vue'
import EDM_MicrositePageView from '../views/ui_ux/EDM_MicrositePage.vue'
import PatchAppPageView from '../views/ui_ux/PatchPage.vue'
import Shopee2020PageView from '../views/ui_ux/Shopee2020Page.vue'
import MindFlexFreeTestPaperPageView from '../views/ui_ux/MindFlexFreeTestPaperPage.vue'
import MindFlexMusicPageView from '../views/ui_ux/MindFlexMusicPage.vue'
import BBDCAppPageView from '../views/ui_ux/ImprovedBBDCAppPage.vue'
import LJView from '../views/ui_ux/LearningJourneySystemPage.vue'

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
      name: 'Paylah',
      component: PaylahPageView,
    },
    {
      path: '/eportfolio/ui_ux/edm_and_microsite',
      name: 'EDM_Microsite',
      component: EDM_MicrositePageView,
    },
    {
      path: '/eportfolio/ui_ux/elderly_phone_app_patch',
      name: 'Patch_App',
      component: PatchAppPageView,
    },
    {
      path: '/eportfolio/ui_ux/shopee_ar_filter_and_business_insights',
      name: 'Shopee2020',
      component: Shopee2020PageView,
    },
    {
      path: '/eportfolio/ui_ux/mindflex_free_test_paper',
      name: 'MindFlex_Free_Test_Paper',
      component: MindFlexFreeTestPaperPageView,
    },
    {
      path: '/eportfolio/ui_ux/mindflex_music',
      name: 'MindFlex_Music',
      component: MindFlexMusicPageView,
    },
    {
      path: '/eportfolio/ui_ux/improved_bbdc_app',
      name: 'BBDC_App',
      component: BBDCAppPageView,
    },
    {
      path: '/eportfolio/ui_ux/learning_journey_system',
      name: 'LJ',
      component: LJView,
    },
  ]
})

export default router
