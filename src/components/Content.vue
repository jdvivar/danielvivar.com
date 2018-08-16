<template>
  <div
    id="wrapper"
    :class="style">

    <Construction />

    <Selectors />

    <Nav :sections="sections" />

    <main v-scroll-spy>

      <Who />
      <Future />
      <Outstanding />
      <Tools />
      <Experience />
      <Education />
      <Contact />
      <About />

    </main>
  </div>
</template>

<script>
// Components
import Selectors from '@/components/Selectors.vue'
import Nav from '@/components/Nav.vue'
import Who from '@/components/Who.vue'
import Future from '@/components/Future.vue'
import Outstanding from '@/components/Outstanding.vue'
import Tools from '@/components/Tools.vue'
import Experience from '@/components/Experience.vue'
import Education from '@/components/Education.vue'
import Contact from '@/components/Contact.vue'
import About from '@/components/About.vue'
import Construction from '@/components/Construction.vue'

export default {
  name: 'Content',
  components: {
    Selectors,
    Nav,
    Who,
    Future,
    Outstanding,
    Tools,
    Experience,
    Education,
    Contact,
    About,
    Construction
  },
  data () {
    return {
      sections: [],
      style: 'default'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // to populate navbar with sections out of the h1's found
      document.querySelectorAll('section').forEach(section => {
        const id = section.id
        const heading = section.querySelector('h1').innerText
        this.sections.push({ id: id, heading: heading })
      })
    })
  }
}
</script>

<style lang="scss">
@import "@/styles/all.scss";
</style>
