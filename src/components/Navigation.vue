<template>
  <nav class="navigation no-print">
    <ul
      v-scroll-spy-active
      v-scroll-spy-link>
      <li
        v-for="section in sections"
        :key="section.id">
        <a
          :href="`#${section.id}`"
          @click="scrollLinkIntoView">{{ section.heading }}</a>
      </li>
    </ul>
  </nav>

</template>

<script>
// Scrollspy
import Scrollspy, { Easing } from 'vue2-scrollspy'
import Vue from 'vue'

Vue.use(Scrollspy, {
  easing: Easing.Cubic.InOut
})

export default {
  name: 'Navigation',
  props: {
    sections: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    scrollLinkIntoView (event) {
      function previousSiblingsWidth (element) {
        let width = 0
        if (element.previousSibling) {
          width = element.previousSibling.scrollWidth + previousSiblingsWidth(element.previousSibling)
        }
        return width
      }
      event.srcElement.parentElement.parentElement.scrollLeft = previousSiblingsWidth(event.srcElement.parentElement)
    }
  }

}
</script>
