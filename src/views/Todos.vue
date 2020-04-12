<template>
    <div>
        <h2>App Vue</h2>
        <AddTodo
        @add-todo="addTodo"
        />
        <router-link to="/">Home</router-link>
        <hr>
        <TodoList
        v-if="todos.length"
        v-bind:todos="todos"
        @remove-todo="removeTodo"
        />
        <p v-else>All todo complited!</p>
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