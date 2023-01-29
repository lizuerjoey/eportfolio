<script>
import NavigationBar from '../../components/NavigationBar.vue';

export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      page: "ui_ux",
      ddl_link: "patch",
      slides: { url: ["../../../public/files/patch_pitch_slides/Slide2.png", 
      "../../../public/files/patch_pitch_slides/Slide3.png"]
      }
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
            <p class="title">Elderly Phone App (Patch)</p>
            <p class="subtitle">WHY?</p>
            <p class="text">
              Why are people focusing more on the physical side of health? Many elderly folks in Singapore are <span class="highlight">“forgotten by society”</span> with people going out of their way to <span class="highlight">avoid them</span> due to their mental health issues. Why is there such stigma surrounding these conditions? In 2014, there were <span class="highlight">126</span> cases of elderly suicide and now, in 2018, can you imagine just how many cases of suicides there will be if we do not take action to improve these problems? With <span class="highlight">PATCH</span>, we are trying to integrate the current technology to help <span class="highlight">patch</span> the holes in their heart caused by loneliness and free them from social isolation.
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
              Step 1: Market Research
              </p>
              <p class="text">
                The above pitch slides describes how we have conducted our research online and offline to support our findings for the above problem. We have researched and found articles evident that elderly is still facing emotional issues and nobody is solving them. After ideation, we went to conduct market research with the elderly ages 55 and above around community centers. We have collated around <span class="highlight">72 responses</span>. This survey was used to find out whether elderly were tech savvy enough to use our application or would be interested to use our application. This would give us the insight for our team to start the development of the idea or think of a new one.
              </p>
            </div>
          </div>
        </div>

        <dv class="row">
          <div class="col-sm">
            <div id="pitch_slides" style="object-fit: contain;" class="carousel slide" data-interval="false">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="../../../public/files/patch_pitch_slides/Slide1.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_pitch_slides/Slide2.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_pitch_slides/Slide3.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_pitch_slides/Slide4.png" >
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_pitch_slides/Slide5.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_pitch_slides/Slide6.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_pitch_slides/Slide7.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_pitch_slides/Slide8.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_pitch_slides/Slide9.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_pitch_slides/Slide10.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_pitch_slides/Slide11.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_pitch_slides/Slide12.png">
                </div>
              </div>
              <a class="carousel-control-prev" href="#pitch_slides" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#pitch_slides" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </dv>

        <div class="row">
          <div class="col-sm image-text-container">
            <div>
              <p class="highlighted-subtitle">
                Step 2: User Stories
              </p>
              <p class="text">
                The app allows elderly to match up with strangers of similar hobby of age. Connect and socialise with new friends. Aim that through the app, it will patch up the holes of loneliness in their hearts.
              </p>
              <p class="text">
                With the main functions of the app in mind, we created user stories and placed them on our scrum board, following a 2 week sprint closely in our app development.
              </p>
            </div>
          </div>
          <div class="col-sm col-center">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/user_stories.webp" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm col-center">
            <div id="elderly_ui" style="object-fit: contain;" class="carousel slide" data-interval="false">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/1.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/2.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/3.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/4.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/5.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/6.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/7.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/8.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/9.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/10.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/11.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/12.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/13.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/14.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/15.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/16.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/17.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/18.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/19.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/20.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/21.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/22.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/elderly/23.png">
                </div>
              </div>
              <a class="carousel-control-prev" href="#elderly_ui" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#elderly_ui" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div class="col-sm image-text-container">
            <div>
              <p class="highlighted-subtitle">
                Step 3A: Our Design (Elderly Users)
              </p>
              <p class="text">
                Our target audience is the elderly, so the design will be fitted to their needs such as larger and easy to read fonts, unnecessary features to reduce complication, specific colours that stimulate elderlys' attention and so on. Through our interview analysis, we concluded the top few hobbies that were popular among the elderly. We also took into consideration that not all elderly are English literate thus, we implemented a Chinese language option. We chose Chinese because it was the second most literate language among the elderly.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm image-text-container">
              <div>
                <p class="highlighted-subtitle">
                  Step 3B: Our Design (Admin Users)
                </p>
                <p class="text">
                  The app also consist of secondary features which will be utilised by our Admin Staff. Assuming that these staffs will be young adults hence I went with a simple design, not forgetting about our corporate colour and taking our team programmers' opinions on the level of difficulty when coding the design out.
                </p>
              </div>
          </div>
          <div class="col-sm col-center">
            <div id="admin_ui" style="object-fit: contain;" class="carousel slide" data-interval="false">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/admin/1.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/admin/2.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/admin/3.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/admin/4.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/admin/5.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/admin/6.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/admin/7.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/admin/8.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/admin/9.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/admin/10.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/admin/11.png">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="../../../public/files/patch_app_ui/admin/12.png">
                </div>
              </div>
              <a class="carousel-control-prev" href="#admin_ui" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#admin_ui" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <p class="highlighted-subtitle">
                Step 4: Poster
            </p>
            <p class="text">
              As the main designer of the team, not only did I designed the UI of the app, I also designed other documents like slides and the poster. For our team's poster to showcase our app during the 2019 Ngee Ann Demo Day, I came up with three designs:
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/patch_poster_1.webp" />
          </div>
          <div class="col-sm">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/patch_poster_2.webp" />
          </div>
          <div class="col-sm">
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/patch_poster_3.webp" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <p class="text">
              Our target group for this poster is not for the elderly to read but for the younger generation hence I used vibrant colours such as orange and red. I chose orange because it brings a feeling of friendliness and red is a striking colour that alerts people.
            </p>
            <p class="text">
              My groupmates chose the 3rd poster on the right as the best one. My teacher gave his feedback - that the heading should be more clear. Hence, I made an improved version heading his comments.
            </p>
            <img width="100%" style="object-fit: contain;" src="../../assets/ui_ux/final_patch_poster.webp" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <p class="highlighted-subtitle">
              Step 5: Blog
            </p>
            <p class="text">
              Throughout this project, I created a blog whereby I updated weekly on my progress. Click <a class="link" href="https://leejoeyfp2.wixsite.com/leejoeysite/blog/categories/fsd-p2" target="_blank">here</a> to read my blog!
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
