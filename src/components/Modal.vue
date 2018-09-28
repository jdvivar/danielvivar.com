<template>
  <transition name="modal">
    <div class="modal-mask">
      <div
        class="modal-wrapper"
        @click.self="$emit('close')">
        <div class="modal-container">

          <font-awesome-icon
            :icon="['fal', 'times']"
            class="modal-close"
            @click="$emit('close')" />

          <div class="modal-header">
            <slot name="term"/>
          </div>

          <div class="modal-body">
            <slot name="definition"/>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// Icons
import { library as Icons } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/pro-light-svg-icons'

Icons.add(faTimes)

export default {
  name: 'Modal',
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss">
</style>
