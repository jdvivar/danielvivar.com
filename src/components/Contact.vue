<template>
  <section
    id="contact"
    class="no-print">
    <h1>how you can get in touch</h1>
    <ul>
      <li>
        <a
          v-if="email"
          :href="`mailto:${email}`">
          Send me a message at {{ email }}
          <font-awesome-icon :icon="['fal', 'external-link']"/>
        </a>

        <button
          v-else
          @click="getEmail()">
          Reveal my e-mail address
          <font-awesome-icon
            v-if="loadingEmail"
            :icon="['fal', 'spinner-third']"
            spin />
        </button>
      </li>
      <li>
        <a
          v-if="phoneNumber"
          :href="`tel:${phoneNumber}`">
          Call me at {{ phoneNumber }}
          <font-awesome-icon :icon="['fal', 'external-link']"/>
        </a>
        <button
          v-else
          @click="getPhoneNumber()">
          Reveal my phone number
          <font-awesome-icon
            v-if="loadingPhoneNumber"
            :icon="['fal', 'spinner-third']"
            spin />
        </button>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/jdvivar"
          rel="noreferrer"
          target="_blank">Visit my Linkedin profile <font-awesome-icon :icon="['fal', 'external-link']"/></a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/danielvivar"
          rel="noreferrer"
          target="_blank">Visit my Facebook profile <font-awesome-icon :icon="['fal', 'external-link']"/></a>
      </li>
    </ul>
  </section>
</template>

<script>
import LambdaFunctions from '@/services/LambdaFunctions'

// Icons component
import { library as Icons } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapMarked, faExternalLink, faSpinnerThird } from '@fortawesome/pro-light-svg-icons'

Icons.add(faMapMarked, faExternalLink, faSpinnerThird)

export default {
  name: 'Contact',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      email: '',
      loadingEmail: false,
      phoneNumber: '',
      loadingPhoneNumber: false
    }
  },
  methods: {
    async getEmail () {
      this.loadingEmail = true
      const response = await LambdaFunctions.getEmail()
      this.email = response.data
    },
    async getPhoneNumber () {
      this.loadingPhoneNumber = true
      const response = await LambdaFunctions.getPhoneNumber()
      this.phoneNumber = response.data
    }
  }
}
</script>
