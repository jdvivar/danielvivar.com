<template>
  <section id="who">
    <h1>who I am</h1>
    <div class="section-description">
      <p>
        Hi, my name is <b>Daniel Vivar</b> and I'm a <b>senior front-end web engineer</b> with <b>+{{ new Date().getFullYear() - 2013 }}</b> years of experience in businesses that range from e-health to banking.
      </p>
      <p>
        At work, I focus on DRY (Don't Repeat Yourself), craftmanship and lean approaches, embracing standards and the open web. I taught front-end development at a tech academy in Madrid and help maintain open source projects whenever I can.
      </p>
      <p class="no-print">
        I spend most of my free time reading about science, politics and technology, taking care of my 2 cats or dining out with my partner in one of the hundreds of amazing restaurants in Madrid.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Who'
}
</script>
