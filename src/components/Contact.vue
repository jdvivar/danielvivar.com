<template>
  <section id="contact">
    <h1>how you can get in touch</h1>
    <ul>
      <li id="email">
        <a
          v-if="email"
          :href="`mailto:${email}`">
          {{ email }}
        </a>
        <button
          v-else
          @click="getEmail()">
          Reveal my e-mail address
        </button>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/jdvivar"
          target="_blank">Linkedin</a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/danielvivar"
          target="_blank">Facebook</a>
      </li>
    </ul>
  </section>
</template>
<script>
import LambdaFunctions from "@/services/LambdaFunctions";

export default {
  name: "Contact",
  data() {
    return {
      email: ""
    }
  },
  methods: {
    async getEmail() {
      const response = await LambdaFunctions.getEmail();
      this.email = response.data;
    },
  }
}
</script>
