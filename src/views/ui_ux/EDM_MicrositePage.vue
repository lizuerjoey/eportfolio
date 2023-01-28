<script>
import NavigationBar from '../../components/NavigationBar.vue';
import PDFViewer from 'pdf-viewer-vue'

export default {
  components: {
    NavigationBar,
    PDFViewer
  },
  data() {
    return {
      page: "ui_ux",
      ddl_link: "edm_microsite",
      url: ""
      // url: "../../files/ux_indiv_assignment_compressed.pdf",
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
            <p class="title">EDM & Microsite</p>
            <p class="subtitle">WHY?</p>
            <p class="text">
              For a UI/UX module assignment, a member of each team was required to revamp any digital application (e.g. website, microsite and order machine etc.) of a company chosen. My team chose Eagle Cinematics. However, after contacting with Eagle Cinematics, they do not have any EDM or Microsite to start of with. Therefore, I would need to create one.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <p class="title">The Process</p>
        <div class="row">
          <div class="col-sm">
            <div>
              <p class="highlighted-subtitle">
              Step 1: Determine Microsite Purpose and Target Audience
              </p>
              <p class="text">
                Our team has created a 'dummy' theme for this assignment, which is Eagle Wings celebrating their 1st year anniversary and they plan to target students.
              </p>
              <p class="text">
                The proposed EDM will be sent out to EagleWings Cinematics members, targeting internal users; students to celebrate their one-year anniversary. They plan to appeal to young consumers since their cinema theatre is situated in the centre of schools like Ngee Ann and Singapore Polytechnic and Universities like NUS. Additionally, promotions and deals appeal well to students due to their tight budget and they have more free time compared to a working adult who works a 9-6pm shift every day.         
              </p>
              <p class="text">
                I created a persona to showcase an example of EagleWings Cinematics target audience.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/edm_microsite_persona.png" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm image-text-container">
            <div>
              <p class="highlighted-subtitle">
                Step 2: Heuristic Evaluation
              </p>
              <p class="text">
                Since EagleWings Cinematics do not have EDM or a microsite, I conducted the heuristic evaluation on their competitor, Golden Village. Then, apply what I had analysed to my proposed EDM for EagleWings. 
              </p>
              <p class="text">
                Golden Village EDM has hit high marks in all areas, scoring at least a 4 in aspects such as Human, Forgiving, Self-evident, Predictable, Efficient and Trustworthy. However, it did not score as well for accessibility. It didn’t cater to colour-blind users. One reason could be that, for a media company, they cater to a larger audience that are not color-blind. However, one can never rule out the possibility that a colour-blind user cannot watch a movie. Therefore, in the later stage of design, not only do I have to consider the majority of users but colour blind users as well.
              </p>
            </div>
          </div>
          <div class="col-sm col-center">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/low_fi.jpg" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <PDFViewer
              class="hide-pdf"
              :source="url"
              style="height:100vh; object-fit: contain;"
              @download="handleDownload"
            />

            <div class="show-pdf-link">
              <a class="link" href="../../files/ux_indiv_assignment_compressed.pdf" target="_blank">here</a>
            </div>
          </div>
        </div>

        <div class="row">  
          <div class="col-sm">
            <p class="highlighted-subtitle">
              Step 3: Information Architecture
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
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/radio_button_guideline.png" />
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/radio_button_guideline_applied.png" />
            <p class="text text-center pt-3">
              Design of radio button remains, and icon placed behind text instead of the radio button.
            </p>

            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/loading_screen_guideline_1.png" />
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/loading_screen_guideline_2.png" />
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/loading_screen_guideline_applied.png" />
            <p class="text text-center pt-3">
              I dimmed the screen and the text is below. However, one limitation was that I was unable to find the same loading icon.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm col-center">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/mrt_paylah_user_workflow.png" />
          </div>
          <div class="col-sm image-text-container">
            <div>
              <p class="highlighted-subtitle">
                Step 4: Low, Mid and High
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


        <div class="row">
          <div class="col-sm col-center">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/mrt_paylah_user_workflow.png" />
          </div>
          <div class="col-sm image-text-container">
            <div>
              <p class="highlighted-subtitle">
                Step 5: Guerrilla Testing
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
