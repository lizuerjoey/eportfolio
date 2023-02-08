<script>
export default {
    props:['page', 'ddl_link']
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light nav-design">
        <!--Home Page-->
        <RouterLink class="home-icon" to="/eportfolio/">
            <img style="margin-right: 8px" src="../assets/home/home.png" width="30" height="30" alt=""/>
            Joey
        </RouterLink>

        <!--Page Links-->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <!--UI/UX-->
                <li class="nav-item dropdown">
                    <a class="clicked nav-link pr-4 dropdown-toggle" :class="{'page-selected': page=='ui_ux'}" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    UI/UX
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='bbdc'}" to="/eportfolio/ui_ux/improved_bbdc_app/">
                            Improved BBDC App
                        </RouterLink>
                        <!-- <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='mindflex_music'}" to="/eportfolio/ui_ux/mindflex_music/">
                            MindFlex Music Page
                        </RouterLink>
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='mindflex_testpapers'}" to="/eportfolio/ui_ux/mindflex_free_test_paper/">
                            MindFlex Free Test Paper Page
                        </RouterLink> -->
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='shopee2020'}" to="/eportfolio/ui_ux/shopee_ar_filter_and_business_insights/">
                            Shopee AR Filter & Business Insights
                        </RouterLink>
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='patch'}" to="/eportfolio/ui_ux/elderly_phone_app_patch/">
                            Elderly Phone App (Patch)
                        </RouterLink>
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='edm_microsite'}" to="/eportfolio/ui_ux/edm_and_microsite/">
                            EDM & Microsite
                        </RouterLink>
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='paylah'}" to="/eportfolio/ui_ux/new_approach_to_paylah_app/">
                            New Approach to DBS PayLah!
                        </RouterLink>
                    </div>
                </li>

                <!--Programming-->
                <li class="nav-item dropdown">
                    <a class="nav-link pr-4 dropdown-toggle" :class="{'page-selected': page=='prg'}" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Programming
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <!-- <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='ljs'}" to="/eportfolio/programming/learning_journey_system/">
                            Learning Journey System
                        </RouterLink> -->
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='app'}" to="/eportfolio/programming/mindflex_app/">
                            MindFlex App
                        </RouterLink>
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='wa_tele'}" to="/eportfolio/programming/mindflex_whatsapp_and_telegram/">
                            MindFlex Whatsapp and Telegram
                        </RouterLink>
                        <!-- <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='operations'}" to="/eportfolio/programming/mindflex_operations/">
                            MindFlex Operations Website (3 kinds)
                        </RouterLink> -->
                        <!-- <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='tabs'}" to="/eportfolio/programming/mindflex_blog_tabs/">
                            MindFlex Blog Tabs
                        </RouterLink> -->
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='front_end'}" to="/eportfolio/programming/click_to_know_more/">
                            MindFlex Click to Know More
                        </RouterLink>
                        <!-- <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='scraping'}" to="/eportfolio/programming/scraping/">
                            MindFlex Web Scraping
                        </RouterLink> -->
                    </div>
                </li>

                <!--Graphic Design-->
                <li class="nav-item dropdown">
                    <a class="nav-link pr-4 dropdown-toggle" :class="{'page-selected': page=='graphic'}" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Graphic Design
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='dbs_asiax'}" to="/eportfolio/graphic_design/dbs_asia_x_visual_branding/">
                            DBS Asia X Visual Branding
                        </RouterLink>
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='sportsday_badge'}" to="/eportfolio/graphic_design/sportsday_badge/">
                            Sportsday Badge
                        </RouterLink>
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='game_card_1'}" to="/eportfolio/graphic_design/game_card_hunt/">
                            Game Card (Hunt)
                        </RouterLink>
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='game_card_2'}" to="/eportfolio/graphic_design/game_card_scissors_paper_stone/">
                            Game Card (Scissors, Paper, Stone)
                        </RouterLink>
                        <!-- <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='forensic_poster'}" to="/eportfolio/graphic_design/digital_forensic_poster/">
                            Digital Forensic Poster
                        </RouterLink>
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='internship_poster'}" to="/eportfolio/graphic_design/internship_poster/">
                            Internship Poster
                        </RouterLink> -->
                        <!-- <a class="dropdown-item" href="#">Clip and Go Poster</a> -->
                    </div>
                </li>

                <!--Research (ADD WHEN GOT TIME)-->
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Events Coordinated
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">DBS Asia X GANDALF</a>
                        <a class="dropdown-item" href="#">DBS Asia X SGLC</a>
                    </div>
                </li> -->

                <!--Events Coordinated (ADD WHEN GOT TIME)-->
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Events Coordinated
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">CCA Events Coordinator</a>
                        <a class="dropdown-item" href="#">WMNC Event</a>
                    </div>
                </li> -->
            </ul>
        </div>
    </nav>

    <div class="alert alert-info mb-0" role="alert">
        This e-portfolio is still updating. Feel free to view the old portfolio <b><a href="https://lizuerjoey.wixsite.com/eportfolio">here</a></b>.
    </div>
</template>

<style>
.home-icon {
    font-family: 'Open Sans';
    color: #0A1930;
    font-weight: bold;
}

.home-icon:hover {
    text-decoration: none;
    color: #0A1930;
}

.nav-design {
    font-family: 'Open Sans';
    font-size: smaller;
}

ul {
    flex: 1;
    display: flex;
    justify-content: center;
}

.nav-link {
    color: #0A1930 !important;
    font-weight: bold;
}

.dropdown-menu {
    font-family: 'Open Sans';
    font-size: smaller;
    border-color: #0A1930;
    border-radius: 0px; 
}

.dropdown-toggle::after {
    vertical-align: 0; /* to center vertically */
    border: none !important;
    content: "\142F"; /* U+142F replace U+ with \ */
}

.dropdown-item:hover, .ddl-link-selected {
    background-color: #E6B86B;
    color: white;
}

.page-selected, .nav-link:hover, .nav-link:focus {
    color: #E6B86B !important;
}
</style>