<template>
  <div id="app">
    <h1>App Vue</h1>
    <hr>
    <TodoList
    v-bind:todos="todos"
    @remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'Item One', complited: false},
        {id: 2, title: 'Item Second', complited: false},
        {id: 3, title: 'Item Three', complited: false},
      ]
    }
  },
  components: {
    TodoList:TodoList
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
