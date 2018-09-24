<template>
  <div
    id="selectors"
    class="no-print">
    <div
      v-for="(selector, key) in selectors"
      :id="`${key}-selector`"
      :key="key">
      <label :for="`${key}-select`">{{ key }}</label>
      <select
        v-model="selector.value"
        :id="`${key}-select`">
        <option
          :value="selector.default.value"
          selected>
          {{ selector.default.text }}
        </option>
        <option
          v-for="option in selector.options"
          :value="option.value"
          :key="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Selectors',
  data () {
    return {
      selectors: {
        style: {
          value: 'default',
          default: { text: 'Default', value: 'default' },
          options: [
            {
              text: 'No style',
              value: 'no_style'
            }
          ]
        },
        accent: {
          value: 'red',
          default: { text: 'Red', value: 'red' },
          options: [
            { text: 'Blue', value: 'blue' },
            { text: 'Green', value: 'green' },
            { text: 'Gold', value: 'gold' },
            { text: 'Pink', value: 'pink' },
            { text: 'Sky Blue', value: 'skyblue' },
            { text: 'Black', value: 'black' }
          ]
        }
      },
      scrollSpyOffset: {
        default: 280
      }
    }
  },
  watch: {
    'selectors.accent.value': accent => {
      const wrapper = document.getElementById('wrapper')
      wrapper.style.setProperty('--accent', accent)
    },
    // Can't apply ES6 because we need to bind the Vue instance
    'selectors.style.value': function (style) {
      this.$store.commit('changeTo', { key: 'style', newValue: style })
      this.$store.commit('changeTo', { key: 'scrollSpyOffset', newValue: this.scrollSpyOffset[style] })
    }
  },
  mounted: function () {
    window.onbeforeprint = () => {
      const beforePrintStyle = this.selectors.style.value
      window.onafterprint = () => {
        this.selectors.style.value = beforePrintStyle
      }
      this.selectors.style.value = 'no_style'
    }
  }
}
</script>
