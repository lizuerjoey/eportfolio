<script>
import NavigationBar from '../../components/NavigationBar.vue';

export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      page: "graphic",
      ddl_link: ""
    }
  }
}
</script>

<template>
  <main>
    <NavigationBar :page=page :ddl_link=ddl_link />
    <section class="beige-bg">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div><span class="uiux-tag">UI/UX</span></div>
            <p class="title">New Approach to DBS PayLah!</p>
            <p class="subtitle">WHY?</p>
            <p class="text">
              As a student, one of my main concern was going to the top-up machine once a month to either top up my card or purchase concession. I wanted the student price so I didn't settle for using my debit card as my transport card. So it was quite a hassle to make a trip to the top-up machine.
            </p>
            <p class="text">
              At that time, PayLah! was still a new app and after frequently using the app, I found the convenience of sending money through the app was simple and fuss-free. Suddenly, I had this thought of using PayLah! as a means of a more convenient and efficient way of topping up money or purchasing concession to my transport card through the app. In this way, I can do such processes anywhere anytime. Purposely making trips to the top-up machine will be no more! 
            </p>
            <p class="text">
              Hence, during my internship at DBS Asia X in 2019, my supervisor tasked me to do up a wireframe of any app, I took the opportunity to draw this idea.
            </p>
            <p>
              The application design needs to enhance an aspect of user experience of any application, it could be based on an existing DBS application or it could be a start-idea using the DBS Design Language. The DBS Design Language is a set of guidelines that DBS follows when they design a web or mobile application. 
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import '../../assets/GlobalStyle.css';
</style>
