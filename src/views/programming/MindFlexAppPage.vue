<script>
import NavigationBar from '../../components/NavigationBar.vue';

export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      page: "prg",
      ddl_link: "app"
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
            <div><span class="uiux-tag">Programming</span></div>
            <p class="title">MindFlex App</p>
            <p class="subtitle">WHY?</p>
            <p class="text">
              Previously, interested users would go to the MindFlex's website to apply for assignments. The company now wants users to be able to apply assignments through their mobile phones which is more on-the-go and user friendly.  
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <p class="title">The Process</p>
        <div class="row">
          <div class="col-sm image-text-container">
            <div>
              <p class="highlighted-subtitle">
                My Responsibilities
              </p>
              <p class="text">
                The base of the app was done when I entered the company for my internship, so I was tasked to with the following tasks:
              </p>
              <li>Testing, Bugs and Fixes</li>
              <li>Pagination</li>
              <li>Remove Assignments from Multi Apply Page</li>
              <li>CSS Standardisation</li>
              <li>Deployment on Android and IOS</li>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <p class="highlighted-subtitle">
              Testing, Bugs and Fixes
            </p>
            <p class="text">
              I tested the app display on both IOS and Android devices. I also tested them on various screen sizes as well. Apart from testing the UI of the app, I also tested the functionality by putting myself as the user, going through happy and negative paths. After identifying the errors, I would note them down and fix them.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <p class="highlighted-subtitle">
              Pagination
            </p>
            <p class="text">
              I tested the app display on both IOS and Android devices. I also tested them on various screen sizes as well. Apart from testing the UI of the app, I also tested the functionality by putting myself as the user, going through happy and negative paths. After identifying the errors, I would note them down and fix them.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <p class="highlighted-subtitle">
              Remove Assignments from Multi Apply Page
            </p>
            <p class="text">
              I tested the app display on both IOS and Android devices. I also tested them on various screen sizes as well. Apart from testing the UI of the app, I also tested the functionality by putting myself as the user, going through happy and negative paths. After identifying the errors, I would note them down and fix them.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <p class="highlighted-subtitle">
              CSS Standardisation
            </p>
            <p class="text">
              I tested the app display on both IOS and Android devices. I also tested them on various screen sizes as well. Apart from testing the UI of the app, I also tested the functionality by putting myself as the user, going through happy and negative paths. After identifying the errors, I would note them down and fix them.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <p class="highlighted-subtitle">
              Deployment on Android and IOS
            </p>
            <p class="text">
              It was my first time putting the app on the app and google store, so I had to do my research. In my case, thankfully there were videos walkthrough I could follow.
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
