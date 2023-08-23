import { createApp } from 'vue'
import './style.css'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import applicationStore from './store/store';
import { router } from './router/router'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);
app.use(router)
    .use(applicationStore)
    .use(vuetify)
    .mount('#app')
