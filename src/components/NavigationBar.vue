<script>
export default {
    props:['page', 'ddl_link'],
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light nav-design">
        <!--Home Page-->
        <RouterLink class="home-icon" to="/eportfolio/">
            <img style="margin-right: 8px" src="../assets/home.png" width="30" height="30" alt=""/>
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
                        <RouterLink class="dropdown-item" to="/eportfolio/ui_ux/learning_journey_system/">
                            Learning Journey System
                        </RouterLink>
                        <RouterLink class="dropdown-item" to="/eportfolio/ui_ux/improved_bbdc_app/">
                            Improved BBDC App
                        </RouterLink>
                        <RouterLink class="dropdown-item" to="/eportfolio/ui_ux/mindflex_music_page/">
                            MindFlex Music Page
                        </RouterLink>
                        <RouterLink class="dropdown-item" to="/eportfolio/ui_ux/mindflex_free_test_paper_page/">
                            MindFlex Free Test Paper Page
                        </RouterLink>
                        <RouterLink class="dropdown-item" to="/eportfolio/ui_ux/shopee_ar_filter_and_business_insights/">
                            Shopee AR Filter & Business Insights
                        </RouterLink>
                        <RouterLink class="dropdown-item" to="/eportfolio/ui_ux/elderly_phone_app_patch/">
                            Elderly Phone App (Patch)
                        </RouterLink>
                        <RouterLink class="dropdown-item" to="/eportfolio/ui_ux/edm_and_microsite/">
                            EDM & Microsite
                        </RouterLink>
                        <RouterLink class="dropdown-item" :class="{'ddl-link-selected': ddl_link=='paylah'}" to="/eportfolio/ui_ux/new_approach_to_paylah_app/">
                            New Approach to DBS PayLah!
                        </RouterLink>
                    </div>
                </li>

                <!--Programming-->
                <li class="nav-item dropdown">
                    <a class="nav-link pr-4 dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Programming
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">MindFlex App</a>
                        <a class="dropdown-item" href="#">MindFlex Whatsapp and Telegram</a>
                        <a class="dropdown-item" href="#">MindFlex Operations Website (3 kinds)</a>
                        <a class="dropdown-item" href="#">MindFlex Blog Tabs </a>
                        <a class="dropdown-item" href="#">MindFlex Click to Know More</a>
                        <a class="dropdown-item" href="#">MindFlex Web Scraping</a>
                    </div>
                </li>

                <!--Graphic Design-->
                <li class="nav-item dropdown">
                    <a class="nav-link pr-4 dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Graphic Design
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">DBS Asia X Visual Branding</a>
                        <a class="dropdown-item" href="#">Digital Forensic Poster</a>
                        <a class="dropdown-item" href="#">Sportsday Badge</a>
                        <a class="dropdown-item" href="#">Game Card (Hunt)</a>
                        <a class="dropdown-item" href="#">Game Card (Scissors, Paper, Stone)</a>
                        <a class="dropdown-item" href="#">Internship Poster</a>
                        <a class="dropdown-item" href="#">Clip and Go Poster</a>
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