<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <button class="modal-default-button" @click="$emit('close')">
            OK
          </button>

          <div class="modal-header">
            <slot name="term"></slot>
          </div>

          <div class="modal-body">
            <slot name="definition"></slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal"
};
</script>

<style lang="scss">
</style>
