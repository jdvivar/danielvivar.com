<template>
  <section
    id="about"
    class="no-print">
    <h1>about this site</h1>
    <p>
      This site is a PWA made with Vue CLI 3 (so Vue.js + Webpack), hosted in Bitbucket and <a
        href="https://github.com/jdvivar/danielvivar.com"
        rel="noreferrer"
        target="_blank">GitHub <font-awesome-icon :icon="['fal', 'external-link']"/></a> and deployed with Netlify.
    </p>
    <p>
      It could have just been one HTML5 page plus some vanilla JS and CSS in a normal server, but automating both the development workflow with the webpack based Vue CLI dashboard and the deployment plus lots of other perks from Netlify's free tier is just a breeze and very educational.
    </p>
    <a
      href="https://github.com/jdvivar/danielvivar.com"
      rel="noreferrer"
      target="_blank">
      <img
        src="https://i.imgur.com/16QWIBe.png"
        alt="Vue CLI dashboard"
        style="max-width: 100%;height: auto">
    </a>
    <p>
      Netlify has snippet injection, so Google Analytics is added during deployment that way, and my e-mail address and phone number are behind AWS Lambda cloud functions, also served by Netlify. It all costs zero, nada, gratis! The only unnecessary luxury is the domain, for which I pay around £8 per year.
    </p>
    <p>
      I'm also trying to demonstrate that content <em>&mdash;what&mdash;</em> and style <em>&mdash;how&mdash;</em> are two logically detached layers of web design.
    </p>
    <p>
      Here is <a
        href="https://www.danielvivar.com/2015"
        rel="noreferrer"
        target="_blank">my previous personal site <font-awesome-icon :icon="['fal', 'external-link']"/></a>, done in 2015, with other goals, interests and definitely simpler.
    </p>
  </section>
</template>

<script>
// Icons component
import { library as Icons } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExternalLink } from '@fortawesome/pro-light-svg-icons'

Icons.add(faExternalLink)

export default {
  name: 'About',
  components: {
    FontAwesomeIcon
  }
}
</script>
