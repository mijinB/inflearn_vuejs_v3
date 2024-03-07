<template>
  <input type="checkbox" :value="value" @click="toggleCheckBox">
</template>

<script>
export default {
  props: ['value'], // App.vue에서 v-model로 내려준 checked가 value로 옴
  methods: {
    toggleCheckBox() {
      this.$emit('input', !this.value);
    }
  }
}
</script>