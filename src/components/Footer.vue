<template>
  <headroom
    :footroom="true"
    :up-tolerance="20">
    <div
      id="footer"
      class="no-print">
      <div class="color-picker-wrapper --hidden">
        <div
          class="color-picker-close"
          @click="toggleColorPicker">
          <font-awesome-icon
            :icon="['fal', 'times']"
            fixed-width />
        </div>
        <sketch-picker
          v-model="accent.value"
          :disable-alpha="true"
          :disable-fields="true"
          :preset-colors="presetColors" />
      </div>
      <div class="footer-wrapper">
        <div
          id="accent-selector"
          class="selector">
          <div class="selector-help">
            Choose a colour here!
            <Arrow
              class="arrow-colour"
              alt="Arrow - Attribution: https://medialoot.com/item/hand-drawn-vector-arrows/" />
          </div>
          <label for="style-select">
            {{ accent.label }}
          </label>
          <button
            class="accent-value"
            @click="toggleColorPicker"
            @click.once="hideHelp">
            <font-awesome-icon
              v-if="loadingColor"
              :icon="['fal', 'spinner-third']"
              spin />
            {{ accent.nameIt }}
          </button>
        </div>
        <div
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
import Arrow from '../../public/img/arrow-33.svg'

// Colors
import namedColors from 'color-name-list'
import nearestColor from 'nearest-color'
const colors = namedColors.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {})
const nearest = nearestColor.from(colors)

Icons.add(faTimes)

const colorToHex = color => {
  if (color.substr(0, 1) === '#') {
    return color
  }
  const digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color)

  const red = parseInt(digits[2])
  const green = parseInt(digits[3])
  const blue = parseInt(digits[4])

  const rgb = blue | (green << 8) | (red << 16)
  return digits[1] + '#' + rgb.toString(16).padStart(6, '0')
}

export default {
  name: 'Footer',
  components: {
    Headroom,
    SketchPicker,
    FontAwesomeIcon,
    Arrow
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
            text: 'Pomegranate',
            value: 'pomegranate'
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
        navigator.userAgent.indexOf('Chrome') === -1,
      presetColors: [
        'hotpink', 'blue', '#666', 'goldenrod', 'darkcyan', 'turquoise', 'coral', 'gold',
        'MediumOrchid', 'red', 'green', 'palevioletred', 'royalblue', 'chocolate', 'lightseagreen', 'salmon'
      ]
    }
  },
  watch: {
    'accent.value': function ({ hex }) {
      const wrapper = document.getElementById('wrapper')
      wrapper.style.setProperty('--accent', hex)
      this.loadingColor = true
      this.updateThemeColor(hex)
      this.updateColorNameIt()
    },
    'style.value': function (style) {
      this.$store.commit('changeTo', { key: 'style', newValue: style })
      this.$store.commit('changeTo', { key: 'scrollSpyOffset', newValue: this.scrollSpyOffset[style] })
    }
  },
  mounted: function () {
    this.prePrint()

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

    // Set cookie
    if (this.$cookie.get('dv:visited')) {
      this.setRandomColor()
    } else {
      this.$cookie.set('dv:visited', true, 30)
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
    toggleColorPicker: function () {
      document.querySelector('.color-picker-wrapper').classList.toggle('--hidden')
    },
    updateColorNameIt: debounce(function () {
      this.accent.nameIt = nearest(this.accent.value.hex).name
      this.loadingColor = false
    }, 300),
    updateThemeColor: debounce(function (hex) {
      const metaThemeColor = document.head.querySelector('[name=theme-color]')
      metaThemeColor.content = hex
    }, 300),
    hideHelp: function () {
      document.querySelector('.selector-help').classList.add('--hidden')
    },
    setRandomColor: function () {
      const randomOf16 = Math.floor(Math.random() * 16)
      const temporalElement = document.createElement('div')
      temporalElement.style.color = this.presetColors[randomOf16]
      document.body.appendChild(temporalElement)
      const rgbColor = window.getComputedStyle(temporalElement).color
      this.accent.value = { 'hex': colorToHex(rgbColor) }
      document.body.removeChild(temporalElement)
    }
  }
}
</script>
