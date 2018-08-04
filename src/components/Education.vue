<template>
  <section id="education">
    <h1>where I've studied</h1>
    <ul>
      <li class="education-item">
        <div class="institution-logo">
          <img src="/img/upm-logo.png">
        </div>
        <div class="institution">
          Universidad Politécnica de Madrid
        </div>
        <div class="title">
          Bachelor's Degree in Computers Engineering
        </div>
        <div class="location">
          <font-awesome-icon :icon="['fal', 'map-marked']"/>
          Madrid
        </div>
        <div class="from">
          2009
        </div>
        <div class="until">
          2014
        </div>
      </li>
      <li class="education-item">
        <div class="institution-logo">
          <img src="/img/htw-logo.jpg">
        </div>
        <div class="institution">
          HTW Berlin
        </div>
        <div class="title">
          Degree's Final Project
        </div>
        <div class="location">
          <font-awesome-icon :icon="['fal', 'map-marked']"/>
          Berlin
        </div>
        <div class="from">
          2013
        </div>
        <div class="until">
          2013
        </div>
        <div class="description">
          <p>
            During an Erasmus scholarship I developed Secutrak as my DFP. A native Android app with special tracking features that could be used in a wide range of applications.
          </p>
          <p>
            I also created the <a
              href="https://www.facebook.com/photo.php?fbid=10151472086361557&set=a.10151471848361557.1073741825.675581556&type=3"
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
import { library as Icons } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMapMarked, faExternalLink } from "@fortawesome/pro-light-svg-icons";

Icons.add(faMapMarked, faExternalLink);

export default {
  name: "Education",
  components: {
    FontAwesomeIcon
  }
};
</script>
