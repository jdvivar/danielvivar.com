<template>
  <nav>
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
