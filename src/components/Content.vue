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
        id="tools">
        <h1>which technologies or tools I use</h1>

        <span @click="clickTerm">javascript</span>
        <Modal
          v-if="showModal === 'javascript'"
          @close="showModal = false">
          <div slot="term">
            JavaScript
          </div>
          <div slot="definition">
            <p>
              It's the interpreted programming language that browsers and websites use to communicate between each other.
            </p>
            <p>
              Together with HTML <em>&mdash;content&mdash;</em> and CSS <em>&mdash;style&mdash;</em>, they represent the 3 pillar technologies in front-end web engineering.
            </p>
          </div>
        </Modal>

        <span @click="clickTerm">vuejs</span>
        <Modal
          v-if="showModal === 'vuejs'"
          @close="showModal = false">
          <div slot="term">
            Vue.js
          </div>
          <div slot="definition">
            <p>
              It's a JavaScript framework focused on the V (view) of the standard MVC (model-view-controller) paradigm.
            </p>
            <p>
              It's a young contender in a very competitive and lively market full of numerous JavaScript offspring frameworks designed to enhance it, but Vue.js is elegant, fast, light, declarative... and everything in it just makes sense.
            </p>
            <p>
              This website is made with Vue.js.
            </p>
          </div>
        </Modal>

        <span @click="clickTerm">es6</span>
        <Modal
          v-if="showModal === 'es6'"
          @close="showModal = false">
          <div slot="term">
            ECMAScript 6
          </div>
          <div slot="definition">
            <p>
                It's the standard language specification for JavaScript from 2015, also known as ES2015.
            </p>
            <p>
               As with anything wild open, JavaScript needs a body to standardise it. So ECMA is in charge of that, laying an even field for players to build on.
            </p>
            <p>
              Amongst its numerous improvements, I personally like the introduction of promises, scoped constructs, classes, arrow functions and destructured assignments.
            </p>
            <p>
              This website is written in ES6 compliant code.
            </p>
          </div>
        </Modal>

        <span @click="clickTerm">babel</span>
        <Modal
          v-if="showModal === 'babel'"
          @close="showModal = false">
          <div slot="term">
            Babel
          </div>
          <div slot="definition">
            <p>
              It's a JavaScript compiler.
            </p>
            <p>
              JavaScript doesn't need to be compiled as it's an interpreted language: browsers will directly try to execute the statements.
            </p>
            <p>
              But different browsers support different features and standards. Babel will let you write your code with all the latest standards and features, and will compile it to support every browser. It has become a standard tool in JavaScript development.
            </p>
            <p>
              This website was compiled with Babel.
            </p>
          </div>
        </Modal>

        <span @click="clickTerm">pwa</span>
        <Modal
          v-if="showModal === 'pwa'"
          @close="showModal = false">
          <div slot="term">
            Progressive Web Application
          </div>
          <div slot="definition">
            <p>
              It's a website that, with the help of the browser, behaves partially or totally like a native application. Not to be confused with hybrid applications.
            </p>
            <p>
              There's a minimum set of featured requirements for a web app to be considered a PWA: served over HTTPS, responsive on every device, loads offline, transitions pages instantly, works cross-browser, loads fast on 3G and has available metadata to be saved as a native app on the user's device.
            </p>
            <p>
              This website is a PWA. If you save it in your device, it will be indistinguishable from a native app. Try it!
            </p>
          </div>
        </Modal>

        <span @click="clickTerm">node</span>
        <Modal
          v-if="showModal === 'node'"
          @close="showModal = false">
          <div slot="term">
            Node.js
          </div>
          <div slot="definition">
            <p>
              It's a run-time environment that executes JavaScript code on its own, outside a browser.
            </p>
            <p>
               Seeing how powerful JavaScript was, Ryan Dahl had this idea: why not having an engine specifically designed for JavaScript and any use, not just browsers?
            </p>
            <p>
              Nowadays Node.js is officially supported in all operating systems and is mainly used for web servers and other server-side processing, meaning JavaScript developers can work both on the front-end and back-end, and even have a shared library of packages.
            </p>
          </div>
        </Modal>

        <span @click="clickTerm">npm</span>
        <Modal
          v-if="showModal === 'npm'"
          @close="showModal = false">
          <div slot="term">
            Node.js Package Manager
          </div>
          <div slot="definition">
            <p>
              NPM is the package manager for Node.js.
            </p>
            <p>
              It allows for the interchange and sharing of any JavaScript package between application codebases.
            </p>
          </div>
        </Modal>

        <span @click="clickTerm">css</span>
        <Modal
          v-if="showModal === 'css'"
          @close="showModal = false">
          <div slot="term">
            Cascading Style Sheets
          </div>
          <div slot="definition">
            <p>
              CSS is the style sheet language used in websites to define the presentation of HTML content.
            </p>
            <p>
               It's called cascading because the style rules defined in the sheet are applied in a logical cascade fashion.
            </p>
          </div>
        </Modal>

        <span @click="clickTerm">sass/scss</span>
        <Modal
          v-if="showModal === 'sass/scss'"
          @close="showModal = false">
          <div slot="term">
            Syntactically Awesome Style Sheets / Sassy CSS
          </div>
          <div slot="definition">
            <p>
              SASS is a preprocessed scripting language that compiles into CSS.
            </p>
            <p>
              Because of the purely declarative nature of CSS <em>&mdash;&nbsp;on purpose for fast processing&nbsp;&mdash;</em> it lacks many features that would make its maintenance easier or writing faster, like variables or recursion.
            </p>
            <p>
              SCSS is an evolved syntax from SASS which is defined as a superset of CSS (specifically CSS3). This feature of SCSS makes possible to preprocess all your style sheets together, both SCSS and CSS.
            </p>
            <p>
              The different selectable styles of this website are written in SASS.
            </p>
          </div>
        </Modal>

        <span @click="clickTerm">tdd</span>
        <Modal
          v-if="showModal === 'tdd'"
          @close="showModal = false">
          <div slot="term">
            Test-Driven Development
          </div>
          <div slot="definition">
            <p>
              It's a software development process based on a 3-step cycle:
            </p>
            <p>
              <ol>
                <li>
                  write a single test for a single feature for a piece of software;
                </li>
                <li>
                  run the test so that it fails;
                </li>
                <li>
                  then rewrite the piece until the test passes;
                </li>
                <li>
                  ... and start again.
                </li>
              </ol>
            </p>
            <p>
              It inspires confidence, create generally simpler code and it's designed to meet requirements from the ground up.
            </p>
          </div>
        </Modal>

        <span @click="clickTerm">bdd</span>
        <Modal
          v-if="showModal === 'bdd'"
          @close="showModal = false">
          <div slot="term">
            Behaviour-Driven Development
          </div>
          <div slot="definition">
            <p>
              It's a software development process that allows the software to be tested against predefined scenarios and behaviours.
            </p>
            <p>
              These can be written in a natural language using simple DSLs (domain-specific languages).
            </p>
            <p>
              These tests are closely related with the actual specifications and requirements of a software project, serving as a common ground of understanding also for non-developer roles.
            </p>
          </div>
        </Modal>

        <span @click="clickTerm">angularjs</span>
        <Modal
          v-if="showModal === 'angularjs'"
          @close="showModal = false">
          <div slot="term">
            AngularJS
          </div>
          <div slot="definition">
            It's a JavaScript framework to develop web applications. It's the first iteration of the acclaimed Google-backed framework, not be confused with Angular, which is the second iteration and englobes what typically people refer to when they talk about Angular 2, 4 and above. Also, Angular is based on TypeScript instead, a superset of JavaScript.
          </div>
        </Modal>

        <span @click="clickTerm">bootstrap</span>
        <Modal
          v-if="showModal === 'bootstrap'"
          @close="showModal = false">
          <div slot="term">
            Bootstrap
          </div>
          <div slot="definition">
            It's a front-end library for designing web applications. Most components are just CSS templates but includes many optional JavaScript extensions. Because it's only focused on the actual style and behaviour of web elements, it's a great tool to rapidly showcase basic website prototypes.
          </div>
        </Modal>

        <span @click="clickTerm">cro</span>
        <Modal
          v-if="showModal === 'cro'"
          @close="showModal = false">
          <div slot="term">
            Conversion Rate Optimisation
          </div>
          <div slot="definition">
            It's a set of methodologies that improve the conversion of visitors of a website into customers. It eventually leads to better decision making. Collecting data, forming hypotheses and create statistical models are some of the exercises of CRO.
          </div>
        </Modal>

        <span @click="clickTerm">a/b testing</span>
        <Modal
          v-if="showModal === 'a/b testing'"
          @close="showModal = false">
          <div slot="term">
            A/B Testing
          </div>
          <div slot="definition">
            In CRO, it's an experiment run on a website with typically 2 variations of a feature, which are statistically tested against each other by randomly apply them to visitors and measure an outcome, typically the conversion of the visitor into a customer. It's a very useful way to test hypotheses.
          </div>
        </Modal>

        <span @click="clickTerm">cms</span>
        <Modal
          v-if="showModal === 'cms'"
          @close="showModal = false">
          <div slot="term">
            CMS
          </div>
          <div slot="definition">
            In a digital web environment, a Content Management System is an application which allows content editors to manage websites without the need to know how to code them, just focusing specifically on the content itself.
          </div>
        </Modal>

        <span @click="clickTerm">headless cms</span>
        <Modal
          v-if="showModal === 'headless cms'"
          @close="showModal = false">
          <div slot="term">
            Headless CMS
          </div>
          <div slot="definition">
            It's the back-end part only of a CMS. The content is accessible via its own API and allows a greater customisation of a CMS application as a whole.
          </div>
        </Modal>

        <span @click="clickTerm">cd/ci</span>
        <Modal
          v-if="showModal === 'cd/ci'"
          @close="showModal = false">
          <div slot="term">
            CD/CI
          </div>
          <div slot="definition">
            Continous deployment and integration are two software engineering processes in which deployment and integration testing processes are done automatically, typically by the same automated server. This allows faster development cycles in a continuous delivery environment, a term which is sometimes confused with and is closely related. This website has a continuous deployment implementation and therefore is deployed automatically when I edit the source code.
          </div>
        </Modal>

        <span @click="clickTerm">git</span>
        <Modal
          v-if="showModal === 'git'"
          @close="showModal = false">
          <div slot="term">
            git
          </div>
          <div slot="definition">
            It's a version control system. It tracks changes in computer files and coordinates work on them. It was written by Linus Torvalds, Linux inventor and main contributor. One of the main features of git is being able to use remote and local repositories. This allows repositories to exist in remote owned or cloud servers, and companies to offer services on top of them for software engineering teams, so that they can better coordinate development. Some of these are Github, Gitlab and Bitbucket. This site is handled by git repositories in Github and Bitbucket.
          </div>
        </Modal>

        <span @click="clickTerm">jquery</span>
        <Modal
          v-if="showModal === 'jquery'"
          @close="showModal = false">
          <div slot="term">
            jQuery
          </div>
          <div slot="definition">
            It's a library designed to simplify JavaScript development. It was the first library that made event management and DOM manipulation available in easy to use code. jQuery was used extensively and was the dominant technology in front-end web development before the boom of JavaScript frameworks (circa 2014). For this reason, AngularJS included a service as a subset of jQuery methods called jqLite. In my opinion, the ease of jQuery and adoption by beginners can lead to confusion about how JavaScript really works. Some of the actual uses of jQuery include writing small scripts (for instance in A/B testing experiments) or prototyping.
          </div>
        </Modal>

        <span @click="clickTerm">qa engineering</span>
        <Modal
          v-if="showModal === 'qa engineering'"
          @close="showModal = false">
          <div slot="term">
            Quality Assurance Engineering
          </div>
          <div slot="definition">
            In software engineering, it's a set of processes and methodologies to prevent that bugs and mistakes made in development code get to live production code.
          </div>
        </Modal>

        <span @click="clickTerm">e2e testing</span>
        <Modal
          v-if="showModal === 'e2e testing'"
          @close="showModal = false">
          <div slot="term">
            End to end testing
          </div>
          <div slot="definition">
            It's testing designed to mimic whole user journeys since they get to our web application until they leave.
          </div>
        </Modal>

        <span @click="clickTerm">api testing</span>
        <Modal
          v-if="showModal === 'api testing'"
          @close="showModal = false">
          <div slot="term">
            API Testing
          </div>
          <div slot="definition">
            It's testing designed to test API endpoints.
          </div>
        </Modal>

        <span @click="clickTerm">prototyping</span>
        <Modal
          v-if="showModal === 'prototyping'"
          @close="showModal = false">
          <div slot="term">
            Prototyping
          </div>
          <div slot="definition">
            In a front-end development flow, it's the step that goes just after the purely visual user interface design. It allows for the first time to see how an application works, in oppose to just seeing how it looks or reading it from a spec. Advance prototypes are stripped from back-ends and have a very limited set of features. Services like InVision allows a designer to showcase a prototype without the need to write a single line of code.
          </div>
        </Modal>

        <span @click="clickTerm">wireframing</span>
        <Modal
          v-if="showModal === 'wireframing'"
          @close="showModal = false">
          <div slot="term">
            Wireframing
          </div>
          <div slot="definition">
            In user interface design, a wireframe is a very early visual design of the interface, only portraying the shell and the elements that will enable the main features and functionalities, omitting visual details, colors and even content itself (lorem ipsums instead!).
          </div>
        </Modal>

        <span @click="clickTerm">serverless</span>
        <Modal
          v-if="showModal === 'serverless'"
          @close="showModal = false">
          <div slot="term">
            Serverless
          </div>
          <div slot="definition">
            It's a model in which the computation is left to be done by cloud servers instead of local owned servers, that way the allocation of machine resources, server managemente and capacity planning is all done by the serverless provider instead. Amazon was the first company to provide serverless computing via AWS Lambda. It followed Google via Google Cloud Platform, Oracle via Oracle Cloud Platform (open source), IBM via Apache OpenWhisk (open source) and Microsoft via Microsoft Azure.
          </div>
        </Modal>

        <span @click="clickTerm">cloud functions</span>
        <Modal
          v-if="showModal === 'cloud functions'"
          @close="showModal = false">
          <div slot="term">
            Cloud Functions
          </div>
          <div slot="definition">
            A cloud function is a function written to be executed by a cloud computing platform. The first cloud functions were written in JavaScript becase AWS Lambda only supported Node.js when it was released back in 2014. Nowadays there is a whole plethora of cloud platforms that support most runtimes and languages. This site is using a cloud function (via AWS Lambda in Netlify) to reveal my e-mail address.
          </div>
        </Modal>

        <span @click="clickTerm">responsive web design</span>
        <Modal
          v-if="showModal === 'responsive web design'"
          @close="showModal = false">
          <div slot="term">
            RWD
          </div>
          <div slot="definition">
            Responsive Web Design is an approach to web design in which a website will adapt its form or function to the visitor's medium, whatever this might be. Typically we talk about mobile, tablet and desktop but we could also adapt a website specifically for a retina display, a TV or a printer. This site is designed in a responsive way, and will render correctly in mobile, tablets, desktops and will also render specifically for a print version.
          </div>
        </Modal>

        <span @click="clickTerm">progressive enhancement</span>
        <Modal
          v-if="showModal === 'progressive enhancement'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span @click="clickTerm">soap</span>
        <Modal
          v-if="showModal === 'soap'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span @click="clickTerm">agile</span>
        <Modal
          v-if="showModal === 'agile'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span @click="clickTerm">scrum</span>
        <Modal
          v-if="showModal === 'scrum'"
          @close="showModal = false">
          <div slot="term">
            vuejs
          </div>
          <div slot="definition">
            Definition of vuejs
          </div>
        </Modal>

        <span @click="clickTerm">kanban</span>
        <Modal
          v-if="showModal === 'kanban'"
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
                  CD/CI (Continuous Deployment/Integration) with Jenkins, Docker, AWS, Github, Netlify.
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
                Typeless had this idea of being a contacts aggregator (https://www.producthunt.com/posts/typeless). The founders were based in London and a team of developers worked remotely from India. I helped both filling the gap between the 2 teams and getting a complex idea and a set of features into a simple and delightful user experience.
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
                  Automated mobile application testing: using Calabash and Cucumber to write tests following a BDD approach (Behaviour-Driven Development) which at the time allowed us to both test hybrid and native mobile apps in all platforms.
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
                While studying in college, I worked mostly as a graphic designer for this kitchen designer firm in Madrid. Designing corporate branding and managing online/offline marketing. I helped as well in the development and maintenance of several websites owned by the parent company. Also, I did office and business IT tasks and organised training sessions for employees.
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
    showModal: showModal => {
      console.log("showModal: ", showModal);
    }
  },
  methods: {
    async getEmail() {
      const response = await LambdaFunctions.getEmail();
      this.email = response.data;
    },
    clickTerm(event) {
      this.showModal = event.target.innerHTML;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/all.scss";
</style>
