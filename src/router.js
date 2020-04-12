import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        }
    ]
})