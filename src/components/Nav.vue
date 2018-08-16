<template>
  <nav class="no-print">
    <ul
      v-scroll-spy-active
      v-scroll-spy-link>
      <li
        v-for="section in sections"
        :key="section.id">
        <a :href="`#${section.id}`">{{ section.heading }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
// Scrollspy
import Scrollspy, { Easing } from "vue2-scrollspy";
import Vue from "vue";

// Initialise scrollspy
Vue.use(Scrollspy, {
  easing: Easing.Cubic.InOut,
  offset: Vue.prototype.$scrollSpyOffset
});

export default {
  name: "Nav",
  props: {
    sections: {
      type: Array,
      default: () => []
    }
  }
};
</script>
