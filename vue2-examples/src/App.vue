<template>
  <div id="app">
    <!-- <ForKeyVue></ForKeyVue> -->
    <p>{{ check }}</p>
    <AcCheckbox v-model="check"></AcCheckbox>
  </div>
</template>
<script>
import ForKeyVue from './components/ForKey.vue'
import AcCheckbox from './components/AcCheckbox.vue'
export default {
  components: {
    ForKeyVue,
    AcCheckbox
  },
  data() {
    return {
      check: true
    }
  }
}
</script>
<style lang="scss"></style>
