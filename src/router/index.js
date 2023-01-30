import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

import PaylahPageView from '../views/ui_ux/PaylahPage.vue'
import EDM_MicrositePageView from '../views/ui_ux/EDM_MicrositePage.vue'
import PatchAppPageView from '../views/ui_ux/PatchPage.vue'
import Shopee2020PageView from '../views/ui_ux/Shopee2020Page.vue'
import MindFlexFreeTestPaperPageView from '../views/ui_ux/MindFlexFreeTestPaperPage.vue'
import MindFlexMusicPageView from '../views/ui_ux/MindFlexMusicPage.vue'
import BBDCAppPageView from '../views/ui_ux/ImprovedBBDCAppPage.vue'

import LJPageView from '../views/programming/LearningJourneySystemPage.vue'
import AppPageView from '../views/programming/MindFlexAppPage.vue'
import WaTelePageView from '../views/programming/MindFlexWhatsappTelegramPage.vue'
import OperationsPageView from '../views/programming/MindFlexOperationsPage.vue'
import FrontEndPageView from '../views/programming/MindFlexFrontEndPage.vue'

import VisualBrandingPageView from '../views/graphic_design/VisualBrandingPage.vue'
import BadgePageView from '../views/graphic_design/SportsdayBadgePage.vue'
import GameCard1PageView from '../views/graphic_design/GameCard1Page.vue'
import GameCard2PageView from '../views/graphic_design/GameCard2Page.vue'
import ForensicPageView from '../views/graphic_design/ForensicPosterPage.vue'
import InternshipPageView from '../views/graphic_design/InternshipPosterPage.vue'

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

    // ----- PROGRAMMING Folder -----
    // some links comment out, check nav bar component - so next update add them in
    {
      path: '/eportfolio/programming/learning_journey_system/',
      name: 'LJ',
      component: LJPageView,
    },
    {
      path: '/eportfolio/programming/mindflex_app/',
      name: 'App',
      component: AppPageView,
    },
    {
      path: '/eportfolio/programming/mindflex_whatsapp_and_telegram/',
      name: 'Wa_Tele',
      component: WaTelePageView,
    },
    {
      path: '/eportfolio/programming/mindflex_operations/',
      name: 'Operations',
      component: OperationsPageView,
    },
    {
      path: '/eportfolio/programming/click_to_know_more/',
      name: 'Front_End',
      component: FrontEndPageView,
    },

    // ----- GRAPHIC DESIGN Folder -----
    {
      path: '/eportfolio/graphic_design/dbs_asia_x_visual_branding/',
      name: 'Visual_Branding',
      component: VisualBrandingPageView,
    },
    {
      path: '/eportfolio/graphic_design/sportsday_badge/',
      name: 'Badge',
      component: BadgePageView,
    },
    {
      path: '/eportfolio/graphic_design/game_card_hunt/',
      name: 'Game_Card_1',
      component: GameCard1PageView,
    },
    {
      path: '/eportfolio/graphic_design/game_card_scissors_paper_stone/',
      name: 'Game_Card_2',
      component: GameCard2PageView,
    },
    {
      path: '/eportfolio/graphic_design/digital_forensic_poster/',
      name: 'Forensic',
      component: ForensicPageView,
    },
    {
      path: '/eportfolio/graphic_design/internship_poster/',
      name: 'Internship',
      component: InternshipPageView,
    },
  ]
})

export default router
