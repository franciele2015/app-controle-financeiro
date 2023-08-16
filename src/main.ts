import { createApp } from 'vue'
import './style.css'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import { router } from './router/router'

createApp(App).use(router).use(vuetify).mount('#app')
