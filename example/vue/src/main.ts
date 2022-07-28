import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import './style.css'
import App from './App.vue'

const head = createHead()

createApp(App).use(head).mount('#app')
