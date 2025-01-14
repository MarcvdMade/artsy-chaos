import { createApp } from 'vue'
import './styles/variables/colors.css'
import './styles/style.css'
import App from './App.vue'
import routes from './routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')