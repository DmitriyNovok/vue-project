<template>
  <div id="app">
    <h1>App Vue</h1>
    <hr>
    <TodoList
    v-bind:todos="todos"
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
        {id: 1, title: 'Buy bread', complited: false},
        {id: 2, title: 'Buy oil', complited: false},
        {id: 3, title: 'Buy beer', complited: false},
      ]
    }
  },
  components: {
    TodoList:TodoList
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
