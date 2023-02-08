<script>
import NavigationBar from '../components/NavigationBar.vue';

export default {
  components: {
    NavigationBar
  },
}
</script>

<template>
  <main>
    <NavigationBar />
    <section class="beige-bg">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <p class="title">Welcome to <br> Joey’s E-portfolio</p>
            <p class="text">
              I always have a passion for designing and being creative. After being accepted into an IT course, I thought that design and IT are two contrasting concepts. Never did I expect I would meet it again. This led me to aspire to become a UX/UI Designer or Front-end Developer.
            </p>
            <p class="text">
              Often, I am told I am an easy person to work with and a very hard working individual. I will not hesitate to step out of my comfort zone to accomplish a task.
            </p>
            <p class="text">
              This is my E-portfolio which contains a gallery of works that I have completed throughout my course of study and internships at DBS Asia X and MindFlex Home Tuition.
            </p>
            <button>
              View Highlighted Projects
            </button>
          </div>
          <div class="col-sm col-center">
            <img src="../assets/home/profile.jpg">
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <p class="title">Resume</p>
        <div class="row">
          <div class="col-sm">
            insert image of resume
          </div>
        </div>
      </div>
    </section>

    <section class="beige-bg">
      <div class="container">
        <p class="title">Highlighted Projects here</p>
        <div class="row">
          <div class="col-sm">
            insert gallery here
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <p class="title">Tools Used</p>
        <div class="row">
          <div class="col-sm-2 col-center">
            <img class="tools-img" width="90%" style="object-fit: contain;" src="../assets/home/figma.png"/>
          </div>
          <div class="col-sm-4 image-text-container">
            <div>
              <p style="margin-bottom:0px" class="subtitle">Figma</p>
              <p style="margin-bottom:0px">
                I used figma to draw out a mid-fi wireframe for this website. Click <a class="link" href="https://www.figma.com/file/iHenaskbJk3cMjLEvr5J5c/E-portfolio-2023?node-id=0%3A1&t=T3pKPXTFJ9LSjjQZ-1" target="_blank">here</a> to view the wireframe.
              </p>
            </div>
          </div>
          <div class="col-sm-2 col-center">
            <img class="tools-img" width="90%" style="object-fit: contain;" src="../assets/home/github.png"/>
          </div>
          <div class="col-sm-4 image-text-container">
            <div>
              <p style="margin-bottom:0px" class="subtitle">Github</p>
              <p style="margin-bottom:0px">
                Previously, I used wix as my eportfolio. However, I thought that developing my own website would better showcase my interest in designing and development. Therefore, I code this website from scratch and learnt how to host my website on github.
              </p>
            </div>
          </div>          
        </div>

        <div class="row">
          <div class="col-sm-2 col-center">
            <img class="tools-img" width="90%" style="object-fit: contain;" src="../assets/home/vuejs.png"/>
          </div>
          <div class="col-sm-4 image-text-container">
            <div>
              <p style="margin-bottom:0px" class="subtitle">Vue Js</p>
              <p style="margin-bottom:0px">
                Had came across Vue Js in my course of study, and it wasn't my strongest suit. Therefore, I wanted to challenge myself by coding my own website using this framework. In the process I could learn something new as well!
              </p>
            </div>
          </div>
          <div class="col-sm-2 col-center">
            <img class="tools-img" width="90%" style="object-fit: contain;" src="../assets/home/bootstrap.png"/>
          </div>
          <div class="col-sm-4 image-text-container">
            <div>
              <p style="margin-bottom:0px" class="subtitle">Bootstrap</p>
              <p style="margin-bottom:0px">
                On top of Vue Js, I included bootstrap in the project so that I could use some of its design features.
              </p>
            </div>
          </div>          
        </div>

        <!-- <div class="row">
          <div class="col-sm image-text-container">
            <div class="image">
              <img width=120 src="../assets/home/vuejs.png"/>
            </div>
            <div class="img-left-text-right">
              <p style="margin-bottom:0px" class="subtitle">Vue Js</p>
              <p style="margin-bottom:0px">
                Had came across Vue Js in my course of study, and it wasn't my strongest suit. Therefore, I wanted to challenge myself by coding my own website using this framework. In the process I could learn something new as well!
              </p>
            </div>
          </div>

          <div class="col-sm image-text-container">
            <div class="image">
              <img width=110 src="../assets/home/bootstrap.png"/>
            </div>
            <div class="img-left-text-right">
              <p style="margin-bottom:0px" class="subtitle">Bootstrap</p>
              <p style="margin-bottom:0px">
                On top of Vue Js, I included bootstrap in the project so that I could use some of its design features.
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  </main>
</template>

<style scoped>
@import '../assets/GlobalStyle.css';
</style>
