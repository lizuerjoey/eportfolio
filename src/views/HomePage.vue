<script>
//import NavigationBar from '../components/NavigationBar.vue';
import PencilIcon from 'vue-material-design-icons/Pencil.vue';

export default {
  components: {
    //NavigationBar
    PencilIcon
  },
}
</script>

<template>
  <main>
    <!-- <NavigationBar /> -->
    <div class="grey-gradient-bg">
      <div class="container">
        <div class="col">
          <div>
            <p class='title'>Welcome to</p>
            <p class='title leftpad'>Joey's E-portfolio</p>
          </div>   
          <div>
            <p class='subtitle lefpad topmar' style="padding-left: 50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have always had a passion for <b>designing</b> and being <b>creative</b>. After being accepted into an IT course, I thought that <b>design</b> and <b>IT</b> are two contrasting concepts. Never did I expect I would meet it again. This led me to aspire a position where I can do <b>both</b>.</p>
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
          <p class="proj-title">Project Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum magna a ipsum lobortis, sed placerat risus dictum.</p>
        </div>
        <div class="highlighted-works-box">
          <p class="proj-title">Project Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum magna a ipsum lobortis, sed placerat risus dictum.</p>
        </div>
        <div class="highlighted-works-box">
          <p class="proj-title">Project Title</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum magna a ipsum lobortis, sed placerat risus dictum.</p>
          <p class="read-more-link"><a href="#">Read More</a><img src='../assets/home/read_more.png'><PencilIcon/></p>
        </div>
      </div>    
    </div> 
  </main>
</template>

<style scoped>
@import '../assets/GlobalStyle.css';

.grey-gradient-bg {
    background: linear-gradient(52deg, #FFF 0%, #C6C6C8 100%);
    min-height: 100vh;
}

.title {
    font-size: 60px;
    font-weight: 500;
    margin: 0;
}

.title:nth-child(1) {
  margin-top: 20px;
}

.leftpad {
  padding-left: 50px;
}

.subtitle {
  font-size: 18px;
}

.topmar {
  margin-top: 50px;
}

.col-center {
    display: flex;
    justify-content: center;
}

img {
  max-height: 63.6vh;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 100px;
}

.highlighted-works-container {
  display: grid;
  grid-template-columns: 2fr 3fr 3fr 3fr;
  padding: 0 100px;
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
    min-height: 28.5vh;
  }
}

.highlighted-works-box {
  border: 1px solid black; 
  border-bottom: 0;
  border-right: 0;
  padding: 20px;
}
.highlighted-works-box:hover {
  background-color: #000;
  color: #fff;
}

.highlighted-works-box:nth-last-child(1) {
  border: 1px solid black; 
  border-bottom: 0;
  border-right: 1;
  padding: 20px;
}

.proj-title {
  font-size: 30px;
  font-weight: 500;
}

.read-more-link {
  padding-top: 15px;
}
</style>
