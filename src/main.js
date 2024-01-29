import { createApp } from 'vue'
import './main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import store from './store/store.js'
import App from './App.vue'

createApp(App).use(bootstrap).use(store).mount('#app')
