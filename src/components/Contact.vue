<template>
  <section
    id="contact"
    class="no-print">
    <h1>how you can get in touch</h1>
    <ul>
      <li>
        <button
          v-if="email"
          @click="href(`mailto:${email}`, '_blank')">
          <font-awesome-icon
            :icon="['fal', 'envelope']"
            class="invert-spacing" />
          Message me at <b>{{ email }}</b>
        </button>

        <button
          v-else
          @click="getEmail()">
          <font-awesome-icon
            :icon="['fal', 'envelope']"
            class="invert-spacing" />
          Reveal my e-mail address
          <font-awesome-icon
            v-if="loadingEmail"
            :icon="['fal', 'spinner-third']"
            spin />
        </button>
      </li>
      <li>
        <button
          v-if="phoneNumber"
          @click="href(`tel:${phoneNumber}`, '_blank')">
          <font-awesome-icon
            :icon="['fal', 'phone']"
            class="invert-spacing" />
          Call me at <b>{{ phoneNumber }}</b>
        </button>

        <button
          v-else
          @click="getPhoneNumber()">
          <font-awesome-icon
            :icon="['fal', 'phone']"
            class="invert-spacing" />
          Reveal my phone number
          <font-awesome-icon
            v-if="loadingPhoneNumber"
            :icon="['fal', 'spinner-third']"
            spin />
        </button>
      </li>
      <li>
        <button
          @click="href('https://www.linkedin.com/in/jdvivar')">
          <font-awesome-icon
            :icon="['fab', 'linkedin']"
            class="invert-spacing"/>
          Visit my Linkedin profile
        </button>
      </li>
      <li>
        <button
          @click="href('https://www.facebook.com/danielvivar')">
          <font-awesome-icon
            :icon="['fab', 'facebook-square']"
            class="invert-spacing"/>
          Visit my Facebook profile
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
import LambdaFunctions from '@/services/LambdaFunctions'

// Icons component
import { library as Icons } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMapMarked,
  faExternalLink,
  faSpinnerThird,
  faEnvelope,
  faPhone
} from '@fortawesome/pro-light-svg-icons'

import { faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

Icons.add(faMapMarked, faExternalLink, faSpinnerThird, faEnvelope, faPhone, faLinkedin, faFacebookSquare)

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
    },
    href (ref) {
      // window.location.href = ref
      window.open(ref, '_blank')
    }
  }
}
</script>
