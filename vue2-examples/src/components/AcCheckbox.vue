<template>
  <input type="checkbox" :checked="check" @change="handleChange" />
</template>

<script>
export default {
  name: 'AcCheckbox',
  props: {
    check: Boolean
  },
  model: {
    prop: 'check',
    event: 'change'
  },
  methods: {
    handleChange(e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>

<style lang="scss" scoped></style>
