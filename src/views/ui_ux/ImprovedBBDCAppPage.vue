<script>
import NavigationBar from '../../components/NavigationBar.vue';

export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      page: "ui_ux",
      ddl_link: "bbdc",
      figma_url: "https://www.figma.com/file/HnIZo9aNutveVeVvLakUIl/BBDC-App-(Final)?node-id=0%3A1&t=KWnRUhaGExx2GRnS-1",
      prototype_url: "https://www.figma.com/proto/HnIZo9aNutveVeVvLakUIl/BBDC-App-(Final)?node-id=63%3A2913&scaling=scale-down&page-id=0%3A1&starting-point-node-id=63%3A2913&show-proto-sidebar=1"
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
            <p class="title">Improved BBDC App</p>
            <p class="subtitle">WHY?</p>
            <p class="text">
              Bukit Batok Driving Centre (BBDC) lacks technological adoption despite them having a large number of customers. Efforts towards digitalisation were minimal, where they have an application which only has limited functionalities. Overall customer satisfaction is also extremely poor due to the inefficient online procedures and long waiting times at the BBDC while booking for class timings.
            </p>
            <p class="text">
              The current application only shows details of the latest class and does not allow any changes to your bookings. Topping up of account balance is also not available on the app. Given that the application merely displays information, BBDC can thus be said to only be in the digitalisation stage. Hence, they can leverage much more on their application to transform digitally and add value to their centre. 
            </p>
            <p class="text">
              To have a better understanding of BBDC’s background, our group conducted a survey to find out more about customers' pain points and frustrations. From the survey results, <span class="highlight">more than half</span> respondents felt that waiting time in public driving centres as compared to private is much longer and ultimately prefers to opt for private lessons.
            </p>
            <p class="text">
              The main problems that our group has therefore identified is that:
            </p>
            <ol>
              <li>The online services are ineffective and inefficient.</li>
              <li>Users are unable to track their learning progress through the entire journey.</li>
              <li>Payment process is very time consuming.</li>
            </ol>
            <p class="text">
              Overall, the existing application lacks essential features.
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
                Step 1: Proposed Solution
              </p>
              <p class="text">
                Firstly, we will be improving the current BBDC app which we will be focusing on:
              </p>
              <ol>
                <li>Efficiency</li>
                <li>Student's Learning Curve</li>
              </ol>
              <p class="text">
                Our main target audience who will be using the app are students learning driving, and our secondary will be instructors. This is because we also aim to cultivate an open minded for both students and instructurs by a two-way feedback loop to each other.
              </p>
              <p class="text">
                Addiitonaly, we plan to propose analytical features for:
              </p>
              <ol>
                <li>BBDC Backend</li>
                <li>Students</li>
                <li>Instructors</li>
              </ol>
              <p class="text">
                Below is our slides which showcases our solution in more details.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm col-center">
            <div id="bbdc_slides" style="object-fit: contain;" class="carousel slide" data-interval="false">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide1.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide2.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide3.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide4.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide5.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide6.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide7.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide8.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide9.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide10.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide11.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide12.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide14.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide15.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide16.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide17.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide18.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide19.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide20.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide21.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide22.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide23.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide24.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/bbdc_slides/Slide25.png">
                </div>
              </div>
              <a class="carousel-control-prev" href="#bbdc_slides" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#bbdc_slides" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm image-text-container">
            <video style="height:auto; width: 100%" controls>
              <source src="../../../public/files/bbdc_demo.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="col-sm">
            <div>
              <p class="highlighted-subtitle">
                Step 2: High-Fidelity Prototype
              </p>
              <p class="text">
                We used figma to draw out the wireframes. It was my first using figma and I learnt interesting features such as plugins and creating components. 
              </p>
              <p class="text">
                There are 2 flows, students and instructors. Under students's flow, there are 4 sub flows:
              </p>
              <li>Sub Flow 1: Book Classes/ Exams</li>
              <li>Sub Flow 2: Modify Booked Classes/ Exams</li>
              <li>Sub Flow 3: Student's Give Feedback to Instructor</li>
              <li>Sub Flow 4: Student's Learning Curve</li>
              <p class="text">
                Click <a class="link" :href=figma_url target="_blank">here</a> and <a class="link" :href=prototype_url target="_blank">here</a> to view the users' flows to interact with the prototype. We have also created a short video to demonstrate the main functionality of our idea of an improved BBDC app (please unmute)!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import '../../assets/GlobalStyle.css';

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}
</style>
