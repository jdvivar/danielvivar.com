<template>
  <section id="education">
    <h1>where I've studied</h1>
    <ul>
      <li class="education-item">
        <div class="institution-logo no-print">
          <picture>
            <source
              srcset="/img/upm-logo.webp"
              type="image/webp">
            <source
              srcset="/img/upm-logo.png"
              type="image/png">
            <img
              src="/img/upm-logo.png"
              alt="upm logo">
          </picture>
        </div>
        <div class="institution">
          Universidad Politécnica de Madrid
        </div>
        <div class="title">
          Bachelor's Degree in Computers Engineering
        </div>
        <div class="from">
          2009
        </div>
        <div class="until">
          2014
        </div>
        <div class="location">
          <font-awesome-icon :icon="['fal', 'globe-africa']"/>
          Madrid
        </div>
      </li>
      <li class="education-item">
        <div class="institution-logo no-print">
          <picture>
            <source
              srcset="/img/htw-logo.webp"
              type="image/webp">
            <source
              srcset="/img/htw-logo.jpg"
              type="image/jpg">
            <img
              src="/img/htw-logo.jpg"
              alt="htw logo">
          </picture>
        </div>
        <div class="institution">
          HTW Berlin
        </div>
        <div class="title">
          Degree's Final Project
        </div>
        <div class="from">
          2013
        </div>
        <div class="until">
          2013
        </div>
        <div class="location">
          <font-awesome-icon :icon="['fal', 'globe-africa']"/>
          Berlin
        </div>
        <div class="description">
          <p>
            During a 4-month Erasmus scholarship I developed Secutrak as my Degree Final Project. A native Android app with special tracking features that could be used in a wide range of applications.
          </p>
          <p class="no-print">
            I also designed its <a
              href="https://www.facebook.com/photo.php?fbid=10151472086361557&set=a.10151471848361557.1073741825.675581556&type=3"
              rel="noreferrer"
              target="_blank">
              brand
              <font-awesome-icon :icon="['fal', 'external-link']"/>
            </a> but eventually didn't publish the app in the Google Play app store.
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
// Icons component
import { library as Icons } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGlobeAfrica,
  faExternalLink
} from '@fortawesome/pro-light-svg-icons'

Icons.add(faGlobeAfrica, faExternalLink)

export default {
  name: 'Education',
  components: {
    FontAwesomeIcon
  }
}
</script>
