<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title"/>
        <button type="submit">Create</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                title: ''
            }
        },
        methods: {
            onSubmit() {
                if (this.title.trim()) {
                    if (!Date.now) {
                        Date.now = function now() {
                            return new Date().getTime();
                        };
                    } else {
                        var date = Date.now();
                    }
                    const newTodo = {
                        id: date,
                        title: this.title,
                        completed: false
                    };
                    this.$emit('add-todo', newTodo)
                    this.title = ''
                }
            }
        }
    }
</script>

<style scoped>

</style>