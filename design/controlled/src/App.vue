<template>
  <!-- props 대신 v-model로 data 보냄 -->
  <check-box v-model="checked"></check-box>
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    CheckBox
  },
  data() {
    return {
      checked: false
    }
  }
}
</script>