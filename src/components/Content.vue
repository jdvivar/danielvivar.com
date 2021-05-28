<template>
  <div
    id="wrapper"
    :class="style">
    <Modal
      v-if="showRefreshModal"
      @close="showRefreshModal = false">
      <div slot="term">
        New content found
      </div>
      <div slot="definition">
        <p>
          Please refresh your browser 😉
        </p>
        <button
          type="button"
          class="dv-button --invert"
          onClick="window.location.reload()">
          Reload
        </button>
      </div>
    </Modal>
    <Modal
      v-if="showLogoModal"
      @close="showLogoModal = false">
      <div slot="term">
        Typeless Logo
      </div>
      <div
        slot="definition"
        style="text-align:center">
        <img
          src="/img/typeless-logo.png"
          alt="Typeless logo"
          class="img-typeless-logo">
      </div>
    </Modal>
    <Navigation :sections="sections" />
    <main v-scroll-spy="{ offset: offset}">
      <div class="print-only address-bar">
        <span>danielvivar.com</span>
        <span>&#9733;</span>
      </div>
      <Who />
      <Future />
      <Outstanding />
      <Tools />
      <Experience />
      <Education />
      <Contact />
      <About />
    </main>
    <Footer />
  </div>
</template>

<script>
// Components
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'
import Who from '@/components/Who.vue'
import Future from '@/components/Future.vue'
import Outstanding from '@/components/Outstanding.vue'
import Modal from '@/components/Modal.vue'
import Tools from '@/components/Tools.vue'
import Experience from '@/components/Experience.vue'
import Education from '@/components/Education.vue'
import Contact from '@/components/Contact.vue'
import About from '@/components/About.vue'

export default {
  name: 'Content',
  components: {
    Footer,
    Navigation,
    Who,
    Future,
    Outstanding,
    Modal,
    Tools,
    Experience,
    Education,
    Contact,
    About
  },
  data () {
    return {
      sections: [],
      showRefreshModal: false,
      showLogoModal: false
    }
  },
  computed: {
    style () {
      return this.$store.state.style
    },
    offset () {
      return this.$store.state.scrollSpyOffset
    }
  },
  mounted: function () {
    this.$on('show:logo', function () {
      this.showLogoModal = true
    })

    this.$nextTick(function () {
      // to populate navbar with sections out of the h1's found
      document.querySelectorAll('section').forEach(section => {
        const id = section.id
        const heading = section.querySelector('h1').innerText
        this.sections.push({ id, heading })
        console.log(section)
      })

      window.addEventListener('sw-updated', () => {
        this.showRefreshModal = true
      })
    })
  }
}
</script>
