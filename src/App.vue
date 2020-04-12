<template>
  <div id="app">
    <h1>App Vue</h1>
    <hr>
    <router-view/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'Item One', completed: false},
        {id: 2, title: 'Item Second', completed: false},
        {id: 3, title: 'Item Three', completed: false},
      ]
    }
  },
  components: {
    TodoList:TodoList,
    AddTodo:AddTodo
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
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
