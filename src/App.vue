<script setup>
import NavigationBar from './components/NavigationBar.vue'
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
              I have always had a passion for designing and being creative. After being accepted into an IT course, I thought that design and IT are two contrasting concepts. Never did I expect I would meet it again. This led me to aspire to become a UX/UI Designer or Front-end Developer.
            </p>
            <p class="text">
              Often, I am told I am an easy person to work with and a very hard working individual. I will not hesitate to step out of my comfort zone to accomplish a task.
            </p>
            <p class="text">
              This is my E-portfolio which contains a gallery of the works that I am proud of; completed throughout my course of study and internships at DBS Asia X and MindFlex Home Tuition.
            </p>
            <button>
              View Projects
            </button>
          </div>
          <div class="col-sm col-center">
            <img src="./assets/profile.jpg">
          </div>
        </div>
      </div>
    </section>

    <section>
      E-portfolio here
    </section>

    <section class="beige-bg">
      Gallery of works here
    </section>

    <footer>
      Lee Joey E-portfolio 2023
      <br>
      <a href="mailto:lizuer.joey@gmail.com">
        <img class="footer-icons" src="./assets/email.png">
      </a>
      <a href="https://www.linkedin.com/in/lee-joey-568689141/" target="_blank">
        <img class="footer-icons" src="./assets/linkedin.png">
      </a>
    </footer>
  </main>
</template>

<style scoped>
.beige-bg {
  background-color: #F8F7F3;
  padding: 60px 0;
}

p {
  font-family: 'Open Sans';
  color: #0A1930;
}

.title {
  font-size: 35px;
  font-weight: bold;
}

.text {
  font-size: 15px;
  text-align: justify;
}

img {
  max-height: 60vh;
}

.col-center {
  display: flex;
  justify-content: center;
}

.col-sm {
  padding: 20px;
}

button {
  background-color: #0A1930;
  color: white;
  font-weight: bold;
  padding: 10px 15px;
}

footer {
  background-color: #0A1930;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 60px 0;
}

.footer-icons {
  padding: 10px 10px 0px 10px;
}
</style>
