import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import InfiniteScroll from 'vue-infinite-scroll'

const app = createApp(App)
app.use(InfiniteScroll)
app.mount('#app')
AOS.init()
