<template>
  <div class="alert" :class="type">
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button class="btn" :class="type" v-if="isClose" @click="$emit('close-alert')">Close</button>
  </div>
</template>

<script>
export default {
  emits: ['close-alert'],
  props: {
    title: String,
    text: String,
    isClose: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      default: 'primary',
      validator(item) {
        return ['primary', 'danger', 'warning'].includes(item)
      }
    }
  }
}
</script>

<style scoped>

</style>