<template>
  <div>
    <ul>
      <li v-for="list in lists" :key="list.label">
        {{ list.label }}
        <input type="checkbox" :value="list.value" />
      </li>
    </ul>
    <button @click="handleDeleteItem">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'ForKey',
  data() {
    return {
      lists: [
        {
          label: 'VueJS',
          value: false
        },
        {
          label: 'ReactJS',
          value: false
        },
        {
          label: 'NodeJS',
          value: false
        }
      ]
    }
  },
  methods: {
    handleDeleteItem() {
      this.lists.shift()
    }
  }
}
</script>

<style lang="scss" scoped></style>
