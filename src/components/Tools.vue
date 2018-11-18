<template>
  <section
    id="tools">
    <h1>which technologies and tools I use</h1>

    <div class="help no-print">
      click on a tag to reveal its definition
    </div>

    <span>javascript</span>
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

    <span>vuejs</span>
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

    <span>es6</span>
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

    <span>babel</span>
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

    <span>pwa</span>
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

    <span>node</span>
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

    <span>npm</span>
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

    <span>css</span>
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

    <span>sass/scss</span>
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

    <span>php</span>
    <Modal
      v-if="showModal === 'php'"
      @close="showModal = false">
      <div slot="term">
        PHP: Hypertext Preprocessor
      </div>
      <div slot="definition">
        <p>
          PHP (recursive acronym) is a server-side scripting language designed for Web development, but also used as a general-purpose programming language. It was originally created by Rasmus Lerdorf in 1994. (Wikipedia)
        </p>
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

    <span>bdd</span>
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

    <span>angularjs</span>
    <Modal
      v-if="showModal === 'angularjs'"
      @close="showModal = false">
      <div slot="term">
        AngularJS
      </div>
      <div slot="definition">
        <p>
          It's a JavaScript framework to develop web applications.
        </p>
        <p>
          It's the first iteration of the acclaimed Google-backed framework, not be confused with Angular, which is the second iteration and englobes what typically people refer to when they talk about Angular 2, 4 and above. Also, Angular is based on TypeScript instead, a superset of JavaScript.
        </p>
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
        <p>
          It's a front-end library for designing web applications.
        </p>
        <p>
          Most components are just CSS templates but includes many optional JavaScript extensions.
        </p><p>
          Because it's only focused on the actual style and behaviour of web elements, it's a great tool to rapidly showcase basic website prototypes.
        </p>
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
        <p>
          It's a set of methodologies that improves the conversion of visitors on a website into customers.
        </p>
        <p>
          It eventually leads to better decision making. Collecting data, forming hypotheses and create statistical models are some of the exercises of CRO.
        </p>
      </div>
    </Modal>

    <span>a/b testing</span>
    <Modal
      v-if="showModal === 'a/b testing'"
      @close="showModal = false">
      <div slot="term">
        A/B Testing
      </div>
      <div slot="definition">
        <p>
          In CRO, it's an experiment run on a website with typically 2 variations of a feature, which are statistically tested against each other by randomly apply them to visitors and measure an outcome, typically the conversion of the visitor into a customer.
        </p>
        <p>
          It's a very useful way to test hypotheses.
        </p>
      </div>
    </Modal>

    <span>cms</span>
    <Modal
      v-if="showModal === 'cms'"
      @close="showModal = false">
      <div slot="term">
        CMS
      </div>
      <div slot="definition">
        <p>
          In a digital web environment, a Content Management System is an application which allows content editors to manage websites without knowing how to code them, just focusing on the content instead.
        </p>
      </div>
    </Modal>

    <span>headless cms</span>
    <Modal
      v-if="showModal === 'headless cms'"
      @close="showModal = false">
      <div slot="term">
        Headless CMS
      </div>
      <div slot="definition">
        <p>
          It's the back-end part only of a CMS. The content is accessible via its own API and allows a greater customisation of a CMS application as a whole.
        </p>
      </div>
    </Modal>

    <span>cd/ci</span>
    <Modal
      v-if="showModal === 'cd/ci'"
      @close="showModal = false">
      <div slot="term">
        Continuous Deployment / Continuous Integration
      </div>
      <div slot="definition">
        <p>
          CD and CI are two software engineering processes in which deployment and integration testing processes are done automatically, typically by the same automated server.
        </p>
        <p>
          This allows faster development cycles in a continuous delivery environment, a term which is sometimes confused with and is closely related.
        </p>
        <p>
          This website has a continuous deployment implementation and therefore is deployed automatically when I edit the source code.
        </p>
      </div>
    </Modal>

    <span>git</span>
    <Modal
      v-if="showModal === 'git'"
      @close="showModal = false">
      <div slot="term">
        git
      </div>
      <div slot="definition">
        <p>
          It's a version control system. It tracks changes in computer files and coordinates work on them. It was written by Linus Torvalds, Linux inventor and main contributor.
        </p>
        <p>
          One of the main features of git is being able to use remote and local repositories.
        </p>
        <p>
          This allows repositories to exist in remote owned or cloud servers, and companies to offer services on top of them for software engineering teams, so that they can better coordinate development. Some of these are Github, Gitlab and Bitbucket.
        </p>
        <p>
          This site is handled by duplicated git repositories in Github and Bitbucket.
        </p>
      </div>
    </Modal>

    <span>jquery</span>
    <Modal
      v-if="showModal === 'jquery'"
      @close="showModal = false">
      <div slot="term">
        jQuery
      </div>
      <div slot="definition">
        <p>
          It's a library designed to simplify JavaScript development.
        </p>
        <p>
          It was one of the first libraries that made event management and DOM manipulation available in easy to use code.
        </p>
        <p>
          jQuery was used extensively and was the dominant technology in front-end web development before the boom of JavaScript frameworks (circa 2014). For this reason, AngularJS included a service as a subset of jQuery methods called jqLite.
        </p>
        <p>
          In my opinion, the ease of jQuery and adoption by beginners can lead to confusion about how JavaScript really works. Some of the actual uses of jQuery include writing small scripts (for instance in A/B testing experiments) or prototyping.
        </p>
      </div>
    </Modal>

    <span>qa engineering</span>
    <Modal
      v-if="showModal === 'qa engineering'"
      @close="showModal = false">
      <div slot="term">
        Quality Assurance Engineering
      </div>
      <div slot="definition">
        <p>
          In software engineering, it's a set of processes and methodologies to prevent that bugs and mistakes made in development code get to live production code.
        </p>
        <p>
          It can also make sure software applications work as they are required to.
        </p>
      </div>
    </Modal>

    <span>e2e testing</span>
    <Modal
      v-if="showModal === 'e2e testing'"
      @close="showModal = false">
      <div slot="term">
        End to end testing
      </div>
      <div slot="definition">
        <p>
          It's testing designed to mimic whole user journeys, definining a journey as all the actions that happen from the moment users get into our application until they leave.
        </p>
      </div>
    </Modal>

    <span>api testing</span>
    <Modal
      v-if="showModal === 'api testing'"
      @close="showModal = false">
      <div slot="term">
        API Testing
      </div>
      <div slot="definition">
        <p>
          It's testing designed to test API endpoints.
        </p>
      </div>
    </Modal>

    <span>prototyping</span>
    <Modal
      v-if="showModal === 'prototyping'"
      @close="showModal = false">
      <div slot="term">
        Prototyping
      </div>
      <div slot="definition">
        <p>
          In a front-end development flow, it's the step that goes just after the purely visual user interface design.
        </p>
        <p>
          It allows for the first time to see how an application <em>works</em>, in oppose to just seeing how it looks or reading it from a spec.
        </p>
        <p>
          Advance prototypes are stripped from back-ends and have a very limited set of features. Services like InVision <em>&mdash;my preferred tool for this job&mdash;</em> allows a designer to showcase a prototype without the need to write a single line of code.
        </p>
      </div>
    </Modal>

    <span>wireframing</span>
    <Modal
      v-if="showModal === 'wireframing'"
      @close="showModal = false">
      <div slot="term">
        Wireframing
      </div>
      <div slot="definition">
        <p>
          In user interface design, a wireframe is a very early visual design of the interface.
        </p>
        <p>
          Only portraying its shell and the elements that will enable the main features and functionalities, omitting visual details, colors and even content itself <em>&mdash;lorem ipsums rule here!</em>
        </p>
      </div>
    </Modal>

    <span>serverless</span>
    <Modal
      v-if="showModal === 'serverless'"
      @close="showModal = false">
      <div slot="term">
        Serverless
      </div>
      <div slot="definition">
        <p>
          It's a computation model in which the processing is done by cloud remote servers instead of local owned ones.
        </p>
        <p>
          That way the allocation of machine resources, server managemente and capacity planning is all done by the serverless provider instead.
        </p>
        <p>
          Amazon was the first company to provide serverless computing via AWS Lambda. It followed Google via Google Cloud Platform, Oracle via Oracle Cloud Platform (open source), IBM via Apache OpenWhisk (open source) and Microsoft via Microsoft Azure.
        </p>
      </div>
    </Modal>

    <span>cloud functions</span>
    <Modal
      v-if="showModal === 'cloud functions'"
      @close="showModal = false">
      <div slot="term">
        Cloud Functions
      </div>
      <div slot="definition">
        <p>
          A cloud function is a function written to be executed by a cloud computing platform.
        </p>
        <p>
          The first cloud functions were written in JavaScript becase AWS Lambda only supported Node.js when it was released back in 2014. Nowadays there is a whole plethora of cloud platforms that support most runtimes and languages.
        </p>
        <p>
          This site is using a cloud function (via AWS Lambda in Netlify) to reveal my e-mail address &mdash;protecting it from spam and robots.
        </p>
      </div>
    </Modal>

    <span>responsive web design</span>
    <Modal
      v-if="showModal === 'responsive web design'"
      @close="showModal = false">
      <div slot="term">
        Responsive Web Design
      </div>
      <div slot="definition">
        <p>
          RWD is an approach to web design in which a website will adapt its form and/or function to the visitor's medium.
        </p>
        <p>
          Commonly the targets are mobile, tablet and desktop devices but we could fine tune it to adatp to a adaot specifically for a TV, a retina display or a printer.
        </p>
        <p>
          This site is designed RWD in mind, and will render correctly in mobile, tablets, desktops and will also render specifically for a print version.
        </p>
      </div>
    </Modal>

    <span>progressive enhancement</span>
    <Modal
      v-if="showModal === 'progressive enhancement'"
      @close="showModal = false">
      <div slot="term">
        Progressive Enhancement
      </div>
      <div slot="definition">
        <p>
          It's an approach to web design that tries to make the most out of all the features available in every visitor's browser or device.
        </p>
        <p>
          It means different visitors would enjoy different capabilites, as much as their browsers support, in opposition to offer everyone the same experience with a common denominator of features.
        </p>
      </div>
    </Modal>

    <span>soap</span>
    <Modal
      v-if="showModal === 'soap'"
      @close="showModal = false">
      <div slot="term">
        Simple Object Access Protocol
      </div>
      <div slot="definition">
        It's a messaging protocol specification for exchanging structured information in the implementation of web services in computer networks. (Wikipedia)
      </div>
    </Modal>

    <span>agile</span>
    <Modal
      v-if="showModal === 'agile'"
      @close="showModal = false">
      <div slot="term">
        agile
      </div>
      <div slot="definition">
        <p>
          Agile software development describes an approach to software development under which requirements and solutions evolve through the collaborative effort of self-organizing and cross-functional teams and their customer(s)/end user(s).
        </p>
        <p>
          It advocates adaptive planning, evolutionary development, early delivery, and continual improvement, and it encourages rapid and flexible response to change. (Wikipedia)
        </p>
      </div>
    </Modal>

    <span>scrum</span>
    <Modal
      v-if="showModal === 'scrum'"
      @close="showModal = false">
      <div slot="term">
        Scrum
      </div>
      <div slot="definition">
        <p>
          Scrum is an agile framework for managing work with an emphasis on software development.
        </p>
        <p>
          It is designed for teams of three to nine developers who break their work into actions that can be completed within timeboxed iterations, called sprints (30 days or less, most commonly two weeks) and track progress and re-plan in 15-minute stand-up meetings, called daily scrums. (Wikipedia)
        </p>
      </div>
    </Modal>

    <span>kanban</span>
    <Modal
      v-if="showModal === 'kanban'"
      @close="showModal = false">
      <div slot="term">
        Kanban
      </div>
      <div slot="definition">
        <p>
          Kanban is a lean method to manage and improve work across human systems.
        </p>
        <p>
          This approach aims to manage work by balancing the demands with available capacity, and improving the handling of system level bottlenecks. (Wikipedia)
        </p>
      </div>
    </Modal>

    <div class="clearfix" />

  </section>
</template>

<script>
// Modal component
import Modal from '@/components/Modal.vue'

export default {
  name: 'Tools',
  components: {
    Modal
  },
  data () {
    return {
      showModal: false
    }
  },
  mounted () {
    const tools = document.querySelectorAll('#tools > span')
    tools.forEach(tool => {
      tool.addEventListener('click', this.clickTerm)
    })
  },
  methods: {
    clickTerm (event) {
      this.showModal = event.target.innerHTML
    }
  }
}
</script>
