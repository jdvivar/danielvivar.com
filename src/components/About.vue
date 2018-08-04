<template>
  <section
    id="about"
    class="no-print">
    <h1>about this site</h1>
    <p>
      This site is a PWA made with Vue CLI 3 (so Vue.js + Webpack), hosted in Bitbucket/GitHub and deployed with Netlify.
    </p>
    <p>
      It could have just been one HTML5 page plus some vanilla JS and CSS in a normal server, but automating both the development workflow with the webpack based Vue CLI dashboard and the deployment plus lots of other perks from Netlify's free tier is just a breeze and very educational.
    </p>
    <p>
      Netlify has snippet injection, so Google Analytics is added during deployment that way, and my e-mail address and phone number are behind AWS Lambda cloud functions, also served by Netlify. It all costs zero, nada, gratis! The only unnecessary luxury is the domain, for which I pay around £8 per year.
    </p>
    <p>
      I'm also trying to demonstrate that content <em>&mdash;what&mdash;</em> and style <em>&mdash;how&mdash;</em> are two logically detached layers of web design.
    </p>
    <p>
      <a
        href="https://www.danielvivar.com/2015"
        target="_blank">Here</a> you can find my previous personal site, done in 2015, with other goals, interests and definitely simpler.
    </p>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>
