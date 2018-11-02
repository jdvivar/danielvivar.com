<template>
  <div id="app">
    <Content />
  </div>
</template>

<script>
import Content from '@/components/Content.vue'

export default {
  name: 'App',
  components: {
    Content
  }
}
</script>

<style lang="scss">
@import "@/styles/all.scss";

body {
  margin: 0;
}
</style>
