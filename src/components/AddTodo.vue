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
                        var date = new Date();
                    }
                    const newTodo = {
                        id:date.getDate()+'.'+date.getMonth()+' '+date.getHours() +':'+ date.getMinutes(),
                        title: this.title,
                        complited: false
                    };
                    this.$emit('add-todo', newTodo)
                }
            }
        }
    }
</script>

<style scoped>

</style>