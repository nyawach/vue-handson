<template>
  <label class="todo">
    <input type="checkbox" name="" id="" v-model="todo.done">
    <del v-if="todo.done">{{ todo.text }}</del>
    <span v-else>{{ todo.text }}</span>
  </label>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: Object,
  },
}
</script>

<style scoped>
label {
  display: block;
}
</style>
