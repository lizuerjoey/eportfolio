<script>
import NavigationBar from '../../components/NavigationBar.vue';

export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      page: "ui_ux",
      ddl_link: "paylah"
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

    <section>
      <div class="container">
        <p class="title">The Process</p>
        <div class="row">
          <div class="col-sm image-text-container">
            <div>
              <p class="highlighted-subtitle">
              Step 1: Competitive Edge
              </p>
              <p class="text">
                One of the benefits I had while doing my intern in DBS Asia X was to be able to attend a workshop dry run called Competitve Edge, where the goal is to find a competitive edge of a product (a function which other company does not have but also keeping in mind that the proposed function should meet customer needs) by comparing with similar products put out. Then, picking one idea to innovate on it. This exercise was done among the interns.
              </p>
            </div>
          </div>
          <div class="col-sm col-center">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/dbs_paylah/competitive_edge_template.png" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm image-text-container col-center">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/dbs_paylah/competitive_edge_template_used.png" />
          </div>
          <div class="col-sm">
            <div>
              <p class="text">
                Through the use of the template, we manage to narrow down to one customer need that DBS and other companies had yet to address, which was transportation on-the-go. This aligns with the problem I had thought in my own free time, and through this exercise, I found out many others had the same consensus as me. This strengthens that there is a need to solve the business problem.
              </p>
              <p class="text">
                Since we had a problem statement, we identified what are the key words in the problem statement to streamline. The key words are transportation, DBS and customer. Leading to some questions raised:
              </p>
              <li>Which aspect of transport one wants to focus on, EzLink, Concession Pass or Tourist Pass?</li>
              <li>Who is/ are the users?</li>
              <li>Which DBS application to leverage on or designing a new one completely?</li>
              <li>What software to design the application?</li>
              <li>How will the application flow?</li>
              <br>
              <p class="text">These questions were useful when designing the application.</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm image-text-container">
            <div>
              <p class="highlighted-subtitle">
                Step 2: Low-Fidelity Prototype
              </p>
              <p class="text">
                I focused on EzLink and Concession Pass only as I wanted to target students.
              </p>
              <p class="text">
                In my original idea, I wanted to integrate the PayLah! app and during the activity, many of my peers (who fit the target audience) also use PayLah!.
              </p>
              <p class="text">
                Research was also conducted so to stay as true to the facts as possible. For instance, I research the various concession passes different types users can purchase. 
              </p>
              <p class="text">
                Thus, I drafted out a very simple low fi of how I wanted the function to look like on the app.
              </p>
            </div>
          </div>
          <div class="col-sm col-center">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/dbs_paylah/low_fi.jpg" />
          </div>
        </div>

        <div class="row">  
          <div class="col-sm">
            <p class="highlighted-subtitle">
              Step 3: High-Fidelity Prototype
            </p>
            <p class="text">
              Adobe XD was used to do the wireframes for the application. Click <a class="link" href="https://xd.adobe.com/view/28002f85-c253-4a36-44ee-dc46a92e923e-5e31/" target="_blank">here</a> to view my prototype!
            </p>
            <p class="text">
              With reference to the DBS Design Language, a website consists of guidelines to follow when DBS design their digital products.
            </p>
            <p class="text">
              Some examples of how the DBS Design Language Guidelines was considered and applied into the application.
            </p>
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/dbs_paylah/radio_button_guideline.png" />
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/dbs_paylah/radio_button_guideline_applied.png" />
            <p class="text text-center pt-3">
              Design of radio button remains, and icon placed behind text instead of the radio button.
            </p>

            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/dbs_paylah/loading_screen_guideline_1.png" />
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/dbs_paylah/loading_screen_guideline_2.png" />
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/dbs_paylah/loading_screen_guideline_applied.png" />
            <p class="text text-center pt-3">
              I dimmed the screen and the text is below. However, one limitation was that I was unable to find the same loading icon.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm col-center">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/dbs_paylah/mrt_paylah_user_workflow.png" />
          </div>
          <div class="col-sm image-text-container">
            <div>
              <p class="highlighted-subtitle">
                Step 4: User Workflow
              </p>
              <p class="text">
                This UX workflow contains screenshots of all possible flows of the feature. Google Draw.io was utilised to design the user workflow.
              </p>
              <p class="text">
                It contains 2 main workflows:
                <ol>
                  <li>Top Up MRT Card</li>
                  <li>Purchase Student Concession</li>
                </ol>
              </p>
              <p class="text">
                In the 1st Flow, the user would key in the amount of money they want to top up and key in their NRIC.
              </p>
              <p class="text">
                In the 2nd Flow, has another two different flows. As different levels of students e.g. secondary and tertiary levels concession pass would cost differently.
              </p>
              <p class="text">
                Therefore, when the user key in their NRIC, it would check this user student level, and then determine the right concession price.
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
</style>
