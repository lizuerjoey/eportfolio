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
      page: "graphic",
      ddl_link: "dbs_asiax",
      url: "../../files/4d_branding_final_design.pdf",
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
            <div><span class="uiux-tag">Graphic Design</span></div>
            <p class="title">DBS Asia X Visual Branding</p>
            <p class="subtitle">WHY?</p>
            <p class="text">
              DBS has long established a problem-solving framework called the 4D framework. However, <span class="highlight">not many DBS staffs</span> in the bank know about this framework. Therefore, DBS CEO Piyush, decided to task the re-branding of the 4D to the Transformation team so that they could create more <span class="highlight">awareness</span>. The team designers were too used to the previous 4D framework and unable to come up with a new branding; hence they wanted a <span class="highlight">fresh perspective</span> of the 4D framework. Therefore, they had reached out to interns for a different perspective and hope that it could inspire them.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <p class="title">4D Framework</p>
        <div class="row">
          <div class="col-sm image-text-container">
            <div>
              <p class="highlighted-subtitle">
                4D Framework
              </p>
              <p class="text">
                The 4D framework is a Journey Thinking Framework, usually applied on human centred design to transform DBS customer and employee journeys. There are four phases, Discover, Define, Develop and Deliver.
              </p>
            </div>
          </div>
          <div class="col-sm col-center">
            <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/4d_framework.png" />
          </div>
        </div>

        <p class="title">The Process</p>
        <div class="row">
          <div class="col-sm">
            <div>
              <p class="highlighted-subtitle">
                Overall Summary
              </p>
              <p class="text">
                Firstly, research on branding was carried out. Thereafter, an implementation of designs were expected to be carried out. The task is to come up with three themes and apply it to various merchandise such as PowerPoint slides; Title and Heading, card designs and letterheads. Each theme should have at least two variations i.e. if a box is filled in, another variation could be an unfilled box. The final goal would be to create a slide deck with a combination of designs from the three themes.
              </p>
              <p class="text">
                During the process, I did four themes instead of three and there was a total of three iterations of design implementations.
              </p>
              <p class="text">
                <b>Note:</b> The stars represented designs my supervisor liked and should improve and expand on in the next iterations.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm col-center">
            <div>
              <p class="highlighted-subtitle">
                1st Iteration
              </p>
              <p class="text">
                The <b>first</b> theme used the outlined words of the 4D Framework to create a shape or pattern.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/theme1/1.png" />

              <p class="text pt-3">
                The <b>second</b> theme used the 4D shape. It was experimented in a diverse variety of patterns e.g. opacity, solid or outline, size, colour and many more to find one that fits well.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/theme2/1.png" />

              <p class="text pt-3">
                The <b>third</b> theme used artsy colours. Experiemented with avant-garde colours. If used on posters or badges, it would stand out and attract. This style of art is aesthetic and part of the current trend too. However, this design was lacking in terms of the DBS branding.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/theme3/1.png" />

              <p class="text pt-3">
                The <b>fourth</b> theme used complementry colours of the four colours of the 4D Framework. These colours were applied to the outline, colour and background of a presentaton slide.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/theme4/1.png" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm col-center">
            <div>
              <p class="highlighted-subtitle">
                2nd Iteration: Slide Deck
              </p>
              <p class="text">
                In this iteration, the author worked on the constructive feedback given and designed a slide deck (Title and how would the transition be for deliver, define, develop and deliver), card and letter for four themes, where the fourth theme is a combination of all three themes.
              </p>
              <p class="text">
                The <b>first</b> theme experimented with images as backgrounds since most DBS slides apply hero-styled images. Next, a clean background with various ways of an outline - width and dotted or otherwise.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/theme1/2.png" />

              <p class="text pt-3">
                The <b>second</b> theme experimented with the outline of the 4D framework and a way to illustrate the process loop flow.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/theme2/2.png" />

              <p class="text pt-3">
                The <b>third</b> theme illustrated different ways of how the patterns could be arranged as a design and as intersections. The clover was either filled or unfilled, or a mix. Opacity was also played with to make other elements that are not transparent stand out more.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/theme3/2.png" />

              <p class="text pt-3">
                The <b>fourth</b> theme displays a combination of design from the above three designs.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/theme4/2.png" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm col-center">
            <div>
              <p class="highlighted-subtitle">
                2nd Iteration: Card
              </p>
              <p class="text">
                The <b>first</b> theme played with the DBS colour scheme so that users would be able to know that this is by DBS.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/theme1/c.png" />

              <p class="text pt-3">
                The <b>second</b> theme played with the DBS colour scheme as well. It is evident that the DBS sparks logo is used as well. The concept of the 4D framework outline is like a cycle, therefore, the idea of creating loops was suggested by the author’s supervisor.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/theme2/c.png" />

              <p class="text pt-3">
                The <b>third</b> theme experimented with patterns and shapes.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/theme3/c.png" />

              <p class="text pt-3">
                The <b>fourth</b> theme is a combination of all the designs above.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/theme4/c.png" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm col-center">
            <div>
              <p class="highlighted-subtitle">
                2nd Iteration: Letterhead
              </p>
              <p class="text">
                Letterhead refers to the design of an organisation name. Regards to this task, I designed the letterheads on two mediums - powerpoint and cards.
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/graphic_design/4d_branding/letterhead.png" />

              </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <p class="highlighted-subtitle">
              3rd Iteration
            </p>
            <p class="text">In this last iteration, the best designs were chosen and a finalised slide deck was designed.</p>
            <PDFViewer
              class="hide-pdf"
              :source="url"
              style="height:100vh; object-fit: contain;"
              @download="handleDownload"
            />

            <div class="show-pdf-link">
              <p class="text">
                The PDFViewer is too big to view on this screen size. Click
                <a class="link" :href=url target="_blank">here</a>
                to read the proposal.
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
