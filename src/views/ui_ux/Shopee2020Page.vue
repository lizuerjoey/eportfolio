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
      ddl_link: "shopee2020",
      url: "../../files/shopee2020_proposal.pdf",
      adobe_url: "https://xd.adobe.com/view/d76c556a-b1f4-463d-a6c0-ccf5aab9d2e1-823f/?fullscreen",
      drive: "https://drive.google.com/drive/folders/132JYqe2hDvJQy-fsaGqVcZ4vfXJxUNfn",
      fb_link: "https://www.facebook.com/groups/shopeeproductdesign2021/permalink/309685646934308/"
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
            <p class="title">AR Filter & Business Insights</p>
            <p class="subtitle">WHY?</p>
            <p class="text">
              Together with another member, we participated in Shopee Product & Design Challenge 2020. The problem statement given was to either improve or create a new feature of Shopee Application.
            </p>
            <p class="text">
                The augmented reality (AR) market is expected to reach <span class="highlight">$50 billion by 2024</span> (“20 Augmented Reality Statistics You Know in 2020”, 2020) with brands such as IKEA, Nike and Apple incorporating AR into their eCommerce platform. With the growing trend of the AR market, and known brands such as IKEA, Nike and Apple will change Singaporeans consumers perception of AR.
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
                Step 1: Our Solution
              </p>
              <p class="text">
                Leveraging AR technology, we proposed that AR can be used to mimic how the product would be like in person. Products like furnitures, clothing, makeup and more. However this AR feature does not come as a standalone function, it is coupled with the seller's business insights so seller's can compare products's statistics with AR and those without.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <div>
              <p class="highlighted-subtitle">
                Step 2: My Responsibilities
              </p>
              <p class="text">
                In this project, I was responsible for:
              </p>
                <li>Proposal Writing</li>
                <li>Seller's Business Insights (Prototype, Workflow, User Journey)</li>
                <li>Facebook Post</li>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <div>
              <p class="highlighted-subtitle">
                Step 3: Proposal
              </p>
              <p class="text">
                I had to do various research such as finding evidence to prove whether our solution was feasible based on the current technological advancement. Below is our business model. 
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/shopee2020_business_model.png" />
            </div>
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
              <p class="text">
                The PDFViewer is too big to view on this screen size. Click
                <a class="link" :href=url target="_blank">here</a>
                to read the proposal.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm image-text-container">
            <div>
              <p class="highlighted-subtitle">
                Step 4: Seller's Insights
              </p>
              <p class="text">
                I first did a low-fi sketch on how I envision the Seller's Business Insights to be.  
              </p>
              <p class="text">
                Next, I translated this into a high-fi prototype while making additional editions which the low-fi draft missed out. Click <a class="link" :href=adobe_url target="_blank">here</a> for the interactive prototype made using Adobe XD.
              </p>
              <p class="text">
                For a better experience to those who want to interact with my prototype, I created a workflow so that they can follow through easily. Please refer to <a class="link" :href=drive target="_blank">this</a> for a the seller's workflow.
              </p>
              <p class="text">
                Lastly, I also created a user journey to depict how a seller would go about selling.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm col-center">
            <div id="user_journey" style="object-fit: contain;" class="carousel slide" data-interval="false">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide1.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide2.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide3.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide4.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide5.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide6.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide7.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide8.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide9.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide10.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide11.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide12.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide13.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide14.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide15.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide16.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide17.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide18.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide19.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide20.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide21.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide22.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/shopee2020_slides/Slide23.png">
                </div>
              </div>
              <a class="carousel-control-prev" href="#user_journey" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#user_journey" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <div>
              <p class="highlighted-subtitle">
                Step 5: Facebook
              </p>
              <p class="text">
                I also designed an infographic that was uploaded on Facebook. We wanted a layout that could fit both consumer and seller point of view. Also, we wanted the colour to be attractive to stand out from other groups post. The image loads a little slow, please check out our poster through our <a class="link" :href=fb_link target="_blank">Facebook post</a> instead!
              </p>
              <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/shopee2020_fb_infographic.jpg" />
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
