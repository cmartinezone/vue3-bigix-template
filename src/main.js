import { createApp } from 'vue'
import App from './App.vue'
//import apexcharts for chart
//import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
//app.use(VueApexCharts)
app.config.globalProperties.window = window
app.mount('#app')
