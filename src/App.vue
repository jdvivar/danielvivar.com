<template>
  <div id="app">
    <Content />
  </div>
</template>

<script>
import Content from "./components/Content.vue";

export default {
  name: "app",
  components: {
    Content
  }
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
