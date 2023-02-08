<script>
import NavigationBar from '../../components/NavigationBar.vue';

export default {
  components: {
    NavigationBar,
  },
  data() {
    return {
      page: "ui_ux",
      ddl_link: "edm_microsite",
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
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/edm_microsite/edm_microsite_persona.png" />
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
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/edm_microsite/heuristic_evaluation.png" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm col-center image-text-container">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/edm_microsite/proposed_information_architecture.png" />
          </div>
          <div class="col-sm">
            <div>
              <p class="highlighted-subtitle">
                Step 3: Proposed Information Architecture
              </p>
              <p class="text">
                A strict singular hierarchy describes a system where you can only access a low-level page via its parent. In this aspect, EDM would be the parent where the users can only access the pages of microsite by clicking on the button on the EDM. Subsequently, each child; i.e. the pages of the microsite can be linked to another child of the parent. In this manner, the pages of a microsite are interconnected and can be redirected through the pages. Information Architecture like multi-dimensional is not necessary as the EDM and microsite have only one way of browsing to the same content. It is also on a smaller scare compared to the main website, there are no hierarchies that overlaid on the same content. Also, it will only be used for certain occasions thus applying a simple information architecture like strict singular hierarchy is an efficient choice.
              </p>
              <p class="text">
                Therefore, I used the Strict Singular Hierarchy to design the microsite as this microsite is for EagleWings anniversary event; a one time small scale event where there are few pages. Among the few pages, there are no hierarchies that overlaid on the same content. I believe that a Strict Singular Hierarchy would be the most effective in conveying information efficiently to users.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <div>
              <p class="highlighted-subtitle">
                Step 4: Low, Mid and High-Fidelity
              </p>
              <p class="text">
                I used <span class="highlight">Adobe XD</span> to draw out the low and mid-fidelity wireframes for the microsite. While I used <span class="highlight">Adobe Illustrator</span> to draw both mid and high-fidelity for the EDM. Then, using Wix as a medium to illustrate the high-fidelity microsite. Please refer to page 45-67 in my <a class="link" href="../../files/ux_indiv_assignment_compressed.pdf" target="_blank">report</a> for low, mid and high-fidelity screenshots of the microsites.
              </p>
              <p>
                The idea is allowing users to click on the EDM then bringing the user to interact with the microsite like a game and win an award once compeleted.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm col-center">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/edm_microsite/high_fid_poster.png" />
          </div>
          <div class="col-sm image-text-container">
            <div>
              <p class="highlighted-subtitle">
                Step 5: Guerrilla Testing
              </p>
              <p class="text">
                Guerilla Testing is an easy-to-perform, affordable and efficient technique. As I am designing an EDM and microsite for EagleWings; a cinema company, and also targeting polytechnic and universities students, thus the best place for testing would be at a cinema. However, I would assume that a student of that age would been to a cinema at least once. Therefore, I have found five people who fits the targetted demographic to conduct the testing with. While the participants did the test, I observed their emotions and behaviour, and when the participant talk about his experince when using, I would note it down. Thereafter, I made improvements in the next iteration based on their feedbacks.
              </p>
              <p class="text">
                Click <a class="link" href="https://s10179145.wixsite.com/mysite" target="_blank">here</a> to view my improved microsite!
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
