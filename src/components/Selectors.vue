<template>
  <headroom footroom="true">
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

      <h2>Theme</h2>
      <el-select
        v-model="selectors.style.value"
        placeholder="Select theme...">
        <el-option
          v-for="item in selectors.style.options"
          :key="item.value"
          :label="item.text"
          :value="item.value"/>
      </el-select>
    </div>
  </headroom>
</template>

<script>
import { headroom as Headroom } from 'vue-headroom'
import { Select } from 'element-ui'

export default {
  name: 'Selectors',
  components: {
    Headroom,
    Select
  },
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
    'selectors.style.value': style => {
      this.$store.commit('changeTo', { key: 'style', newValue: style })
      this.$store.commit('changeTo', { key: 'scrollSpyOffset', newValue: this.scrollSpyOffset[style] })
    }
  },
  mounted: function () {
    // Remove style before printing and restore afterwards
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
