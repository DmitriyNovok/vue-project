<template>
    <div>
        <h2>App Vue</h2>
        <AddTodo
        @add-todo="addTodo"
        />
        <router-link to="/">Home</router-link>
        <hr>
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not-completed</option>
        </select>
        <hr>
        <Loader v-if="loading"/>
        <TodoList
        v-else-if="todosFiltered.length"
        v-bind:todos="todosFiltered"
        @remove-todo="removeTodo"
        />
        <p v-else>All todo complited!</p>
    </div>
</template>

<script>
    import TodoList from '@/components/TodoList'
    import AddTodo from '@/components/AddTodo'
    import Loader from '@/components/Loader'
    export default {
        name: 'App',
        data() {
            return {
                todos: [
                    {id: 1, title: 'Item One', completed: false},
                    {id: 2, title: 'Item Second', completed: false},
                    {id: 3, title: 'Item Three', completed: false},
                ],
                loading: true,
                filter: 'all'
            }
        },
        mounted() {
            setTimeout(() => {
                this.loading = false
            }, 1000)

        },
        //watch: {
        //     filter(value) {
        //         console.log(value)
        //     }
        // },
        computed: {
            todosFiltered() {
                switch (this.filter) {
                    case "all":
                        return this.todos;
                    break;
                    case 'completed':
                        return this.todos.filter(t => t.completed);
                    break;
                    case 'not-completed':
                        return this.todos.filter(t => !t.completed);
                    break;
                }
            }
        },
        components: {
            TodoList:TodoList,
            AddTodo:AddTodo,
            Loader:Loader
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