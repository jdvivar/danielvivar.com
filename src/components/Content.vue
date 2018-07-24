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
import Who          from "@/components/Who.vue";
import Future       from "@/components/Future.vue";
import Outstanding  from "@/components/Outstanding.vue";
import Tools        from "@/components/Tools.vue";
import Experience   from "@/components/Experience.vue";
import Education    from "@/components/Education.vue";
import Contact      from "@/components/Contact.vue";
import About        from "@/components/About.vue";

export default {
  name: "Content",
  components: {
    Who,
    Future,
    Outstanding,
    Tools,
    Experience,
    Education,
    Contact,
    About
  },
  data() {
    return {
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
    }
  },

};
</script>

<style lang="scss">
@import "@/styles/all.scss";
</style>
