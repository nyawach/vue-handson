<template>
  <div id="app">
    <form @submit.prevent="addTodo">
      <input type="text" name="new" id="" v-model="newTodoText">
      <button :disabled="!newTodoText">new</button>
    </form>
    <div class="todo-list">
      <template v-for="(todo, i) in todos">
        <Todo :todo="todo" :key="i"></Todo>
      </template>
    </div>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'
import todos from './assets/todos.json'

export default {
  name: 'app',
  data: () =>  ({
    todos,
    newTodoText: "",
  }),
  components: {
    Todo,
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: this.newTodoText,
        done: false,
      })
      this.newTodoText = ""
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
