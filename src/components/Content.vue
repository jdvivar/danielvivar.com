<template>
  <div id="wrapper" :class="style.value">
    <div id="selectors">
      <div id="style-selector">
        <label for="style-select">style</label>
        <select v-model="style.value" id="style-select">
          <option :value="style.default.value" selected>
            {{ style.default.text }}
          </option>
          <option v-for="option in style.options" v-bind:value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div id="accent-selector">
        <label for="accent-select">accent</label>
        <select v-model="accent.value" id="accent-select">
          <option :value="accent.default.value" selected>
            {{ accent.default.text }}
          </option>
          <option v-for="option in accent.options" v-bind:value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
    <nav>
      <ul v-scroll-spy-active v-scroll-spy-link>
        <li><a href="#who">who I am</a></li>
        <li><a href="#future">what I'm looking for</a></li>
        <li><a href="#outstanding">what I'm good at</a></li>
        <li><a href="#tools">which technologies or tools I use</a></li>
        <li><a href="#experience">where I've worked</a></li>
        <li><a href="#education">where I've studied</a></li>
        <li><a href="#contact">how you can get in touch with me</a></li>
        <li><a href="#about">about this site</a></li>
      </ul>
    </nav>

    <main v-scroll-spy>

      <section id="who">
        <h1>who I am</h1>
        <div>
          <p>
            Hi, my name is <b>Daniel Vivar</b> and I'm a front-end web engineer and designer based in London since 2014.
          </p>
          <p>
            Originally a graphic designer and a computers engineering student, I then decided to focus my career into <u>front-end web engineering</u>.
          </p>
        </div>
      </section>

      <section id="future">
        <h1>what I'm looking for</h1>
        <div>
          <p>
            I love to learn new things all the time so my future company should be a place where <u>learning</u> and sharing knowledge <u>is actively encouraged</u>.
          </p>
          <p>
            I feel specially motivated in projects where I could create <u>delightful user experiences</u> for great apps.
          </p>
          <p>
            I also value an <u>open-minded culture</u>, flexibility, a healthy environment, a focused team and companies where technology is the heart.
          </p>
        </div>
      </section>

      <section id="outstanding">
        <h1>what I'm good at</h1>
        <div>
          <p>
            I'm good at <u>abstract thinking</u>: explaining and designing how things work and talking to non-technical people. That means I can easily speak with senior architects, product managers, ux researchers or a CTO and I'll be able to have meaningful relations with each one of them.
          </p>
          <p>
            That, and a good synthesis capacity also helps when <u>designing the architecture</u> of apps and systems and when solving difficult problems and defects.
          </p>
          <p>
            I feel motivated by learning new stuff, so when picking up tasks I'll always go for the more <u>challenging</u> ones. That means I also value teams that tend to do pair programming or encourage cross-team work.
          </p>
        </div>
      </section>

      <section id="tools" @click="showModal = $event.target.innerHTML">
        <h1>which technologies or tools I use</h1>

        <span>javascript</span>
        <Modal v-if="showModal === 'javascript'" @close="showModal = false">
          <div slot="term">
            JavaScript
          </div>
          <div slot="definition">
            Definition of javascript
          </div>
        </Modal>

        <span>vuejs</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            Vue.js
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span>es6</span>
        <Modal v-if="showModal === 'es6'" @close="showModal = false">
          <div slot="term">
            ECMAScript 6
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span>pwa</span>
        <Modal v-if="showModal === 'pwa'" @close="showModal = false">
          <div slot="term">
            Progressive Web Application
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span>node</span>
        <Modal v-if="showModal === 'node'" @close="showModal = false">
          <div slot="term">
            Node.js
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span>npm</span>
        <Modal v-if="showModal === 'npm'" @close="showModal = false">
          <div slot="term">
            Node.js package manager
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span>scss</span>
        <Modal v-if="showModal === 'scss'" @close="showModal = false">
          <div slot="term">
            Sassy CSS
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span>tdd</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>angularjs</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>bootstrap</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>css</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>bdd</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>cro</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>cms</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>headless cms</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>cd/ci</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>git</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>jquery</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>qa engineering</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>a/b testing</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>e2e testing</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>api testing</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>prototyping</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>wireframing</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>serverless</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>cloud&nbsp;functions</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>responsive&nbsp;design</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>progressive&nbsp;enhancement</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span>soap</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>agile</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>scrum</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>kanban</span>
        <Modal v-if="showModal === 'vuejs'" @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <div class="help" style="clear:both">
          click in each tag to reveal its definition
        </div>
      </section>

      <section id="experience">
        <h1>where I've worked</h1>
        <ul>
          <li class="experience-item">
            <div class="company">
              Zava
            </div>
            <div class="company-logo">
              company-logo
            </div>
            <div class="title">
              front-end web engineer
            </div>
            <div class="from">
              2015-10
            </div>
            <div class="until">
              present
            </div>
            <div class="location">
              London
            </div>
            <div class="tldr">
              Almost 3 years as a front-end web engineer in a rapid-growing health company, using the latest technologies
            </div>
            <div class="description">
              <p>
                In Zava (www.zavamed.com) I was mentored by the head of development from the beginning and had the fantastic opportunity to see a thrilling company grow, re-brand (from DrEd to Zava), move office and many other big events, as well as being part and even leading in some of the things we do.
              </p>
              <p>
                Some of the technologies/tasks/skills that I've learnt or developed further while at Zava:
              </p>
              <ul>
                <li>
                  Developing and maintaining several apps in AngularJS 1.5+ and VueJS and mastering javascript on the way.
                </li>
                <li>
                  Developing from scratch a PHP file-based CMS (Kirby) and maintaining older db-based CMS (Content Management System)
                </li>
                <li>
                  Mastering styling with SASS/SCSS
                </li>
                <li>
                  CRO (Conversion Rate Optimisation) which requires several teams working together (Data, UX, Marketing and Engineering). Manage data with Looker and all events with Segment. Creating experiments for A/B testing and more advanced customisation with Optimizely.
                </li>
                <li>
                  TDD (test-driven development) writing unit tests with Karma, Jasmine.
                </li>
                <li>
                  E2E frontend and API test automation, using Protractor, Jasmine, PhantomJS, WebdriverIO, Frisby.
                </li>
                <li>
                  CI/CD (Continuous Integration/Deployment) with Jenkins, Docker, AWS, Github, Netlify.
                </li>
                <li>
                  Agile methodologies: Scrum, Kanban.
                </li>
                <li>
                  Using InVision to design high detailed and visually attractive user experiences or just wireframing
                </li>
                <li>
                  Went from task runner Gulp and package manager Bower to only Yarn to then everything done with npm scripts and even bash scripts again.
                </li>
                <li>
                  Serverless and cloud functions with AWS Lambda
                </li>
              </ul>
            </div>
          </li>
          <li class="experience-item">
            <div class="company">
              Typeless
            </div>
            <div class="company-logo">
              company-logo
            </div>
            <div class="title">
              lead ui/ux designer
            </div>
            <div class="from">
              2014-09
            </div>
            <div class="until">
              2015-09
            </div>
            <div class="location">
              London
            </div>
            <div class="tldr">
              UX/UI Designer working on everything from scratch: a real London startup environment
            </div>
            <div class="description">
              <p>
                Typeless had this idea of being a contacts aggregator (https://www.producthunt.com/posts/typeless). The founders were based in London and a team of developers worked remotely from India. I helped both filling the gap between the 2 teams and getting a complex idea and a set of features intoto a simple and delightful user experience.
              </p>
              <p>
                Part of my work here includes:
              </p>
              <ul>
                <li>
                  <a href="http://www.danielvivar.com/typeless/topbar.html" target="_blank">
                    A completely responsive layout for the whole app
                  </a>
                </li>
                <li>
                  <a href="http://invis.io/G62N9KKQ3" target="_blank">
                    A design from scratch of an iOS app for iPhone
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="experience-item">
            <div class="company">
              Atos
            </div>
            <div class="company-logo">
              company-logo
            </div>
            <div class="title">
              hybrid apps developer & researcher - internship
            </div>
            <div class="from">
              2013-10
            </div>
            <div class="until">
              2014-08
            </div>
            <div class="location">
              Madrid
            </div>
            <div class="tldr">
              1 year internship in a big consulting firm as a hybrid apps developer/researcher
            </div>
            <div class="description">
              <p>
                During this 1-year internship in the Smart Mobility working group within the Solutions Delivery and Architecture department at Atos in the central offices in Madrid, I did develop my very first skills as an engineer. Learnt new technologies, researched a lot, took part in several projects, attended courses and, most of all, soaked in a real business environment.
              </p>
              <p>
                This is a non-comprehensive list of some of the things I did:
              </p>
              <ul>
                <li>
                  Design and development of mobile hybrid apps: using Apache Cordova, common web technologies and some specific light frameworks like jQueryMobile.
                </li>
                <li>
                  Automated mobile application testing: using Calabash and Cucumber to create a tests written following a BDD approach (Behaviour-Driven Development) which at the time allowed us to both test hybrid and native mobile apps in all platforms.
                </li>
                <li>
                  Rapid Prototyping: used Axure RP, Appery and Pencil.
                </li>
                <li>
                  Web Services testing: i.e. SOAP Web Services using SoapUI.
                </li>
                <li>
                  Projects: the most important project was a prototype hybrid Android app for Correos (an important client, the equivalent of Royal Mail UK in Spain) to be used in dedicated tablets in post offices to let customers buy most of the services.
                </li>
              </ul>
            </div>
          </li>
          <li class="experience-item">
            <div class="company">
              Grupo Coeco
            </div>
            <div class="company-logo">
              company-logo
            </div>
            <div class="title">
              graphic design
            </div>
            <div class="from">
              2010-03
            </div>
            <div class="until">
              2013-03
            </div>
            <div class="location">
              Madrid
            </div>
            <div class="tldr">
              part-time graphic designer during 3 years for a non-technology company
            </div>
            <div class="description">
              <p>
                While studying in college, I worked mostly as a graphic designer for this kitchen designer firm in Madrid. Designing corporate branding and managing online/offline marketing. I helped as well in the development and maintenance of several websites owned by the parent company. Also, I did office and business IT tasks, and organised training sessions for employees.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section id="education">
        <h1>where I've studied</h1>
        <ul>
          <li class="education-item">
            <div class="institution">
              Universidad Politécnica de Madrid
            </div>
            <div class="from">
              2009
            </div>
            <div class="until">
              2014
            </div>
            <div class="title">
              Bachelor's Degree in Computers Engineering
            </div>
          </li>
          <li class="education-item">
            <div class="institution">
              HTW Berlin
            </div>
            <div class="from">
              2013
            </div>
            <div class="until">
              2013
            </div>
            <div class="title">
              Degree's Final Project
            </div>
            <div class="description">
              During an Erasmus scholarship I developed Secutrak, a native Android app with special tracking features that could be used in a wide range of applications.
            </div>
          </li>
        </ul>
      </section>

      <section id="contact">
        <h1>how you can get in touch</h1>
        <ul>
          <li id="email">
            <a :href="`mailto:${email}`" v-if="email">
              {{ email }}
            </a>
            <button v-on:click="getEmail()" v-else>
              Reveal my e-mail address
            </button>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jdvivar" target="_blank">Linkedin</a>
          </li>
          <li>
            <a href="https://www.facebook.com/danielvivar" target="_blank">Facebook</a>
          </li>
        </ul>
      </section>
      <section id="about">
        <h1>about this site</h1>
        <p>
          This site is a PWA made with Vue CLI 3 (so VueJS + Webpack), hosted in Bitbucket/GitHub and deployed with Netlify.
        </p>
        <p>
          It could have just been one HTML5 page plus some vanilla JS and CSS in a normal server, but automating both the development workflow with the webpack based Vue CLI and the deployment plus lots of other perks from Netlify's free tier is just a breeze and very educational.
        </p>
        <p>
          Netlify has snippet injection, so Google Analytics is added during deployment that way, and my e-mail address is in an AWS Lambda cloud function, also served by Netlify. It all costs zero, nada, gratis. The only unnecessary luxury is the domain, for which I pay around £8 per year.
        </p>
        <p>
          I'm also trying to demonstrate that content <em>&mdash;what&mdash;</em> and style <em>&mdash;how&mdash;</em> are two logically detached layers of web design.
        </p>
        <p>
          <a href="https://www.danielvivar.com/2015" target="_blank">Here</a> you can find my previous personal site, done in 2015, with other goals, interests and definitely simpler.
        </p>
      </section>

    </main>
  </div>
</template>

<script>
import LambdaFunctions from "@/services/LambdaFunctions";
import Modal from "@/components/Modal.vue";

export default {
  name: "Content",
  components: {
    Modal
  },
  data() {
    return {
      email: "",
      showModal: false,
      style: {
        value: "default",
        default: { text: "Default", value: "default" },
        options: [
          {
            text: "No style",
            value: "no_style"
          }
        ]
      },
      accent: {
        value: "red",
        default: { text: "Red", value: "red" },
        options: [
          { text: "Blue", value: "blue" },
          { text: "Green", value: "green" },
          { text: "Gold", value: "gold" },
          { text: "Pink", value: "pink" },
          { text: "Sky Blue", value: "skyblue" }
        ]
      }
    };
  },
  methods: {
    async getEmail() {
      const response = await LambdaFunctions.getEmail();
      this.email = response.data;
    }
  },
  watch: {
    "accent.value": accent => {
      document.getElementById("wrapper").style.setProperty("--accent", accent);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/all.scss";
</style>
