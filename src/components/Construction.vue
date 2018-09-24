<template>
  <div
    id="construction"
    class="no-print">
    <button
      v-if="collapsed"
      class="open"
      @click="collapsed = false">Show construction notice</button>
    <div
      v-if="!collapsed"
      class="notice">
      <div class="notice-title">
        This site is still on construction!
        <button @click="collapsed = true">CLOSE</button>
      </div>
      <div class="todos">
        <div class="todos-title">
          TODOS:
        </div>
        <ul>
          <li>
            <s>Add this TODOS component</s>
          </li>
          <li>
            <s>Use a CSS grid</s>
          </li>
          <li>
            <s>Add theme and accent color selector</s>
          </li>
          <li>
            <s>Add logos of all companies and colleges</s>
          </li>
          <li>
            <s>Use AWS Lambda cloud functions to serve sensitive data</s>
          </li>
          <li>
            <s>Add an intuitive glossary for technical terms with modal windows</s>
          </li>
          <li>
            <s>Manage both in Github and Bitbucket</s>
          </li>
          <li>
            <s>Fix PWA service worker</s>
          </li>
          <li>
            <s>Fix the printable version</s>
          </li>
          <li>
            <s>SEO: meta tags, images, icon</s>
          </li>
          <li>
            Add desktop menu with selectors, print button, etc.
          </li>
          <li>
            Make the whole site 100% mobile friendly
          </li>
          <li>
            Add another theme
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Construction',
  data () {
    return {
      collapsed: false
    }
  }
}
</script>
<style lang="scss" scoped>
.open {
  left: 0;
  position: fixed;
  margin: 100px 20px;
  padding: 3px;
  z-index: 10;
}

.notice {
  background-color: white;
  border: 1px solid #666;
  border-radius: 3px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 300;
  left: 0;
  line-height: 1.6;
  margin: 100px 20px;
  max-width: 300px;
  opacity: 0.8;
  padding: 20px;
  position: fixed;
  z-index: 1;

  s {
    color: #999;
  }
}

.notice-title {
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
  padding-bottom: 15px;
}

.todos-title {
  margin-bottom: 10px;
}

ul li::before {
  content: "-";
  padding-right: 5px;
}

button {
  float: right;
  padding: 2px;
  text-transform: uppercase;
}
</style>
