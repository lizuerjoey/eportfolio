<template>
    <nav class="navbar navbar-expand-lg navbar-light nav-design">
        <!--Home Page-->
        <a class="navbar-brand home-icon" href="https://lizuerjoey.github.io/eportfolio/">
            <img style="margin-right: 8px" src="../assets/home.png" width="30" height="30" alt=""/>
            Joey
        </a>

        <!--Page Links-->

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <!--UI/UX-->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    UI/UX
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Learning Journey System</a>
                        <a class="dropdown-item" href="#">Improved BBDC App</a>
                        <a class="dropdown-item" href="#">MindFlex Music Page</a>
                        <a class="dropdown-item" href="#">MindFlex Free Test Paper Page</a>
                        <a class="dropdown-item" href="#">Shopee AR Filter & Business Insights</a>
                        <a class="dropdown-item" href="#">Elderly Phone App (Patch)</a>
                        <a class="dropdown-item" href="#">EDM and Microsite</a>
                        <a class="dropdown-item" href="#">New Approach to DBS PayLah!</a>
                    </div>
                </li>

                <!--Programming-->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

.dropdown-item:hover {
    background-color: #0A1930;
    color: white;
}

</style>