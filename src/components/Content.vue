<template>
  <div
    id="wrapper"
    :class="selectors.style.value">

    <div id="selectors">
      <div
        v-for="(selector, key) in selectors"
        :id="`${key}-selector`"
        :key="key">
        <label :for="`${key}-select`">{{ key }}</label>
        <select
          v-model="selector.value"
          :id="`${key}-select`">
          <option
            :value="selector.default.value"
            selected>
            {{ selector.default.text }}
          </option>
          <option
            v-for="option in selector.options"
            :value="option.value"
            :key="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>

    <nav>
      <ul
        v-scroll-spy-active
        v-scroll-spy-link>
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

      <section
        id="tools"
        @click="showModal = $event.target.innerHTML">
        <h1>which technologies or tools I use</h1>

        <span>javascript</span>
        <Modal
          v-if="showModal === 'javascript'"
          @close="showModal = false">
          <div slot="term">
            JavaScript
          </div>
          <div slot="definition">
            It's the interpreted programming language used to communicate between browsers and websites. Together with HTML <em>&mdash;content&mdash;</em> and CSS <em>&mdash;style&mdash;</em>, they represent the main basic technologies for front-end web engineering.
          </div>
        </Modal>

        <span>vuejs</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            Vue.js
          </div>
          <div slot="definition">
            It's a JavaScript framework focused on the V (view) of the standard MVC (model-view-controller) paradigm. It's a young contender in a very competetitive and lively market of the numerous JavaScript offspring frameworks designed to enhance it, but Vue.js is elegant, fast, light, declarative and everything in it just makes sense.
          </div>
        </Modal>

        <span>es6</span>
        <Modal
          v-if="showModal === 'es6'"
          @close="showModal = false">
          <div slot="term">
            ECMAScript 6
          </div>
          <div slot="definition">
            It's the standard language specification for JavaScript from 2015, also know as ES2015. As with anything wild open, JavaScript needs a body to standardise it, ECMA is in charge of it, laying an even field for players to build on. Amongst its numerous improvements, I personally like the introduction of promises, scoped constructs, classes, arrow functions and destructured assignments.
          </div>
        </Modal>

        <span>babel</span>
        <Modal
          v-if="showModal === 'babel'"
          @close="showModal = false">
          <div slot="term">
            Babel
          </div>
          <div slot="definition">
            It's a JavaScript compiler. Because JavaScript is an interpreted language, browsers will directly try to execute the statements, but different browsers support different features and standards. Babel will let you write your code with all the latest standards and features, and will dinamically compile it to support every browser. It has become a standard tool in front-end web development.
          </div>
        </Modal>

        <span>pwa</span>
        <Modal
          v-if="showModal === 'pwa'"
          @close="showModal = false">
          <div slot="term">
            Progressive Web Application
          </div>
          <div slot="definition">
            It's a website that, with the help of the browser, can behave partially or totally like a native application. Not to be confused with hybrid applications. There's a minimum set of features for a web app to be considered a PWA: served over HTTPS, responsive on every device, will load offline, page transitions are instant, works cross browser, loads fast on 3G and have metadata to be saved as a native app on a mobile device. This website is a PWA. If you save it in your device, it will be indistinguishable from a native app.
          </div>
        </Modal>

        <span>node</span>
        <Modal
          v-if="showModal === 'node'"
          @close="showModal = false">
          <div slot="term">
            Node.js
          </div>
          <div slot="definition">
            It's a run-time environment that executes JavaScript code on its own, outside a browser. Seeing how powerful JavaScript was on browsers, Ryan Dahl had this idea: why not having a engine specifically designed for JavaScript and for any use, not just browsers? Nowadays Node.js is officially supported in all operating systems and is mainly used for web servers and other server side processing, meaning JavaScript developers can both work on the front-end and back-end of web applications, and even have a shared library of packages.
          </div>
        </Modal>

        <span>npm</span>
        <Modal
          v-if="showModal === 'npm'"
          @close="showModal = false">
          <div slot="term">
            Node.js package manager
          </div>
          <div slot="definition">
            NPM is the package manager for Node.js. It allows for the interchange and sharing of any JavaScript package between application codebases.
          </div>
        </Modal>

        <span>css</span>
        <Modal
          v-if="showModal === 'css'"
          @close="showModal = false">
          <div slot="term">
            Cascading Style Sheets
          </div>
          <div slot="definition">
            CSS is a style sheet language. It's used in websites to define the presentation of the HTML content. It's called cascading because the rules of style are defined and applied in a cascade fashion.
          </div>
        </Modal>

        <span>sass/scss</span>
        <Modal
          v-if="showModal === 'sass/scss'"
          @close="showModal = false">
          <div slot="term">
            Syntactically awesome style sheets / Sassy CSS
          </div>
          <div slot="definition">
            SASS is a preprocessor scripting language that is compiled into CSS. Because of the purely declarative nature of CSS (on purpose for fast processing!), it lacks many features that would make its maintenance easier or writing faster, like variables or recursiveness. SCSS is an evolutioned syntax from the original SASS one that acts as a superset of CSS3, as opposed to SASS original syntax which just resembles CSS. This makes possible to preprocess all your style sheets together.
          </div>
        </Modal>

        <span>tdd</span>
        <Modal
          v-if="showModal === 'tdd'"
          @close="showModal = false">
          <div slot="term">
            Test-Driven Development
          </div>
          <div slot="definition">
            It's a software development process based on a 3-step repetitive cycle: write a single test for a single feature for a piece of software, make it fail, then rewrite the piece until it passes, then start again. It inspires confidence, create generally simpler code and it's designed to meet requirements from the ground up.
          </div>
        </Modal>

        <span>bdd</span>
        <Modal
          v-if="showModal === 'bdd'"
          @close="showModal = false">
          <div slot="term">
            Behaviour-Driven Development
          </div>
          <div slot="definition">
            It's a software development process that allows the software to be tested against defined scenarios and behaviours. These can be written in natural language using simple DSLs (domain-specific languages). These tests are closely related with the actual specifications and requirements of a software project, serving as a common ground of understanding also for non-developer roles.
          </div>
        </Modal>

        <span>angularjs</span>
        <Modal
          v-if="showModal === 'angularjs'"
          @close="showModal = false">
          <div slot="term">
            AngularJS
          </div>
          <div slot="definition">
            It's a JavaScript framework to develop web applications. It's the first iteration of the acclaimed Google-backed framework, not be confused with Angular, which is the second iteration and englobes what tipycally people refer to when they talk about Angular 2, 4 and above. Also, Angular is based on TypeScript, not JavaScript.
          </div>
        </Modal>

        <span>bootstrap</span>
        <Modal
          v-if="showModal === 'bootstrap'"
          @close="showModal = false">
          <div slot="term">
            Bootstrap
          </div>
          <div slot="definition">
            It's a front-end library for designing web applications. Most components are just CSS templates, but includes many optional JavaScript extensions. Because it's only focused on the actual style and behaviour of elements, it's a great tool to rapidly develop basic website prototypes.
          </div>
        </Modal>

        <span>cro</span>
        <Modal
          v-if="showModal === 'cro'"
          @close="showModal = false">
          <div slot="term">
            Conversion Rate Optimisation
          </div>
          <div slot="definition">
            It's a set of methodologies that improve the conversion of visitors of a website to customers. It eventually lead to better decission making. Collecting data, forming hypothesis and create statistical models are some of the basic pillars of CRO.
          </div>
        </Modal>

        <span>a/b testing</span>
        <Modal
          v-if="showModal === 'a/b testing'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span>cms</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span>headless cms</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span>cd/ci</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>git</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>jquery</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>qa engineering</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>e2e testing</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>api testing</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>prototyping</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>wireframing</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>serverless</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>cloud&nbsp;functions</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>responsive&nbsp;design</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>progressive&nbsp;enhancement</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span>soap</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>agile</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>scrum</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <span>kanban</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>
        <div class="help">
          <font-awesome-icon :icon="['fal', 'angle-up']"/>
          click a tag to reveal its definition
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
                  Developing and maintaining several apps in AngularJS 1.5+ and VueJS and mastering JavaScript on the way.
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
                  <a
                    href="http://www.danielvivar.com/typeless/topbar.html"
                    target="_blank">
                    A completely responsive layout for the whole app
                  </a>
                </li>
                <li>
                  <a
                    href="http://invis.io/G62N9KKQ3"
                    target="_blank">
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
            <a
              v-if="email"
              :href="`mailto:${email}`">
              {{ email }}
            </a>
            <button
              v-else
              @click="getEmail()">
              Reveal my e-mail address
            </button>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jdvivar"
              target="_blank">Linkedin</a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/danielvivar"
              target="_blank">Facebook</a>
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
          <a
            href="https://www.danielvivar.com/2015"
            target="_blank">Here</a> you can find my previous personal site, done in 2015, with other goals, interests and definitely simpler.
        </p>
      </section>

    </main>
  </div>
</template>

<script>
import LambdaFunctions from "@/services/LambdaFunctions";
import Modal from "@/components/Modal.vue";

// Icons
import { library as Icons } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleUp } from "@fortawesome/pro-light-svg-icons";

Icons.add(faAngleUp);

export default {
  name: "Content",
  components: {
    Modal,
    FontAwesomeIcon
  },
  data() {
    return {
      email: "",
      showModal: false,
      selectors: {
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
      }
    };
  },
  watch: {
    "selectors.accent.value": accent => {
      const wrapper = document.getElementById("wrapper");
      wrapper.style.setProperty("--accent", accent);
    },
    "showModal": (showModal) => {
      console.log('showModal: ', showModal);
    }
  },
  methods: {
    async getEmail() {
      const response = await LambdaFunctions.getEmail();
      this.email = response.data;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/all.scss";
</style>
