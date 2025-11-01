import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css'
import './assets/styles/global.css'
import './assets/styles/colors/colors.css'
import router from './router'

createApp(App).use(router).mount("#app");
