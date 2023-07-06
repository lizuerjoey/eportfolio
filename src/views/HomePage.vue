<script>
//import NavigationBar from '../components/NavigationBar.vue';

export default {
  components: {
    //NavigationBar
  },
}
</script>

<template>
  <main>
    <!-- <NavigationBar /> -->
    <div class="grey-gradient-bg">
      <div class="container">
        <div class="col">
          <div class="title">
            <p style="margin-bottom: 0px">Welcome to</p>
            <p style="padding-left: 50px">Joey's E-portfolio</p>
          </div>   
          <div>
            <p style="padding-left: 50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have always had a passion for <b>designing</b> and being <b>creative</b>. After being accepted into an IT course, I thought that <b>design</b> and <b>IT</b> are two contrasting concepts. Never did I expect I would meet it again. This led me to aspire a position where I can do <b>both</b>.</p>
          </div>            
        </div>
        <div class="col col-center">
          <img src="../assets/home/profile.png">
        </div>
      </div>

      <div class="highlighted-works-container">
        <div class="col">
          <p>Highlighted Works (insert arrow icon)</p>
        </div>
        <div class="highlighted-works-box">
          <p>Project Title</p>
          <p>Design, Branding</p>
        </div>
        <div class="highlighted-works-box">
          <p>Project Title</p>
          <p>Web Design, <br>Development</p>
        </div>
        <div class="highlighted-works-box">
          <p>Project Title</p>
          <p>Research</p>
        </div>
      </div>    
    </div> 
  </main>
</template>

<style scoped>
@import '../assets/GlobalStyle.css';

img {
  max-height: 65vh;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Adjust the number of columns as needed */
}

.highlighted-works-container {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr; /* Adjust the number of columns as needed */
}

/* On screens that are 2560px or more */
@media screen and (min-width: 2560px) {
  .highlighted-works-box {
    min-height: 53.5vh;
  }
}

/* On screens that are 2560px or less */
@media screen and (max-width: 2560px) {
  .highlighted-works-box {
    min-height: 29.5vh;
  }
}
</style>
