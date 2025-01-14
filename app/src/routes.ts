import Home from './components/Home.vue'
import About from './components/About.vue'
import NotFound from './components/NotFound.vue'

export default [
    { path: '/', component: Home },
    { name: 'about', path: '/about', component: About },
    { name: 'not-found', path: '/:pathMatch(.*)*', component: NotFound }
]