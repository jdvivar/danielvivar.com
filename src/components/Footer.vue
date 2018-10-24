<template>
  <headroom
    :footroom="true"
    :up-tolerance="20">
    <div
      id="footer"
      class="no-print">
      <div class="color-picker-wrapper">
        <div
          class="color-picker-close"
          @click="closeColorPicker()">
          <font-awesome-icon
            :icon="['fal', 'times']"
            fixed-width />
        </div>
        <sketch-picker v-model="accent.value"/>
      </div>
      <div class="footer-wrapper">
        <div
          v-if="false"
          id="style-selector"
          class="selector">
          <label for="style-select">{{ style.label }}</label>
          <select
            id="style-select"
            v-model="style.value" >
            <option
              :value="style.default.value"
              selected>
              {{ style.default.text }}
            </option>
            <option
              v-for="option in style.options"
              :value="option.value"
              :key="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
        <div
          id="accent-selector"
          class="selector">
          <label for="style-select">
            {{ accent.label }}
          </label>
          <button
            class="accent-value"
            @click="openColorPicker()">
            <font-awesome-icon
              v-if="loadingColor"
              :icon="['fal', 'spinner-third']"
              spin />
            {{ accent.nameIt }}
          </button>
        </div>
        <button
          class="footer-print-button dv-button"
          @click="onClickSavePDF">Save PDF</button>
      </div>
    </div>
  </headroom>
</template>

<script>
import { headroom as Headroom } from 'vue-headroom'
import { Sketch as SketchPicker } from 'vue-color'

// Icons
import { library as Icons } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/pro-light-svg-icons'

import { debounce } from 'lodash'

// Colors
import namedColors from 'color-name-list'
import nearestColor from 'nearest-color'
const colors = namedColors.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {})
const nearest = nearestColor.from(colors)

Icons.add(faTimes)

export default {
  name: 'Footer',
  components: {
    Headroom,
    SketchPicker,
    FontAwesomeIcon
  },
  data () {
    return {
      loadingColor: false,
      style: {
        value: 'default',
        label: 'theme',
        default: { text: 'Default', value: 'default' },
        options: [
          {
            text: 'No style',
            value: 'no_style'
          }
        ]
      },
      accent: {
        value: {
          hex: 'red'
        },
        nameIt: 'Red',
        label: 'accent'
      },
      scrollSpyOffset: {
        default: 280
      },
      isSafari: navigator.userAgent.indexOf('Safari') !== -1 &&
        navigator.userAgent.indexOf('Chrome') === -1
    }
  },
  watch: {
    'accent.value': function ({ hex }) {
      const wrapper = document.getElementById('wrapper')
      wrapper.style.setProperty('--accent', hex)
      this.loadingColor = true
      this.updateColorNameIt()
    },
    'style.value': function (style) {
      this.$store.commit('changeTo', { key: 'style', newValue: style })
      this.$store.commit('changeTo', { key: 'scrollSpyOffset', newValue: this.scrollSpyOffset[style] })
    }
  },
  mounted: function () {
    this.prePrint()

    // Hide color picker shortly after start
    window.setTimeout(() => {
      this.closeColorPicker()
    }, 3000)

    // Fix Safari horrible bug that broke the footer 🧐
    if (this.isSafari) {
      let headroom = document.querySelector('.headroom')
      window.setTimeout(() => {
        headroom.parentNode.parentNode.appendChild(headroom)
      }, 0)
      window.setTimeout(() => {
        document.getElementById('wrapper').appendChild(headroom)
      }, 500)
    }
  },
  methods: {
    onClickSavePDF: function () {
      if (this.isSafari) {
        window.open('Daniel Vivar - CV.pdf')
      } else {
        this.print()
      }
    },
    print: function () {
      const beforePrintStyle = this.style.value
      this.style.value = 'no_style'
      window.setTimeout(() => {
        window.print()
        this.style.value = beforePrintStyle
      }, 0)
    },
    prePrint: function () {
      // Remove style before printing and restore afterwards
      window.onbeforeprint = () => {
        const beforePrintStyle = this.style.value
        window.onafterprint = () => {
          this.style.value = beforePrintStyle
        }
        this.style.value = 'no_style'
      }
    },
    openColorPicker: function () {
      document.querySelector('.color-picker-wrapper').classList.remove('--hidden')
    },
    closeColorPicker: function () {
      document.querySelector('.color-picker-wrapper').classList.add('--hidden')
    },
    updateColorNameIt: debounce(function () {
      this.accent.nameIt = nearest(this.accent.value.hex).name
      this.loadingColor = false
    }, 300)

  }
}
</script>
