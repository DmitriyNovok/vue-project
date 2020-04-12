<template>
  <div id="app">
    <h1>App Vue</h1>
    <AddTodo
    @add-todo="addTodo"
    />
    <hr>
    <TodoList
    v-bind:todos="todos"
    @remove-todo="removeTodo"
    />
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
        {id: 1, title: 'Item One', complited: false},
        {id: 2, title: 'Item Second', complited: false},
        {id: 3, title: 'Item Three', complited: false},
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
